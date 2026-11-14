import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'

export const Route = createFileRoute('/our-founders')({
  component: FoundersPage,
})

const PHOTOS = {
  jilani: '/images/His Emmenance Syed Muhammad Jilani Ashrafi.png',
  husaini: '/images/His Emmenance Syen Hussayni Ashrafi.png',
}

const LINEAGE = [
  { name: 'The Prophet Muhammad ﷺ' },
  { name: 'Ghaus-e-Azam Shaykh Abdul Qadir Jilani', note: 'Baghdad Sharif' },
  { name: 'Khānwādah-e-Ashrafiyyah', note: 'House of Sultan Syed Makhdoom Ashraf Jahangir Simnani' },
  { name: 'Muhaddith-e-Azam-e-Hind Syed Muhammad Ashraf', note: 'Grandfather' },
  { name: 'Majzoob-e-Ilaahi Syed Muhaamid Ashraf', note: 'Father' },
]

type Item = { title: string; body: string; kicker?: string }

const JILANI_STUDIES: Item[] = [
  {
    title: 'Primary & Foundational Studies',
    body: 'Began his education at Jamia Ashrafiya in Kichhauchha Sharif under the personal supervision of his grandfather, followed by enrollment at Arabic Madarsa Jahangir Ganj.',
  },
  {
    title: 'Dars-e-Nizami (Aalimiya Degree)',
    body: 'Completed the traditional multi-year curriculum at the prestigious Jamia Ashrafia Mubarakpur, graduating with top honors at the age of 18.',
  },
  {
    title: 'Advanced Rational Sciences (Ma‘qulat)',
    body: 'Pursued higher specialization in philosophy, logic, and dialectics at Jamia Arabia (Sultanpur), where his extraordinary mastery led to his immediate appointment as a teacher.',
  },
  {
    title: 'Spiritual Authorization (Khilafah)',
    body: 'Received complete Khilafah and Ijazah across all major Sufi Orders (Silsilas) from his Murshid, Sarkar-e-Kalan Sayyid Mukhtar Ashraf.',
  },
]

const JILANI_WRITING: Item[] = [
  {
    title: 'Spiritual Publications',
    body: 'Founded Spiritual Publications, an influential printing house through which hundreds of classical works by noble Sufi masters—including Shaykh Abdul Qadir Jilani and Imam Al-Ghazali—were published and rendered into English.',
  },
  {
    title: 'Kashf-ul-Quloob (7 Volumes)',
    body: 'Authored a crowning 7-volume masterwork on Tasawwuf, structured to render classical spiritual self-purification logical and practical for modern minds.',
  },
  {
    title: 'Al-Mizan & Landmark 1976 Research',
    body: 'Served as Chief Editor of the monthly journal al-Mizan (1974–1987), publishing the landmark research issue on Imam Ahmed Raza Khan in 1976.',
  },
]

const JILANI_INSTITUTIONS: Item[] = [
  {
    kicker: '1968',
    title: 'Bhiwandi Islamic Institute',
    body: 'Founded an educational complex in Maharashtra, India, producing thousands of scholars (Ulama) and Quran memorizers (Huffaz).',
  },
  {
    kicker: '1992',
    title: 'The Spiritual Foundation',
    body: 'Established an apex global organization in India, extending to the UK, Canada, Portugal, and South Africa (Lenasia, Pretoria, Cape Town).',
  },
  {
    kicker: '12/12/12',
    title: 'Jamia Sufiya Network',
    body: 'Founded the world’s first dedicated Sufi Educational Institute in Kichhauchha Sharif, expanding to Leicester, UK (2013) and Cape Town, South Africa (2026).',
  },
  {
    kicker: '60+',
    title: '24-Hour Spiritual Retreats',
    body: 'Conducted over 60 intensive 24-hour spiritual training camps globally, focused on Muraqaba, Muhasaba, and inner purification.',
  },
]

