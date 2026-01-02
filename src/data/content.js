import img1 from "../assets/session/Ea-Xperience-28.jpg";
import img2 from "../assets/session/Ea-Xperience-39.jpg";
import img3 from "../assets/session/Ea-Xperience-41.jpg";
import img4 from "../assets/session/Ea-Xperience-44.jpg";
import img5 from "../assets/session/Ea-Xperience-58.jpg";
import img6 from "../assets/session/Ea-Xperience-76-p-1600.jpg";
import img7 from "../assets/session/Ea-Xperience-93.jpg";
import img8 from "../assets/session/Picture1.png";
import img9 from "../assets/session/Picture2.png";
import img10 from "../assets/session/Picture3.png";
import img11 from "../assets/session/Picture4.png";
import img12 from "../assets/session/Picture5.png";
import img13 from "../assets/session/Picture6.png";
import img14 from "../assets/session/a650784e7fcb2bf3e6a4314fae5e58c6_Ea-Xperience-55-p-2000.jpg";
import blogKids from "../assets/kids-sports.jpg";
import blogStrength from "../assets/muscle-and-strength.jpg";
import blogBurnFat from "../assets/burn-fat.jpg";

const sessionImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Events", to: "/events" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Sport Performance", to: "/services/sport-performance" },
      { label: "Physical Therapy", to: "/services/physical-therapy" },
      { label: "General Fitness", to: "/services/general-fitness" },
      {
        label: "Sports Program & School Consultation",
        to: "/services/school-consultation",
      },
    ],
  },
  { label: "Partner", to: "/partner" },
  {
    label: "Resources",
    to: null,
    children: [
      { label: "Podcast suggestions", to: "/resources/podcasts" },
      { label: "Blog", to: "/resources/blog" },
      { label: "Book suggestions", to: "/resources/books" },
    ],
  },
  { label: "About us", to: "/about" },
];

const rawServices = [
  {
    slug: "sport-performance",
    title: "Sport Performance (Semi-private 2–4 athletes)",
    summary:
      "Explosive performance training engineered for athletes who want to move cleaner, get stronger, and compete without the nagging injuries.",
    outcomes: [
      "Full movement, speed, and power assessment",
      "Strength, plyometric, and sprint design tuned to your sport",
      "Mobility and force-production coaching guided by a Doctor of Physical Therapy and Strength Coach",
    ],
    story:
      "Athletes deserve programming that keeps them in the game. This track blends high-output training with resilient movement patterns so you can rise in-season and off-season.",
    cta: "Book a performance intake",
  },
  {
    slug: "physical-therapy",
    title: "Physical Therapy (1-on-1 Care)",
    summary:
      "Hands-on, movement-based rehab that removes pain, restores confidence, and rebuilds strength without relying on surgery or medication.",
    outcomes: [
      "Full-body movement evaluation to find the true root cause",
      "Targeted manual therapy, corrective drills, and strength progressions",
      "Return-to-play plans that evolve into long-term performance",
    ],
    story:
      "Rehab is not the finish line—it is the starting point for stronger, smarter movement. You will leave with a clear plan and the coaching to execute it.",
    cta: "Schedule a therapy session",
  },
  {
    slug: "general-fitness",
    title: "General Fitness (Semi-private 2–4 clients)",
    summary:
      "Science-backed training for people who want to age athletically: build muscle, upgrade body composition, and protect long-term health.",
    outcomes: [
      "Movement literacy coaching to eliminate plateaus",
      "Strength cycles tailored to your lifestyle and recovery",
      "Habit, sleep, and nutrition guardrails to match your goals",
    ],
    story:
      "Longevity is earned. We combine smart assessments with progressive programming so you move well today and decades from now.",
    cta: "Start your assessment",
  },
  {
    slug: "school-consultation",
    title: "Sports Program & School Consultation (3-month pilot)",
    summary:
      "A data-driven pilot that upgrades entire programs—reducing injury risk, sharpening performance metrics, and upskilling coaches and staff.",
    outcomes: [
      "Team-wide movement audits and injury-risk screening",
      "Custom strength and conditioning frameworks for your sport",
      "Education tracks for coaches, trainers, and administrators",
    ],
    story:
      "Bridge the gap between rehab and performance at scale. Build resilient athletes, sustainable wins, and long-term cost savings.",
    cta: "Design my pilot",
  },
];

export const services = rawServices.map((service, idx) => {
  const primary = sessionImages[idx % sessionImages.length];
  const gallery = [
    sessionImages[(idx * 3 + 1) % sessionImages.length],
    sessionImages[(idx * 5 + 2) % sessionImages.length],
  ];
  return { ...service, image: primary, gallery };
});

export const heroPillars = [
  {
    title: "Result-driven",
    body: "Data-led decisions and visible gains every cycle.",
  },
  {
    title: "Research-backed",
    body: "Built by Doctors of Physical Therapy and performance coaches.",
  },
  {
    title: "Evidence-based training",
    body: "Systems, not guesswork. Precision over trends.",
  },
];

