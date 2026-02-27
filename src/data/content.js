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
import blogHeartDiseases from "../assets/heart-diseases.jpg";
import blogAgingGracefully from "../assets/aging-gracefully.jpg";

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
    title: "Sport Performance (Semi-private 2–5 athletes)",
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
    title: "General Fitness (Semi-private 2–5 clients)",
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
      "60-minute session, movement audit, and a day-one training roadmap tailored to your sport.",
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
    slug: "aging-gracefully-strength-health-independence",
    date: "February 27, 2026",
    title: "Aging Gracefully: A Professional Approach to Strength, Health, and Independence",
    excerpt:
      "Aging is inevitable, but rapid decline is not. Learn the science-backed framework to preserve strength, function, and independence for decades.",
    cover: blogAgingGracefully,
    tags: ["Healthy aging", "Strength", "Independence"],
    readingTime: "9 min read",
    sections: [
      {
        heading: "Aging is inevitable. Rapid decline is not.",
        body: [
          "What many people call ‘getting older’ is often progressive deconditioning: a gradual loss of strength, stamina, balance, and confidence driven by low activity over time.",
          "The encouraging part is that much of this decline is modifiable. With the right training habits and consistency, you can preserve function and quality of life well into your 60s and 70s.",
        ],
      },
      {
        heading: "Health vs. wellness: why this distinction matters",
        body: [
          "Health is not only the absence of disease; it includes physical, mental, and social well-being.",
          "Wellness is the active process of making choices that improve how you live and function. In other words, wellness is what you practice before a crisis happens.",
        ],
      },
      {
        heading: "What changes with age—and when",
        body: [
          "Age-related changes begin earlier than most expect, with gradual declines in cardiovascular performance and muscle mass starting in adulthood.",
          "Muscle loss and reduced functional capacity often accelerate after age 50–60, especially when movement decreases.",
        ],
        bullets: [
          "Decline is often non-linear and speeds up with inactivity",
          "Function is the core metric: standing up, climbing stairs, carrying loads, walking confidently, and recovering after setbacks",
        ],
      },
      {
        heading: "The real opponent: chronic disease + inactivity",
        body: [
          "Chronic diseases account for most major causes of death, and lifestyle strongly influences this trajectory.",
          "Physical inactivity is a major risk factor for mortality and directly contributes to lower strength, reduced bone density, and lower cardiovascular capacity.",
          "In practical terms, inactivity makes daily tasks feel heavier and riskier, which leads to doing less—and that is how the downward spiral starts.",
        ],
      },
      {
        heading: "What exercise actually protects as you age",
        body: [
          "Consistent physical activity is one of the strongest protective factors for healthy aging.",
        ],
        bullets: [
          "Slows physiological decline",
          "Preserves muscle and healthier body composition",
          "Reduces chronic disease risk and supports disease management",
          "Supports cognitive and psychological health",
          "Reduces disability risk and increases lifespan",
        ],
      },
      {
        heading: "Weekly targets that matter",
        body: [
          "A practical evidence-based target includes:",
        ],
        bullets: [
          "150–300 minutes/week of moderate aerobic activity (or 75–150 minutes vigorous)",
          "Strength training at least 2 days/week (major muscle groups)",
          "Balance/functional training at least 3 days/week",
          "Reduce sedentary time and replace it with movement, even light activity",
        ],
      },
      {
        heading: "A simple professional framework",
        body: [
          "If you want a clear model, build your week around four pillars:",
        ],
        bullets: [
          "Strength: muscle is protective tissue",
          "Cardio: capacity lowers fatigue and supports heart health",
          "Balance + coordination: confidence and fall prevention",
          "Consistency: small doses repeated for years beat intense short bursts",
        ],
      },
      {
        heading: "Bottom line",
        body: [
          "Aging is biological; frailty is often a management failure, not a motivation failure.",
          "Your body adapts to repeated stress. Remove all stress and capacity declines; apply structured stress and resilience improves.",
          "Aging gracefully is not about avoiding activity to stay safe—it is about training intelligently so life remains open to you.",
        ],
      },
    ],
  },
  {
    slug: "understanding-heart-health",
    date: "February 20, 2026",
    title:
      "Understanding Heart Health: Common Conditions, Risk Factors and Steps to Protect Your Heart",
    excerpt:
      "Heart disease remains a leading cause of illness, but many cases are preventable with early screening, exercise, nutrition, and consistent lifestyle change.",
    cover: blogHeartDiseases,
    tags: ["Heart health", "Prevention", "Wellness"],
    readingTime: "10 min read",
    sections: [
      {
        heading: "Why heart health deserves attention now",
        body: [
          "Heart disease remains one of the leading causes of morbidity and mortality in the United States.",
          "Recent CDC data shows nearly half of U.S. adults (about 47.7%) were living with hypertension between August 2021 and August 2023, and more than half of people with high blood pressure are unaware of their diagnosis.",
        ],
      },
      {
        heading: "Common cardiovascular conditions",
        body: [
          "Hypertension (high blood pressure) is often silent but can increase risk for major cardiovascular events when untreated.",
          "Arteriosclerosis and atherosclerosis involve loss of arterial elasticity and plaque buildup, which can narrow blood vessels over time.",
          "Angina is chest pain linked to reduced oxygen supply to the heart muscle and may be triggered by exertion, stress, large meals, or temperature extremes.",
          "A myocardial infarction (heart attack) occurs when blood flow to heart muscle is blocked, requiring immediate medical attention.",
          "Heart failure develops when the heart cannot pump or fill effectively and may present as systolic, diastolic, left-sided, or right-sided failure.",
        ],
      },
      {
        heading: "Risk factors you can act on",
        body: [
          "Several risk factors are modifiable, including smoking, physical inactivity, high sodium intake, obesity, poor glucose control, alcohol overuse, and unmanaged stress.",
          "Family history and age also matter, but lifestyle choices and early screening can still significantly reduce risk.",
        ],
        bullets: [
          "Check blood pressure regularly",
          "Prioritize heart-healthy eating (DASH-style patterns)",
          "Exercise weekly with both aerobic and strength work",
          "Manage sleep, stress, and recovery",
          "Work with a healthcare provider for medication and follow-up when needed",
        ],
      },
      {
        heading: "Evidence-based exercise recommendations",
        body: [
          "Research supports structured physical activity as a central part of cardiovascular prevention and management.",
        ],
        bullets: [
          "Increase daily movement (adding 1,000–2,000 steps/day can help)",
          "Aerobic training: 20–60 minutes, 3–5x/week",
          "Resistance training: 45–60 minutes, 3x/week",
          "Breathing/inspiratory muscle work can complement conditioning",
          "Combined programs (aerobic + resistance) improve outcomes",
        ],
      },
      {
        heading: "Simple functional checks and behavior change",
        body: [
          "Tools like the 30-second sit-to-stand challenge can help track lower-body endurance and progress over time.",
          "Long-term success often depends on behavior change readiness. The transtheoretical model (precontemplation to maintenance) can help you choose realistic next steps.",
        ],
      },
      {
        heading: "Bottom line",
        body: [
          "Heart disease is not inevitable. Consistent habits—screening, smart exercise, balanced nutrition, and medical follow-up—can dramatically improve healthspan and quality of life.",
          "Start with one action today: check your blood pressure, take a brisk walk, and build a plan with your healthcare provider.",
        ],
      },
    ],
  },
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
    name: "Semi Private Training",
    price: "Starting from $199 / month",
    details: "Semi-private 2-5 athletes",
  },
  {
    name: "Performance Therapy",
    price: "$131–150 / session",
    details: "1-on-1 treatment & rehab",
  },
  {
    name: "One on One (In-person/Online)",
    price: "Starting at $100–120 / session",
    details: "Personalized coaching",
  },
  {
    name: "Group Online",
    price: "Starting at $149 / month",
    details: "Remote programming",
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
