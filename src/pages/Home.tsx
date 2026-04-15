import { Link } from "react-router-dom";
import { topics } from "../data/topics";
import "./Home.css";

const topicIcons: Record<string, React.ReactNode> = {
  chess: (
    <svg viewBox="0 0 120 120" className="card-icon">
      <path
        d="M35 95h50v10H35zM40 95V70c0-5 2-10 5-14l15-20c-3-2-5-6-5-10 0-7 6-13 13-13s13 6 13 13c0 4-2 8-5 10l-8 11 12 8c3 2 5 6 5 10v30"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="68" cy="33" r="3" fill="currentColor" opacity="0.6" />
      <path d="M50 80h20M50 87h20" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    </svg>
  ),
  ukulele: (
    <svg viewBox="0 0 120 120" className="card-icon">
      <ellipse cx="60" cy="72" rx="28" ry="32" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="60" cy="72" r="8" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <rect x="56" y="15" width="8" height="35" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
      <rect x="53" y="8" width="14" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="56" cy="12" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="64" cy="12" r="2" fill="currentColor" opacity="0.6" />
      <line x1="57" y1="20" x2="57" y2="95" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <line x1="60" y1="20" x2="60" y2="95" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <line x1="63" y1="20" x2="63" y2="95" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <circle cx="22" cy="30" r="4" fill="currentColor" opacity="0.3" />
      <line x1="26" y1="30" x2="26" y2="15" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <circle cx="98" cy="45" r="4" fill="currentColor" opacity="0.3" />
      <line x1="102" y1="45" x2="102" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    </svg>
  ),
  korean: (
    <svg viewBox="0 0 120 120" className="card-icon">
      <circle cx="60" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
      <line x1="40" y1="55" x2="80" y2="55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 70 Q60 85 78 70" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="20" cy="25" r="4" fill="currentColor" opacity="0.2" />
      <circle cx="25" cy="20" r="4" fill="currentColor" opacity="0.15" />
      <circle cx="95" cy="80" r="4" fill="currentColor" opacity="0.2" />
      <circle cx="100" cy="75" r="4" fill="currentColor" opacity="0.15" />
      <circle cx="15" cy="90" r="3" fill="currentColor" opacity="0.1" />
      <path d="M55 95 Q60 88 65 95 Q60 102 55 95Z" fill="currentColor" opacity="0.25" />
    </svg>
  ),
  coding: (
    <svg viewBox="0 0 120 120" className="card-icon">
      <path d="M35 40 L15 60 L35 80" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M85 40 L105 60 L85 80" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="70" y1="30" x2="50" y2="90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <rect x="55" y="95" width="10" height="3" rx="1" fill="currentColor" opacity="0.5" />
      <rect x="20" y="20" width="4" height="4" rx="1" fill="currentColor" opacity="0.2" />
      <rect x="96" y="20" width="4" height="4" rx="1" fill="currentColor" opacity="0.2" />
      <rect x="40" y="100" width="4" height="4" rx="1" fill="currentColor" opacity="0.15" />
    </svg>
  ),
  piano: (
    <svg viewBox="0 0 120 120" className="card-icon">
      {/* Piano keys */}
      <rect x="15" y="30" width="90" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* White keys */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line key={i} x1={28 + i * 11} y1="30" x2={28 + i * 11} y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      ))}
      {/* Black keys */}
      {[0, 1, 3, 4, 5].map((i) => (
        <rect key={i} x={24 + i * 11} y="30" width="7" height="35" rx="1" fill="currentColor" opacity="0.4" />
      ))}
      {/* Music notes floating above */}
      <circle cx="35" cy="18" r="4" fill="currentColor" opacity="0.25" />
      <line x1="39" y1="18" x2="39" y2="6" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <circle cx="80" cy="14" r="3.5" fill="currentColor" opacity="0.2" />
      <line x1="83.5" y1="14" x2="83.5" y2="4" stroke="currentColor" strokeWidth="2" opacity="0.2" />
      {/* Pedals */}
      <rect x="45" y="95" width="8" height="4" rx="2" fill="currentColor" opacity="0.2" />
      <rect x="58" y="95" width="8" height="4" rx="2" fill="currentColor" opacity="0.2" />
      <rect x="71" y="95" width="8" height="4" rx="2" fill="currentColor" opacity="0.2" />
    </svg>
  ),
  "toki-pona": (
    <svg viewBox="0 0 120 120" className="card-icon">
      {/* Stylized sun/circle — toki pona's "suno" */}
      <circle cx="60" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Rays */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <line
          key={angle}
          x1={60 + 24 * Math.cos((angle * Math.PI) / 180)}
          y1={50 + 24 * Math.sin((angle * Math.PI) / 180)}
          x2={60 + 32 * Math.cos((angle * Math.PI) / 180)}
          y2={50 + 32 * Math.sin((angle * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.5"
        />
      ))}
      {/* Smiley face inside — "pona" means good */}
      <circle cx="52" cy="46" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="68" cy="46" r="2.5" fill="currentColor" opacity="0.5" />
      <path d="M50 55 Q60 63 70 55" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      {/* "toki" speech bubble */}
      <path d="M80 85 Q95 85 95 75 Q95 65 80 65 L50 65 Q35 65 35 75 Q35 85 50 85 L60 85 L55 95 L65 85Z" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.3" />
    </svg>
  ),
  spanish: (
    <svg viewBox="0 0 120 120" className="card-icon">
      {/* Speech bubbles */}
      <rect x="15" y="20" width="55" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M30 60 L25 72 L40 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <rect x="50" y="50" width="55" height="35" rx="8" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.5" />
      <path d="M90 85 L95 95 L82 85" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" opacity="0.5" />
      {/* Exclamation marks — Spanish style ¡! */}
      <text x="30" y="48" fontSize="22" fontWeight="800" fill="currentColor" opacity="0.5" fontFamily="serif">!</text>
      <text x="50" y="48" fontSize="22" fontWeight="800" fill="currentColor" opacity="0.3" fontFamily="serif">¡</text>
      {/* Accent decoration */}
      <path d="M70 68 L80 68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <path d="M72 74 L86 74" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
    </svg>
  ),
  soroban: (
    <svg viewBox="0 0 120 120" className="card-icon">
      {/* Frame */}
      <rect x="15" y="15" width="90" height="90" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Horizontal bar divider */}
      <line x1="15" y1="45" x2="105" y2="45" stroke="currentColor" strokeWidth="3" />
      {/* Vertical rods */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={30 + i * 15} y1="15" x2={30 + i * 15} y2="105" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      ))}
      {/* Top beads (heaven beads) */}
      {[0, 1, 2, 3, 4].map((i) => (
        <ellipse key={`t${i}`} cx={30 + i * 15} cy={i % 2 === 0 ? 28 : 35} rx="5" ry="6" fill="currentColor" opacity="0.4" />
      ))}
      {/* Bottom beads (earth beads) — 4 per rod, various positions */}
      {[0, 1, 2, 3, 4].map((rod) =>
        [0, 1, 2, 3].map((bead) => (
          <ellipse
            key={`b${rod}-${bead}`}
            cx={30 + rod * 15}
            cy={55 + bead * 12 + (rod + bead) % 2 * 3}
            rx="5"
            ry="5"
            fill="currentColor"
            opacity={0.25 + bead * 0.05}
          />
        ))
      )}
    </svg>
  ),
  "story-writing": (
    <svg viewBox="0 0 120 120" className="card-icon">
      {/* Open book */}
      <path d="M60 25 L60 100" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <path d="M60 25 Q40 20 15 28 L15 95 Q40 88 60 100" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M60 25 Q80 20 105 28 L105 95 Q80 88 60 100" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Text lines on left page */}
      <line x1="25" y1="42" x2="50" y2="40" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <line x1="25" y1="52" x2="50" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
      <line x1="25" y1="62" x2="48" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
      <line x1="25" y1="72" x2="45" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
      {/* Stars / sparkle on right page */}
      <path d="M80 45 l2-6 2 6 6 2-6 2-2 6-2-6-6-2z" fill="currentColor" opacity="0.3" />
      <path d="M90 65 l1.5-4 1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5z" fill="currentColor" opacity="0.2" />
      {/* Quill pen */}
      <path d="M95 10 L75 80" stroke="currentColor" strokeWidth="2" opacity="0.15" />
      <path d="M95 10 Q100 8 98 14 L78 82 L75 80Z" fill="currentColor" opacity="0.1" />
    </svg>
  ),
  typing: (
    <svg viewBox="0 0 120 120" className="card-icon">
      {/* Keyboard outline */}
      <rect x="10" y="40" width="100" height="55" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
      {/* Key rows */}
      {/* Row 1 */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <rect key={`r1-${i}`} x={16 + i * 9} y="46" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.2" />
      ))}
      {/* Row 2 */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <rect key={`r2-${i}`} x={20 + i * 9} y="57" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.25" />
      ))}
      {/* Row 3 */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={`r3-${i}`} x={24 + i * 9} y="68" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.2" />
      ))}
      {/* Spacebar */}
      <rect x="35" y="79" width="50" height="7" rx="2" fill="currentColor" opacity="0.15" />
      {/* Speed lines above */}
      <line x1="30" y1="28" x2="50" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
      <line x1="55" y1="22" x2="80" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.15" />
      <line x1="65" y1="32" x2="90" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
      {/* Cursor blink */}
      <rect x="44" y="12" width="2" height="12" rx="1" fill="currentColor" opacity="0.4" />
    </svg>
  ),
};

