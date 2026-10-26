import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const PAGES = [
  { to: '/', label: 'Home' },
  { to: '/mission-and-vision', label: 'Mission & Vision' },
  { to: '/leadership', label: 'Our Leadership' },
  { to: '/contact', label: 'Contact Us' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--navy-900)]/10 bg-[var(--cream-50)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo.png"
            alt="Jamia Sufiya Cape Town crest"
            className="h-12 w-12 md:h-14 md:w-14 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="leading-tight">
            <div className="font-display text-lg md:text-xl font-semibold text-[var(--navy-900)] tracking-tight">
              Jamia Sufiya
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[var(--gold-600)] font-semibold">
              Cape Town
            </div>
          </div>
        </Link>

        {/* Desktop nav: links listed across the top */}
        <nav className="hidden lg:flex items-center gap-8">
          {PAGES.map((page) => (
            <Link
              key={page.to}
              to={page.to}
              activeOptions={{ exact: true }}
              className="border-b-2 border-transparent py-1 text-sm font-semibold text-[var(--navy-900)] transition-colors hover:text-[var(--gold-600)]"
              activeProps={{
                className:
                  'border-b-2 border-[var(--gold-500)] py-1 text-sm font-semibold text-[var(--gold-600)]',
              }}
            >
              {page.label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger toggle */}
        <button
          className="lg:hidden rounded-full p-2 text-[var(--navy-900)]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--navy-900)]/10 bg-[var(--cream-50)] px-5 pb-5 pt-2 animate-fade-up">
          <ul className="flex flex-col gap-1">
            {PAGES.map((page) => (
              <li key={page.to}>
                <Link
                  to={page.to}
                  onClick={() => setMobileOpen(false)}
                  activeOptions={{ exact: true }}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-[var(--navy-900)] hover:bg-[var(--gold-400)]/15"
                  activeProps={{
                    className:
                      'block rounded-xl px-4 py-3 text-base font-semibold bg-[var(--gold-400)]/20',
                  }}
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
