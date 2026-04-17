/**
 * Animated butterfly that "unfurls" — color shards fly in from different
 * directions, assemble into the butterfly, then settle as a soft watermark
 * behind the hero content.
 *
 * Uses brand HSL tokens (navy, dark-teal, teal, sage, light-green) and
 * CSS custom keyframes scoped to this component via a <style> block.
 */
const SHARDS = [
  // Left wing — top to bottom
  { d: "M 250 60 L 480 220 L 470 300 L 240 180 Z", color: "209 83% 19%", dx: -180, dy: -120, rot: -25, delay: 0 },
  { d: "M 240 180 L 470 300 L 460 360 L 230 250 Z", color: "194 86% 28%", dx: -220, dy: -40, rot: -15, delay: 0.08 },
  { d: "M 230 250 L 460 360 L 455 410 L 225 320 Z", color: "176 38% 44%", dx: -200, dy: 60, rot: -10, delay: 0.16 },
  { d: "M 225 320 L 455 410 L 460 470 L 235 420 Z", color: "134 41% 69%", dx: -160, dy: 140, rot: 5, delay: 0.24 },
  { d: "M 235 420 L 460 470 L 480 540 L 280 520 Z", color: "95 70% 82%", dx: -120, dy: 200, rot: 15, delay: 0.32 },

  // Right wing — mirrored
  { d: "M 750 60 L 520 220 L 530 300 L 760 180 Z", color: "95 70% 82%", dx: 180, dy: -120, rot: 25, delay: 0.04 },
  { d: "M 760 180 L 530 300 L 540 360 L 770 250 Z", color: "134 41% 69%", dx: 220, dy: -40, rot: 15, delay: 0.12 },
  { d: "M 770 250 L 540 360 L 545 410 L 775 320 Z", color: "176 38% 44%", dx: 200, dy: 60, rot: 10, delay: 0.2 },
  { d: "M 775 320 L 545 410 L 540 470 L 765 420 Z", color: "194 86% 28%", dx: 160, dy: 140, rot: -5, delay: 0.28 },
  { d: "M 765 420 L 540 470 L 520 540 L 720 520 Z", color: "209 83% 19%", dx: 120, dy: 200, rot: -15, delay: 0.36 },
];

const ButterflyUnfurl = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      <style>{`
        @keyframes butterfly-shard-in {
          0% {
            opacity: 0;
            transform: translate(var(--dx), var(--dy)) rotate(var(--rot)) scale(0.6);
          }
          60% {
            opacity: 0.9;
            transform: translate(0, 0) rotate(0) scale(1.02);
          }
          100% {
            opacity: var(--final-opacity, 0.18);
            transform: translate(0, 0) rotate(0) scale(1);
          }
        }
        @keyframes butterfly-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.015); }
        }
        .butterfly-shard {
          transform-box: fill-box;
          transform-origin: center;
          opacity: 0;
          animation: butterfly-shard-in 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .butterfly-svg {
          animation: butterfly-breathe 6s ease-in-out infinite;
          animation-delay: 2.2s;
          transform-origin: center;
        }
        @media (prefers-reduced-motion: reduce) {
          .butterfly-shard {
            animation: none;
            opacity: var(--final-opacity, 0.18);
          }
          .butterfly-svg { animation: none; }
        }
      `}</style>

      <svg
        viewBox="0 0 1000 600"
        className="butterfly-svg w-[120%] max-w-[900px] h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {SHARDS.map((s, i) => (
          <path
            key={i}
            d={s.d}
            fill={`hsl(${s.color})`}
            className="butterfly-shard"
            style={
              {
                "--dx": `${s.dx}px`,
                "--dy": `${s.dy}px`,
                "--rot": `${s.rot}deg`,
                "--final-opacity": "0.16",
                animationDelay: `${s.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </svg>
    </div>
  );
};

export default ButterflyUnfurl;