const HUSAINI_STUDIES: Item[] = [
  { title: 'Early Education', body: 'Attended the prestigious Amtuls Public School in Nainital, India.' },
  {
    title: 'Classical Dars-e-Nizami',
    body: 'Completed classical Islamic studies at Hijaz College (Nuneaton, UK) starting in 1997, under luminaries including Mufti Sharfuddin Ashrafi, Mufti Yusuf Naqshbandi, and Shaykh Muzaffar al-Azhari.',
  },
  {
    title: 'Higher Western Academia',
    body: 'Earned a BA (Hons) in Islamic Studies from the University of Birmingham and an MA in Islamic Studies from the Markfield Institute of Higher Education (MIHE), accredited by the University of Gloucestershire.',
  },
  {
    title: 'Arabic Language Immersion',
    body: 'Completed specialization in Classical Arabic (Fuṣḥā) in Cairo, Egypt, concluding formal studies in 2013.',
  },
  {
    title: 'Ijazat in Hadith & Traditional Sciences',
    body: 'Holds formal authorization (Ijazah) in Hadith transmission from leading global authorities including Allama Abdul Mubeen N‘umani, Mufti Nur-ul-Din Ahmed Nuri, Allama Ahmad Ali Sikandari, and Allama Sayyid Ali bin Ali Husaini al-Shafi.',
  },
  {
    title: 'Spiritual Transmission',
    body: 'Received full Ijazah and Khilafah in all Sufi Orders directly from his father and Murshid.',
  },
]

const HUSAINI_LEADERSHIP: Item[] = [
  {
    title: 'Global Preacher',
    body: 'Renowned worldwide for dynamic English and Urdu lectures on Tasawwuf, Aqeedah, and Seerah, commanding a massive international presence in person and on social media.',
  },
  {
    title: 'Sufi Publications Translation Project',
    body: 'Heads Sufi Publications, actively overseeing the translation of hundreds of classical Urdu works into English, spanning Quranic exegesis (Tafseer), Hadith, theology, and biographies.',
  },
  {
    title: '1976 al-Mizan English Release',
    body: 'Spearheading the first complete English translation of the 1976 al-Mizan issue on Imam Ahmed Raza Khan, set for publication in 2027.',
  },
  {
    title: 'Global Expansion of Jamia Sufiya',
    body: 'Played a pivotal role alongside his father in establishing Jamia Sufiya Leicester, UK (2013) and launching Jamia Sufiya Cape Town, South Africa (2026).',
  },
]

const HUSAINI_HUMANITARIAN: Item[] = [
  {
    kicker: '2025',
    title: 'Leicester Food Bank Service',
    body: 'Founded a community food bank via the Spiritual Foundation in Leicester, UK, which has supplied emergency rations to thousands of families.',
  },
  {
    kicker: 'Daily',
    title: 'Soup Kitchen (Langar)',
    body: 'Initiated a daily soup kitchen at Jamia Sufiya (Kichhauchha Sharif), serving free meals to people of all faiths and backgrounds in the true spirit of Sufi hospitality.',
  },
  {
    kicker: 'Weekly',
    title: 'Al-Sohba Fellowship Gatherings',
    body: 'Leads weekly and monthly spiritual assemblies in Leicester and across UK cities, focusing on Dhikr, ethics, and character building.',
  },
  {
    kicker: '24 hrs',
    title: 'Spiritual Training Retreats',
    body: 'Continues his father’s signature 24-hour spiritual training retreat camps globally.',
  },
]

/* ---------- Building blocks ---------- */

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display mt-14 flex items-center gap-3 text-2xl font-semibold text-[var(--navy-900)]">
      <span className="h-px w-8 flex-shrink-0 bg-[var(--gold-500)]" />
      {children}
    </h3>
  )
}

