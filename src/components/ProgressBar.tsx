"use client";

import { getPartialScore, steps } from "@/lib/wizard-data";

interface ProgressBarProps {
  currentStep: number;
  answers: Record<string, string[]>;
}

export default function ProgressBar({ currentStep, answers }: ProgressBarProps) {
  const totalSteps = steps.length;
  const progress = ((currentStep + 1) / (totalSteps + 1)) * 100;

  const answeredSteps = Object.keys(answers).length;
  const partial = answeredSteps > 0 ? getPartialScore(answers, currentStep - 1) : null;

  const showHint = partial && answeredSteps >= 3;

  return (
    <div className="w-full mb-10">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-[var(--text-muted)] tracking-wide">
          Step {Math.min(currentStep + 1, totalSteps)} of {totalSteps}
        </span>
        {showHint && (
          <span className="confidence-pulse text-xs text-[var(--purple-accent-solid)]">
            Based on your answers, we&apos;re seeing patterns&hellip;
          </span>
        )}
      </div>
      <div className="w-full h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
        <div
          className="progress-fill h-full rounded-full"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, var(--purple-accent-solid), var(--purple-accent))",
          }}
        />
      </div>
    </div>
  );
}
