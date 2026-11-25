"use client";

import { FormEvent, useState } from "react";
import { Icon } from "@/components/mark";

type Decision = "pending" | "approved" | "rejected";

export function WorkspaceDemo() {
  const [decision, setDecision] = useState<Decision>("pending");
  const [messages, setMessages] = useState<string[]>([]);
  const [value, setValue] = useState("");
  const [model, setModel] = useState("Core model");
  function send(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = value.trim();
    if (!next) return;
    setMessages((prev) => [...prev, next].slice(-3));
    setValue("");
  }
  return (
    <div className="workspace-shell" aria-label="Interactive HelpeX concept demonstration">
      <div className="workspace-topbar"><div className="window-controls"><i /><i /><i /></div><div className="workspace-title"><span className="live-dot" />Personal workspace <span className="workspace-separator">/</span> New conversation</div><span className="workspace-kebab">•••</span></div>
      <div className="workspace-content">
        <aside className="workspace-sidebar"><div className="sidebar-symbol">//</div><div className="side-nav-active"><span className="nav-glyph">⌂</span>Workspace</div><div className="side-nav-item"><span className="nav-glyph">◌</span>Conversations</div><div className="side-nav-item"><span className="nav-glyph">⌘</span>Tools</div><div className="side-nav-item"><span className="nav-glyph">⧉</span>Activity</div><div className="sidebar-bottom"><span className="avatar">A</span><span>Personal space</span><span className="online-indicator" /></div></aside>
        <div className="conversation-pane">
          <div className="conversation-header"><div><p className="eyebrow">CONVERSATION <span className="mono">/ 01</span></p><h3>What should we take care of?</h3></div><div className="model-select-wrap"><label className="sr-only" htmlFor="model-select">Choose a concept model</label><select id="model-select" value={model} onChange={(e) => setModel(e.target.value)}><option>Core model</option><option>Local model</option><option>Provider adapter</option></select><span className="select-chevron">⌄</span></div></div>
          <div className="message message-assistant"><div className="assistant-avatar">//</div><div><div className="message-meta">HelpeX <span>just now</span></div><p>I can help plan the next step. Before anything reaches a connected tool, the request is checked against its permissions.</p></div></div>
          {messages.map((message, i) => <div className="message message-user" key={`${message}-${i}`}><div><div className="message-meta">You <span>just now</span></div><p>{message}</p></div><div className="avatar">A</div></div>)}
          {messages.length > 0 && <div className="message message-assistant"><div className="assistant-avatar">//</div><div><div className="message-meta">HelpeX <span>concept response</span></div><p>This is a visual prototype. No model was called and no action was performed.</p></div></div>}
          <div className="demo-activity"><div className="activity-top"><span className="activity-icon"><Icon name="nodes" size={15} /></span><div><strong>Agent activity</strong><span>Concept trace · {model}</span></div><span className="activity-state">WAITING</span></div><div className="activity-line"><i />Request understood <span>complete</span></div><div className="activity-line"><i />Permission check <span>required</span></div></div>
          <form className="composer" onSubmit={send}><label className="sr-only" htmlFor="demo-message">Message HelpeX in the concept demo</label><textarea id="demo-message" rows={1} value={value} onChange={(e) => setValue(e.target.value.slice(0, 400))} maxLength={400} placeholder="Ask HelpeX to think through a task…" /><div className="composer-controls"><div className="composer-tools"><button type="button" className="icon-button" aria-label="Attachments are unavailable in this concept" disabled><Icon name="plus" size={17} /></button><span className="composer-mode">Concept only</span></div><button className="send-button" type="submit" aria-label="Add message to concept"><Icon name="arrow" size={17} /></button></div></form>
          <p className="demo-disclaimer">Concept demonstration · Messages stay in this page and are not sent to a model.</p>
        </div>
        <aside className="approval-rail"><div className="rail-heading"><span className="rail-eyebrow">PERMISSION GATE</span><span className="rail-count">01</span></div><div className="permission-card"><div className="permission-icon"><Icon name="shield" size={17} /></div><div className="permission-label">Approval requested</div><h4>Update a saved preference</h4><p>Example action · WRITE</p><div className="permission-target"><span className="target-bullet" /> Personal settings <span className="target-arrow">→</span></div><div className="permission-buttons"><button type="button" disabled={decision !== "pending"} onClick={() => setDecision("rejected")} className="button button-decline">Reject</button><button type="button" disabled={decision !== "pending"} onClick={() => setDecision("approved")} className="button button-approve">Approve</button></div><p className={`decision-note decision-${decision}`} aria-live="polite">{decision === "pending" ? "Nothing will run until you choose." : decision === "approved" ? "Concept approved · no action executed." : "Concept rejected · no action executed."}</p></div><div className="rail-footnote"><Icon name="lock" size={14} /><span>Interactive concept<br />No live tools connected</span></div></aside>
      </div>
    </div>
  );
}

const stages = [
  { name: "Intent", code: "01", detail: "A person describes what they need. HelpeX begins with the request, not silent background action." },
  { name: "Context", code: "02", detail: "Relevant context is assembled to make the request understandable. The scope of that context depends on the connected setup." },
  { name: "Planning", code: "03", detail: "The agent forms a proposed next step. A plan is still only a proposal; it does not grant tool authority." },
  { name: "Permission", code: "04", detail: "A separate policy boundary checks the requested capability, origin, and scope. Some actions can require a person’s approval." },
  { name: "Execution", code: "05", detail: "Only an authorized request proceeds through the relevant integration. The site demo never calls a real tool." },
  { name: "Verification", code: "06", detail: "The outcome can be returned to the person and recorded. Exact verification and audit behavior varies by implementation." },
];

export function LifecycleDemo() {
  const [active, setActive] = useState(3);
  return <div className="lifecycle-demo"><div className="lifecycle-label"><span>PERMISSIONED AGENT LIFECYCLE</span><span className="concept-pill">Concept model</span></div><div className="lifecycle-track" role="tablist" aria-label="Agent lifecycle stages" aria-orientation="horizontal">{stages.map((stage, i) => <button role="tab" tabIndex={active === i ? 0 : -1} aria-selected={active === i} aria-controls="stage-detail" id={`stage-tab-${i}`} className={`stage-tab${active === i ? " stage-active" : ""}${i < active ? " stage-past" : ""}`} onClick={() => setActive(i)} onKeyDown={(event) => { let next = i; if (event.key === "ArrowRight") next = (i + 1) % stages.length; else if (event.key === "ArrowLeft") next = (i - 1 + stages.length) % stages.length; else if (event.key === "Home") next = 0; else if (event.key === "End") next = stages.length - 1; else return; event.preventDefault(); setActive(next); document.getElementById(`stage-tab-${next}`)?.focus(); }} key={stage.name}><span className="stage-code">{stage.code}</span><span className="stage-name">{stage.name}</span><i className="stage-dot" />{i < stages.length - 1 && <span className="stage-connector" />}</button>)}</div><div className="stage-detail" id="stage-detail" role="tabpanel" aria-labelledby={`stage-tab-${active}`}><div className="stage-detail-number">{stages[active].code}</div><div><p className="eyebrow">CURRENT STAGE</p><h3>{stages[active].name}</h3><p>{stages[active].detail}</p></div><div className="stage-detail-meta"><span className="live-dot" />{active === 3 ? "Human control point" : "Illustrative step"}</div></div><p className="demo-disclaimer">A conceptual lifecycle, not a live service trace or a guarantee that every deployment uses this exact sequence.</p></div>;
}

const components = [
  { key: "person", label: "You", sub: "Intent + control", description: "A person sets the goal and remains the decision-maker for consequential actions." },
  { key: "core", label: "Agent core", sub: "Plan + coordinate", description: "The core handles conversation and proposes tool calls. It does not own unrestricted system authority." },
  { key: "guard", label: "Permission layer", sub: "Evaluate + gate", description: "A separate boundary evaluates action permissions and can require approval or deny a request." },
  { key: "tools", label: "Connected tools", sub: "MCP + services", description: "Integrations expose capabilities to the agent. Availability and scope depend on the user’s own setup." },
  { key: "world", label: "Your environment", sub: "Local + cloud", description: "Providers and infrastructure can vary. Local models are one supported direction, not a universal deployment guarantee." },
];

export function ArchitectureMap() {
  const [active, setActive] = useState("guard");
  const selected = components.find((item) => item.key === active) ?? components[2];
  return <div className="architecture-map"><div className="map-topline"><span>ILLUSTRATIVE SYSTEM BOUNDARIES</span><span>01 — 05</span></div><div className="map-layout"><div className="map-nodes" role="tablist" aria-label="Architecture components" aria-orientation="vertical">{components.map((item, i) => <div className="map-node-wrap" key={item.key}><button role="tab" tabIndex={item.key === active ? 0 : -1} id={`map-tab-${item.key}`} aria-selected={item.key === active} aria-controls="map-detail" className={`map-node${item.key === active ? " map-node-active" : ""}`} onClick={() => setActive(item.key)} onKeyDown={(event) => { let next = i; if (event.key === "ArrowDown") next = (i + 1) % components.length; else if (event.key === "ArrowUp") next = (i - 1 + components.length) % components.length; else if (event.key === "Home") next = 0; else if (event.key === "End") next = components.length - 1; else return; event.preventDefault(); const key = components[next].key; setActive(key); document.getElementById(`map-tab-${key}`)?.focus(); }}><span className="node-index">0{i + 1}</span><span className="node-title">{item.label}</span><span className="node-subtitle">{item.sub}</span><Icon name="chevron" size={16} /></button>{i < components.length - 1 && <div className="map-edge"><span />policy / data boundary</div>}</div>)}</div><div id="map-detail" className="map-detail" role="tabpanel" aria-labelledby={`map-tab-${active}`}><span className="map-detail-index">COMPONENT / {selected.key.toUpperCase()}</span><div className="map-detail-mark"><Icon name={selected.key === "guard" ? "shield" : selected.key === "tools" ? "plug" : "nodes"} size={22} /></div><h3>{selected.label}</h3><p>{selected.description}</p><span className="map-detail-status"><i /> Architecture concept</span></div></div><div className="map-legend"><span><i className="legend-control" /> Human-controlled boundary</span><span><i className="legend-flow" /> Request / response flow</span><span><i className="legend-policy" /> Policy decision</span></div><p className="demo-disclaimer">Architecture view is illustrative. It describes intended separation of concerns, not a complete deployment map.</p></div>;
}
