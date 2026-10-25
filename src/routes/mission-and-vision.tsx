import { createFileRoute } from '@tanstack/react-router'
import { Compass, Target, Star } from 'lucide-react'

export const Route = createFileRoute('/mission-and-vision')({
  component: MissionPage,
})

const VALUES = [
  {
    title: 'Sincerity (Ikhlas)',
    body: 'Memorisation is taught as an act of worship first, an achievement second.',
  },
  {
    title: 'Discipline',
    body: 'Consistent daily routines of new lessons, revision, and dhor build lasting retention.',
  },
  {
    title: 'Compassion',
    body: 'Firm standards, delivered with patience suited to every talib’s pace and personality.',
  },
  {
    title: 'Community',
    body: 'Parents and teachers work as partners in a talib’s hifth journey, not separately.',
  },
]

function MissionPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[var(--navy-950)] py-20 md:py-28">
        <div className="pattern-lattice absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold-400)]">
            Why We Exist
          </p>
          <h1 className="font-display animate-fade-up delay-1 mt-5 text-4xl font-semibold text-white text-balance md:text-5xl">
            Mission &amp; Vision
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[var(--navy-900)]/10 bg-white p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold-400)]/20">
              <Target size={22} className="text-[var(--gold-600)]" strokeWidth={2} />
            </div>
            <h2 className="font-display mt-6 text-2xl font-semibold text-[var(--navy-900)]">
              Our Mission
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--navy-900)]/70">
              To guide every talib entrusted to us through a complete,
              accurate, and lasting memorisation of the Qur&rsquo;an, taught
              with correct tajweed and rooted in sound Islamic character.
              We aim to make hifth accessible to the families of Plumstead
              and greater Cape Town through structured daily teaching,
              individual attention, and an environment where the
              Qur&rsquo;an is loved, not merely learned.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[var(--navy-900)]/10 bg-white p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold-400)]/20">
              <Compass size={22} className="text-[var(--gold-600)]" strokeWidth={2} />
            </div>
            <h2 className="font-display mt-6 text-2xl font-semibold text-[var(--navy-900)]">
              Our Vision
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--navy-900)]/70">
              To grow into a trusted centre of Islamic learning in Cape
              Town &mdash; one that produces huffadh who carry the
              Qur&rsquo;an with confidence into their families and
              communities, and one that, in time, expands beyond hifth into
              a fuller programme of Islamic sciences.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream-100)] py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-600)]">
              What Guides Us
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-[var(--navy-900)] md:text-4xl">
              The values behind every lesson.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 rounded-2xl border border-[var(--navy-900)]/10 bg-white p-6"
              >
                <Star size={20} className="mt-1 flex-shrink-0 text-[var(--gold-500)]" strokeWidth={2} />
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--navy-900)]">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--navy-900)]/65">
                    {value.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
