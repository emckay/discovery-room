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
      "Want to outsmart every grown-up at game night? Chess gives you the power to think three moves ahead, spot hidden traps, and stay cool under pressure. You'll build a brain that solves problems like a detective.",
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
      "Want to pick up an instrument and play a real song by the end of the week? The ukulele is the fastest way to start making music. You'll learn rhythm, coordination, and how to perform for an audience — even if that audience is your dog.",
    accentColor: "#FF6B35",
    bgGradient: "linear-gradient(135deg, #fdf6f0 0%, #f5ebe0 50%, #ede0d0 100%)",
    textColor: "#5c2d10",
    videoUrl: "",
  },
  {
    slug: "korean",
    title: "Korean",
    tagline: "Learn a new language",
    description:
      "Want to understand your favorite K-pop songs and K-dramas without subtitles? Learning Korean gives you a whole new alphabet, a window into an amazing culture, and the confidence to talk to 80 million people in their own language.",
    accentColor: "#E8A0BF",
    bgGradient: "linear-gradient(135deg, #fdf0f5 0%, #f5e4ec 50%, #ede0e8 100%)",
    textColor: "#5c2040",
    videoUrl: "",
  },
  {
    slug: "coding",
    title: "Coding",
    tagline: "Build amazing things",
    description:
      "Want to build your own video game instead of just playing someone else's? Coding teaches you to think like an inventor, break big problems into tiny pieces, and make the computer do exactly what you tell it. It's the closest thing to a real-life superpower.",
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
      "Want to sit down at any piano and just... play? You'll train your hands to work independently (try patting your head and rubbing your belly — now imagine that, but it sounds beautiful). Piano builds focus, patience, and the kind of memory that makes school feel easier.",
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
      "Want to learn an entire language in a week? Toki Pona has only 137 words — that's fewer words than most people's grocery list. It teaches you to say exactly what you mean, think more clearly, and see the world in a completely different way.",
    accentColor: "#FBBF24",
    bgGradient: "linear-gradient(135deg, #fefce8 0%, #fef9c3 50%, #fef3c7 100%)",
    textColor: "#451a03",
    videoUrl: "",
  },
  {
    slug: "spanish",
    title: "Spanish",
    tagline: "Speak with the world",
    description:
      "Want to order food in Mexico, sing along to Bad Bunny, and talk to half a billion people on the planet? Spanish is everywhere — and once you start hearing it, you won't be able to stop understanding it. Your brain will thank you for being bilingual.",
    accentColor: "#DC2626",
    bgGradient: "linear-gradient(135deg, #fdf2e9 0%, #f5dcc4 50%, #e8c9a4 100%)",
    textColor: "#6b2113",
    videoUrl: "",
  },
  {
    slug: "soroban",
    title: "Soroban",
    tagline: "Calculate at lightning speed",
    description:
      "Want to do math faster than a calculator with a dead battery? The soroban is a Japanese abacus that trains your brain to see numbers like a movie in your head. Kids who learn soroban can add giant numbers in seconds — without writing anything down.",
    accentColor: "#92400e",
    bgGradient: "linear-gradient(135deg, #faf6f0 0%, #f5ede0 50%, #ebe0cc 100%)",
    textColor: "#3d2800",
    videoUrl: "",
  },
  {
    slug: "story-writing",
    title: "Story Writing",
    tagline: "Create worlds with words",
    description:
      "Want to make people laugh, cry, or stay up past their bedtime because they can't stop reading? Story writing gives you the power to build entire worlds out of nothing but words. You'll learn to create characters that feel real and endings nobody sees coming.",
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
      "Want to write as fast as you think? Touch typing means your fingers know where every key is without looking — like your brain has a direct connection to the screen. You'll fly through homework, code faster, and win every group chat.",
    accentColor: "#059669",
    bgGradient: "linear-gradient(135deg, #059669 0%, #10b981 50%, #047857 100%)",
    textColor: "#ecfdf5",
    videoUrl: "",
  },
];
