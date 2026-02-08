"use client";

import Header from "@/components/Header";

/* ─── Shared logo (reuse the project's Semrush logo) ─── */
function SemrushLogo() {
  return (
    <img
      src="/new-semrush-logo.svg"
      alt="Semrush"
      className="h-8"
    />
  );
}

/* ─── Reusable Screenshot / Video Placeholder ─── */
function ScreenPlaceholder({
  label = "Product Screenshot",
  aspect = "16/10",
  variant = "light",
}: {
  label?: string;
  aspect?: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`lp-screen-placeholder ${isDark ? "lp-screen-dark" : ""}`}
      style={{ aspectRatio: aspect }}
    >
      <svg className="w-10 h-10 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      <span className="text-xs font-medium opacity-40 mt-2">{label}</span>
    </div>
  );
}

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section className="lp-hero">
      <div className="lp-container">
        <div className="lp-hero-grid">
          {/* Left: Copy */}
          <div className="lp-hero-copy">
            <div className="lp-badge">Semrush for Ecommerce</div>
            <h1 className="lp-h1">
              Dominate Search Across the
              <br />
              <span className="lp-gradient-text">Entire Ecommerce Journey</span>
            </h1>
            <p className="lp-hero-sub">
              AI-powered search is reshaping how shoppers discover, compare, and choose products.{" "}
              <strong>Semrush One</strong> helps ecommerce teams win visibility across Google Search,
              AI Overviews, and AI-driven answers—using data you can actually trust.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-10">
              <a href="#get-started" className="lp-btn-primary">Start for free</a>
              <a href="#enterprise" className="lp-btn-secondary">Talk to sales</a>
            </div>
            <p className="lp-trust-signal mt-6">
              17+ years of search intelligence &bull; Trusted by 10M+ marketers worldwide
            </p>
          </div>
          {/* Right: Video / Screenshot */}
          <div className="lp-hero-media">
            <div className="lp-hero-screen-wrap">
              <ScreenPlaceholder label="Product Video / Screenshot" aspect="16/10" />
              <div className="lp-hero-screen-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 1: The Shift ─── */
