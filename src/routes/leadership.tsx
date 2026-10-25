import { createFileRoute } from '@tanstack/react-router'
import { GraduationCap } from 'lucide-react'

export const Route = createFileRoute('/leadership')({
  component: LeadershipPage,
})

const TEAM = [
  {
    name: 'Moulana Yusuf Qasmi',
    role: 'Founder & Head Ustadh',
    bio: 'Oversees the hifth curriculum and leads daily dhor sessions, drawing on over a decade of teaching experience at madaris in Cape Town and Karachi.',
  },
  {
    name: 'Ustadh Ridwaan Adams',
    role: 'Hifth Instructor',
    bio: 'Guides new memorisation and tajweed correction for junior huffadh, with a focus on building strong foundations in the early stages.',
  },
  {
    name: 'Ustadha Fatima Bawa',
    role: 'Girls’ Programme Coordinator',
    bio: 'Coordinates the girls’ hifth classes and liaises with parents on progress, attendance, and revision at home.',
  },
  {
    name: 'Br. Ismail Petersen',
    role: 'Operations & Admissions',
    bio: 'Manages enrolment, day-to-day administration, and is usually the first point of contact for prospective families.',
  },
]

function LeadershipPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[var(--navy-950)] py-20 md:py-28">
        <div className="pattern-lattice absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold-400)]">
            The People Behind The Programme
          </p>
          <h1 className="font-display animate-fade-up delay-1 mt-5 text-4xl font-semibold text-white text-balance md:text-5xl">
            Meet Our Leadership Team
          </h1>
          <p className="animate-fade-up delay-2 mt-5 text-[var(--cream-100)]/70 leading-relaxed">
            A small, dedicated team committed to giving every talib the
            personal attention that hifth demands.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className={`group relative overflow-hidden rounded-[2rem] border border-[var(--navy-900)]/10 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--navy-900)]/5 ${
                i % 2 === 1 ? 'sm:mt-8' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-[var(--navy-900)]">
                  <GraduationCap size={26} className="text-[var(--gold-400)]" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-[var(--navy-900)]">
                    {member.name}
                  </h2>
                  <p className="text-sm font-semibold text-[var(--gold-600)]">{member.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[var(--navy-900)]/65">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
