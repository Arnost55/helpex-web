import type { ReactNode } from "react";

export function Mark({ small = false }: { small?: boolean }) {
  return (
    <span className={`mark${small ? " mark-small" : ""}`} aria-hidden="true">
      <i /><i />
    </span>
  );
}

export function Icon({ name, size = 18 }: { name: string; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  const paths: Record<string, ReactNode> = {
    arrow: <><path d="M4 12h15"/><path d="m13 5 7 7-7 7"/></>,
    chevron: <path d="m8 5 7 7-7 7"/>,
    shield: <><path d="M12 3 19 6v5c0 4.8-2.9 8.2-7 10-4.1-1.8-7-5.2-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    nodes: <><circle cx="5" cy="12" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="m7 11 10-4M7 13l10 4"/></>,
    plug: <><path d="M9 7V3M15 7V3M7 7h10v4a5 5 0 0 1-5 5v5"/><path d="M12 16v4"/></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></>,
    pulse: <><path d="M3 12h4l2.5-6 4.5 12 2.5-6H21"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    shieldCheck: <><path d="M12 3 19 6v5c0 4.8-2.9 8.2-7 10-4.1-1.8-7-5.2-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    spark: <><path d="m12 3 1.3 5.7L19 11l-5.7 1.3L12 18l-1.3-5.7L5 11l5.7-2.3L12 3Z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z"/></>,
  };
  return <svg {...common}>{paths[name] ?? paths.nodes}</svg>;
}
