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
      "Learn to think ahead, plan your moves, and outsmart your opponent. Chess builds critical thinking, patience, and strategic skills that last a lifetime.",
    accentColor: "#2D5016",
    bgGradient: "linear-gradient(135deg, #2D5016 0%, #1a3a0a 50%, #121410 100%)",
    textColor: "#e3e3dc",
    videoUrl: "",
  },
  {
    slug: "ukulele",
    title: "Ukulele",
    tagline: "Strum your way to fun",
    description:
      "Pick up the ukulele and start making music right away! Learn chords, strumming patterns, and your favorite songs in a fun, relaxed island style.",
    accentColor: "#FF6B35",
    bgGradient: "linear-gradient(135deg, #FF6B35 0%, #ff8f5e 50%, #FFE66D 100%)",
    textColor: "#3d1600",
    videoUrl: "",
  },
  {
    slug: "korean",
    title: "Korean",
    tagline: "Learn a new language",
    description:
      "Discover the beautiful Korean language! Learn Hangul, everyday phrases, and fun expressions. Open the door to K-pop, Korean food, and a rich culture.",
    accentColor: "#E8A0BF",
    bgGradient: "linear-gradient(135deg, #E8A0BF 0%, #f0c4d8 50%, #fff0f5 100%)",
    textColor: "#4a1030",
    videoUrl: "",
  },
  {
    slug: "coding",
    title: "Coding",
    tagline: "Build amazing things",
    description:
      "Write your first lines of code and bring your ideas to life! Learn programming basics, build games, and create interactive projects that you can share with friends.",
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
      "Sit down at the keys and discover the joy of piano! Learn notes, scales, and simple songs that will have you playing real music in no time.",
    accentColor: "#1a1a2e",
    bgGradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    textColor: "#e8e8f0",
    videoUrl: "",
  },
  {
    slug: "toki-pona",
    title: "Toki Pona",
    tagline: "The language of good",
    description:
      "Learn the world's smallest language! With only 137 words, Toki Pona teaches you to express big ideas simply. It's a fun puzzle for your brain.",
    accentColor: "#FBBF24",
    bgGradient: "linear-gradient(135deg, #FBBF24 0%, #f59e0b 50%, #d97706 100%)",
    textColor: "#451a03",
    videoUrl: "",
  },
  {
    slug: "spanish",
    title: "Spanish",
    tagline: "Speak with the world",
    description:
      "Join 500 million Spanish speakers around the globe! Learn everyday phrases, fun vocabulary, and the rhythm of one of the world's most spoken languages.",
    accentColor: "#DC2626",
    bgGradient: "linear-gradient(135deg, #DC2626 0%, #ef4444 50%, #f97316 100%)",
    textColor: "#fff1f2",
    videoUrl: "",
  },
  {
    slug: "soroban",
    title: "Soroban",
    tagline: "Calculate at lightning speed",
    description:
      "Master the Japanese abacus and unlock mental math superpowers! Soroban trains your brain to visualize numbers and calculate faster than a calculator.",
    accentColor: "#92400e",
    bgGradient: "linear-gradient(135deg, #92400e 0%, #b45309 50%, #78350f 100%)",
    textColor: "#fef3c7",
    videoUrl: "",
  },
  {
    slug: "story-writing",
    title: "Story Writing",
    tagline: "Create worlds with words",
    description:
      "Become an author this summer! Learn how to build characters, craft plots, and write stories that pull readers in from the very first sentence.",
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
      "Learn to type fast and accurately without looking at the keyboard! Touch typing is a superpower that will help you in school, coding, and beyond.",
    accentColor: "#059669",
    bgGradient: "linear-gradient(135deg, #059669 0%, #10b981 50%, #047857 100%)",
    textColor: "#ecfdf5",
    videoUrl: "",
  },
];
