import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowRight,
  BookOpen,
  Compass,
  GraduationCap,
  HeartHandshake,
  Languages,
  Scale,
  ScrollText,
  Sparkles,
  Star,
} from 'lucide-react'
import type { ReactNode } from 'react'

export const Route = createFileRoute('/courses')({
  component: CoursesPage,
})

const HIFTH_INCLUDES = [
  {
    icon: Sparkles,
    title: 'Qur’an Reading & Tajweed',
    body: 'Learning to read the Qur’an correctly and beautifully, with Tajweed correction in every lesson.',
  },
  {
    icon: Compass,
    title: 'Islamic Studies',
    body: 'Essential knowledge of the deen, covering Fiqh, Aqeedah, and the adab of the Prophet ﷺ, taught at a pace suited to each student.',
  },
]

const AALIMIYA_SUBJECTS = [
  { icon: Languages, label: 'Arabic' },
  { icon: ScrollText, label: 'Hadith' },
  { icon: BookOpen, label: 'Tafseer' },
  { icon: Scale, label: 'Fiqh & Usul al-Fiqh' },
  { icon: HeartHandshake, label: 'Adab & Suluk (Tasawwuf)' },
  { icon: Star, label: 'Aqeedah' },
]

// Gold highlight used for days, times and start dates
function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-[var(--gold-400)] px-1.5 py-0.5 font-semibold text-[var(--navy-950)] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
      {children}
    </span>
  )
}

function Detail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="text-[var(--cream-100)]/55">{label}</dt>
      <dd className="mt-1.5 text-white">{children}</dd>
    </div>
  )
}

const goldButton =
  'inline-flex items-center gap-2 rounded-full bg-[var(--gold-500)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-950)] transition-transform hover:scale-[1.03] hover:bg-[var(--gold-400)]'

function CoursesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[var(--navy-950)] py-20 md:py-28">
        <div className="pattern-lattice absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold-400)]">
            What We Teach
          </p>
          <h1 className="font-display animate-fade-up delay-1 mt-5 text-4xl font-semibold text-white text-balance md:text-5xl">
            Our Courses
          </h1>
          <p className="animate-fade-up delay-2 mx-auto mt-5 max-w-2xl leading-relaxed text-[var(--cream-100)]/70">
            From memorising the Qur&rsquo;an to learning the fundamentals of the deen, every course is taught in
            small groups with personal attention.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        {/* Hifth Programme */}
        <div className="pattern-arch-repeat relative overflow-hidden rounded-[2rem] bg-[var(--navy-900)] p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold-400)]/15">
                <BookOpen size={22} className="text-[var(--gold-400)]" strokeWidth={2} />
              </div>
              <h2 className="font-display mt-6 text-3xl font-semibold text-white md:text-4xl">Hifth Programme</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-[var(--cream-100)]/75">
                Full memorisation of the Qur&rsquo;an under our huffadh teachers, built on a daily routine of new
                lessons, revision, and dhor so that what is learnt stays learnt.
              </p>
              <Link to="/contact" className={`mt-8 ${goldButton}`}>
                Enquire About Hifth
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
            <dl className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm">
              <Detail label="Who it’s for">
                Males only
                <br />
                Students must already be able to recite the Qur&rsquo;an
              </Detail>
              <Detail label="When">
                <span className="flex flex-col items-start gap-1.5">
                  <Highlight>Monday &ndash; Thursday, 7:30am &ndash; Asr</Highlight>
                  <Highlight>Friday, 7:30am &ndash; Jumuah</Highlight>
                </span>
              </Detail>
              <Detail label="Teacher">Haafith Mogammad Qa-eed Roberts</Detail>
              <Detail label="Fees">R1,000 per month</Detail>
            </dl>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold-400)]">Including</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {HIFTH_INCLUDES.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--gold-400)]/15">
                    <item.icon size={20} className="text-[var(--gold-400)]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--cream-100)]/70">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pre Al-‘Aalimiya Course */}
        <div className="pattern-arch-repeat relative mt-8 overflow-hidden rounded-[2rem] bg-[var(--navy-900)] p-8 md:p-12">
          <span className="inline-flex rounded-full bg-[var(--gold-500)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--navy-950)]">
            2027 Admissions Now Open
          </span>
          <div className="mt-7 grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold-400)]/15">
                <GraduationCap size={22} className="text-[var(--gold-400)]" strokeWidth={2} />
              </div>
              <h2 className="font-display mt-6 text-3xl font-semibold text-white md:text-4xl">
                Pre Al-&lsquo;Aalimiya Course
              </h2>
              <p className="mt-2 font-semibold text-[var(--gold-400)]">
                One-year part-time course &middot; Begin your journey of sacred knowledge
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-[var(--cream-100)]/75">
                This course sets a strong foundation for Al-&lsquo;Aalimiya studies and provides a good insight into
                the subjects taught, all taught by qualified Ulama.
              </p>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold-400)]">
                Subjects include
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {AALIMIYA_SUBJECTS.map((subject) => (
                  <div
                    key={subject.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--gold-400)]/15">
                      <subject.icon size={17} className="text-[var(--gold-400)]" strokeWidth={2} />
                    </span>
                    <span className="text-sm font-semibold leading-tight text-white">{subject.label}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className={`mt-9 ${goldButton}`}>
                Enquire About Pre Al-&lsquo;Aalimiya
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              <dl className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm">
                <Detail label="Who it’s for">Brothers and sisters, aged 16+</Detail>
                <Detail label="When">
                  <Highlight>Monday &ndash; Thursday, evening classes</Highlight>
                </Detail>
                <Detail label="Starts">
                  <Highlight>13 January 2027</Highlight>
                </Detail>
                <Detail label="Duration">One year, part-time</Detail>
              </dl>
              <p className="px-2 text-sm leading-relaxed text-[var(--cream-100)]/60">
                Under the spiritual guidance and academic leadership of Hazrat Syed Muhammad Jilani Ashraf and Hazrat
                Syed Muhammad Husaini Ashraf.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
