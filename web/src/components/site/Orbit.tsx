import React from "react";

interface OrbitProps {
  className?: string;
  /** Centre label (the human). */
  center?: string;
}

/**
 * Signature motif: concentric orbits around "YOU". Strokes use currentColor so it
 * follows light/dark; motion stops under prefers-reduced-motion (see index.css).
 */
export const Orbit: React.FC<OrbitProps> = ({ className = "", center = "YOU" }) => {
  const rings = [
    { r: 78, speed: "28s", dot: 0, size: 7, rev: false },
    { r: 124, speed: "46s", dot: 140, size: 9, rev: true },
    { r: 170, speed: "70s", dot: 250, size: 7, rev: false },
  ];
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Orbit diagram: you at the centre, learning, building and serving orbiting around you"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2">
        {rings.map((ring) => (
          <circle key={ring.r} cx="200" cy="200" r={ring.r} strokeDasharray="3 7" opacity="0.55" />
        ))}
      </g>
      {rings.map((ring, i) => {
        const a = (ring.dot * Math.PI) / 180;
        return (
          <g
            key={i}
            className={ring.rev ? "orbit-spin-rev" : "orbit-spin"}
            style={{ ["--orbit-speed" as string]: ring.speed }}
          >
            <circle
              cx={200 + ring.r * Math.cos(a)}
              cy={200 + ring.r * Math.sin(a)}
              r={ring.size}
              fill={i === 1 ? "hsl(var(--accent))" : "currentColor"}
              stroke="currentColor"
              strokeWidth="2"
            />
          </g>
        );
      })}
      <circle cx="200" cy="200" r="44" fill="hsl(var(--accent))" stroke="currentColor" strokeWidth="3" />
      <text
        x="200"
        y="207"
        textAnchor="middle"
        className="font-heading"
        fontSize="22"
        fontWeight="800"
        fill="hsl(var(--accent-foreground))"
      >
        {center}
      </text>
    </svg>
  );
};
