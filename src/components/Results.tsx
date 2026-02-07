"use client";

import { useEffect, useState } from "react";
import type { ScoringResult } from "@/lib/wizard-data";

interface ResultsProps {
  result: ScoringResult;
  onRestart: () => void;
}

export default function Results({ result, onRestart }: ResultsProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const isEnterprise = result.recommendation === "enterprise";

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-[var(--purple-accent-solid)] mb-4">
          Your Results
        </span>
        <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
          What your answers mean
        </h2>
        <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
          Based on your responses, here&apos;s how your visibility challenge maps to Semrush solutions.
        </p>
      </div>

      {/* Result cards — equal height with flex */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Semrush One Card */}
        <div
          className={`result-card rounded-xl border-2 p-8 flex flex-col ${
            !isEnterprise
              ? "recommended bg-[var(--purple-bg)]"
              : "border-[var(--border)] bg-[var(--bg-card)]"
          }`}
        >
          {!isEnterprise ? (
            <span className="inline-block self-start text-xs font-bold uppercase tracking-[0.15em] text-[var(--purple-accent-solid)] mb-4 bg-[rgba(138,56,245,0.1)] px-3 py-1.5 rounded-full">
              Recommended for you
            </span>
          ) : (
            <div className="mb-4 h-[26px]" />
          )}
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
            Semrush One
          </h3>
          <p className="text-sm font-medium text-[var(--text-secondary)] mb-5">
            Focused execution environment
          </p>
          <div className="space-y-3 mb-6">
            <CheckItem text="A single brand or clear ownership" />
            <CheckItem text="Limited coordination overhead" />
            <CheckItem text="Direct control over outcomes" />
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8 flex-1">
            Built to help teams measure visibility across SEO and AI search, align quickly around what matters, and take action without added complexity.
          </p>
          {/* CTA */}
          <a
            href="#signup"
            className={`btn-primary text-center block w-full ${
              !isEnterprise ? "" : ""
            }`}
            style={isEnterprise ? { backgroundColor: "transparent", border: "1px solid var(--border)", color: "var(--text-secondary)" } : {}}
          >
            Sign up for a free trial
          </a>
        </div>

        {/* Semrush Enterprise Card */}
        <div
          className={`result-card rounded-xl border-2 p-8 flex flex-col ${
            isEnterprise
              ? "recommended bg-[var(--purple-bg)]"
              : "border-[var(--border)] bg-[var(--bg-card)]"
          }`}
        >
          {isEnterprise ? (
            <span className="inline-block self-start text-xs font-bold uppercase tracking-[0.15em] text-[var(--purple-accent-solid)] mb-4 bg-[rgba(138,56,245,0.1)] px-3 py-1.5 rounded-full">
              Recommended for you
            </span>
          ) : (
            <div className="mb-4 h-[26px]" />
          )}
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
            Semrush Enterprise
          </h3>
          <p className="text-sm font-medium text-[var(--text-secondary)] mb-5">
            Coordination-heavy environment
          </p>
          <div className="space-y-3 mb-6">
            <CheckItem text="Multiple brands, clients, or regions" />
            <CheckItem text="Shared accountability for results" />
            <CheckItem text="Consistency, control, and reporting at scale" />
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8 flex-1">
            Designed to operationalize visibility across teams, entities, and stakeholders — with the scale, controls, and integrations required to manage complexity and prove impact.
          </p>
          {/* CTA */}
          <a
            href="#demo"
            className="btn-primary text-center block w-full"
            style={!isEnterprise ? { backgroundColor: "transparent", border: "1px solid var(--border)", color: "var(--text-secondary)" } : {}}
          >
            Schedule a Demo
          </a>
        </div>
      </div>

      {/* Important note */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-8 mb-10">
        <h4 className="text-lg font-bold text-[var(--text-primary)] mb-4">
          One important thing to know
        </h4>
        <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
          Many teams start with focused execution and move into coordination as responsibilities grow. That shift isn&apos;t about &ldquo;outgrowing a plan.&rdquo;
        </p>
        <p className="text-sm font-semibold text-[var(--text-primary)] mb-3">
          It happens when:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
            <span className="text-[var(--purple-accent-solid)] mt-0.5">&#8226;</span>
            More people depend on the same visibility data
          </li>
          <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
            <span className="text-[var(--purple-accent-solid)] mt-0.5">&#8226;</span>
            Accountability expands
          </li>
          <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
            <span className="text-[var(--purple-accent-solid)] mt-0.5">&#8226;</span>
            Coordination becomes essential to performance
          </li>
        </ul>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          Semrush One and Semrush Enterprise share the same core system. The difference is how much responsibility your visibility strategy carries.
        </p>
      </div>

      {/* Restart */}
      <div className="text-center py-4">
        <button
          onClick={onRestart}
          className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] underline transition-colors cursor-pointer"
        >
          Start over
        </button>
      </div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <svg
        className="w-4 h-4 text-[var(--green)] mt-0.5 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-sm text-[var(--text-secondary)]">{text}</span>
    </div>
  );
}
