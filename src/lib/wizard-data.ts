export type OptionType = "radio" | "checkbox";

export interface Option {
  id: string;
  label: string;
  /** Points toward Enterprise (positive = Enterprise, negative/zero = One) */
  weight: number;
}

export interface Step {
  id: string;
  number: number;
  title: string;
  question: string;
  tip: string;
  type: OptionType;
  options: Option[];
}

export const steps: Step[] = [
  {
    id: "role",
    number: 1,
    title: "How visibility works in your business",
    question: "Which best describes your role?",
    tip: "If visibility spans brands or clients, coordination is already part of the job.",
    type: "radio",
    options: [
      {
        id: "role-single",
        label: "I manage visibility for one internal brand",
        weight: 0,
      },
      {
        id: "role-multi-brand",
        label: "I manage visibility for multiple internal brands or products",
        weight: 2,
      },
      {
        id: "role-multi-client",
        label: "I manage visibility for multiple external clients",
        weight: 3,
      },
    ],
  },
  {
    id: "accountability",
    number: 2,
    title: "Who are you accountable to?",
    question: "Who expects visibility results from you?",
    tip: "The more stakeholders involved, the higher the need for shared definitions and reporting.",
    type: "radio",
    options: [
      {
        id: "acct-team",
        label: "My own team",
        weight: 0,
      },
      {
        id: "acct-exec",
        label: "Executive leadership",
        weight: 1,
      },
      {
        id: "acct-clients",
        label: "Clients or external stakeholders",
        weight: 3,
      },
    ],
  },
  {
    id: "surface-area",
    number: 3,
    title: "How big is your visibility surface area?",
    question: "Select all that apply:",
    tip: "Visibility complexity grows with surface area, not headcount.",
    type: "checkbox",
    options: [
      {
        id: "sa-products",
        label: "Multiple product or service lines",
        weight: 1,
      },
      {
        id: "sa-regions",
        label: "Multiple regions or markets",
        weight: 2,
      },
      {
        id: "sa-domains",
        label: "Multiple domains or digital properties",
        weight: 2,
      },
      {
        id: "sa-teams",
        label: "Multiple teams need access to visibility data",
        weight: 1,
      },
    ],
  },
  {
    id: "coordination",
    number: 4,
    title: "How coordinated is your organization today?",
    question: "Be honest:",
    tip: "AI search rewards consistency. Fragmentation shows up fast.",
    type: "radio",
    options: [
      {
        id: "coord-tight",
        label:
          "Our messaging and audience targeting are tightly aligned across teams",
        weight: 0,
      },
      {
        id: "coord-some",
        label: "Some alignment, but execution varies by team",
        weight: 1,
      },
      {
        id: "coord-fragmented",
        label: "Messaging, content, and priorities are fragmented",
        weight: 3,
      },
    ],
  },
  {
    id: "diagnosis",
    number: 5,
    title: "Diagnosing performance drops",
    question: "When performance drops, how easy is it to diagnose why?",
    tip: "Difficulty diagnosing issues is a strong signal of organizational friction.",
    type: "radio",
    options: [
      {
        id: "diag-easy",
        label: "Very easy. We share data and can align quickly",
        weight: 0,
      },
      {
        id: "diag-manual",
        label: "Possible, but manual and slow",
        weight: 1,
      },
      {
        id: "diag-hard",
        label: "Difficult. Teams use different tools and metrics",
        weight: 3,
      },
    ],
  },
  {
    id: "measurement",
    number: 6,
    title: "How is visibility measured today?",
    question: "How is visibility measured today?",
    tip: "Conflicting metrics create conflicting priorities.",
    type: "radio",
    options: [
      {
        id: "meas-shared",
        label: "One shared system with consistent metrics",
        weight: 0,
      },
      {
        id: "meas-stitched",
        label: "A few tools stitched together",
        weight: 1,
      },
      {
        id: "meas-fragmented",
        label: "Different tools owned by different teams",
        weight: 3,
      },
    ],
  },
];

export type Recommendation = "one" | "enterprise";

export interface ScoringResult {
  recommendation: Recommendation;
  score: number;
  maxScore: number;
  confidence: number; // 0-1
}

const ENTERPRISE_THRESHOLD = 0.4; // 40% of max = enterprise

export function calculateScore(answers: Record<string, string[]>): ScoringResult {
  let score = 0;
  let maxScore = 0;

  for (const step of steps) {
    const maxStepWeight = step.type === "checkbox"
      ? step.options.reduce((sum, o) => sum + o.weight, 0)
      : Math.max(...step.options.map((o) => o.weight));

    maxScore += maxStepWeight;

    const selected = answers[step.id] || [];
    for (const optionId of selected) {
      const option = step.options.find((o) => o.id === optionId);
      if (option) score += option.weight;
    }
  }

  const ratio = maxScore > 0 ? score / maxScore : 0;
  const recommendation: Recommendation = ratio >= ENTERPRISE_THRESHOLD ? "enterprise" : "one";

  // Confidence increases the further from the threshold
  const distance = Math.abs(ratio - ENTERPRISE_THRESHOLD);
  const confidence = Math.min(distance / 0.4, 1);

  return { recommendation, score, maxScore, confidence };
}

export function getPartialScore(answers: Record<string, string[]>, upToStepIndex: number): ScoringResult {
  let score = 0;
  let maxScore = 0;

  for (let i = 0; i <= upToStepIndex && i < steps.length; i++) {
    const step = steps[i];
    const maxStepWeight = step.type === "checkbox"
      ? step.options.reduce((sum, o) => sum + o.weight, 0)
      : Math.max(...step.options.map((o) => o.weight));

    maxScore += maxStepWeight;

    const selected = answers[step.id] || [];
    for (const optionId of selected) {
      const option = step.options.find((o) => o.id === optionId);
      if (option) score += option.weight;
    }
  }

  const ratio = maxScore > 0 ? score / maxScore : 0;
  const recommendation: Recommendation = ratio >= ENTERPRISE_THRESHOLD ? "enterprise" : "one";
  const distance = Math.abs(ratio - ENTERPRISE_THRESHOLD);
  const confidence = Math.min(distance / 0.4, 1);

  return { recommendation, score, maxScore, confidence };
}