function Cards({ items, columns = 2 }: { items: Item[]; columns?: 1 | 2 }) {
  return (
    <div className={`mt-6 grid gap-4 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}>
      {items.map((item) => (
        <div key={item.title} className="rounded-2xl border border-[var(--navy-900)]/10 bg-white p-6">
          {item.kicker && (
            <p className="font-display mb-2 text-3xl font-semibold text-[var(--gold-600)]">{item.kicker}</p>
          )}
          <h4 className="font-display text-lg font-semibold text-[var(--navy-900)]">{item.title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-[var(--navy-900)]/70">{item.body}</p>
        </div>
      ))}
    </div>
  )
}

function Portrait({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="md:sticky md:top-28">
      <div className="pattern-arch-repeat relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[var(--navy-900)]">
        <img src={encodeURI(src)} alt={alt} className="absolute inset-0 h-full w-full object-contain object-center p-5" />
      </div>
      <figcaption className="mt-4 text-center text-sm font-semibold text-[var(--gold-600)]">{caption}</figcaption>
    </figure>
  )
}

function Titles({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase leading-relaxed tracking-[0.22em] text-[var(--gold-600)]">
      {children}
    </p>
  )
}

function Name({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-[var(--navy-900)] text-balance md:text-5xl">
      {children}
    </h2>
  )
}

function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="font-display mt-6 text-xl italic leading-relaxed text-[var(--navy-900)]/80 md:text-2xl">
      &ldquo;{children}&rdquo;
    </blockquote>
  )
}

function scrollToSection(id: string) {
  const target = document.getElementById(id)
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
}

const strong = 'font-semibold text-[var(--navy-900)]'

/* ---------- Page ---------- */

function FoundersPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[var(--navy-950)] py-20 md:py-28">
        <div className="pattern-lattice absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold-400)]">
            The Luminaries of Kichhauchha Sharif
          </p>
          <h1 className="font-display animate-fade-up delay-1 mt-5 text-4xl font-semibold text-white text-balance md:text-5xl">
            Our Founders
          </h1>
          <p className="animate-fade-up delay-2 mx-auto mt-5 max-w-2xl leading-relaxed text-[var(--cream-100)]/70 text-balance">
            A Grand Biographical Record of Sheikh-e-Tariqat Hazrat Syed Muhammad Jilani Ashraf &amp; Hazrat Syed
            Muhammad Husaini Ashraf
          </p>
          <div className="animate-fade-up delay-3 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToSection('founder-jilani')}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Syed Muhammad Jilani Ashraf
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('founder-husaini')}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Syed Muhammad Husaini Ashraf
            </button>
          </div>
        </div>
      </section>

      {/* ===== I. Hazrat Syed Muhammad Jilani Ashraf ===== */}
      <section id="founder-jilani" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-14">
          <div>
            <Portrait
              src={PHOTOS.jilani}
              alt="Hazrat Syed Muhammad Jilani Ashraf"
              caption="Founder of the Spiritual Foundation & Jamia Sufiya Worldwide"
            />
          </div>

          <div>
            <Titles>Sheikh-e-Tariqat &middot; Raees-ul-Tahreer &middot; Master of the Sufi Way</Titles>
            <Name>Hazrat Syed Muhammad Jilani Ashraf</Name>
            <Quote>
              A titan of Sunni-Sufi intellect, bridging the ancient spiritual seat of Kichhauchha Sharif with global
              educational reforms for over half a century.
            </Quote>

            <SectionHeading>Executive Profile &amp; Noble Ancestry</SectionHeading>
            <p className="mt-5 leading-relaxed text-[var(--navy-900)]/75">
              Hazrat Syed Muhammad Jilani Ashraf is an internationally acclaimed Islamic scholar, master of Sufism,
              prolific author, and institutional founder. Referred to universally by scholars as{' '}
              <strong className={strong}>Sheikh-e-Tariqat</strong> (Master of the Sufi Way) and{' '}
              <strong className={strong}>Raees-ul-Tahreer</strong> (Chief Writer / Master of Writings), he stands as
              one of the most respected authorities on Sunni-Sufi theology, spiritual purification, and classical
              Islamic literature in the modern era.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--navy-900)]/75">
              He belongs to a direct lineage of Sadat (descendants of the Prophet Muhammad ﷺ tracing through
              Ghaus-e-Azam Shaykh Abdul Qadir Jilani) and belongs to the illustrious Khānwādah-e-Ashrafiyyah, the
              noble family and spiritual seat of Sultan Syed Makhdoom Ashraf Jahangir Simnani in Kichhauchha Sharif.
            </p>

            <div className="pattern-arch-repeat mt-8 rounded-[2rem] bg-[var(--navy-900)] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold-400)]">Noble Lineage</p>
              <ol className="relative mt-7 space-y-6 border-l border-[var(--gold-500)]/40 pl-6">
                {LINEAGE.map((person) => (
                  <li key={person.name} className="relative">
                    <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-[var(--gold-400)]/70 ring-4 ring-[var(--navy-900)]" />
                    <p className="font-display text-lg font-semibold text-white">{person.name}</p>
                    {person.note && <p className="mt-0.5 text-sm text-[var(--cream-100)]/60">{person.note}</p>}
                  </li>
                ))}
                <li className="relative">
                  <span className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full bg-[var(--gold-400)] ring-4 ring-[var(--navy-900)]" />
                  <p className="font-display text-xl font-semibold text-[var(--gold-400)]">
                    Hazrat Syed Muhammad Jilani Ashraf
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--cream-100)]/70">Sheikh-e-Tariqat &amp; Raees-ul-Tahreer</p>
                </li>
              </ol>
            </div>

            <SectionHeading>Scholastic Development &amp; Academic Mastery</SectionHeading>
            <p className="mt-5 leading-relaxed text-[var(--navy-900)]/75">
              His academic foundation was laid under the direct tutelage of the greatest minds of the Indian
              subcontinent, completing his higher studies at a remarkably young age.
            </p>
            <Cards items={JILANI_STUDIES} />

            <SectionHeading>Literary Achievements &amp; Spiritual Publications</SectionHeading>
            <p className="mt-5 leading-relaxed text-[var(--navy-900)]/75">
              As Raees-ul-Tahreer, his literary output spans thousands of articles, research papers, and books.
            </p>
            <Cards items={JILANI_WRITING} columns={1} />

            <SectionHeading>Institutional Network &amp; Global Impact</SectionHeading>
            <Cards items={JILANI_INSTITUTIONS} />
          </div>
        </div>
      </section>

      {/* ===== II. Hazrat Syed Muhammad Husaini Ashraf ===== */}
      <section id="founder-husaini" className="scroll-mt-24 bg-[var(--cream-100)] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.75fr_1.25fr] md:gap-14 md:px-8">
          <div>
            <Portrait
              src={PHOTOS.husaini}
              alt="Hazrat Syed Muhammad Husaini Ashraf"
              caption="Chairman & Global Head, Spiritual Foundation & Jamia Sufiya Worldwide"
            />
          </div>

          <div>
            <Titles>Khatib-ul-&lsquo;Arifeen &middot; Shaykh-ul-Sulook Wal-Salikeen &middot; Chairman &amp; Global Head</Titles>
            <Name>Hazrat Syed Muhammad Husaini Ashraf</Name>
            <Quote>
              The shining young star of Khānwādah-e-Ashrafiyyah—bridging classical Islamic erudition with contemporary
              Western academia, global humanitarianism, and powerful international public speaking.
            </Quote>

            <SectionHeading>Executive Profile &amp; Noble Ancestry</SectionHeading>
            <p className="mt-5 leading-relaxed text-[var(--navy-900)]/75">
              Hazrat Syed Muhammad Husaini Ashraf is a distinguished Syed, a shining young star of the Ashrafi Clan
              (Khānwādah-e-Ashrafiyyah), and the noble son and spiritual successor of Sheikh-e-Tariqat Hazrat Syed
              Muhammad Jilani Ashraf. Carrying forward a sacred ancestral lineage that traces back through Ghaus-e-Azam
              Shaykh Abdul Qadir Jilani to the Prophet Muhammad ﷺ, he represents the contemporary vanguard of global
              Islamic leadership.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--navy-900)]/75">
              Serving as the Chairman and Head of the Spiritual Foundation and Jamia Sufiya Worldwide, he is globally
              revered by scholars as <strong className={strong}>Khatib-ul-&lsquo;Arifeen</strong> (Orator of the
              Gnostics) for his brilliant public speaking, and as{' '}
              <strong className={strong}>Shaykh-ul-Sulook Wal-Salikeen</strong> (Guide of the Spiritual Path and
              Wayfarers) for his leadership in Sufi path guidance.
            </p>

            <SectionHeading>Academic Credentials &amp; Scholastic Mastery</SectionHeading>
            <Cards items={HUSAINI_STUDIES} />

            <SectionHeading>Leadership, Oratory &amp; Sufi Publications</SectionHeading>
            <Cards items={HUSAINI_LEADERSHIP} />

            <SectionHeading>Humanitarian Work &amp; Community Building</SectionHeading>
            <Cards items={HUSAINI_HUMANITARIAN} />
          </div>
        </div>
      </section>
    </div>
  )
}
