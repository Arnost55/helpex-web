import type { Metadata } from "next";
import { Icon } from "@/components/mark";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/site-shell";

export const metadata: Metadata = { title: "Contact and early access", description: "Contact HelpeX about private alpha access, collaboration, or developer conversations." };

export default function ContactPage() {
  return <>
    <PageIntro index="06 / 06" eyebrow="CONTACT / EARLY ACCESS" title={<>Start a<br /><span>conversation.</span></>} description="HelpeX is in private alpha. Reach out about early access, a technical conversation or a possible collaboration." />
    <section className="contact-section section-pad"><div className="wrap contact-layout"><div className="contact-aside"><p className="eyebrow">A DIRECT LINE</p><h2>Thoughtful questions<br />are always welcome.</h2><p>We’re building HelpeX in the open where possible and keeping the current product in private alpha. Tell us what you’re exploring.</p><a className="contact-email" href="mailto:spolupraca.arnost@helpex.dev"><span><Icon name="mail" size={17} /></span><span>spolupraca.arnost@helpex.dev</span><Icon name="arrow" size={15} /></a><div className="contact-status"><span className="alpha-chip"><span /> Private alpha</span><p>Early access is by conversation. Submitting this form does not guarantee an invitation.</p></div></div><div className="contact-form-panel"><div className="form-panel-heading"><span>01</span><div><h3>Write to HelpeX</h3><p>Your email app will prepare the message.</p></div><Icon name="arrow" size={16} /></div><ContactForm /></div></div></section>
    <section className="contact-note"><div className="wrap"><span className="contact-note-mark">//</span><p>Prefer to write directly? <a href="mailto:spolupraca.arnost@helpex.dev">spolupraca.arnost@helpex.dev</a></p></div></section>
  </>;
}
