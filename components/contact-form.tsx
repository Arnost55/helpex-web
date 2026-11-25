"use client";

import { FormEvent, useState } from "react";
import { Icon } from "@/components/mark";

export function ContactForm() {
  const [ready, setReady] = useState(false);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim().slice(0, 100);
    const email = String(form.get("email") ?? "").trim().slice(0, 254);
    const interest = String(form.get("interest") ?? "Early access").trim().slice(0, 80);
    const note = String(form.get("note") ?? "").trim().slice(0, 1500);
    const body = [`Name: ${name}`, `Email: ${email}`, `Interest: ${interest}`, "", note].join("\n");
    const href = `mailto:spolupraca.arnost@helpex.dev?subject=${encodeURIComponent(`HelpeX — ${interest}`)}&body=${encodeURIComponent(body)}`;
    setReady(true);
    window.location.assign(href);
  }
  return <form className="contact-form" onSubmit={prepareEmail}>
    <div className="form-field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" maxLength={100} required placeholder="Your name" /></div>
    <div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" maxLength={254} required placeholder="you@example.com" /></div>
    <div className="form-field"><label htmlFor="interest">I’m interested in</label><select id="interest" name="interest" defaultValue="Early access"><option>Early access</option><option>Product collaboration</option><option>Developer conversation</option><option>Something else</option></select></div>
    <div className="form-field"><label htmlFor="note">A short note <span>Optional</span></label><textarea id="note" name="note" rows={4} maxLength={1500} placeholder="What would you like to explore?" /></div>
    <button className="button button-primary form-submit" type="submit">Open email draft <Icon name="arrow" size={16} /></button>
    <p className="form-privacy" aria-live="polite">{ready ? "Your email app should open with a draft. Nothing was sent by this website." : "This form opens your email app. HelpeX does not collect or store these details here."}</p>
  </form>;
}
