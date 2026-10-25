import { createFileRoute, Link } from '@tanstack/react-router'
import { BookOpen, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react'
import { MapEmbed } from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const PILLARS = [
  {
    icon: HeartHandshake,
    title: 'Love',
    body: 'Every student is nurtured with warmth, patience, and individual attention as they grow in their love for Allah, His Messenger ﷺ, and the Qur’an.',
  },
  {
    icon: Sparkles,
    title: 'Struggle',
    body: 'Learning the deen takes steady, daily effort. We walk alongside each student through the practice, revision, and perseverance it demands.',
  },
  {
    icon: BookOpen,
    title: 'Faith',
    body: 'Islamic knowledge is not just something to learn but something to live. It shapes character, conviction, and the way our students move through the world.',
  },
]

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--navy-950)]">
        <div className="pattern-lattice absolute inset-0 opacity-30" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[var(--gold-500)]/10 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[var(--navy-600)]/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-28">
          <div>
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold-400)]">
              Plumstead &middot; Cape Town
            </p>
            <h1 className="font-display animate-fade-up delay-1 mt-5 text-4xl font-semibold leading-[1.08] text-white text-balance md:text-6xl">
              Nurturing hearts and minds with the light of Islam.
            </h1>
            <p className="animate-fade-up delay-2 mt-6 max-w-lg text-base leading-relaxed text-[var(--cream-100)]/75 md:text-lg">
              Jamia Sufiya Cape Town is a madrassa in Plumstead dedicated to
              teaching our children the Qur&rsquo;an, the deen, and the
              character of the Prophet &#65018;, guided by love, struggle, and
              faith.
            </p>
            <div className="animate-fade-up delay-3 mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--gold-500)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-950)] transition-transform hover:scale-[1.03] hover:bg-[var(--gold-400)]"
              >
                Enquire About Enrolment
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link
                to="/mission-and-vision"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Our Mission &amp; Vision
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

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-[var(--navy-900)] md:text-4xl">
            Three words on the crest, one way of life.
          </h2>
          <p className="mt-4 text-[var(--navy-900)]/65 leading-relaxed">
            Our motto is not decoration &mdash; it is the framework for how we
            teach, and the standard by which every student is supported.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`group relative overflow-hidden rounded-3xl border border-[var(--navy-900)]/10 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--navy-900)]/5 ${
                i === 1 ? 'md:mt-6' : ''
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--navy-900)]">
                <pillar.icon size={22} className="text-[var(--gold-400)]" strokeWidth={2} />
              </div>
              <h3 className="font-display mt-6 text-xl font-semibold text-[var(--navy-900)]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--navy-900)]/65">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Programme focus */}
      <section className="bg-[var(--cream-100)] py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-600)]">
              Our Focus
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-[var(--navy-900)] md:text-4xl">
              A madrassa education, taught with care.
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--navy-900)]/70">
              At Jamia Sufiya Cape Town, students receive a well-rounded
              Islamic education built on the Qur&rsquo;an and the fundamentals
              of the deen. Small classes and personal attention help every
              student learn with confidence, understanding, and adab.
            </p>
            <ul className="mt-7 space-y-4 text-sm text-[var(--navy-900)]/75">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--gold-500)]" />
                Qur&rsquo;an reading with Tajweed correction in every lesson
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--gold-500)]" />
                Essential Islamic knowledge, Fiqh and Aqeedah
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--gold-500)]" />
                Learning at a pace suited to each student&rsquo;s age and ability
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[var(--navy-900)] pattern-arch-repeat">
              <div className="flex h-full flex-col items-center justify-center gap-6 p-10 text-center">
                <img src="/images/logo.png" alt="" className="h-28 w-28 object-contain opacity-90" />
                <p className="font-display text-2xl font-semibold text-white text-balance">
                  &ldquo;The best among you are those who learn the Qur&rsquo;an and teach it.&rdquo;
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-400)]">
                  Prophet Muhammad &#65018;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location teaser */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-600)]">
              Find Us
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-[var(--navy-900)] md:text-4xl">
              Based in the heart of Plumstead.
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--navy-900)]/70">
              5 Palatine Rd, Plumstead, Cape Town, 7801. Come visit, ask
              questions, and see the classrooms where our students learn and
              grow.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy-800)] hover:text-[var(--gold-600)] transition-colors"
            >
              Get directions &amp; contact details
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
          <MapEmbed className="aspect-[4/3] w-full" />
        </div>
      </section>
    </div>
  )
}