function TheShift() {
  const questions = [
    "What's the best option?",
    "Which brand should I trust?",
    "What's the difference between these products?",
  ];

  return (
    <section className="lp-section">
      <div className="lp-container">
        <div className="lp-section-grid">
          <div>
            <h2 className="lp-h2">
              AI Is Now Deciding Which Ecommerce Brands Get Seen
            </h2>
            <p className="lp-body mt-4">
              Shoppers no longer move linearly from keyword to product page. They ask AI systems:
            </p>
            <div className="flex flex-col gap-3 mt-6">
              {questions.map((q) => (
                <div key={q} className="lp-ai-question">
                  <span className="lp-ai-icon">AI</span>
                  <span className="italic text-[var(--text-secondary)]">&ldquo;{q}&rdquo;</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lp-callout-card">
            <p className="text-lg font-semibold text-[var(--text-primary)] leading-relaxed">
              AI answers those questions <em>before</em> a click happens.
            </p>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
              If your brand isn&apos;t clearly understood, trusted, and surfaced by AI, you don&apos;t just lose rankings.
            </p>
            <p className="mt-4 font-semibold text-[var(--orange)]">
              You lose the recommendation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: How AI Search Changes Discovery ─── */
function AISearchDiscovery() {
  const stages = [
    {
      label: "Discovery",
      icon: "🔍",
      description: "AI introduces and filters brands when shoppers ask broad questions.",
    },
    {
      label: "Comparison",
      icon: "⚖️",
      description: "AI summarizes differences, strengths, and tradeoffs across products and brands.",
    },
    {
      label: "Recommendation",
      icon: "✅",
      description: "AI guides the final decision—often before a shopper ever reaches a SERP.",
    },
  ];

  return (
    <section className="lp-section lp-section-alt">
      <div className="lp-container text-center">
        <h2 className="lp-h2">How AI Search Changes Ecommerce Discovery</h2>
        <p className="lp-body mt-4 max-w-2xl mx-auto">
          This isn&apos;t a future state. It&apos;s already shaping high-intent ecommerce demand.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {stages.map((stage, i) => (
            <div key={stage.label} className="lp-stage-card">
              <div className="lp-stage-number">{i + 1}</div>
              <div className="text-3xl mb-4">{stage.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{stage.label}</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
        {/* Flow connector */}
        <div className="hidden md:flex items-center justify-center gap-2 mt-8">
          <div className="lp-flow-line" />
          <span className="text-xs text-[var(--text-muted)] font-medium tracking-wide uppercase">Buyer journey</span>
          <div className="lp-flow-line" />
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: The Real Problem ─── */
function RealProblem() {
  const gaps = [
    "Is this backed by real search demand?",
    "How does this compare to competitors?",
    "Does this actually matter for revenue?",
  ];

  return (
    <section className="lp-section">
      <div className="lp-container max-w-3xl">
        <h2 className="lp-h2 text-center">
          Why Most Ecommerce Teams Are Flying Blind
        </h2>
        <p className="lp-body mt-4 text-center">
          Many AI visibility tools show <em>what AI says</em>. Very few can answer:
        </p>
        <div className="mt-8 space-y-4">
          {gaps.map((gap) => (
            <div key={gap} className="lp-gap-row">
              <span className="lp-gap-icon">?</span>
              <span className="text-[var(--text-primary)]">{gap}</span>
            </div>
          ))}
        </div>
        <div className="lp-divider-card mt-10">
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Without historical search data, competitive benchmarks, and demand context,
            AI visibility becomes noise.
          </p>
          <p className="mt-4 font-semibold text-[var(--text-primary)]">
            That&apos;s where Semrush One is different.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: Semrush One Positioning ─── */
function SemrushOnePositioning() {
  const capabilities = [
    "Benchmark what's happening",
    "Prioritize what matters",
    "Decide what to do next with confidence",
  ];

  return (
    <section className="lp-section lp-section-dark">
      <div className="lp-container text-center">
        <div className="lp-badge-light">Core Platform</div>
        <h2 className="lp-h2 text-white mt-4">
          Semrush One: The Source of Truth for Modern Search Visibility
        </h2>
        <p className="text-[#a1a3b0] mt-4 max-w-2xl mx-auto leading-relaxed">
          Semrush One is built for modern search—where <strong className="text-white">SEO and AI visibility are inseparable</strong>.
          It connects AI-era signals to the industry&apos;s most established SEO and competitive intelligence datasets.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          {capabilities.map((cap) => (
            <div key={cap} className="lp-dark-chip">
              <svg className="w-4 h-4 text-[var(--green)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{cap}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-[#6b6d7b] mt-10 max-w-lg mx-auto">
          Anyone can show you AI outputs. Only Semrush connects them to real search behavior.
        </p>
        {/* Platform screenshot */}
        <div className="mt-12 max-w-3xl mx-auto">
          <ScreenPlaceholder label="Semrush One — Dashboard Overview" aspect="16/9" variant="dark" />
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: How Semrush One Works ─── */
function HowItWorks() {
  const pillars = [
    {
      title: "Unified SEO + AI Visibility",
      description: "Track classic SEO and AI-driven discovery together. No separate tools. No guesswork.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    },
    {
      title: "Demand-Backed Insights",
      description: "See AI visibility grounded in real keywords, competitors, and historical performance.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: "Actionable Recommendations",
      description: "Move from signals to strategy with prioritized opportunities—not raw data dumps.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: "Built for Marketers",
      description: "Decision-ready workflows designed for ecommerce teams, not data scientists.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="lp-section" id="capabilities">
      <div className="lp-container">
        <h2 className="lp-h2 text-center">
          A Practical Framework for Ecommerce AI Visibility
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {pillars.map((p) => (
            <div key={p.title} className="lp-feature-card">
              <div className="lp-feature-icon">{p.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mt-4">{p.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
        {/* Full-width product screenshot */}
        <div className="mt-12">
          <ScreenPlaceholder label="AI Visibility + SEO — Unified View" aspect="16/7" />
        </div>
      </div>
    </section>
  );
}

/* ─── Section 6: What You Can Do ─── */
function Capabilities() {
  const useCases = [
    { text: "See how your brand appears in AI-generated answers", icon: "eye" },
    { text: "Identify where competitors are being recommended instead", icon: "target" },
    { text: "Understand which categories and products AI trusts most", icon: "shield" },
    { text: "Align SEO, content, and AI visibility from one platform", icon: "link" },
    { text: "Justify decisions with data leadership already trusts", icon: "chart" },
  ];

  const icons: Record<string, React.ReactNode> = {
    eye: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    target: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    shield: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    link: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.757 8.25" />
      </svg>
    ),
    chart: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
  };

  return (
    <section className="lp-section lp-section-alt">
      <div className="lp-container max-w-3xl">
        <h2 className="lp-h2 text-center">What Ecommerce Teams Use Semrush One For</h2>
        <div className="mt-10 space-y-4">
          {useCases.map((uc) => (
            <div key={uc.text} className="lp-usecase-row">
              <div className="lp-usecase-icon">{icons[uc.icon]}</div>
              <span className="text-[var(--text-primary)]">{uc.text}</span>
            </div>
          ))}
        </div>
        {/* Capabilities screenshot */}
        <div className="mt-10">
          <ScreenPlaceholder label="Competitor AI Visibility Comparison" aspect="16/9" />
        </div>
      </div>
    </section>
  );
}

/* ─── Enterprise Callout ─── */
function EnterpriseCallout() {
  const features = [
    "Manage AI and search visibility across brands and markets",
    "Integrate with internal BI, analytics, and reporting systems",
    "Apply governance and collaboration at scale",
    "Align SEO, content, PR, and brand teams around one source of truth",
  ];

  return (
    <section className="lp-section" id="enterprise">
      <div className="lp-container">
        <div className="lp-enterprise-card">
          <div className="lp-enterprise-badge">Enterprise</div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-4">
            Built for Scale: Semrush Enterprise
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto leading-relaxed">
            For large ecommerce organizations with multiple brands, regions, or teams,{" "}
            <strong>Semrush Enterprise</strong> delivers everything in Semrush One—plus the scale,
            governance, and integrations complex businesses require.
          </p>
          <div className="mt-8 text-left max-w-xl mx-auto">
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-4">Enterprise teams use Semrush to:</p>
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3 mb-3">
                <svg className="w-5 h-5 text-[var(--orange)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-[var(--text-secondary)]">{f}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="#" className="lp-btn-enterprise">Talk to our Enterprise team</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Social Proof ─── */
function SocialProof() {
  const brands = [
    "Forbes", "Walmart", "Samsung", "P&G", "Tesla", "Amazon", "Nike", "Apple",
  ];

  return (
    <section className="lp-section lp-section-alt">
      <div className="lp-container text-center">
        <h2 className="text-lg font-semibold text-[var(--text-muted)] tracking-wide uppercase">
          Trusted by Leading Ecommerce and Retail Brands
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
          {brands.map((brand) => (
            <div
              key={brand}
              className="lp-logo-placeholder"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Final Conversion ─── */
function FinalCTA() {
  const points = [
    "Where your brand appears in AI-driven discovery",
    "How competitors are positioned instead",
    "What to fix first to protect high-intent demand",
  ];

  return (
    <section className="lp-section lp-section-dark" id="get-started">
      <div className="lp-container text-center">
        <h2 className="lp-h2 text-white">
          See How AI Search Sees Your Ecommerce Brand
        </h2>
        <p className="text-[#a1a3b0] mt-4">Understand:</p>
        <div className="flex flex-col items-center gap-3 mt-6">
          {points.map((pt) => (
            <div key={pt} className="flex items-center gap-3">
              <svg className="w-4 h-4 text-[var(--green)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[#d0d1d8]">{pt}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a href="#" className="lp-btn-primary">Start for free</a>
          <a href="#" className="lp-btn-secondary-light">Talk to sales</a>
        </div>
        <p className="text-xs text-[#6b6d7b] mt-4">
          No credit card required &bull; Built on trusted search data
        </p>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="lp-footer">
      <div className="lp-container text-center">
        <SemrushLogo />
        <p className="text-sm text-[var(--text-muted)] mt-4 max-w-md mx-auto">
          Semrush helps ecommerce brands win visibility across search, AI, and every place customers discover products.
        </p>
        <div className="flex items-center justify-center gap-6 mt-6 text-xs text-[var(--text-muted)]">
          <span>&copy; 2025 Semrush</span>
          <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Landing Page ─── */
export default function EcommerceLanding() {
  return (
    <div className="lp-wrapper">
      <Header />
      <Hero />
      <TheShift />
      <AISearchDiscovery />
      <RealProblem />
      <SemrushOnePositioning />
      <HowItWorks />
      <Capabilities />
      <EnterpriseCallout />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  );
}