const cardConfigs: Record<string, { bg: string; iconColor: string }> = {
  chess: {
    bg: "linear-gradient(160deg, #2D5016 0%, #1a3a0a 60%, #0f1f05 100%)",
    iconColor: "rgba(168,211,138,0.85)",
  },
  ukulele: {
    bg: "linear-gradient(160deg, #FF6B35 0%, #ff8f5e 50%, #e85d2a 100%)",
    iconColor: "rgba(255,255,255,0.85)",
  },
  korean: {
    bg: "linear-gradient(160deg, #c24b8a 0%, #E8A0BF 50%, #d4729e 100%)",
    iconColor: "rgba(255,255,255,0.85)",
  },
  coding: {
    bg: "linear-gradient(160deg, #1E1B4B 0%, #312e81 50%, #1e3a5f 100%)",
    iconColor: "rgba(147,197,253,0.85)",
  },
  piano: {
    bg: "linear-gradient(160deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
    iconColor: "rgba(232,232,240,0.85)",
  },
  "toki-pona": {
    bg: "linear-gradient(160deg, #FBBF24 0%, #f59e0b 50%, #d97706 100%)",
    iconColor: "rgba(69,26,3,0.8)",
  },
  spanish: {
    bg: "linear-gradient(160deg, #DC2626 0%, #ef4444 50%, #b91c1c 100%)",
    iconColor: "rgba(255,255,255,0.85)",
  },
  soroban: {
    bg: "linear-gradient(160deg, #92400e 0%, #b45309 50%, #78350f 100%)",
    iconColor: "rgba(254,243,199,0.85)",
  },
  "story-writing": {
    bg: "linear-gradient(160deg, #7C3AED 0%, #6d28d9 50%, #4c1d95 100%)",
    iconColor: "rgba(237,233,254,0.85)",
  },
  typing: {
    bg: "linear-gradient(160deg, #059669 0%, #10b981 50%, #047857 100%)",
    iconColor: "rgba(236,253,245,0.85)",
  },
};

