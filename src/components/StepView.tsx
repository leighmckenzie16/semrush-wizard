"use client";

import { useEffect, useState, useRef } from "react";
import type { Step } from "@/lib/wizard-data";

interface StepViewProps {
  step: Step;
  selectedOptions: string[];
  onSelect: (stepId: string, optionIds: string[]) => void;
  onNext: (force?: boolean) => void;
  onBack: () => void;
  isFirst: boolean;
  animationKey: number;
}

export default function StepView({
  step,
  selectedOptions,
  onSelect,
  onNext,
  onBack,
  isFirst,
  animationKey,
}: StepViewProps) {
  const [visible, setVisible] = useState(false);
  const autoAdvanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, [animationKey]);

  useEffect(() => {
    return () => {
      if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
    };
  }, []);

  const handleOptionClick = (optionId: string) => {
    if (step.type === "radio") {
      onSelect(step.id, [optionId]);
      if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = setTimeout(() => {
        onNext(true);
      }, 400);
    } else {
      const updated = selectedOptions.includes(optionId)
        ? selectedOptions.filter((id) => id !== optionId)
        : [...selectedOptions, optionId];
      onSelect(step.id, updated);
    }
  };

  const canProceed = selectedOptions.length > 0;
  const isCheckbox = step.type === "checkbox";

  return (
    <div
      className={`transition-all duration-400 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      {/* Step label */}
      <div className="mb-2">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-[var(--purple-accent-solid)] mb-3">
          Step {step.number}
        </span>
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-1 leading-tight">
          {step.title}
        </h2>
      </div>

      <p className="text-lg font-medium text-[var(--text-secondary)] mb-8">
        {step.question}
      </p>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {step.options.map((option) => {
          const isSelected = selectedOptions.includes(option.id);
          return (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className={`option-card w-full text-left p-5 rounded-lg border cursor-pointer flex items-start gap-4 ${
                isSelected
                  ? "selected"
                  : "border-[var(--border)] bg-[var(--bg-card)]"
              }`}
            >
              <span
                className={`mt-0.5 flex-shrink-0 w-5 h-5 border-2 flex items-center justify-center ${
                  step.type === "radio" ? "rounded-full" : "rounded-[4px]"
                } ${
                  isSelected
                    ? "border-[var(--purple-accent-solid)] bg-[var(--purple-accent-solid)]"
                    : "border-[var(--border)]"
                }`}
              >
                {isSelected && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </span>
              <span className={`text-base leading-relaxed ${
                isSelected ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
              }`}>
                {option.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Inline tip */}
      <div className="rounded-lg p-5 mb-10 border-l-2 border-[var(--purple-accent-solid)] bg-[var(--purple-bg)]">
        <p className="text-sm text-[var(--text-muted)] italic leading-relaxed">
          {step.tip}
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        {!isFirst ? (
          <button onClick={onBack} className="btn-secondary">
            &larr; Back
          </button>
        ) : (
          <div />
        )}
        {isCheckbox && (
          <button
            onClick={() => onNext()}
            disabled={!canProceed}
            className="btn-primary"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}
