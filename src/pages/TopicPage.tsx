import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { topics } from "../data/topics";
import "./TopicPage.css";

function ChessDecorations() {
  return (
    <div className="decorations chess-decorations">
      {/* Chessboard pattern */}
      <svg className="chess-board-pattern" viewBox="0 0 400 400" preserveAspectRatio="none">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={col * 50}
              y={row * 50}
              width="50"
              height="50"
              fill={(row + col) % 2 === 0 ? "rgba(168,211,138,0.06)" : "rgba(0,0,0,0.03)"}
            />
          ))
        )}
      </svg>

      {/* Floating knight silhouette */}
      <svg className="floating-piece knight-piece" viewBox="0 0 100 120">
        <path
          d="M30 110h40v8H30zM35 110V85c0-5 2-10 5-12l18-24c-4-2-6-7-6-12 0-9 7-15 15-15s15 6 15 12c0 5-2 9-6 12l-10 14 14 10c3 2 5 7 5 12v28"
          fill="rgba(168,211,138,0.12)"
          stroke="rgba(168,211,138,0.2)"
          strokeWidth="2"
        />
      </svg>

      {/* Floating queen silhouette */}
      <svg className="floating-piece queen-piece" viewBox="0 0 100 120">
        <path
          d="M25 110h50v8H25zM30 110V95l-8-40 16 15 12-25 12 25 16-15-8 40"
          fill="rgba(168,211,138,0.08)"
          stroke="rgba(168,211,138,0.15)"
          strokeWidth="2"
        />
        <circle cx="50" cy="28" r="6" fill="rgba(168,211,138,0.1)" stroke="rgba(168,211,138,0.15)" strokeWidth="2" />
      </svg>

      {/* Floating pawn */}
      <svg className="floating-piece pawn-piece" viewBox="0 0 60 100">
        <path
          d="M15 90h30v8H15zM18 90V75c0-3 2-6 5-8-3-2-5-6-5-10 0-8 7-14 12-14s12 6 12 14c0 4-2 8-5 10 3 2 5 5 5 8v15"
          fill="rgba(168,211,138,0.1)"
          stroke="rgba(168,211,138,0.18)"
          strokeWidth="2"
        />
      </svg>

      {/* Ornamental corner borders */}
      <div className="ornamental-corner top-left" />
      <div className="ornamental-corner top-right" />
      <div className="ornamental-corner bottom-left" />
      <div className="ornamental-corner bottom-right" />
    </div>
  );
}

function UkuleleDecorations() {
  return (
    <div className="decorations ukulele-decorations">
      {/* Wavy background shapes */}
      <svg className="wave-bg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,250.7C672,256,768,224,864,213.3C960,203,1056,213,1152,218.7C1248,224,1344,224,1392,224L1440,224L1440,320L0,320Z"
          fill="rgba(255,230,109,0.15)"
        />
      </svg>
      <svg className="wave-bg wave-bg-2" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,202.7C672,224,768,256,864,261.3C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,320L0,320Z"
          fill="rgba(78,205,196,0.08)"
        />
      </svg>

      {/* Floating music notes */}
      <svg className="music-note note-1" viewBox="0 0 40 60">
        <ellipse cx="12" cy="48" rx="10" ry="7" fill="currentColor" />
        <line x1="22" y1="48" x2="22" y2="5" stroke="currentColor" strokeWidth="3" />
        <path d="M22 5 Q35 10 30 20 Q28 25 22 22" fill="currentColor" />
      </svg>
      <svg className="music-note note-2" viewBox="0 0 50 60">
        <ellipse cx="12" cy="48" rx="9" ry="6" fill="currentColor" />
        <line x1="21" y1="48" x2="21" y2="5" stroke="currentColor" strokeWidth="3" />
        <ellipse cx="38" cy="42" rx="9" ry="6" fill="currentColor" />
        <line x1="47" y1="42" x2="47" y2="5" stroke="currentColor" strokeWidth="3" />
        <line x1="21" y1="5" x2="47" y2="5" stroke="currentColor" strokeWidth="4" />
      </svg>
      <svg className="music-note note-3" viewBox="0 0 40 60">
        <ellipse cx="12" cy="48" rx="10" ry="7" fill="currentColor" />
        <line x1="22" y1="48" x2="22" y2="5" stroke="currentColor" strokeWidth="3" />
        <path d="M22 5 Q35 10 30 20 Q28 25 22 22" fill="currentColor" />
      </svg>

      {/* Sound wave lines */}
      <div className="sound-waves">
        <span /><span /><span /><span /><span />
      </div>
    </div>
  );
}

