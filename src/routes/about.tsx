import { createFileRoute } from '@tanstack/react-router'
import { BookOpen, Clock, Compass, Layers, Sparkles, Star, Target } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const STRIVE_TO = [
  'Preserve traditional Islamic scholarship',
  'Cultivate sincerity, humility and moral excellence',
  'Provide reliable religious education for modern life',
  'Connect students with authentic chains of knowledge and spirituality',
]

const FOUNDATION_SPREADS = [
  'Islamic spirituality (Tasawwuf)',
  'Compassion and service to humanity',
  'Moral excellence and righteous character',
  'Love for the Sunnah and sacred tradition',
]

const APPROACH = [
  { icon: BookOpen, title: 'Classical Islamic sciences' },
  { icon: Sparkles, title: 'Spiritual development and self-purification' },
  { icon: Layers, title: 'Structured curricula with clear progression' },
]

function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[var(--navy-950)] py-20 md:py-28">
        <div className="pattern-lattice absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold-400)]">
            Who We Are
          </p>
          <h1 className="font-display animate-fade-up delay-1 mt-5 text-4xl font-semibold text-white text-balance md:text-5xl">
            About Us
          </h1>
        </div>
      </section>

      {/* About + Vision & Mission */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <h2 className="font-display text-3xl font-semibold text-[var(--navy-900)] text-balance md:text-4xl">
            About Jamia Sufiya Cape Town
          </h2>
          <p className="text-lg leading-relaxed text-[var(--navy-900)]/75 md:text-xl">
            Jamia Sufiya Cape Town is an institute dedicated to nurturing spiritually grounded, knowledgeable Muslims
            through authentic Islamic scholarship rooted in Tasawwuf. We provide structured, accessible and
            contemporary Islamic education while remaining firmly connected to the classical traditions of learning
            and spiritual refinement.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[var(--navy-900)]/10 bg-white p-8 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold-400)]/20">
              <Compass size={22} className="text-[var(--gold-600)]" strokeWidth={2} />
            </div>
            <h2 className="font-display mt-6 text-2xl font-semibold text-[var(--navy-900)]">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-[var(--navy-900)]/70">
              Our vision is to revive the true spirit of Islamic spirituality by combining sacred knowledge with inner
              purification, character development and devotion to Allah. Jamia Sufiya Cape Town aims to make
              traditional Islamic learning accessible to students through a reliable platform, structured learning and
              a state-of-the-art facility.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[var(--navy-900)]/10 bg-white p-8 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold-400)]/20">
              <Target size={22} className="text-[var(--gold-600)]" strokeWidth={2} />
            </div>
            <h2 className="font-display mt-6 text-2xl font-semibold text-[var(--navy-900)]">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-[var(--navy-900)]/70">
              Jamia Sufiya Cape Town exists to revive and spread the authentic teachings of Tasawwuf (Islamic
              Spirituality) in a structured, accessible and contemporary manner.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--navy-900)]/70">We strive to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-[var(--navy-900)]/70 marker:text-[var(--gold-500)]">
              {STRIVE_TO.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Spiritual Foundation */}
      <section className="bg-[var(--cream-100)] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-14 md:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-600)]">Our Roots</p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-[var(--navy-900)] md:text-4xl">
              Our Spiritual Foundation
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--navy-900)]/70">The foundation was established to spread:</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {FOUNDATION_SPREADS.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-[var(--navy-900)]/10 bg-white p-5">
                  <Star size={18} className="mt-0.5 flex-shrink-0 text-[var(--gold-500)]" strokeWidth={2} />
                  <p className="text-sm font-semibold text-[var(--navy-900)]">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-[var(--navy-900)]/70">
              This spiritual lineage continues to guide Jamia Sufiya&rsquo;s teachings and methodology.
            </p>
          </div>

          <div className="pattern-arch-repeat relative overflow-hidden rounded-[2rem] bg-[var(--navy-900)] px-8 py-12 text-center md:order-first md:px-10 md:py-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-400)]">Established in</p>
            <p className="font-display mt-3 text-7xl font-semibold text-white md:text-8xl">1992</p>
            <div className="mx-auto my-8 h-px w-16 bg-[var(--gold-500)]/60" />
            <p className="text-sm text-[var(--cream-100)]/60">by</p>
            <p className="font-display mt-2 text-xl font-semibold italic leading-snug text-white text-balance md:text-2xl">
              Sheikh-e-Tariqat Hazrat Allama Syed Muhammad Jilani Ashraf, Kichhauchhvi
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach to Learning */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-600)]">How We Teach</p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-[var(--navy-900)] md:text-4xl">
            Our Approach to Learning
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--navy-900)]/65">
            Jamia Sufiya Cape Town follows a balanced approach that combines:
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {APPROACH.map((item) => (
            <div key={item.title} className="rounded-3xl border border-[var(--navy-900)]/10 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--navy-900)]">
                <item.icon size={22} className="text-[var(--gold-400)]" strokeWidth={2} />
              </div>
              <h3 className="font-display mt-6 text-xl font-semibold text-[var(--navy-900)]">{item.title}</h3>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-start gap-4 rounded-2xl bg-[var(--gold-400)]/15 p-6 md:items-center">
          <Clock size={22} className="mt-0.5 flex-shrink-0 text-[var(--gold-600)] md:mt-0" strokeWidth={2} />
          <p className="leading-relaxed text-[var(--navy-900)]">
            Our programmes are designed to suit students balancing education, family and professional
            responsibilities.
          </p>
        </div>
      </section>
    </div>
  )
}
