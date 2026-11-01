// Small presentational components for the payload-variability page.
// Plain React + CSS (see styles.css); no third-party UI kit.
import React, { useEffect, useMemo, useState } from "react";
export { useState, useMemo };

type Tone = "warning";
type Cell = string | number | { text: string; tone: Tone };

export const slug = (s: string) =>
  String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

/** Inline markdown: `code` and **bold**. */
export function md(s: unknown): React.ReactNode {
  if (typeof s !== "string") return s as React.ReactNode;
  return s.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((p, i) =>
    p.length > 2 && p.startsWith("`") && p.endsWith("`") ? <code key={i}>{p.slice(1, -1)}</code>
      : p.length > 4 && p.startsWith("**") && p.endsWith("**") ? <strong key={i}>{p.slice(2, -2)}</strong>
        : p);
}

export function Page({ title, summary, children }: { title: string; summary?: string; width?: string; children?: React.ReactNode }) {
  useEffect(() => { document.title = title; }, [title]);
  return (
    <main className="page">
      <h1 dir="auto">{title}</h1>
      {summary ? <p className="summary">{md(summary)}</p> : null}
      {children}
    </main>
  );
}

export function Section({ heading, caption, children }: { heading: string; caption?: string; children?: React.ReactNode }) {
  return (
    <section id={slug(heading)} className="section">
      <h2 dir="auto">{heading}</h2>
      <div className="blocks">
        {children}
        {caption ? <p className="caption">{md(caption)}</p> : null}
      </div>
    </section>
  );
}

export function Text({ children }: { children?: React.ReactNode }) {
  return <p className="text">{md(children)}</p>;
}

const cellText = (c: Cell) => (c !== null && typeof c === "object" ? c.text : String(c ?? ""));
const NUMERIC = /^[\s\d.,·—%*+\-]*$/;

export function Table({ columns, rows }: { columns: string[]; rows: Cell[][] }) {
  const numeric = columns.map((_, j) =>
    rows.length > 0 && rows.every((r) => NUMERIC.test(cellText(r[j]))) && rows.some((r) => /\d/.test(cellText(r[j]))));
  return (
    <div className="table-scroll">
      <table className="table">
        <thead>
          <tr>{columns.map((c, j) => <th key={j} className={numeric[j] ? "num" : undefined}>{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => {
                const toned = c !== null && typeof c === "object";
                const cls = [numeric[j] ? "num" : "", toned ? "tone-" + c.tone : ""].filter(Boolean).join(" ");
                return <td key={j} className={cls || undefined}>{md(cellText(c))}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Callout({ lead, children }: { lead?: string; tone?: string; children?: React.ReactNode }) {
  return (
    <div className="callout" role="note">
      {lead ? <div className="callout-lead">{lead}</div> : null}
      <div>{md(children)}</div>
    </div>
  );
}

export function TableOfContents({ items }: { items: { label: string }[] }) {
  const ids = items.map((it) => slug(it.label));
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 80) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className="toc" aria-label="On this page">
      <p className="toc-title">On this page</p>
      {items.map((it, i) => (
        <a key={ids[i]} href={"#" + ids[i]} title={it.label} aria-current={active === ids[i] ? "location" : undefined}>{it.label}</a>
      ))}
    </nav>
  );
}

export function Bars({ bars }: { bars: { label: string; value: number; display?: string }[] }) {
  const max = Math.max(1, ...bars.map((b) => b.value));
  return (
    <div className="bars card">
      {bars.map((b, i) => (
        <div key={i} className={"bar" + (b.value === max ? " top" : "")}>
          <div className="bar-label" title={b.label}>{b.label}</div>
          <div className="bar-track"><div className="bar-fill" style={{ width: `${(100 * b.value) / max}%` }} /></div>
          <div className="bar-value">{b.display ?? String(b.value)}</div>
        </div>
      ))}
    </div>
  );
}

export function Grid({ columns = 2, plain, children }: { columns?: number; plain?: boolean; children?: React.ReactNode }) {
  const kids = React.Children.toArray(children);
  return (
    <div className={"grid" + (plain ? " plain" : "")} style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
      {plain ? kids : kids.map((k, i) => <div key={i} className="card grid-cell">{k}</div>)}
    </div>
  );
}

export function Properties({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="props">
      {items.map((it, i) => (
        <React.Fragment key={i}><dt>{it.label}</dt><dd>{md(it.value)}</dd></React.Fragment>
      ))}
    </dl>
  );
}

let uid = 0;
const useId = (p: string) => useMemo(() => `${p}-${++uid}`, []);

export function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  const id = useId("sel");
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <span className="select-wrap">
        <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
          {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5 6 7.5 9 4.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
    </div>
  );
}

export function Input({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  const id = useId("in");
  return (
    <div className="field wide">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className={"switch" + (value ? " on" : "")}>
      <input type="checkbox" role="switch" checked={value} onChange={(e) => onChange(e.target.checked)} />
      <span className="switch-track" aria-hidden="true"><span className="switch-thumb" /></span>
      <span>{label}</span>
    </label>
  );
}

export function Segmented({ options, value, onChange }: { options: { value: string; label: string }[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="segmented" role="group">
      {options.map((o) => (
        <button key={o.value} type="button" aria-pressed={o.value === value} onClick={() => onChange(o.value)}>
          <span>{o.label}</span>
        </button>
      ))}
    </div>
  );
}

export function Button({ label, onClick, variant }: { label: string; onClick?: () => void; variant?: "primary" }) {
  return <button type="button" className={"btn" + (variant === "primary" ? " primary" : "")} onClick={onClick}>{label}</button>;
}
