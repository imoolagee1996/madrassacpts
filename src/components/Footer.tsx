import { Link } from '@tanstack/react-router'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const ADDRESS = '7 Delaney Road, Plumstead, Cape Town, 7801'
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

export function MapEmbed({ className = '' }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-3xl border-4 border-[var(--navy-900)]/10 shadow-lg ${className}`}>
      <iframe
        title="Jamia Sufiya Cape Town location on Google Maps"
        src={MAPS_EMBED_SRC}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 320, display: 'block' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-[var(--navy-950)] text-[var(--cream-100)]">
      <div className="pattern-lattice absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Jamia Sufiya Cape Town crest" className="h-14 w-14 object-contain" />
              <div>
                <div className="font-display text-xl font-semibold text-white">Jamia Sufiya</div>
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--gold-400)] font-semibold">Cape Town</div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--cream-100)]/70">
              A hifth-focused madrassa in Plumstead, dedicated to raising huffadh
              rooted in love, struggle, and faith.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-[var(--gold-400)]">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/" className="text-[var(--cream-100)]/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/mission-and-vision" className="text-[var(--cream-100)]/80 hover:text-white transition-colors">Mission &amp; Vision</Link></li>
              <li><Link to="/leadership" className="text-[var(--cream-100)]/80 hover:text-white transition-colors">Our Leadership</Link></li>
              <li><Link to="/contact" className="text-[var(--cream-100)]/80 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-[var(--gold-400)]">
              Visit Us
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-[var(--cream-100)]/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[var(--gold-400)]" />
                <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {ADDRESS}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-[var(--gold-400)]" />
                <a href="tel:+27 70 754 5786" className="hover:text-white transition-colors">+27 70 754 5786</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-[var(--gold-400)]" />
                <a href="jamiasufiyacapetown@gmail.com" className="hover:text-white transition-colors">jamiasufiyacapetown@gmail.com</a>
              </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="mt-0.5 flex-shrink-0 text-[var(--gold-400)]" />
              <div>
                <p>Monday &ndash; Thursday, 7:30am &ndash; Asr</p>
                <p>Friday &ndash; Jumuah</p>
              </div>
            </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[var(--cream-100)]/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Jamia Sufiya Cape Town. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">Love &bull; Struggle &bull; Faith</p>
        </div>
      </div>
    </footer>
  )
}