function KoreanDecorations() {
  return (
    <div className="decorations korean-decorations">
      {/* Large watermark Hangul */}
      <div className="hangul-watermark">한</div>
      <div className="hangul-watermark hangul-2">국</div>
      <div className="hangul-watermark hangul-3">어</div>

      {/* Cherry blossom petals */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="petal"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${5 + Math.random() * 85}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
            opacity: 0.15 + Math.random() * 0.2,
            transform: `scale(${0.5 + Math.random() * 0.8}) rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}

      {/* Taegeuk-inspired decorative circle */}
      <svg className="taegeuk" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(200,50,80,0.1)" strokeWidth="2" />
        <path d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 1 50 50 A24 24 0 0 0 50 2Z" fill="rgba(200,50,80,0.06)" />
        <path d="M50 98 A48 48 0 0 1 50 2 A24 24 0 0 1 50 50 A24 24 0 0 0 50 98Z" fill="rgba(59,130,246,0.06)" />
      </svg>

      {/* Traditional geometric border pattern */}
      <div className="korean-border-pattern" />
    </div>
  );
}

function CodingDecorations() {
  return (
    <div className="decorations coding-decorations">
      {/* Floating code snippets */}
      <div className="code-float code-1">{"{ }"}</div>
      <div className="code-float code-2">{"</>"}</div>
      <div className="code-float code-3">const</div>
      <div className="code-float code-4">fn()</div>
      <div className="code-float code-5">{"=>"}</div>
      <div className="code-float code-6">0101</div>

      {/* Circuit board pattern */}
      <svg className="circuit-pattern" viewBox="0 0 400 400">
        <defs>
          <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M0 40h30M50 40h30M40 0v30M40 50v30" stroke="rgba(59,130,246,0.08)" strokeWidth="1" />
            <circle cx="40" cy="40" r="3" fill="rgba(16,185,129,0.1)" />
            <circle cx="0" cy="40" r="2" fill="rgba(59,130,246,0.06)" />
            <circle cx="80" cy="40" r="2" fill="rgba(59,130,246,0.06)" />
            <circle cx="40" cy="0" r="2" fill="rgba(59,130,246,0.06)" />
            <circle cx="40" cy="80" r="2" fill="rgba(59,130,246,0.06)" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#circuit)" />
      </svg>

      {/* Glowing orbs */}
      <div className="glow-orb orb-1" />
      <div className="glow-orb orb-2" />
      <div className="glow-orb orb-3" />

      {/* Pixel grid dots */}
      <div className="pixel-grid">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="pixel"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function PianoDecorations() {
  return (
    <div className="decorations piano-decorations">
      {/* Piano keys spanning bottom */}
      <svg className="piano-keys-bg" viewBox="0 0 1200 200" preserveAspectRatio="none">
        {Array.from({ length: 20 }).map((_, i) => (
          <g key={i}>
            <rect x={i * 60} y="0" width="58" height="200" fill="rgba(232,232,240,0.03)" stroke="rgba(232,232,240,0.04)" strokeWidth="1" />
            {i % 7 !== 2 && i % 7 !== 6 && (
              <rect x={i * 60 + 38} y="0" width="22" height="120" fill="rgba(0,0,0,0.15)" rx="2" />
            )}
          </g>
        ))}
      </svg>
      {/* Floating treble clef-like swirl */}
      <svg className="treble-swirl" viewBox="0 0 100 200" opacity="0.06">
        <path d="M50 180 C50 140 20 120 20 80 C20 40 50 20 50 20 C50 20 80 40 80 80 C80 100 65 110 50 110 C35 110 25 95 30 80 C35 65 50 60 50 60" fill="none" stroke="white" strokeWidth="4" />
      </svg>
      {/* Staff lines */}
      <div className="staff-lines">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="staff-line" style={{ top: `${20 + i * 8}%` }} />
        ))}
      </div>
    </div>
  );
}

function TokiPonaDecorations() {
  return (
    <div className="decorations tokipona-decorations">
      {/* Large sun glow */}
      <div className="tp-sun-glow" />
      {/* Sitelen pona-inspired shapes */}
      <svg className="tp-glyph glyph-1" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(69,26,3,0.08)" strokeWidth="4" />
        <circle cx="40" cy="30" r="8" fill="rgba(69,26,3,0.06)" />
      </svg>
      <svg className="tp-glyph glyph-2" viewBox="0 0 80 80">
        <rect x="15" y="20" width="50" height="40" rx="8" fill="none" stroke="rgba(69,26,3,0.06)" strokeWidth="4" />
        <line x1="40" y1="60" x2="40" y2="75" stroke="rgba(69,26,3,0.06)" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <svg className="tp-glyph glyph-3" viewBox="0 0 80 80">
        <path d="M20 60 L40 20 L60 60Z" fill="none" stroke="rgba(69,26,3,0.07)" strokeWidth="4" strokeLinejoin="round" />
      </svg>
      {/* Radiating lines from center */}
      <div className="tp-radiate" />
    </div>
  );
}

function SpanishDecorations() {
  return (
    <div className="decorations spanish-decorations">
      {/* Warm diagonal stripes */}
      <div className="spanish-stripes" />
      {/* Floating inverted punctuation */}
      <div className="spanish-float sp-1">¿</div>
      <div className="spanish-float sp-2">¡</div>
      <div className="spanish-float sp-3">~</div>
      <div className="spanish-float sp-4">ñ</div>
      <div className="spanish-float sp-5">é</div>
      {/* Sun-like warm glow */}
      <div className="spanish-glow" />
    </div>
  );
}

function SorobanDecorations() {
  return (
    <div className="decorations soroban-decorations">
      {/* Warm gold glow */}
      <div className="soroban-glow soroban-glow-1" />
      <div className="soroban-glow soroban-glow-2" />

      {/* Vertical rods with beads */}
      <svg className="soroban-rods" viewBox="0 0 1000 700" preserveAspectRatio="none">
        {/* Frame */}
        <rect x="40" y="50" width="920" height="600" rx="8" fill="none" stroke="rgba(201,148,10,0.06)" strokeWidth="2" />
        {/* Horizontal beam */}
        <line x1="40" y1="220" x2="960" y2="220" stroke="rgba(201,148,10,0.1)" strokeWidth="3" />

        {Array.from({ length: 13 }).map((_, i) => {
          const x = 100 + i * 65;
          const heavenY = 100 + ((i + 2) % 3) * 30;
          return (
            <g key={i}>
              {/* Rod */}
              <line x1={x} y1="50" x2={x} y2="650" stroke="rgba(201,148,10,0.04)" strokeWidth="1.5" />
              {/* Heaven bead (1 per rod) */}
              <ellipse cx={x} cy={heavenY} rx="14" ry="10"
                fill="rgba(201,148,10,0.08)" stroke="rgba(201,148,10,0.12)" strokeWidth="1" />
              {/* Earth beads (4 per rod) */}
              {Array.from({ length: 4 }).map((_, j) => (
                <ellipse
                  key={j}
                  cx={x}
                  cy={280 + j * 70 + ((i + j) % 3) * 25}
                  rx="14" ry="10"
                  fill="rgba(201,148,10,0.06)"
                  stroke="rgba(201,148,10,0.08)"
                  strokeWidth="1"
                />
              ))}
            </g>
          );
        })}
      </svg>

      {/* Large kanji watermark */}
      <div className="soroban-watermark">算</div>

      {/* Floating numbers */}
      <div className="soroban-float num-1">1,247</div>
      <div className="soroban-float num-2">× 86</div>
      <div className="soroban-float num-3">= 107,242</div>
    </div>
  );
}

function StoryWritingDecorations() {
  return (
    <div className="decorations story-decorations">
      {/* Large ghosted "WRITING" watermark behind content */}
      <div className="writing-watermark">WRITING</div>

      {/* "Once upon a midnight..." flowing text */}
      <div className="story-opening">Once upon a midnight dreaming...</div>

      {/* Floating text lines / paragraphs */}
      <div className="story-lines">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="story-line"
            style={{
              width: `${100 + Math.random() * 200}px`,
              left: `${5 + Math.random() * 80}%`,
              top: `${10 + i * 11}%`,
              opacity: 0.03 + Math.random() * 0.04,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      {/* Sparkles / inspiration stars */}
      {Array.from({ length: 8 }).map((_, i) => (
        <svg
          key={i}
          className="story-sparkle"
          viewBox="0 0 20 20"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${5 + Math.random() * 85}%`,
            animationDelay: `${i * 0.7}s`,
          }}
        >
          <path d="M10 0 l1.5 7 7 1.5-7 1.5-1.5 7-1.5-7-7-1.5 7-1.5z" fill="rgba(237,233,254,0.15)" />
        </svg>
      ))}
      {/* Large quill pen silhouette */}
      <svg className="story-quill" viewBox="0 0 100 300" opacity="0.04">
        <path d="M70 0 Q80 50 50 150 L45 300 L40 150 Q10 50 30 0 Z" fill="white" />
        <line x1="47" y1="150" x2="47" y2="300" stroke="white" strokeWidth="3" />
      </svg>
    </div>
  );
}