export default function Home() {
  return (
    <div className="home">
      {/* Background graphic elements */}
      <div className="home-bg">
        <div className="bg-blob blob-1" />
        <div className="bg-blob blob-2" />
        <div className="bg-blob blob-3" />
        <svg className="bg-dots" width="100%" height="100%">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgba(255,107,53,0.08)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <svg className="bg-ring ring-1" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(78,205,196,0.08)" strokeWidth="2" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(78,205,196,0.05)" strokeWidth="1.5" />
        </svg>
        <svg className="bg-ring ring-2" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(255,107,53,0.06)" strokeWidth="2" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255,230,109,0.06)" strokeWidth="1.5" />
        </svg>
        <div className="bg-streak streak-1" />
        <div className="bg-streak streak-2" />
        <div className="bg-streak streak-3" />
      </div>

      <div className="card-grid">
        {topics.map((topic) => {
          const config = cardConfigs[topic.slug];
          return (
            <Link
              to={`/topic/${topic.slug}`}
              key={topic.slug}
              className={`portal-card card-${topic.slug}`}
              style={{ "--card-bg": config.bg, "--icon-color": config.iconColor } as React.CSSProperties}
            >
              <div className="card-icon-wrap">
                {topicIcons[topic.slug]}
              </div>
              <h3 className="card-title">{topic.title}</h3>
              <p className="card-tagline">{topic.tagline}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
