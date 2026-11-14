import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

// Pages listed under the "Our Leadership" dropdown
const LEADERSHIP = [
  { to: '/our-founders', label: 'Our Founders' },
  { to: '/our-team', label: 'Our Team' },
] as const

// Pages listed after the dropdown
const MORE_PAGES = [
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
] as const

const desktopLink =
  'py-1 text-sm font-semibold text-[var(--navy-900)] transition-colors hover:text-[var(--gold-600)] data-[status=active]:text-[var(--gold-600)]'

const mobileLink =
  'block rounded-xl px-4 py-3 text-base font-medium text-[var(--navy-900)] hover:bg-[var(--gold-400)]/15 data-[status=active]:bg-[var(--gold-400)]/20 data-[status=active]:font-semibold'

function LeadershipDropdown({ active, pathname }: { active: boolean; pathname: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close when the page changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Close when clicking anywhere else on the page
  useEffect(() => {
    if (!open) return
    function onDocumentClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocumentClick)
    return () => document.removeEventListener('mousedown', onDocumentClick)
  }, [open])

  return (
    <div
      ref={ref}
      className="relative"
      onPointerEnter={(e) => e.pointerType === 'mouse' && setOpen(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setOpen(false)}
      onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false)
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex cursor-pointer items-center gap-1 py-1 text-sm font-semibold transition-colors hover:text-[var(--gold-600)] ${
          active || open ? 'text-[var(--gold-600)]' : 'text-[var(--navy-900)]'
        }`}
      >
        Our Leadership
        <ChevronDown
          size={16}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-1 opacity-0'
        }`}
      >
        <div className="rounded-2xl border border-[var(--navy-900)]/10 bg-white p-2 shadow-xl shadow-[var(--navy-900)]/10">
          {LEADERSHIP.map((page) => (
            <Link
              key={page.to}
              to={page.to}
              activeOptions={{ exact: true }}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-semibold text-[var(--navy-900)] transition-colors hover:bg-[var(--gold-400)]/15 hover:text-[var(--gold-600)] data-[status=active]:bg-[var(--gold-400)]/20 data-[status=active]:text-[var(--gold-600)]"
            >
              {page.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const inLeadership = LEADERSHIP.some((page) => page.to === pathname)

  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileLeadershipOpen, setMobileLeadershipOpen] = useState(inLeadership)

  // Close the mobile menu when the page changes
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  function toggleMobileMenu() {
    // When opening, expand "Our Leadership" if you're on one of its pages
    if (!mobileOpen) setMobileLeadershipOpen(inLeadership)
    setMobileOpen(!mobileOpen)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--navy-900)]/10 bg-[var(--cream-50)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Jamia Sufiya Cape Town crest"
            className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105 md:h-14 md:w-14"
          />
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold tracking-tight text-[var(--navy-900)] md:text-xl">
              Jamia Sufiya
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-600)] md:text-xs">
              Cape Town
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          <Link to="/" activeOptions={{ exact: true }} className={desktopLink}>
            Home
          </Link>
          <LeadershipDropdown active={inLeadership} pathname={pathname} />
          {MORE_PAGES.map((page) => (
            <Link key={page.to} to={page.to} activeOptions={{ exact: true }} className={desktopLink}>
              {page.label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger toggle */}
        <button
          className="rounded-full p-2 text-[var(--navy-900)] lg:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="animate-fade-up border-t border-[var(--navy-900)]/10 bg-[var(--cream-50)] px-5 pb-5 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            <li>
              <Link to="/" activeOptions={{ exact: true }} onClick={() => setMobileOpen(false)} className={mobileLink}>
                Home
              </Link>
            </li>

            <li>
              <button
                type="button"
                aria-expanded={mobileLeadershipOpen}
                onClick={() => setMobileLeadershipOpen((v) => !v)}
                className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-left text-base text-[var(--navy-900)] hover:bg-[var(--gold-400)]/15 ${
                  inLeadership ? 'font-semibold' : 'font-medium'
                }`}
              >
                Our Leadership
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${mobileLeadershipOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileLeadershipOpen && (
                <ul className="ml-6 mt-1 flex flex-col gap-1 border-l-2 border-[var(--gold-400)]/50 pl-3">
                  {LEADERSHIP.map((page) => (
                    <li key={page.to}>
                      <Link
                        to={page.to}
                        activeOptions={{ exact: true }}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-4 py-2.5 text-[15px] font-medium text-[var(--navy-900)]/80 hover:bg-[var(--gold-400)]/15 data-[status=active]:bg-[var(--gold-400)]/20 data-[status=active]:font-semibold data-[status=active]:text-[var(--navy-900)]"
                      >
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {MORE_PAGES.map((page) => (
              <li key={page.to}>
                <Link
                  to={page.to}
                  activeOptions={{ exact: true }}
                  onClick={() => setMobileOpen(false)}
                  className={mobileLink}
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
