import nodemailer from "nodemailer";

const required = [
  "EMAIL_SMTP_HOST",
  "EMAIL_SMTP_PORT",
  "EMAIL_SMTP_USER",
  "EMAIL_SMTP_PASS",
];

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml({ name, email, phone, interest, message, submittedAt }) {
  return `
  <div style="background:#07090f;padding:24px;font-family:Inter,Segoe UI,Arial,sans-serif;color:#e5e7eb;">
    <div style="max-width:680px;margin:0 auto;border:1px solid rgba(255,255,255,0.12);border-radius:18px;overflow:hidden;background:linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02));">
      <div style="padding:18px 22px;background:#0b0f17;border-bottom:1px solid rgba(255,255,255,0.1);">
        <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#fd670a;">EAXperience • New Contact</p>
        <h2 style="margin:8px 0 0;font-size:24px;line-height:1.2;color:#ffffff;">New message from website</h2>
      </div>

      <div style="padding:22px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
          ${[
            ["Name", name],
            ["Email", email],
            ["Phone", phone || "—"],
            ["Interest", interest],
            ["Submitted", submittedAt],
          ]
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding:10px 12px;border:1px solid rgba(255,255,255,0.08);font-weight:600;color:#ffffff;background:rgba(255,255,255,0.03);width:140px;">${escapeHtml(
                    label
                  )}</td>
                  <td style="padding:10px 12px;border:1px solid rgba(255,255,255,0.08);color:#e5e7eb;">${escapeHtml(
                    value
                  )}</td>
                </tr>
              `
            )
            .join("")}
        </table>

        <div style="margin-top:16px;padding:14px 16px;border:1px solid rgba(253,103,10,0.35);border-radius:12px;background:rgba(253,103,10,0.08);">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.15em;text-transform:uppercase;color:#fd670a;">Message</p>
          <p style="margin:0;white-space:pre-wrap;line-height:1.6;color:#ffffff;">${escapeHtml(
            message
          )}</p>
        </div>
      </div>
    </div>
  </div>`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const missingEnv = required.filter((key) => !process.env[key]);
  if (missingEnv.length > 0) {
    return res.status(500).json({
      message: `Missing server configuration: ${missingEnv.join(", ")}`,
    });
  }

  const { name, email, phone, interest, message } = req.body || {};

  if (!name || !email || !message || !interest) {
    return res.status(400).json({ message: "Please fill all required fields." });
  }

  const submittedAt = new Date().toISOString();

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP_HOST,
      port: Number(process.env.EMAIL_SMTP_PORT),
      secure: Number(process.env.EMAIL_SMTP_PORT) === 465,
      auth: {
        user: process.env.EMAIL_SMTP_USER,
        pass: process.env.EMAIL_SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO || "boubsfal@gmail.com";
    const from = process.env.EMAIL_SMTP_USER;

    await transporter.sendMail({
      from: `EAXperience Website <${from}>`,
      to,
      replyTo: email,
      subject: `New Contact Form: ${name}`,
      html: buildEmailHtml({
        name,
        email,
        phone,
        interest,
        message,
        submittedAt,
      }),
      text: [
        "New contact form submission",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "-"}`,
        `Interest: ${interest}`,
        `Submitted: ${submittedAt}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact email send failed", error);
    return res.status(500).json({ message: "Unable to send message right now." });
  }
}
