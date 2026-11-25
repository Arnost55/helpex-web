"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Icon } from "@/components/mark";
import { Mark } from "@/components/mark";

const links = [
  ["Product", "/product/"], ["Architecture", "/architecture/"],
  ["Security", "/security/"], ["Developers", "/developers/"], ["About", "/about/"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); } };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label="HelpeX home" onClick={() => setOpen(false)}><Mark /><span>HelpeX</span></Link>
        <nav className={`main-nav${open ? " nav-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <span className="alpha-chip"><span /> Private alpha</span>
          <Link className="button button-small button-primary" href="/contact/">Request access <Icon name="arrow" size={15} /></Link>
          <button ref={toggleRef} className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} /></button>
        </div>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav${open ? " mobile-nav-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open}>
        {links.map(([label, href]) => <Link tabIndex={open ? 0 : -1} key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}<Icon name="chevron" size={15} /></Link>)}
        <Link className="mobile-cta" tabIndex={open ? 0 : -1} href="/contact/" onClick={() => setOpen(false)}>Request early access <Icon name="arrow" size={15} /></Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand"><Link href="/" className="wordmark"><Mark /><span>HelpeX</span></Link><p>Personal intelligence.<br />With permission at its core.</p></div>
        <div className="footer-links"><div><span className="footer-label">Explore</span><Link href="/product/">Product</Link><Link href="/architecture/">Architecture</Link><Link href="/security/">Security</Link><Link href="/developers/">Developers</Link></div><div><span className="footer-label">HelpeX</span><Link href="/about/">About</Link><Link href="/contact/">Contact</Link><a href="mailto:spolupraca.arnost@helpex.dev">Email</a></div></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} HelpeX</span><span className="footer-status"><span /> Private alpha · Active development</span><span>Designed around human control.</span></div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, description, index }: { eyebrow: string; title: ReactNode; description: string; index: string }) {
  return <section className="page-intro wrap"><div className="page-intro-index"><span>{index}</span><span className="rule" /></div><div><p className="eyebrow"><span className="eyebrow-mark">//</span>{eyebrow}</p><h1>{title}</h1><p className="intro-copy">{description}</p></div></section>;
}

export function SectionHeading({ eyebrow, title, copy, aside }: { eyebrow?: string; title: ReactNode; copy?: string; aside?: ReactNode }) {
  return <div className="section-heading">{aside}<div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div></div>;
}
