// Foil branch pattern, drawn once on load. Seeded, so server output is stable.
const W = 1600;
const H = 900;

function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

// Adds one fork to the path of its depth level, so each sprig is only three paths.
function sprig(
  x: number,
  y: number,
  angle: number,
  length: number,
  level: number,
  r: () => number,
  levels: string[],
) {
  const bend = angle + (r() - 0.5) * 0.9;
  const mx = x + Math.cos(angle) * length * 0.5;
  const my = y + Math.sin(angle) * length * 0.5;
  const ex = mx + Math.cos(bend) * length * 0.5;
  const ey = my + Math.sin(bend) * length * 0.5;
  const n = Math.round;
  levels[level] += `M${n(x)} ${n(y)}Q${n(mx)} ${n(my)} ${n(ex)} ${n(ey)}`;
  if (level === 2) return;
  for (let i = 0; i < 3 - level; i++) {
    const side = i % 2 ? 1 : -1;
    const t = i === 2 ? 0.95 : 0.35 + r() * 0.5;
    const forkAngle = bend + side * (0.3 + r() * 0.5);
    sprig(x + (ex - x) * t, y + (ey - y) * t, forkAngle, length * (0.5 + r() * 0.3), level + 1, r, levels);
  }
}

const COLS = 17;
const ROWS = 6;

function build() {
  const r = rng(63);
  return Array.from({ length: COLS * ROWS }, (_, i) => {
    const x = ((i % COLS) + 0.1 + r() * 0.8) * (W / COLS);
    const y = (Math.floor(i / COLS) + 0.3 + r() * 0.8) * (H / ROWS);
    const levels = ["", "", ""];
    sprig(x, y, -Math.PI / 2 + (r() - 0.5) * 1.8, 34 + r() * 30, 0, r, levels);
    return { x, y, levels, opacity: 0.25 + r() * 0.65, delay: r() * 0.9 };
  }).filter((g) => g.x > 680 && g.y > 150); // clear of the copy and the menu
}

const groups = build();

export default function Branches({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMaxYMin slice"
      className={`twig pointer-events-none absolute inset-0 h-full w-full ${className}`}
      fill="none"
      stroke="#b4c4c9"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {groups.map((g, i) => (
        <g key={i} opacity={g.opacity.toFixed(2)}>
          {g.levels.map((d, level) => (
            <path
              key={level}
              d={d}
              pathLength={1}
              strokeWidth={1.8 - level * 0.4}
              style={{ "--d": `${(g.delay + level * 0.35).toFixed(2)}s` } as React.CSSProperties}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
