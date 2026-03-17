import { useState } from "react";

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      resolve(result.split(",")[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export default function AdminBlog() {
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!image) {
      setStatus("Please upload a cover image.");
      return;
    }

    try {
      setLoading(true);
      setStatus("Publishing...");

      const imageBase64 = await toBase64(image);
      const ext = image.name.split(".").pop() || "jpg";
      const response = await fetch("/api/blog/publish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify({
          title,
          text,
          imageBase64,
          imageExt: ext,
          tags: tags
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Publish failed");

      setStatus(`✅ Published successfully: ${data.url}`);
      setTitle("");
      setText("");
      setTags("");
      setImage(null);
    } catch (error) {
      setStatus(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section-shell py-12">
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-5">
        <h1 className="font-display text-3xl text-white">Blog Publisher</h1>
        <p className="text-sm text-white/70">Author is set automatically like the existing posts: <strong>EAXperience Team</strong>.</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white"
            required
          />

          <input
            type="text"
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white"
            required
          />

          <textarea
            placeholder="Post text (use empty lines for paragraph breaks)"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full min-h-56 rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white"
            required
          />

          <input
            type="text"
            placeholder="Tags (comma separated, optional)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-brand-orange px-5 py-3 text-sm font-semibold text-white disabled:opacity-60"
          >
            {loading ? "Publishing..." : "Publier"}
          </button>
        </form>

        {status ? <p className="text-sm text-white/80">{status}</p> : null}
      </div>
    </div>
  );
}
