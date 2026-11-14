import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen, Phone, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState, type ReactNode } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

// Gold marker highlight that sweeps across once it scrolls into view
function Highlight({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setOn(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true)
          observer.disconnect()
        }
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <mark
      ref={ref}
      className={`rounded-[0.55em] bg-transparent bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)] bg-no-repeat px-[0.8em] py-[0.45em] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] transition-[background-size,color] duration-[900ms] ease-out motion-reduce:transition-none ${
        on ? 'bg-[length:100%_100%] text-[var(--navy-950)]' : 'bg-[length:0%_100%] text-[var(--gold-400)]'
      }`}
    >
      {children}
    </mark>
  )
}

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--navy-950)]">
        <div className="pattern-lattice absolute inset-0 opacity-30" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[var(--gold-500)]/10 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[var(--navy-600)]/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-32 pt-20 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pb-40 md:pt-28">
          <div>
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold-400)]">
              Jamia Sufiya &middot; Cape Town
            </p>
            <h1 className="font-display animate-fade-up delay-1 mt-5 text-4xl font-semibold leading-[1.08] text-white text-balance md:text-6xl">
              An Islamic institute rooted in tasawwuf.
            </h1>
            <p className="animate-fade-up delay-2 mt-6 max-w-lg text-base leading-relaxed text-[var(--cream-100)]/75 md:text-lg">
              Seek sacred knowledge through structured learning grounded in authentic scholarship, spirituality and
              tradition.
            </p>
            <div className="animate-fade-up delay-3 mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--gold-500)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-950)] transition-transform hover:scale-[1.03] hover:bg-[var(--gold-400)]"
              >
                Apply Now
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                About Us
              </Link>
            </div>
          </div>

          <div className="animate-fade-up delay-2 relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-gradient-to-br from-[var(--gold-500)]/25 to-transparent" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
              <img
                src="/images/logo.png"
                alt="Jamia Sufiya Cape Town crest: a navy and gold shield with a globe, bearing the motto Love, Struggle, Faith"
                className="mx-auto h-52 w-52 object-contain drop-shadow-2xl md:h-64 md:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we offer: two cards overlapping the bottom of the hero */}
      <section className="relative mx-auto -mt-20 max-w-6xl px-5 md:-mt-24 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[var(--navy-900)]/10 bg-white p-8 shadow-xl shadow-[var(--navy-900)]/5 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--navy-900)]">
              <BookOpen size={22} className="text-[var(--gold-400)]" strokeWidth={2} />
            </div>
            <h2 className="font-display mt-6 text-2xl font-semibold text-[var(--navy-900)]">Authentic Scholarship</h2>
            <p className="mt-3 leading-relaxed text-[var(--navy-900)]/70">
              Learn from qualified scholars through structured curricula rooted in classical Islamic sciences and
              tasawwuf.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[var(--navy-900)]/10 bg-white p-8 shadow-xl shadow-[var(--navy-900)]/5 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--navy-900)]">
              <Sparkles size={22} className="text-[var(--gold-400)]" strokeWidth={2} />
            </div>
            <h2 className="font-display mt-6 text-2xl font-semibold text-[var(--navy-900)]">Spiritual Development</h2>
            <p className="mt-3 leading-relaxed text-[var(--navy-900)]/70">
              Our programmes focus on inner purification, character building and strengthening your connection with
              Allah.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mt-20 bg-[var(--cream-100)] py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-600)]">Why We Exist</p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-[var(--navy-900)] md:text-4xl">Our Mission</h2>
            <p className="mt-5 leading-relaxed text-[var(--navy-900)]/70">
              Jamia Sufiya Cape Town exists to revive and spread the authentic teachings of Tasawwuf (Islamic
              Spirituality) in a structured, accessible and contemporary manner.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy-800)] transition-colors hover:text-[var(--gold-600)]"
            >
              Read more about us
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
          <div className="pattern-arch-repeat relative overflow-hidden rounded-[2rem] bg-[var(--navy-900)]">
            <div className="flex flex-col items-center gap-6 px-8 py-14 text-center md:px-12 md:py-16">
              <img src="/images/logo.png" alt="" className="h-20 w-20 object-contain opacity-90" />
              <p className="font-display text-2xl font-semibold italic leading-snug text-white text-balance md:text-3xl">
                We aim to nurture knowledgeable Muslims who embody sincerity, moral excellence and devotion to Allah.
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-400)]">Our Aim</p>
            </div>
          </div>
        </div>
      </section>

      {/* Begin Your Journey */}
      <section className="mx-auto max-w-6xl px-5 pt-20 md:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--navy-950)] px-6 py-16 text-center md:px-16 md:py-24">
          <div className="pattern-lattice absolute inset-0 opacity-30" />
          <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--gold-500)]/20 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase leading-[2.4] tracking-[0.18em] md:text-sm">
              <Highlight>Take the first step towards sacred knowledge and spiritual growth</Highlight>
            </p>
            <h2 className="font-display mt-7 text-4xl font-semibold text-white md:text-6xl">Begin Your Journey</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--cream-100)]/75 md:text-lg">
              Apply today and become part of a learning tradition rooted in faith, scholarship and Tasawwuf.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--gold-500)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-950)] transition-transform hover:scale-[1.03] hover:bg-[var(--gold-400)]"
              >
                Apply Now
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <a
                href="tel:+27707545786"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--cream-100)]/80 transition-colors hover:text-white"
              >
                <Phone size={16} className="text-[var(--gold-400)]" />
                or call +27 70 754 5786
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
