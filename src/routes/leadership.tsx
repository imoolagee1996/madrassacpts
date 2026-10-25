import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/leadership')({
  component: LeadershipPage,
})

const TEAM = [
  {
    name: 'His Eminence Syed Muhammad Jilani Ashrafi',
    role: 'Founder of Spiritual Foundation and Jamia Sufia World Wide',
    bio: 'Placeholder xxxx',
    image: '/images/His Emmenance Syed Muhammad Jilani Ashrafi.png',
  },
  {
    name: 'His Eminence Syed Hussayni Mia Ashrafi',
    role: 'Son of Syed Muhammad Jilani - Founder Jamia Sufiya Cape Town',
    bio: 'Placeholder xxxx',
    image: '/images/His Emmenance Syen Hussayni Ashrafi.png',
  },
  {
    name: 'Sheikh Moegamat Zaheer Adams',
    role: 'HOD - Jamia Sufia Cape Town',
    bio: 'Placeholder xxxxx',
    image: '/images/Moulana Zaheer.png',
  },
  {
    name: 'Haafith Mohammad Ameen Abdooroft',
    role: 'Hifth Teacher',
    bio: 'Placeholder xxxxx',
    image: '/images/Haafith Mohammad Ameen Abdooroft.png',
  },
  {
    name: 'Haafith Sulaiman Jansen',
    role: 'Hifth Teacher',
    bio: 'Placeholder xxxxx',
    image: '/images/Haafith Sulaiman Jansen.png',
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

      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
        {/* Single column: one member per row */}
        <div className="flex flex-col gap-6">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-[2rem] border border-[var(--navy-900)]/10 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--navy-900)]/5"
            >
              <div className="flex items-center gap-5">
                <img
                  src={encodeURI(member.image)}
                  alt={member.name}
                  className="h-20 w-20 flex-shrink-0 rounded-2xl object-cover md:h-24 md:w-24"
                />
                <div>
                  <h2 className="font-display text-xl font-semibold text-[var(--navy-900)]">
                    {member.name}
                  </h2>
                  <p className="text-sm font-semibold text-[var(--gold-600)]">
                    {member.role}
                  </p>
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