export const events = [
  {
    title: "Athlete Intake + Goal Mapping",
    date: "Weekly",
    location: "EAXperience HQ",
    blurb:
      "60-minute session with force plate testing, movement audit, and a day-one training roadmap tailored to your sport.",
  },
  {
    title: "Return-to-Play Checkpoint",
    date: "Bi-weekly",
    location: "EAXperience HQ",
    blurb:
      "Re-assessment for athletes rehabbing: progress testing, load adjustments, and updated home programming.",
  },
  {
    title: "Strength Lab: Speed & Power",
    date: "Monthly",
    location: "EAXperience HQ",
    blurb:
      "Small-group contrast training focused on acceleration, plyometrics, and power metrics with live coaching feedback.",
  },
];

export const blogPosts = [
  {
    slug: "early-specialization-kids",
    date: "January 2, 2025",
    title: "Is early specialization bad for kids?",
    excerpt:
      "Early specialization in youth sports is increasingly popular, but long-term athletic development research suggests multi-sport participation leads to healthier and more sustainable performance.",
    cover: blogKids,
    tags: ["Youth sports", "Longevity", "Performance"],
    readingTime: "6 min read",
    sections: [
      {
        heading: "Why specialization is tempting",
        body: [
          "Clubs, showcases, and social media can make it feel like your child must pick one sport early to “keep up.” Parents want to support opportunity—and coaches want consistency.",
          "But early specialization often increases repetitive load, reduces movement variety, and can shift sport from play to pressure.",
        ],
      },
      {
        heading: "What the long-term model favors",
        body: [
          "Most durable, high-performing athletes build a broad base first: coordination, speed skills, strength foundations, and movement literacy.",
          "Multi-sport seasons expose kids to different patterns—jumping, sprinting, cutting, throwing—which reduces overuse risk and improves adaptability.",
        ],
      },
      {
        heading: "A better approach for parents",
        body: [
          "Prioritize quality movement over endless competition. Build strength and coordination year-round with age-appropriate training.",
          "Track recovery: sleep, soreness, mood, and motivation. Burnout is a real performance limiter.",
        ],
        bullets: [
          "2–3 sport exposures per year (when possible)",
          "At least 1–2 total rest days per week",
          "Strength training 2x/week (supervised and progressive)",
          "Deload weeks during heavy competition periods",
        ],
      },
      {
        heading: "Bottom line",
        body: [
          "Specialization isn’t always “bad”—but the timing matters. Build the base first, then specialize when the athlete is physically and emotionally ready.",
        ],
      },
    ],
  },
  {
    slug: "ultimate-guide-building-muscle-strength",
    date: "October 15, 2023",
    title: "The Ultimate Guide to Building Muscle and Strength",
    excerpt:
      "A practical guide to building muscle through smart training, progressive overload, proper nutrition, recovery, and long-term consistency.",
    cover: blogStrength,
    tags: ["Strength", "Hypertrophy", "Training"],
    readingTime: "8 min read",
    sections: [
      {
        heading: "Start with a simple training structure",
        body: [
          "You don’t need 30 exercises. You need a repeatable plan you can progress: squat/hinge, push, pull, carry, and single-leg work.",
          "Consistency beats novelty. Track your lifts and earn small progress week to week.",
        ],
        bullets: [
          "3–5 sessions/week",
          "6–12 hard sets per muscle per week",
          "Leave 1–2 reps in reserve most sets",
        ],
      },
      {
        heading: "Progressive overload without getting hurt",
        body: [
          "Add load, reps, or better technique—not all three at once. Your joints should feel stable and your patterns should look clean.",
          "Use a deload every 4–6 weeks or when recovery signals dip.",
        ],
      },
      {
        heading: "Nutrition that supports growth",
        body: [
          "Protein is the foundation. Then enough calories, carbs for training output, and hydration to recover.",
        ],
        bullets: [
          "Protein: ~0.7–1.0 g per lb bodyweight/day",
          "Creatine: 3–5 g/day",
          "Sleep: 7–9 hours for adaptation",
        ],
      },
      {
        heading: "Bottom line",
        body: [
          "Build strength like an athlete: train hard, recover harder, and progress with a plan you can sustain for months—not days.",
        ],
      },
    ],
  },
  {
    slug: "burn-fat-without-losing-muscle",
    date: "October 1, 2023",
    title: "How to Burn Fat Without Losing Muscle",
    excerpt:
      "A simple, science-based guide to losing fat while maintaining muscle through smart training, nutrition, and recovery.",
    cover: blogBurnFat,
    tags: ["Fat loss", "Body composition", "Nutrition"],
    readingTime: "7 min read",
    sections: [
      {
        heading: "The mistake most people make",
        body: [
          "Cutting calories too aggressively often drops training performance. That’s when the body starts giving up muscle.",
          "The goal is a controlled deficit while keeping strength training high-quality.",
        ],
      },
      {
        heading: "Training priorities (keep muscle)",
        body: [
          "Lift heavy enough to give your body a reason to keep muscle: compound lifts, progressive effort, and consistent volume.",
          "Cardio is a tool—not the plan. Use it to support the deficit, not replace training.",
        ],
        bullets: [
          "Strength train 3–4x/week",
          "Keep intensity (weights) high",
          "Add low-impact cardio 2–3x/week if needed",
        ],
      },
      {
        heading: "Nutrition priorities (lose fat)",
        body: [
          "Protein stays high, carbs support training, and your deficit is modest and sustainable.",
        ],
        bullets: [
          "Aim for ~0.7–1.0 g protein/lb/day",
          "Deficit: ~250–500 kcal/day",
          "Steps: 7–10k/day as a baseline",
        ],
      },
      {
        heading: "Bottom line",
        body: [
          "If your strength holds, your muscle stays. Protect performance and let the deficit do the rest.",
        ],
      },
    ],
  },
];

