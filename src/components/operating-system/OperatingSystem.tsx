"use client";

import Header from "@/components/Header";
import "./os-styles.css";

/* ─── Data ─── */
const TRUST_PEOPLE = [
  { initials: "DP", name: "Dan Petrovic", role: "DEJAN" },
  { initials: "KI", name: "Kevin Indig", role: "Growth Memo" },
  { initials: "MK", name: "Mike King", role: "iPullRank" },
  { initials: "+", name: "More contributors", role: "Coming soon", muted: true },
];

interface Guide {
  title: string;
  description: string;
  status: "available" | "coming-soon";
  deliverable?: string;
}

const SECTIONS: { title: string; description: string; alt?: boolean; guides: Guide[] }[] = [
  {
    title: "Understanding AI Search",
    description: "What\u2019s changed, how it works, and why it matters for your business.",
    guides: [
      { title: "The AI Search Shift", description: "What\u2019s fundamentally different about how people find information now. The decline of blue links, the rise of AI-generated answers, and what it means for your traffic.", status: "available", deliverable: "Landscape Overview" },
      { title: "How AI Search Platforms Work", description: "A practitioner\u2019s guide to LLMs, RAG, and source selection. Enough to make smart optimization decisions, not academic theory.", status: "available", deliverable: "Platform Comparison" },
      { title: "The Search Everywhere Revolution", description: "Search is dispersing across Google, social, Reddit, YouTube, marketplaces, and LLMs. Understanding where your audience actually searches now.", status: "available", deliverable: "Platform Mapping" },
    ],
  },
  {
    title: "Building Your Strategy",
    description: "The strategic foundations and deliverables that define an AI search engagement.",
    alt: true,
    guides: [
      { title: "AI Search Visibility Audit", description: "Where does your brand appear in AI-generated responses? Establish your baseline and identify immediate opportunities.", status: "available", deliverable: "Visibility Scorecard" },
      { title: "Audience Research & Segmentation", description: "Understanding who you\u2019re trying to reach before mapping their queries. Jobs-to-be-done, platform preferences, and search behavior.", status: "available", deliverable: "Audience Profile Framework" },
      { title: "Keyword Portfolio", description: "Mapping seed queries to synthetic queries. Building the complete map of how your audience asks questions across platforms.", status: "available", deliverable: "Keyword Matrix Template" },
      { title: "AI Search Technical Audit", description: "Technical and structural issues blocking visibility. What\u2019s preventing your content from being retrieved or cited by AI systems.", status: "coming-soon" },
      { title: "Omnimedia Content Audit", description: "Beyond text \u2014 video, tables, images. Understanding the entire information landscape AI systems pull from.", status: "coming-soon" },
      { title: "Omnimedia Content Plan", description: "Strategic content expansion including where video and other formats matter most. Your complete content creation roadmap.", status: "coming-soon" },
      { title: "AI Search Measurement Plan", description: "Defining which metrics matter and how you\u2019ll demonstrate impact when traditional rankings are just part of the picture.", status: "coming-soon" },
      { title: "AI Search Strategic Roadmap", description: "Executive synthesis that turns audit insights into actionable decisions. Where all the deliverables come together into a plan.", status: "coming-soon" },
    ],
  },
  {
    title: "Execution & Implementation",
    description: "Turning strategy into action \u2014 the hands-on work that drives AI search visibility.",
    guides: [
      { title: "Creating AI-Optimized Content", description: "How to write, structure, and format content that AI systems want to retrieve and cite. The production playbook.", status: "coming-soon" },
      { title: "Technical Implementation", description: "Schema markup, site structure, and internal linking \u2014 the on-site technical foundation for AI visibility.", status: "coming-soon" },
      { title: "Entity & Knowledge Graph Optimization", description: "Building your brand\u2019s presence in the knowledge layer that AI systems draw from. Wikipedia, Wikidata, and entity authority.", status: "coming-soon" },
      { title: "LLM Seeding & Third-Party Visibility", description: "Active strategies for generating mentions across platforms that LLMs reference. Digital PR for the AI era \u2014 building consensus signals.", status: "coming-soon" },
    ],
  },
  {
    title: "Measurement & Growth",
    description: "Proving impact, building systems, and scaling what works.",
    alt: true,
    guides: [
      { title: "Tracking, Reporting & Attribution", description: "Setting up tracking infrastructure and building reports that demonstrate impact. Proving ROI when clicks aren\u2019t the only signal.", status: "coming-soon" },
      { title: "The Optimization Loop", description: "Ongoing optimization based on performance data. The maintenance rhythm that keeps AI search visibility growing.", status: "coming-soon" },
      { title: "Building Your AI Search Process", description: "SOPs, workflows, and operational infrastructure. Moving from one-off projects to repeatable, scalable systems.", status: "coming-soon" },
      { title: "Team Structure & Skills", description: "Who does what on an AI search team? Skills needed, role definitions, and building capability internally or through partners.", status: "available", deliverable: "Team Building Guide" },
      { title: "Creator & Affiliate Partnerships", description: "Extending reach through creator collaborations and affiliate relationships. Building partnerships that amplify AI visibility.", status: "coming-soon" },
    ],
  },
];