function TypingDecorations() {
  return (
    <div className="decorations typing-decorations">
      {/* Scanline overlay */}
      <div className="typing-scanlines" />

      {/* WPM counter */}
      <div className="wpm-counter">
        <span className="wpm-number">127</span>
        <span className="wpm-label">WPM</span>
      </div>

      {/* Floating 3D keycaps */}
      {["A", "S", "D", "F", "J", "K", "L", ";"].map((key, i) => (
        <div
          key={key}
          className="floating-key"
          style={{
            left: `${5 + i * 11.5}%`,
            top: `${12 + (i % 3) * 28}%`,
            animationDelay: `${i * 0.4}s`,
          }}
        >
          {key}
        </div>
      ))}

      {/* Horizontal speed lines */}
      <div className="speed-lines">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="speed-line"
            style={{
              top: `${8 + i * 9}%`,
              width: `${60 + Math.random() * 200}px`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Blinking cursors */}
      <div className="typing-cursor cursor-1" />
      <div className="typing-cursor cursor-2" />
      <div className="typing-cursor cursor-3" />

      {/* Terminal text ghost */}
      <div className="terminal-ghost">
        <span>$ the quick brown fox jumps</span>
      </div>
    </div>
  );
}

const decorationMap: Record<string, () => React.ReactNode> = {
  chess: ChessDecorations,
  ukulele: UkuleleDecorations,
  korean: KoreanDecorations,
  coding: CodingDecorations,
  piano: PianoDecorations,
  "toki-pona": TokiPonaDecorations,
  spanish: SpanishDecorations,
  soroban: SorobanDecorations,
  "story-writing": StoryWritingDecorations,
  typing: TypingDecorations,
};

export default function TopicPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const topicIndex = topics.findIndex((t) => t.slug === slug);
  const topic = topicIndex >= 0 ? topics[topicIndex] : undefined;

  const prevTopic = topics[(topicIndex - 1 + topics.length) % topics.length];
  const nextTopic = topics[(topicIndex + 1) % topics.length];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        navigate(`/topic/${prevTopic.slug}`);
      } else if (e.key === "ArrowRight") {
        navigate(`/topic/${nextTopic.slug}`);
      }
    },
    [navigate, prevTopic, nextTopic]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (topic) {
      document.title = `${topic.title} — The Shelf`;
    }
    return () => { document.title = "The Shelf"; };
  }, [topic]);

  if (!topic) {
    return (
      <div className="topic-not-found">
        <h1>Topic not found</h1>
        <Link to="/">Go back home</Link>
      </div>
    );
  }

  const Decorations = decorationMap[topic.slug];

  return (
    <div
      className={`topic-page topic-${topic.slug}`}
      style={{
        "--topic-accent": topic.accentColor,
        "--topic-bg": topic.bgGradient,
        "--topic-text": topic.textColor,
      } as React.CSSProperties}
    >
      <div className="topic-bg" />

      {Decorations && <Decorations />}

      <nav className="topic-nav">
        <Link to="/" className="back-button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Back</span>
        </Link>
      </nav>

      <div className="topic-content">
        <div className="topic-hero">
          <div className="hero-text">
            <h1 className="topic-title">{topic.title}</h1>
            <p className="topic-description">{topic.description}</p>
          </div>

          <div className="hero-video">
            <div className="video-container">
              {topic.videoUrl ? (
                <video
                  src={topic.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <div className="video-placeholder">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                    <path d="M10 8l6 4-6 4V8z" fill="currentColor" opacity="0.4" />
                  </svg>
                  <span>Video coming soon</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <nav className="topic-pager">
        <Link to={`/topic/${prevTopic.slug}`} className="pager-link pager-prev">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{prevTopic.title}</span>
        </Link>
        <Link to={`/topic/${nextTopic.slug}`} className="pager-link pager-next">
          <span>{nextTopic.title}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </nav>
    </div>
  );
}
