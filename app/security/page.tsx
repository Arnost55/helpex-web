import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/mark";
import { PageIntro, SectionHeading } from "@/components/site-shell";

export const metadata: Metadata = { title: "Security", description: "How HelpeX is building permission boundaries and human approval into agent actions." };
const permissions = [
  ["READ", "Observe or retrieve information", "May be limited to the scope and origin of a request."],
  ["WRITE", "Change or create information", "Policy can require a person’s approval before proceeding."],
  ["EXECUTE", "Run an operation or tool", "Authority depends on the action and its context."],
  ["SENSITIVE", "Touch a higher-impact capability", "Treated with stricter controls; policy can deny the request."],
];

export default function SecurityPage() {
  return <>
    <PageIntro index="03 / 06" eyebrow="SECURITY / PERMISSION MODEL" title={<>Power requires<br /><span>boundaries.</span></>} description="An AI agent should not receive unrestricted authority simply because it can propose an action. HelpeX is built around a separate permission decision." />
    <section className="security-principle section-pad"><div className="wrap"><div className="security-statement"><div className="statement-mark"><Icon name="shield" size={27} /></div><div><p className="eyebrow">THE SECURITY PRINCIPLE</p><h2>Reasoning can propose.<br /><span>Policy decides.</span></h2><p>In the codebase, permission decisions are distinct from the agent’s reasoning. A request can be allowed, paused for approval, or denied. This public-alpha site does not connect to those systems.</p></div><div className="statement-index">SEC<br />01</div></div></div></section>
    <section className="permissions-section section-pad"><div className="wrap permissions-layout"><div><p className="eyebrow">PERMISSION CLASSIFICATIONS</p><h2>Authority is<br />specific.</h2><p className="section-copy">These labels appear in the current HelpeX permission implementation. Their handling depends on policy and request context.</p></div><div className="permission-list">{permissions.map(([name, title, copy], i) => <article key={name}><span className="permission-number">0{i + 1}</span><div className="permission-class"><span className={`permission-tag permission-${name.toLowerCase()}`}>{name}</span><h3>{title}</h3><p>{copy}</p></div><Icon name="chevron" size={16} /></article>)}</div></div></section>
    <section className="approval-section section-pad"><div className="wrap approval-section-layout"><div><p className="eyebrow">A HUMAN CHECKPOINT</p><h2>Approval is a decision,<br /><span>not a decoration.</span></h2><p className="section-copy">An approval request should be clear about what is being asked and where it will happen. HelpeX’s backend contains an approval lifecycle; the panel here is only a concept.</p></div><div className="approval-concept"><div className="approval-concept-top"><span className="approval-symbol"><Icon name="shield" size={18} /></span><span>PERMISSION REQUEST <i>CONCEPT</i></span><span className="approval-code">04 / 06</span></div><h3>May this action proceed?</h3><p>Example action · WRITE<br />Update a saved preference</p><div className="approval-separator"/><div className="approval-context"><span>REQUEST ORIGIN</span><strong>User requested</strong><span>DECISION</span><strong>Approval needed</strong></div><div className="approval-buttons"><button type="button" disabled>Reject · illustrative</button><button type="button" disabled>Approve · illustrative</button></div><p className="demo-disclaimer">Static illustration · no action can be run here.</p></div></div></section>
    <section className="trust-section"><div className="wrap trust-grid"><div><Icon name="lock" size={18} /><span>Trust boundaries</span><p>Requests carry context that can limit inherited authority.</p></div><div><Icon name="pulse" size={18} /><span>Auditable intent</span><p>Audit and redaction code exists; integrity is not described as tamper-proof.</p></div><div><Icon name="shieldCheck" size={18} /><span>Honest status</span><p>Private alpha. No independent security certification is claimed.</p></div></div></section>
    <section className="page-cta"><div className="wrap page-cta-inner"><div><p className="eyebrow">SECURITY IS A CONTINUING PRACTICE</p><h2>Questions are welcome.</h2></div><Link className="button button-primary" href="/contact/">Contact HelpeX <Icon name="arrow" size={16} /></Link></div></section>
  </>;
}
