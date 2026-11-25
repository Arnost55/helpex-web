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
    chat: <><path d="M5 5h14v10H9l-4 4V5Z"/><path d="M8 9h8M8 12h5"/></>,
    terminal: <><path d="m5 7 5 5-5 5"/><path d="M13 17h6"/></>,
    mic: <><rect x="8" y="3" width="8" height="12" rx="4"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/></>,
    paperclip: <path d="m8 12 5-5a3 3 0 0 1 4 4l-6 6a4 4 0 0 1-6-6l6-6"/>,
    image: <><rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="m5 17 4-4 3 3 2-2 5 4"/></>,
    search: <><circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 4 4"/></>,
    panel: <><rect x="4" y="5" width="16" height="14" rx="2"/><path d="M10 5v14"/></>,
    gateway: <><rect x="5" y="6" width="14" height="5" rx="1"/><rect x="5" y="14" width="14" height="5" rx="1"/><path d="M8 8.5h.01M8 16.5h.01"/></>,
    memory: <><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 4v3M12 4v3M15 4v3M9 17v3M12 17v3M15 17v3M4 9h3M4 12h3M4 15h3M17 9h3M17 12h3M17 15h3"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="m19 12 2-1-2-4-2 1-2-2 1-2-4-2-1 2H9L8 2 4 4l1 2-2 2-2-1-1 4 2 1v3l-2 1 2 4 2-1 2 2-1 2 4 2 1-2h3l1 2 4-2-1-2 2-2 2 1 2-4-2-1v-3Z"/></>,
  };
  return <svg {...common}>{paths[name] ?? paths.nodes}</svg>;
}
