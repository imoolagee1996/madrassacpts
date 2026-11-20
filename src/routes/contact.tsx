import { createFileRoute } from '@tanstack/react-router'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { MapEmbed } from '@/components/Footer'
import { useState, type FormEvent } from 'react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

const ADDRESS = '7 Delaney Rd, Plumstead, Cape Town, 7801'
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`
const EMAIL = 'jamiasufiyacapetown@gmail.com'

// Paste your Formspree form address between the quotes, e.g. 'https://formspree.io/f/abcdwxyz'.
// While it's empty, the form opens the visitor's email app with their message filled in instead.
const FORMSPREE_ENDPOINT = ''

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(false)
    const formData = new FormData(e.currentTarget)

    // No Formspree address yet: open the visitor's email app with the message filled in
    if (!FORMSPREE_ENDPOINT) {
      const subject = `Website enquiry from ${formData.get('name')}`
      const body = [
        `Name: ${formData.get('name')}`,
        `Phone: ${formData.get('phone') || '-'}`,
        `Email: ${formData.get('email')}`,
        '',
        `${formData.get('message')}`,
      ].join('\n')
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      return
    }

    setSending(true)
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      if (!response.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-[var(--navy-950)] py-20 md:py-28">
        <div className="pattern-lattice absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold-400)]">
            We&rsquo;d Love To Hear From You
          </p>
          <h1 className="font-display animate-fade-up delay-1 mt-5 text-4xl font-semibold text-white text-balance md:text-5xl">
            Contact Jamia Sufiya Cape Town
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <div className="rounded-2xl border border-[var(--navy-900)]/10 bg-white p-6">
              <div className="flex gap-4">
                <MapPin size={22} className="mt-0.5 flex-shrink-0 text-[var(--gold-600)]" strokeWidth={2} />
                <div>
                  <h3 className="font-display font-semibold text-[var(--navy-900)]">Address</h3>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-sm text-[var(--navy-900)]/70 transition-colors hover:text-[var(--gold-600)]"
                  >
                    {ADDRESS}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--navy-900)]/10 bg-white p-6">
              <div className="flex gap-4">
                <Phone size={22} className="mt-0.5 flex-shrink-0 text-[var(--gold-600)]" strokeWidth={2} />
                <div>
                  <h3 className="font-display font-semibold text-[var(--navy-900)]">Phone</h3>
                  <a
                    href="tel:+27707545786"
                    className="mt-1 block text-sm text-[var(--navy-900)]/70 transition-colors hover:text-[var(--gold-600)]"
                  >
                    +27 70 754 5786
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--navy-900)]/10 bg-white p-6">
              <div className="flex gap-4">
                <Mail size={22} className="mt-0.5 flex-shrink-0 text-[var(--gold-600)]" strokeWidth={2} />
                <div>
                  <h3 className="font-display font-semibold text-[var(--navy-900)]">Email</h3>
                  <a
                    href="mailto:jamiasufiyacapetown@gmail.com"
                    className="mt-1 block break-all text-sm text-[var(--navy-900)]/70 transition-colors hover:text-[var(--gold-600)]"
                  >
                    jamiasufiyacapetown@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--navy-900)]/10 bg-white p-6">
              <div className="flex gap-4">
                <Clock size={22} className="mt-0.5 flex-shrink-0 text-[var(--gold-600)]" strokeWidth={2} />
                <div>
                  <h3 className="font-display font-semibold text-[var(--navy-900)]">Hours</h3>
                  <p className="mt-1 text-sm text-[var(--navy-900)]/70">
                    Monday &ndash; Thursday, 7:30am &ndash; Asr
                    <br />
                    Friday &ndash; Jumuah
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--navy-900)]/10 bg-white p-8 md:p-10">
            <h2 className="font-display text-2xl font-semibold text-[var(--navy-900)]">Send Us a Message</h2>
            <p className="mt-2 text-sm text-[var(--navy-900)]/60">
              Enquiring about enrolment or just have a question? Fill in the form below.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-[var(--gold-400)]/15 p-6 text-sm text-[var(--navy-900)]">
                Thank you &mdash; your message has been sent. We will be in touch shortly, insha&rsquo;Allah.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <input type="hidden" name="_subject" value="New enquiry from the Jamia Sufiya website" />
                {/* Spam trap: hidden from people, filled in only by bots */}
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

                {error && (
                  <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-700">
                    Something went wrong sending your message. Please try again, or reach us directly by phone or
                    email.
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wide text-[var(--navy-900)]/60"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-2 w-full rounded-xl border border-[var(--navy-900)]/15 bg-[var(--cream-50)] px-4 py-3 text-sm text-[var(--navy-900)] outline-none transition-colors focus:border-[var(--gold-500)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold uppercase tracking-wide text-[var(--navy-900)]/60"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="mt-2 w-full rounded-xl border border-[var(--navy-900)]/15 bg-[var(--cream-50)] px-4 py-3 text-sm text-[var(--navy-900)] outline-none transition-colors focus:border-[var(--gold-500)]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-wide text-[var(--navy-900)]/60"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-[var(--navy-900)]/15 bg-[var(--cream-50)] px-4 py-3 text-sm text-[var(--navy-900)] outline-none transition-colors focus:border-[var(--gold-500)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wide text-[var(--navy-900)]/60"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-[var(--navy-900)]/15 bg-[var(--cream-50)] px-4 py-3 text-sm text-[var(--navy-900)] outline-none transition-colors focus:border-[var(--gold-500)]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--navy-900)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--navy-800)] disabled:opacity-60"
                >
                  {sending ? 'Sending…' : 'Send Message'}
                  <Send size={16} strokeWidth={2.5} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="font-display mb-6 text-2xl font-semibold text-[var(--navy-900)]">Find Us on the Map</h2>
          <MapEmbed className="h-[420px] w-full" />
        </div>
      </section>
    </div>
  )
}