const AGENCY_CARDS = [
  { title: "Selling AI Search Services", description: "Discovery call scripts, qualification frameworks, and how to scope AI search engagements. Pricing models and packaging." },
  { title: "Proposals & Engagement Structure", description: "Proposal templates with deliverables and timelines. Structuring engagements from audit through ongoing optimization." },
  { title: "Client Management & Reporting", description: "Reporting dashboards, QBR presentations, and stakeholder communication. Keeping clients informed and demonstrating value." },
];

const PLATFORM_TRACKS = [
  { title: "YouTube for AI Search", subtitle: "Video optimization for AI citations", iconClass: "os-track-youtube" },
  { title: "Reddit Visibility Strategy", subtitle: "Building presence where LLMs train", iconClass: "os-track-reddit" },
];

const INDUSTRY_TRACKS = [
  { title: "E-commerce", subtitle: "Product visibility in AI shopping results", iconClass: "os-track-ecommerce" },
  { title: "SaaS & B2B", subtitle: "AI search for software companies", iconClass: "os-track-saas" },
  { title: "Local Business", subtitle: "Local visibility in AI recommendations", iconClass: "os-track-local" },
];

const METRICS = [
  { number: "10M", label: "Marketing professionals have already used Semrush" },
  { number: "21", label: "International awards for best SEO software suite" },
  { number: "35%", label: "Fortune 500 companies use Semrush as their go-to tool" },
];

const AWARDS = ["#1 SEO Tool", "#1 Competitive Intelligence", "Best Software 2026", "Best AEO Tools"];

/* ─── Icons ─── */
function CheckIcon() {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" className="os-check-svg">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="os-doc-icon">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" fill="none" stroke="currentColor" strokeWidth={1} />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="os-play-svg">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}

/* ─── Guide Card ─── */
function GuideCard({ guide }: { guide: Guide }) {
  const isAvailable = guide.status === "available";
  return (
    <div className={`os-guide-card ${!isAvailable ? "os-coming-soon" : ""}`}>
      <div className="os-guide-card-header">
        <span className={`os-guide-status ${isAvailable ? "os-status-available" : "os-status-coming"}`}>
          {isAvailable ? "Available" : "Coming Soon"}
        </span>
      </div>
      <h3 className="os-guide-title">{guide.title}</h3>
      <p className="os-guide-description">{guide.description}</p>
      {isAvailable && guide.deliverable ? (
        <div className="os-guide-footer">
          <span className="os-guide-deliverable">
            <DocIcon /> {guide.deliverable}
          </span>
          <a href="#" className="os-guide-link">
            Start guide <ArrowIcon />
          </a>
        </div>
      ) : (
        <div className="os-notify-cta">
          <button className="os-notify-btn">Notify me when available</button>
        </div>
      )}
    </div>
  );
}

