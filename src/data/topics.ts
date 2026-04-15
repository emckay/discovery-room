const BASE = import.meta.env.BASE_URL;

export interface Topic {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: string;
  bgGradient: string;
  textColor: string;
  videoUrl: string;
}

export const topics: Topic[] = [
  {
    slug: "chess",
    title: "Chess",
    tagline: "Master the game of kings",
    description:
      "Want to outsmart every grown-up at game night? Chess teaches you to think three moves ahead and stay cool under pressure.",
    accentColor: "#2D5016",
    bgGradient: "linear-gradient(135deg, #2D5016 0%, #1a3a0a 50%, #121410 100%)",
    textColor: "#e3e3dc",
    videoUrl: `${BASE}videos/chess.mp4`,
  },
  {
    slug: "ukulele",
    title: "Ukulele",
    tagline: "Strum your way to fun",
    description:
      "Want to play a real song by the end of the week? The ukulele is the fastest way to start making music.",
    accentColor: "#FF6B35",
    bgGradient: "linear-gradient(135deg, #fdf6f0 0%, #f5ebe0 50%, #ede0d0 100%)",
    textColor: "#5c2d10",
    videoUrl: `${BASE}videos/ukulele.mp4`,
  },
  {
    slug: "korean",
    title: "Korean",
    tagline: "Learn a new language",
    description:
      "Want to understand K-pop and K-dramas without subtitles? Learn a whole new alphabet and talk to 80 million people in their own language.",
    accentColor: "#E8A0BF",
    bgGradient: "linear-gradient(135deg, #fdf0f5 0%, #f5e4ec 50%, #ede0e8 100%)",
    textColor: "#5c2040",
    videoUrl: `${BASE}videos/korean.mp4`,
  },
  {
    slug: "coding",
    title: "Coding",
    tagline: "Build amazing things",
    description:
      "Want to build your own video game instead of just playing someone else's? It's the closest thing to a real-life superpower.",
    accentColor: "#3B82F6",
    bgGradient: "linear-gradient(135deg, #1E1B4B 0%, #1e3a5f 50%, #0f172a 100%)",
    textColor: "#e0e7ff",
    videoUrl: "",
  },
  {
    slug: "piano",
    title: "Piano",
    tagline: "Play beautiful melodies",
    description:
      "Want to sit down at any piano and just... play? Your hands will learn to work independently — and it sounds beautiful.",
    accentColor: "#1a1a2e",
    bgGradient: "linear-gradient(135deg, #0f1118 0%, #1a1a2e 40%, #0f3460 100%)",
    textColor: "#e8e8f0",
    videoUrl: "",
  },
  {
    slug: "toki-pona",
    title: "Toki Pona",
    tagline: "The language of good",
    description:
      "Want to learn an entire language in a week? Toki Pona has only 137 words — fewer than most grocery lists.",
    accentColor: "#FBBF24",
    bgGradient: "linear-gradient(135deg, #fefce8 0%, #fef9c3 50%, #fef3c7 100%)",
    textColor: "#451a03",
    videoUrl: `${BASE}videos/toki-pona.mp4`,
  },
  {
    slug: "spanish",
    title: "Spanish",
    tagline: "Speak with the world",
    description:
      "Want to order food in Mexico and sing along to Bad Bunny? Half a billion people speak Spanish — time to join them.",
    accentColor: "#DC2626",
    bgGradient: "linear-gradient(135deg, #fdf2e9 0%, #f5dcc4 50%, #e8c9a4 100%)",
    textColor: "#6b2113",
    videoUrl: `${BASE}videos/spanish.mp4`,
  },
  {
    slug: "soroban",
    title: "Soroban",
    tagline: "Calculate at lightning speed",
    description:
      "Want to do math faster than a calculator with a dead battery? The soroban trains your brain to see numbers like a movie.",
    accentColor: "#c9940a",
    bgGradient: "linear-gradient(135deg, #1a1206 0%, #2a1f0e 40%, #1a140a 100%)",
    textColor: "#f5e6c8",
    videoUrl: "",
  },
  {
    slug: "story-writing",
    title: "Story Writing",
    tagline: "Create worlds with words",
    description:
      "Want to make people stay up past their bedtime because they can't stop reading? Learn to build worlds out of nothing but words.",
    accentColor: "#7C3AED",
    bgGradient: "linear-gradient(135deg, #7C3AED 0%, #6d28d9 50%, #4c1d95 100%)",
    textColor: "#ede9fe",
    videoUrl: "",
  },
  {
    slug: "typing",
    title: "Typing",
    tagline: "Speed up your fingers",
    description:
      "Want to write as fast as you think? Touch typing gives your brain a direct connection to the screen.",
    accentColor: "#10B981",
    bgGradient: "linear-gradient(135deg, #0a0f0d 0%, #0d1a14 50%, #071210 100%)",
    textColor: "#d1fae5",
    videoUrl: `${BASE}videos/typing.mp4`,
  },
];
