import { Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const PAGES = [
  { to: '/', label: 'Home' },
  { to: '/mission-and-vision', label: 'Mission & Vision' },
  { to: '/leadership', label: 'Our Leadership' },
  { to: '/contact', label: 'Contact Us' },
]

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

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

        {/* Desktop nav with dropdown */}
        <nav className="hidden md:flex items-center gap-1">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-[var(--navy-900)] hover:bg-[var(--navy-900)]/5 transition-colors"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Pages
              <ChevronDown
                size={16}
                strokeWidth={2.5}
                className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-[var(--navy-900)]/10 bg-white shadow-xl shadow-[var(--navy-950)]/10 animate-fade-up">
                <div className="h-1 w-full bg-gradient-to-r from-[var(--navy-800)] via-[var(--gold-500)] to-[var(--navy-800)]" />
                <ul className="py-2">
                  {PAGES.map((page) => (
                    <li key={page.to}>
                      <Link
                        to={page.to}
                        onClick={() => setDropdownOpen(false)}
                        activeOptions={{ exact: true }}
                        className="block px-5 py-3 text-sm font-medium text-[var(--navy-900)] hover:bg-[var(--gold-400)]/15 hover:text-[var(--navy-800)] transition-colors"
                        activeProps={{
                          className:
                            'block px-5 py-3 text-sm font-semibold bg-[var(--gold-400)]/20 text-[var(--navy-800)]',
                        }}
                      >
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden rounded-full p-2 text-[var(--navy-900)]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--navy-900)]/10 bg-[var(--cream-50)] px-5 pb-5 pt-2 animate-fade-up">
          <ul className="flex flex-col gap-1">
            {PAGES.map((page) => (
              <li key={page.to}>
                <Link
                  to={page.to}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-[var(--navy-900)] hover:bg-[var(--gold-400)]/15"
                  activeProps={{
                    className: 'block rounded-xl px-4 py-3 text-base font-semibold bg-[var(--gold-400)]/20',
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
