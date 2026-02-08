"use client";

import { useState, useCallback } from "react";
import { steps, calculateScore, type ScoringResult } from "@/lib/wizard-data";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import StepView from "./StepView";
import Results from "./Results";

export default function Wizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [result, setResult] = useState<ScoringResult | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const handleSelect = useCallback((stepId: string, optionIds: string[]) => {
    setAnswers((prev) => ({ ...prev, [stepId]: optionIds }));
  }, []);

  const handleNext = useCallback((force?: boolean) => {
    if (!force) {
      const step = steps[currentStep];
      if (!answers[step.id] || answers[step.id].length === 0) return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setAnimationKey((prev) => prev + 1);
    } else {
      // Use functional update to get latest answers for scoring
      setAnswers((prev) => {
        const scoring = calculateScore(prev);
        setResult(scoring);
        return prev;
      });
    }
  }, [currentStep, answers]);

  const handleBack = useCallback(() => {
    if (result) {
      setResult(null);
      return;
    }
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setAnimationKey((prev) => prev + 1);
    }
  }, [currentStep, result]);

  const handleRestart = useCallback(() => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
    setAnimationKey((prev) => prev + 1);
  }, []);

  const step = steps[currentStep];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)]">
      <Header />

      {/* Main content */}
      <main className="flex-1 flex items-start justify-center pt-10 pb-20 px-6">
        <div className="w-full max-w-2xl">
          {!result && (
            <ProgressBar currentStep={currentStep} answers={answers} />
          )}

          {result ? (
            <Results result={result} onRestart={handleRestart} />
          ) : (
            <>
              {/* Intro on first step */}
              {currentStep === 0 && Object.keys(answers).length === 0 && (
                <div className="mb-10">
                  <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 leading-[1.1]">
                    Find the Right Semrush Setup for Your Business
                  </h1>
                  <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                    This isn&apos;t about company size. It&apos;s about how complex your visibility challenge is — and how much coordination it requires.
                  </p>
                  <p className="text-[var(--text-muted)] mt-3 text-base">
                    Answer a few questions to see where you fit.
                  </p>
                </div>
              )}

              <StepView
                step={step}
                selectedOptions={answers[step.id] || []}
                onSelect={handleSelect}
                onNext={handleNext}
                onBack={handleBack}
                isFirst={currentStep === 0}
                animationKey={animationKey}
              />
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border-light)] py-5">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-[var(--text-muted)]">
          Powered by Semrush
        </div>
      </footer>
    </div>
  );
}
