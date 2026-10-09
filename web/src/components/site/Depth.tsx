import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

type Depth = "quick" | "deep";

interface DepthCtx {
  depth: Depth;
  setDepth: (d: Depth) => void;
}

const Ctx = createContext<DepthCtx>({ depth: "quick", setDepth: () => {} });
const KEY = "bossofai.depth";

export const DepthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [depth, setDepthState] = useState<Depth>("quick");

  // storage is a per-viewer convenience only; the page works without it
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(KEY);
      if (saved === "deep" || saved === "quick") setDepthState(saved);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const setDepth = useCallback((d: Depth) => {
    setDepthState(d);
    try {
      window.localStorage.setItem(KEY, d);
    } catch {
      /* storage unavailable */
    }
  }, []);

  return <Ctx.Provider value={{ depth, setDepth }}>{children}</Ctx.Provider>;
};

export const useDepth = () => useContext(Ctx);

/** Segmented Quick / Deep switch. */
export const DepthToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { depth, setDepth } = useDepth();
  const opt = (d: Depth, label: string) => (
    <button
      type="button"
      onClick={() => setDepth(d)}
      aria-pressed={depth === d}
      className={`px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider transition-colors ${
        depth === d ? "bg-foreground text-background" : "text-foreground hover:bg-accent"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div
      role="group"
      aria-label="Reading depth"
      className={`inline-flex overflow-hidden rounded-full border-2 border-foreground ${className}`}
    >
      {opt("quick", "Quick")}
      {opt("deep", "Deep")}
    </div>
  );
};

/** Content shown only in Deep mode: footnoted, citable, for researchers. */
export const Deep: React.FC<{ title?: string; children: React.ReactNode }> = ({ title = "Go deeper", children }) => {
  const { depth, setDepth } = useDepth();
  if (depth !== "deep") {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <button
          type="button"
          onClick={() => setDepth("deep")}
          className="brut-sm brut-hover flex w-full items-center justify-between rounded-xl px-5 py-4 text-left"
        >
          <span>
            <span className="label-mono block text-muted-foreground">Deep layer</span>
            <span className="font-heading text-lg font-bold">{title}: frameworks, evidence, sources</span>
          </span>
          <span className="font-mono text-2xl" aria-hidden>
            +
          </span>
        </button>
      </div>
    );
  }
  return (
    <section className="border-y-2 border-foreground bg-secondary/60 py-14">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <span className="label-mono mb-3 inline-block rounded-full bg-foreground px-3 py-1 text-background">
            Deep layer
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight mb-6">{title}</h2>
          <div className="deep-prose">{children}</div>
        </div>
      </div>
    </section>
  );
};