export const pricingPlans = [
  {
    name: "Base (1x/week)",
    price: "$199 / month",
    details: "4 sessions/month • 3-month minimum",
  },
  {
    name: "Plus (2x/week)",
    price: "$349 / month",
    details: "8 sessions/month",
  },
  {
    name: "Pro (3x/week)",
    price: "$499 / month",
    details: "12 sessions/month",
  },
  {
    name: "Unlimited Access",
    price: "$579 / month",
    details: "16 sessions/month • Semi-private",
  },
  {
    name: "One-on-One Coaching",
    price: "$120 / session",
    details: "60-minute personalized session",
  },
  {
    name: "Performance Physical Therapy",
    price: "$150–$1,050",
    details: "1–8 sessions/month",
  },
  {
    name: "Remote Coaching (Live)",
    price: "$149–$249",
    details: "1–2x/week live online",
  },
  {
    name: "Async Microdose Coaching",
    price: "$79",
    details: "Weekly program + messaging",
  },
  {
    name: "Ambassador Plan",
    price: "Contact for pricing",
    details: "Elite selective athlete track",
  },
];

export const pricingNote = "Family discounts available.";

export const resources = {
  podcasts: [
    {
      title: "Peak Output",
      note: "Training, recovery, and performance breakdowns in 20 minutes.",
    },
    {
      title: "The Durable Athlete",
      note: "Stories of athletes who extended their prime with smart training.",
    },
  ],
  blog: blogPosts.map((post) => ({
    title: post.title,
    note: post.excerpt,
    to: `/resources/blog/${post.slug}`,
  })),
  books: [
    {
      title: "Built to Move",
      note: "Daily practices to stay athletic at any age.",
    },
    {
      title: "The System",
      note: "How high-performing programs make decisions that last.",
    },
  ],
  newsletter: [
    {
      title: "The EAX Dispatch",
      note: "Monthly drops: programming riffs, event invites, and athlete spotlights.",
    },
  ],
};

export const testimonials = [
  {
    quote:
      "My time with the EA Experience was not only a time to workout, but a time to talk and build relationships. Doc E did not only make me a stronger person, he became my friend and someone to relate to.",
    name: "Brayden Miller",
    role: "Hockey Player",
    rating: 5,
  },
  {
    quote:
      "I started the EAXperience a couple years ago when I needed to gain better ankle stability and overall strength. I know the experience helped me become a better athlete and continues to do so. I loved working alongside a great trainer and other athletes to accomplish our goals in a positive environment. I was always pushed and felt accomplished after every training session and I know I benefited tremendously because of it. For that I will always be thankful for the EAXperience.",
    name: "Natalie Frost",
    role: "Volleyball Player",
    rating: 5,
  },
  {
    quote:
      "Phiona enjoyed her training sessions and learned a lot from Dr E. She was happy how her overall athleticism improved which helped her perform better on the basketball court.",
    name: "Rick Buck",
    role: "Parent",
    rating: 5,
  },
  {
    quote:
      "Definitely Worth It To Become A Better Athlete. Helped Me Become Stronger, Quicker, And More.",
    name: "Aidan DeSanria",
    role: "Basketball Player",
    rating: 5,
  },
  {
    quote:
      "Working out for hockey with Doc E once a week made me more inclined to care more about my fitness and work harder throughout the season. It also motivated me to work with some teammates on creating similar lifts for the offseason.",
    name: "Ben Di Fiore",
    role: "Hockey Player",
    rating: 5,
  },
  {
    quote:
      "Doctor Emmanuel has transformed me as a athlete into a completely different player. On and off the court I have seen huge improvements in my game ",
    name: "Maddox Browngardt",
    role: "Basketball Player",
    rating: 5,
  },
];

export const stats = [
  { label: "Athletes served", value: "800+" },
  { label: "Avg. pain reduction", value: "72%" },
  { label: "HRs of experience", value: "10,000+" },
  { label: "Training programs", value: "15+" },
];
