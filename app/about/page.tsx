import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/mark";
import { PageIntro } from "@/components/site-shell";

export const metadata: Metadata = { title: "About", description: "HelpeX is an independent personal AI agent platform in private alpha." };

export default function AboutPage() {
  return <>
    <PageIntro index="05 / 06" eyebrow="ABOUT / HELPEX" title={<>Personal intelligence<br /><span>should answer to you.</span></>} description="HelpeX is an independent effort to build a more capable personal AI agent — one that can work with your tools without putting human control aside." />
    <section className="about-manifesto section-pad"><div className="wrap about-manifesto-layout"><p className="eyebrow">WHY HELPEX EXISTS</p><div><h2>Intelligence should be useful.<br />Authority should be earned.</h2><p>Chat is only one way to work with AI. A personal agent can help coordinate context, providers and tools. But greater capability makes boundaries more important, not less.</p><p>HelpeX is being built around that tension: make a system that can assist and act, while giving people a meaningful role in deciding what happens next.</p><Link className="text-link" href="/security/">Explore the security approach <Icon name="arrow" size={15} /></Link></div></div></section>
    <section className="about-values section-pad"><div className="wrap about-values-layout"><div><p className="eyebrow">DESIGN PRINCIPLES</p><h2>Built around<br /><span>people, not prompts.</span></h2></div><div className="value-list"><article><span>01</span><div><h3>Accountability</h3><p>Show the path from request to action, including where a decision is needed.</p></div></article><article><span>02</span><div><h3>Permission</h3><p>Keep authority explicit and context-aware. Reasoning alone should not grant access.</p></div></article><article><span>03</span><div><h3>Choice</h3><p>Design for different tools, providers and infrastructure where supported.</p></div></article><article><span>04</span><div><h3>Honesty</h3><p>Mark what is being built, what is conceptual and what is verified.</p></div></article></div></div></section>
    <section className="about-status"><div className="wrap about-status-inner"><div className="status-orbit"><span>//</span><i /><i /><i /></div><div><p className="eyebrow">WHERE WE ARE</p><h2>Private alpha.<br /><span>Actively building.</span></h2><p>HelpeX is not a finished public product. We’re building the foundations, validating boundaries and learning from thoughtful early conversations.</p><Link className="button button-primary" href="/contact/">Get in touch <Icon name="arrow" size={16} /></Link></div></div></section>
  </>;
}
