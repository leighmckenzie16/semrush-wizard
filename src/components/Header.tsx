"use client";

const NAV_ITEMS = ["Products", "Solutions", "AI Search", "Pricing", "Resources", "Company"];

export default function Header() {
  return (
    <header className="border-b border-[var(--border-light)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-8">
          {/* Semrush Logo */}
          <a href="#" className="flex items-center shrink-0">
            <img
              src="/new-semrush-logo.svg"
              alt="Semrush"
              width={130}
              height={18}
              className="h-[18px] w-auto"
            />
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Auth + Contact */}
        <div className="flex items-center gap-4">
          <a
            href="#login"
            className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors hidden sm:inline-block"
          >
            Log in
          </a>
          <a
            href="#contact-sales"
            className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors hidden sm:inline-block"
          >
            Contact Sales
          </a>
          <a
            href="#signup"
            className="text-sm font-semibold text-[var(--text-primary)] bg-[var(--purple-button)] hover:bg-[var(--purple-button-hover)] px-5 py-2.5 rounded-full transition-all"
          >
            Start for free
          </a>
        </div>
      </div>
    </header>
  );
}
