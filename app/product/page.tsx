import type { Metadata } from "next";
import Link from "next/link";
import { WorkspaceDemo, LifecycleDemo } from "@/components/concept-demo";
import { Icon } from "@/components/mark";
import { PageIntro, SectionHeading } from "@/components/site-shell";

export const metadata: Metadata = { title: "Product", description: "HelpeX is a permissioned personal agent platform in private alpha." };

export default function ProductPage() {
  return <>
    <PageIntro index="01 / 06" eyebrow="PRODUCT / PRIVATE ALPHA" title={<>More than a chat.<br /><span>A system that can help.</span></>} description="HelpeX is a personal AI agent platform designed to understand your context, coordinate tools and keep action under your control." />
    <section className="product-workspace section-pad"><div className="wrap"><SectionHeading eyebrow="A WORKSPACE, IN PROGRESS" title="See the idea in motion." copy="This concept shows a conversation, an activity trace and a human approval point. It is illustrative: no live model or tool is connected." /><WorkspaceDemo /></div></section>
    <section className="product-capabilities section-pad"><div className="wrap product-capabilities-layout"><div className="capabilities-heading"><p className="eyebrow">CAPABILITIES UNDER DEVELOPMENT</p><h2>Personal.<br />Modular.<br /><span>Permissioned.</span></h2></div><div className="capability-rows"><article><div className="capability-icon"><Icon name="spark" /></div><div><span className="capability-status">IN CODEBASE</span><h3>Provider choice</h3><p>Provider adapters include cloud options and a local Ollama path. Runtime routing and failover are not presented as universally verified.</p></div></article><article><div className="capability-icon"><Icon name="plug" /></div><div><span className="capability-status">IN CODEBASE</span><h3>Connected tools</h3><p>MCP tool discovery and lifecycle code connect the agent to external capabilities. Availability depends on integration and configuration.</p></div></article><article><div className="capability-icon"><Icon name="shield" /></div><div><span className="capability-status">ACTIVE DEVELOPMENT</span><h3>Permissioned action</h3><p>Policy evaluation can allow, ask for approval, or deny. The full product interface and deployment are still being built.</p></div></article></div></div></section>
    <section className="product-lifecycle section-pad"><div className="wrap"><SectionHeading eyebrow="A PROPOSED FLOW" title="Understand. Decide. Act." copy="Explore the lifecycle the HelpeX product is being built around." /><LifecycleDemo /></div></section>
    <section className="page-cta"><div className="wrap page-cta-inner"><div><p className="eyebrow">PRIVATE ALPHA</p><h2>Help shape what comes next.</h2></div><Link className="button button-primary" href="/contact/">Talk with HelpeX <Icon name="arrow" size={16} /></Link></div></section>
  </>;
}