/* ─── Sections ─── */
function HeroSection() {
  return (
    <section className="os-hero">
      <div className="os-hero-stripes" aria-hidden="true">
        <div className="os-stripe" />
        <div className="os-stripe" />
        <div className="os-stripe" />
        <div className="os-stripe" />
      </div>
      <div className="os-hero-content">
        <div className="os-hero-left">
          <h1 className="os-h1">The AI Search Operating System</h1>
          <p className="os-hero-subtitle">
            The complete playbook for winning visibility in AI search — built with insights from leading search practitioners and the teams behind Semrush.
          </p>
          <div className="os-value-stack">
            {[
              "12+ ready-to-use templates, frameworks, and checklists — delivered instantly",
              "20+ in-depth guides delivered to your inbox as they publish",
              "Industry-specific playbooks for e-commerce, SaaS, and local",
              "Platform guides for YouTube, Reddit, and beyond",
            ].map((item) => (
              <div key={item} className="os-value-item">
                <div className="os-check"><CheckIcon /></div>
                <span>{item}</span>
              </div>
            ))}
            <p className="os-value-closer">Everything agencies charge $5,000+ for — yours free.</p>
          </div>
          <form className="os-hero-form" onSubmit={(e) => e.preventDefault()}>
            <div className="os-hero-form-row">
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Get instant access</button>
            </div>
            <label className="os-trial-checkbox">
              <input type="checkbox" defaultChecked />
              <span>Also start a free Semrush trial <span className="os-checkbox-note">— no credit card required</span></span>
            </label>
          </form>
        </div>
        <div className="os-hero-right">
          <div className="os-video-placeholder">
            <div className="os-play-button"><PlayIcon /></div>
            <span className="os-video-text">Watch: What&apos;s inside the AI Search OS (2 min)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="os-trust-bar">
      <div className="os-trust-bar-content">
        <p className="os-trust-bar-label">Built with insights from leading AI search practitioners</p>
        <div className="os-trust-names">
          {TRUST_PEOPLE.map((p) => (
            <div key={p.initials + p.name} className="os-trust-person">
              <div className="os-trust-avatar">{p.initials}</div>
              <div className="os-trust-person-info">
                <div className={`os-trust-person-name ${p.muted ? "os-muted" : ""}`}>{p.name}</div>
                <div className="os-trust-person-role">{p.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExecutiveQuote() {
  return (
    <section className="os-executive-quote">
      <div className="os-executive-quote-content">
        <div className="os-quote-mark">&ldquo;</div>
        <p className="os-quote-text">
          The marketers who master AI search first will have an unfair advantage for years. We built this so you can be one of them.
        </p>
        <div className="os-quote-attribution">
          <div className="os-quote-avatar">AW</div>
          <div className="os-quote-info">
            <div className="os-quote-name">Andrew Warden</div>
            <div className="os-quote-title">CMO, Semrush</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgressIndicator() {
  return (
    <section className="os-progress-section">
      <div className="os-progress-content">
        <div className="os-progress-info">
          <div className="os-progress-bar-container">
            <div className="os-progress-bar" />
          </div>
          <span className="os-progress-text"><strong>7 of 23</strong> guides available</span>
        </div>
        <span className="os-progress-new">New guides added monthly</span>
      </div>
    </section>
  );
}

function GuideSections() {
  return (
    <>
      {SECTIONS.map((section) => (
        <section key={section.title} className={`os-guide-section ${section.alt ? "os-alt-bg" : ""}`}>
          <div className="os-guide-section-content">
            <div className="os-section-header">
              <h2 className="os-section-title">{section.title}</h2>
              <p className="os-section-description">{section.description}</p>
            </div>
            <div className="os-guides-grid">
              {section.guides.map((guide) => (
                <GuideCard key={guide.title} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

function AgencySection() {
  return (
    <section className="os-agency-section">
      <div className="os-agency-section-content">
        <div className="os-agency-banner">
          <div className="os-agency-header">
            <div className="os-agency-badge">For Agencies &amp; Consultants</div>
            <h2 className="os-agency-title">Sell, scope, and deliver AI search services</h2>
            <p className="os-agency-description">Everything you need to add AI search optimization to your service offering — from discovery calls to QBR presentations.</p>
          </div>
          <div className="os-agency-grid">
            {AGENCY_CARDS.map((card) => (
              <div key={card.title} className="os-agency-card">
                <h3 className="os-guide-title">{card.title}</h3>
                <p className="os-guide-description">{card.description}</p>
                <div className="os-notify-cta">
                  <button className="os-notify-btn os-notify-btn-dark">Notify me when available</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecializedTracks() {
  return (
    <section className="os-tracks-section">
      <div className="os-tracks-content">
        <div className="os-section-header">
          <h2 className="os-section-title">Specialized Tracks</h2>
          <p className="os-section-description">Applied playbooks tailored to your platform and industry. Learn the system above, then execute with these.</p>
        </div>
        <div className="os-tracks-grid">
          <div>
            <p className="os-track-group-label">By Platform</p>
            {PLATFORM_TRACKS.map((t) => (
              <div key={t.title} className="os-track-item">
                <div className="os-track-item-left">
                  <div className={`os-track-icon ${t.iconClass}`}>
                    {t.iconClass === "os-track-youtube" ? (
                      <svg viewBox="0 0 24 24" fill="#DC2626"><path d="M8 5v14l11-7z" /></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="#EA580C"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    )}
                  </div>
                  <div>
                    <div className="os-track-item-title">{t.title}</div>
                    <div className="os-track-item-subtitle">{t.subtitle}</div>
                  </div>
                </div>
                <button className="os-track-notify">Notify me</button>
              </div>
            ))}
          </div>
          <div>
            <p className="os-track-group-label">By Industry</p>
            {INDUSTRY_TRACKS.map((t) => (
              <div key={t.title} className="os-track-item">
                <div className="os-track-item-left">
                  <div className={`os-track-icon ${t.iconClass}`}>
                    {t.iconClass === "os-track-ecommerce" ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                    ) : t.iconClass === "os-track-saas" ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    )}
                  </div>
                  <div>
                    <div className="os-track-item-title">{t.title}</div>
                    <div className="os-track-item-subtitle">{t.subtitle}</div>
                  </div>
                </div>
                <button className="os-track-notify">Notify me</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="os-bottom-cta">
      <div className="os-bottom-cta-content">
        <h2>Get the Complete AI Search Playbook</h2>
        <p>12+ templates and frameworks delivered instantly, plus every guide sent to your inbox as it publishes.</p>
        <form className="os-bottom-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">Get instant access</button>
        </form>
        <label className="os-bottom-trial-checkbox">
          <input type="checkbox" defaultChecked />
          <span>Also start a free Semrush trial — no credit card required</span>
        </label>
      </div>
    </section>
  );
}

function TrustMetrics() {
  return (
    <section className="os-trust-metrics">
      <div className="os-trust-metrics-content">
        <p className="os-trust-metrics-label">Marketers all over the world trust Semrush</p>
        <div className="os-metrics-grid">
          {METRICS.map((m) => (
            <div key={m.number}>
              <div className="os-metric-number">{m.number}</div>
              <div className="os-metric-label">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="os-awards-row">
          {AWARDS.map((award) => (
            <div key={award} className="os-award-badge">
              <div className="os-award-icon"><StarIcon /></div>
              <span className="os-award-text">{award}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OSFooter() {
  return (
    <footer className="os-footer">
      <div className="os-footer-content">
        <span className="os-footer-text">&copy; 2008 - 2026 Semrush. All rights reserved.</span>
        <div className="os-footer-links">
          <a href="#">Legal Info</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Do not sell my personal info</a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Component ─── */
export default function OperatingSystem() {
  return (
    <div className="os-wrapper">
      <Header />
      <HeroSection />
      <TrustBar />
      <ExecutiveQuote />
      <ProgressIndicator />
      <GuideSections />
      <AgencySection />
      <SpecializedTracks />
      <BottomCTA />
      <TrustMetrics />
      <OSFooter />
    </div>
  );
}
