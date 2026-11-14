import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/our-team')({
  component: TeamPage,
})

const FOUNDERS = [
  {
    name: 'Hazrat Syed Muhammad Jilani Ashraf',
    titles: 'Sheikh-e-Tariqat · Raees-ul-Tahreer',
    role: 'Founder of the Spiritual Foundation & Jamia Sufiya Worldwide',
    image: '/images/His Emmenance Syed Muhammad Jilani Ashrafi.png',
    summary:
      'An internationally acclaimed Islamic scholar, master of Sufism and prolific author from the Khānwādah-e-Ashrafiyyah of Kichhauchha Sharif. He established the Spiritual Foundation in 1992 and founded the Jamia Sufiya network, which has grown from Kichhauchha Sharif to Leicester and Cape Town. Through his 7-volume Kashf-ul-Quloob and more than 60 spiritual retreats, he has made classical Tasawwuf practical for modern minds.',
  },
  {
    name: 'Hazrat Syed Muhammad Husaini Ashraf',
    titles: 'Khatib-ul-‘Arifeen · Shaykh-ul-Sulook Wal-Salikeen',
    role: 'Chairman & Global Head, Spiritual Foundation & Jamia Sufiya Worldwide',
    image: '/images/His Emmenance Syen Hussayni Ashrafi.png',
    summary:
      'The son and spiritual successor of Sheikh-e-Tariqat, carrying forward the lineage of Ghaus-e-Azam Shaykh Abdul Qadir Jilani. Trained in the classical Dars-e-Nizami and in Western academia, he is known worldwide for his English and Urdu lectures on Tasawwuf, Aqeedah and Seerah. He played a pivotal role in launching Jamia Sufiya Cape Town in 2026.',
  },
]

const TEAM = [
  {
    name: 'Sheikh Zaheer Adams Al-Azhari',
    roles: ['Campus Principal, Jamia Sufiya Cape Town', 'Educator (Usul-ul-Fiqh)'],
    image: '/images/Moulana Zaheer.png',
    credentials:
      'Graduate of Al-Azhar University, Faculty of Islamic Jurisprudence and International Law, Cairo, Egypt. Graduate of UWC, Honours Degree in Arabic (currently pursuing his Master’s degree after recently submitting his Master’s thesis), Faculty of Arts and Humanities, CPT, South Africa. Current Imaam and Educator at Masjiedun-Nur, Parkwood, CPT.',
    bio: 'His profound knowledge and compassionate guidance empower students to excel in their study of Uloom. With a commitment to nurturing a love for learning and his vast experience in leadership and education, he plays a pivotal role in the management of the Cape Town Campus.',
  },
  {
    name: 'Moulana Ishtiyaaq Parker',
    roles: ['Management (Support)'],
    image: '/images/Moulana Ishtiyaaq Parker.png',
    credentials:
      'Graduate (BA Comparative Studies) of the International Islamic University, Islamabad, Pakistan. Trustee of the Spiritual Foundation Cape Town Trust, Founder & Principal of Jam’iatul-Mustafa and the current Imam and Chairman of Masjidus-Salaam, Goodwood, CPT.',
    bio: 'Moulana has spent many years abroad, completing his Hifth at Jamia Razviya, Rawalpindi and thereafter furthered his Islamic Sciences Education in Pakistan. This, together with his extensive experience in Islamic Studies education, leadership, community service and serving as Imaam in various communities for decades, Moulana adds priceless value to our team and with his wisdom and guidance plays a vital supportive role in our leadership.',
  },
  {
    name: 'Sheikh Masood Soeker Al-Azhari',
    roles: ['Educator (Arabic & Tafseer)'],
    image: '/images/Sheikh Masood Soeker Al-Azhari.png',
    credentials:
      'Graduate of Al-Azhar University, Faculty of Usul al-Din (Islamic Theology), Cairo, Egypt. Current Imaam and Vice Chairman of Masjidus-Salaam, Goodwood.',
    bio: 'Starting from humble beginnings, Sheikh Masood has strived with tremendous effort to complete his Hifth and continued to complete his extensive studies abroad, dedicating his final years to specialising in Tafseer. He previously served on the Goodwood Islamic Society, where he was actively involved in youth development and is also a senior educator at Jam’iatul Mustafa. Sheikh Masood is currently pursuing his Master’s Degree in Arabic at UWC, South Africa.',
  },
  {
    name: 'Sheikh Mogammad Ameen Abdorooft Al-Madani',
    roles: ['Educator (Arabic)'],
    image: '/images/Haafith Mohammad Ameen Abdooroft.png',
    credentials:
      'Graduate of the Islamic University of Madinah, Faculty of Arabic Language, Saudi Arabia. Graduate of UWC, Honours Degree in Arabic (currently pursuing his Master’s degree after recently submitting his Master’s thesis), Faculty of Arts and Humanities, CPT, South Africa.',
    bio: 'After completing his Hifth in 2007, Sheikh continued to further his Islamic Studies, spending 2 years in Egypt after which he travelled to Madina and graduated at the Islamic University of Madinah in 2019. He then spent a further 2 years studying at the Department of Qur’aanic Affairs in CPT. Sheikh is currently serving as an Imaam and educator at the Mogammadeyyah Masjid in Lansdowne (CPT) as well as an educator at Masjiedun-Nur in Parkwood, CPT, and an educator at the Shaykh Abadi Institute at the Auwal Masjid, Dorp St, CPT. Sheikh is also a sworn translator of Arabic and English at the High Court of South Africa.',
  },
  {
    name: 'Sheikh Sulayman Jansen Al-Azhari',
    roles: ['Educator (Aqeeda & Tawhid)'],
    image: '/images/Haafith Sulaiman Jansen.png',
    credentials: 'Graduate of Al-Azhar University, Faculty of Usul al-Din (Islamic Theology), Cairo, Egypt.',
    bio: 'Sheikh Sulayman boasts a long-standing journey in Islamic Studies and education. Having completed his Hifth in 2001 and returning from Al-Azhar University in 2011, he further strived in the faculties of Spiritual Care, Group Psychotherapy training, as well as a post graduate certificate in Education at the University of South Africa. Sheikh Sulayman has served as imam and social worker for many years and has accumulated vast educating experience at primary, secondary and tertiary levels. Sheikh is currently teaching Islamic Studies & Arabic at the Al-Azhar High School.',
  },
  {
    name: 'Haafith Mogammad Qa-eed Roberts',
    roles: ['Educator (Hifth)'],
    image: '/images/Haafith Mogammad Qa-eed Roberts.png',
    credentials: 'Fajr Centre for Arabic, Arabic Language Studies, Cairo, Egypt.',
    bio: 'Completed his hifth in 2017 gaining Ijaza in Hafs (science of the recitation of the Quran), Tuhfatul Atfaal (basic pronunciation science) and Al Jazariyah (complex pronunciation science). After completing his secular education, he served as a hifth teacher, before travelling abroad to further his Islamic Studies in Cairo. Upon his return in 2024, he served as the Head Tamat Quran Teacher at the Marifa Institute in Pretoria. Haafith Roberts is a dedicated Quran and Hifth teacher with a proven ability to develop strong memorisation, precise tajweed (pronunciation) and confident recitation.',
  },
]

function TeamPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[var(--navy-950)] py-20 md:py-28">
        <div className="pattern-lattice absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold-400)]">
            Our Leadership
          </p>
          <h1 className="font-display animate-fade-up delay-1 mt-5 text-4xl font-semibold text-white text-balance md:text-5xl">
            Our Team
          </h1>
          <p className="animate-fade-up delay-2 mt-5 leading-relaxed text-[var(--cream-100)]/70">
            A small, dedicated team committed to giving every talib the personal attention that hifth demands.
          </p>
        </div>
      </section>

      {/* Founders: short summaries, full biographies on the Our Founders page */}
      <section className="mx-auto max-w-6xl px-5 pt-20 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-600)]">
            The Luminaries of Kichhauchha Sharif
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-[var(--navy-900)] md:text-4xl">Our Founders</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {FOUNDERS.map((founder) => (
            <article
              key={founder.name}
              className="pattern-arch-repeat relative flex flex-col overflow-hidden rounded-[2rem] bg-[var(--navy-900)] p-8 md:p-10"
            >
              <div className="flex items-center gap-5">
                <img
                  src={encodeURI(founder.image)}
                  alt={founder.name}
                  className="h-28 w-28 flex-shrink-0 object-contain md:h-32 md:w-32"
                />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--gold-400)]">
                    {founder.titles}
                  </p>
                  <h3 className="font-display mt-1.5 text-xl font-semibold leading-snug text-white md:text-2xl">
                    {founder.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--cream-100)]/70">{founder.role}</p>
                </div>
              </div>
              <p className="mt-6 flex-1 leading-relaxed text-[var(--cream-100)]/85">{founder.summary}</p>
              <Link
                to="/our-founders"
                className="mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-[var(--gold-400)] transition-colors hover:text-white"
              >
                Read full biography
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Cape Town team */}
      <section className="mt-20 bg-[var(--cream-100)] py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-600)]">Cape Town Campus</p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-[var(--navy-900)] md:text-4xl">
              Our Educators &amp; Management
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {TEAM.map((member) => (
              <article
                key={member.name}
                className="flex flex-col rounded-[2rem] border border-[var(--navy-900)]/10 bg-white p-8"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={encodeURI(member.image)}
                    alt={member.name}
                    className="h-28 w-28 flex-shrink-0 object-contain md:h-32 md:w-32"
                  />
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-snug text-[var(--navy-900)]">
                      {member.name}
                    </h3>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {member.roles.map((role) => (
                        <span
                          key={role}
                          className="rounded-full bg-[var(--gold-400)]/20 px-3 py-1 text-xs font-semibold text-[var(--navy-900)]"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm font-semibold leading-relaxed text-[var(--navy-900)]">
                  {member.credentials}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--navy-900)]/70">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
