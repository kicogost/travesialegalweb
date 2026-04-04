import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Users, BookOpen, ChevronDown, MessageCircle } from 'lucide-react'
import { SERVICIOS_MENU } from '../data/servicios.js'

const topLinks = [
  { to: '/',         label: 'Inicio',   icon: Home,     end: true },
  { to: '/nosotros', label: 'Nosotros', icon: Users,    end: false },
  { to: '/blog',     label: 'Blog',     icon: BookOpen, end: false },
]

export default function Navbar({ pathname = '/' }) {
  const [scrolled, setScrolled]           = useState(false)
  const [menuOpen, setMenuOpen]           = useState(false)
  const [servicesOpen, setServicesOpen]   = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close dropdown on outside click or Escape
  useEffect(() => {
    if (!servicesOpen) return
    const onMouseDown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    const onKey = (e) => { if (e.key === 'Escape') setServicesOpen(false) }
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [servicesOpen])

  const onDark       = !scrolled
  const tubeColor    = onDark ? '#C8A96E' : '#0D1F3C'
  const pillBg       = onDark ? 'rgba(200,169,110,0.12)' : 'rgba(13,31,60,0.06)'
  const linkColor    = onDark ? 'rgba(255,255,255,0.75)' : 'var(--ink-mid)'
  const activeColor  = onDark ? '#C8A96E' : 'var(--navy)'
  const logoFilter   = onDark ? 'brightness(0) invert(1)' : 'none'

  const isServicesActive = pathname.startsWith('/servicios')

  const pillSpan = (
    <motion.span
      layoutId="tubelight-pill"
      style={{ position: 'absolute', inset: 0, borderRadius: '999px', background: pillBg, zIndex: 0 }}
      transition={{ type: 'spring', stiffness: 350, damping: 32 }}
    >
      <span style={{
        position: 'absolute', top: '-3px', left: '50%', transform: 'translateX(-50%)',
        width: '32px', height: '3px', borderRadius: '0 0 3px 3px', background: tubeColor, zIndex: 1,
      }}>
        <span style={{ position: 'absolute', width: '48px', height: '16px', borderRadius: '50%', background: onDark ? 'rgba(200,169,110,0.25)' : 'rgba(13,31,60,0.12)', filter: 'blur(6px)', top: '-6px', left: '-8px' }} />
        <span style={{ position: 'absolute', width: '32px', height: '12px', borderRadius: '50%', background: onDark ? 'rgba(200,169,110,0.2)' : 'rgba(13,31,60,0.1)', filter: 'blur(4px)', top: '-4px', left: '0' }} />
      </span>
    </motion.span>
  )

  return (
    <nav ref={dropdownRef} style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: 'var(--nav-height)',
      transition: 'background 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 1px 0 rgba(13,31,60,0.08)' : 'none',
    }}>
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img
            src="/brand_assets/TRAVESIA-LEGAL-web-transp-1920w.webp"
            alt="Travesía Legal"
            loading="eager"
            style={{ height: '36px', width: 'auto', filter: logoFilter, transition: 'filter 0.3s' }}
          />
        </a>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>

          {/* Inicio */}
          {(() => {
            const l = topLinks[0]
            const isActive = pathname === l.to
            return (
              <a key={l.to} href={l.to} style={{
                position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '8px 16px', borderRadius: '999px', fontFamily: 'var(--font-body)', fontSize: '14px',
                fontWeight: isActive ? '600' : '400', color: isActive ? activeColor : linkColor,
                textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = onDark ? 'white' : 'var(--navy)' }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = linkColor }}
              >
                {isActive && pillSpan}
                <span style={{ position: 'relative', zIndex: 1 }}>{l.label}</span>
              </a>
            )
          })()}

          {/* Servicios dropdown trigger */}
          <button
            onClick={() => setServicesOpen(v => !v)}
            aria-haspopup="true"
            aria-expanded={servicesOpen}
            style={{
              position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              gap: '4px', padding: '8px 16px', borderRadius: '999px',
              fontFamily: 'var(--font-body)', fontSize: '14px',
              fontWeight: isServicesActive ? '600' : '400',
              color: isServicesActive ? activeColor : linkColor,
              background: 'none', border: 'none', cursor: 'pointer',
              transition: 'color 0.2s', whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { if (!isServicesActive) e.currentTarget.style.color = onDark ? 'white' : 'var(--navy)' }}
            onMouseLeave={e => { if (!isServicesActive) e.currentTarget.style.color = isServicesActive ? activeColor : linkColor }}
          >
            {isServicesActive && pillSpan}
            <span style={{ position: 'relative', zIndex: 1 }}>Servicios</span>
            <ChevronDown size={13} strokeWidth={2} style={{ position: 'relative', zIndex: 1, transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'none' }} />
          </button>

          {/* Nosotros + Blog */}
          {topLinks.slice(1).map(l => {
            const isActive = pathname.startsWith(l.to)
            return (
              <a key={l.to} href={l.to} style={{
                position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '8px 16px', borderRadius: '999px', fontFamily: 'var(--font-body)', fontSize: '14px',
                fontWeight: isActive ? '600' : '400', color: isActive ? activeColor : linkColor,
                textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = onDark ? 'white' : 'var(--navy)' }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = linkColor }}
              >
                {isActive && pillSpan}
                <span style={{ position: 'relative', zIndex: 1 }}>{l.label}</span>
              </a>
            )
          })}
        </div>

        {/* CTA button */}
        <div className="nav-desktop">
          <a
            href="https://wa.me/34694269008"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--gold)', color: 'var(--navy)',
              fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: '600',
              padding: '9px 20px', borderRadius: 'var(--radius-sm)',
              textDecoration: 'none', transition: 'background 0.2s, color 0.2s',
              whiteSpace: 'nowrap', flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-dark)'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--navy)' }}
          >
            Consulta Gratuita
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none', flexDirection: 'column', gap: '5px' }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '2px',
              background: scrolled ? 'var(--navy)' : 'white', borderRadius: '2px',
              transition: 'transform 0.2s, opacity 0.2s',
              transform: menuOpen
                ? i === 0 ? 'translateY(7px) rotate(45deg)'
                : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                : 'scaleX(0)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Desktop mega-dropdown */}
      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            role="region"
            aria-label="Menú de servicios"
            className="nav-desktop"
            style={{
              position: 'absolute', top: 'var(--nav-height)', left: 0, right: 0,
              background: 'var(--white)', borderTop: '1px solid var(--border)',
              boxShadow: 'var(--shadow-xl)', padding: '36px 0 40px',
            }}
          >
            <div className="container" style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px',
            }}>
              {SERVICIOS_MENU.map(cat => (
                <div key={cat.slug}>
                  <a
                    href={`/servicios/${cat.slug}/`}
                    onClick={() => setServicesOpen(false)}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.15em',
                      textTransform: 'uppercase', color: 'var(--gold-dark)',
                      fontWeight: '600', marginBottom: '16px', textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--navy)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--gold-dark)'}
                  >
                    {cat.category}
                  </a>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {cat.items.map(item => (
                      <a
                        key={item.to}
                        href={item.to}
                        onClick={() => setServicesOpen(false)}
                        style={{
                          fontSize: '14px', color: 'var(--ink-mid)', padding: '6px 0',
                          textDecoration: 'none', lineHeight: 1.4,
                          transition: 'color 0.15s', display: 'block',
                          borderLeft: '2px solid transparent', paddingLeft: '0',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = 'var(--navy)'
                          e.currentTarget.style.borderLeftColor = 'var(--gold)'
                          e.currentTarget.style.paddingLeft = '8px'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = 'var(--ink-mid)'
                          e.currentTarget.style.borderLeftColor = 'transparent'
                          e.currentTarget.style.paddingLeft = '0'
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute', top: 'var(--nav-height)', left: 0, right: 0,
              background: 'var(--white)', borderTop: '1px solid var(--border)',
              padding: '12px 24px 20px', display: 'flex', flexDirection: 'column', gap: '2px',
              boxShadow: 'var(--shadow-lg)', maxHeight: '80vh', overflowY: 'auto',
            }}
          >
            {/* Inicio */}
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                fontFamily: 'var(--font-body)', fontSize: '15px',
                fontWeight: pathname === '/' ? '600' : '400',
                color: pathname === '/' ? 'var(--navy)' : 'var(--ink-mid)',
                textDecoration: 'none', padding: '13px 4px',
                borderBottom: '1px solid var(--border)',
                borderLeft: pathname === '/' ? '3px solid var(--gold)' : '3px solid transparent',
                paddingLeft: pathname === '/' ? '12px' : '4px',
              }}
            >
              <Home size={16} strokeWidth={pathname === '/' ? 2 : 1.5} />
              Inicio
            </a>

            {/* Servicios accordion */}
            <div style={{ borderBottom: '1px solid var(--border)' }}>
              <button
                onClick={() => setMobileServicesOpen(v => !v)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-body)', fontSize: '15px', padding: '13px 4px',
                  fontWeight: isServicesActive ? '600' : '400',
                  color: isServicesActive ? 'var(--navy)' : 'var(--ink-mid)',
                  borderLeft: isServicesActive ? '3px solid var(--gold)' : '3px solid transparent',
                  paddingLeft: isServicesActive ? '12px' : '4px',
                  textAlign: 'left',
                }}
              >
                <span>Servicios</span>
                <ChevronDown size={16} strokeWidth={1.5} style={{ transition: 'transform 0.2s', transform: mobileServicesOpen ? 'rotate(180deg)' : 'none' }} />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22 }}
                    style={{ overflow: 'hidden', background: 'var(--off-white)', borderRadius: 'var(--radius-md)', marginBottom: '8px' }}
                  >
                    <div style={{ padding: '12px 16px 16px' }}>
                      {SERVICIOS_MENU.map(cat => (
                        <div key={cat.slug} style={{ marginBottom: '20px' }}>
                          <a
                            href={`/servicios/${cat.slug}/`}
                            onClick={() => { setMenuOpen(false); setMobileServicesOpen(false) }}
                            style={{
                              display: 'block',
                              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.15em',
                              textTransform: 'uppercase', color: 'var(--gold-dark)',
                              fontWeight: '600', marginBottom: '8px', textDecoration: 'none',
                            }}
                          >
                            {cat.category}
                          </a>
                          {cat.items.map(item => (
                            <a
                              key={item.to}
                              href={item.to}
                              onClick={() => { setMenuOpen(false); setMobileServicesOpen(false) }}
                              style={{
                                display: 'block', fontSize: '14px', color: 'var(--ink-mid)',
                                padding: '7px 0', textDecoration: 'none', borderBottom: '1px solid var(--border)',
                              }}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Nosotros + Blog */}
            {topLinks.slice(1).map(l => {
              const Icon = l.icon
              const isActive = pathname.startsWith(l.to)
              return (
                <a key={l.to} href={l.to} onClick={() => setMenuOpen(false)} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  fontFamily: 'var(--font-body)', fontSize: '15px',
                  fontWeight: isActive ? '600' : '400',
                  color: isActive ? 'var(--navy)' : 'var(--ink-mid)',
                  textDecoration: 'none', padding: '13px 4px',
                  borderBottom: '1px solid var(--border)',
                  borderLeft: isActive ? '3px solid var(--gold)' : '3px solid transparent',
                  paddingLeft: isActive ? '12px' : '4px',
                }}>
                  <Icon size={16} strokeWidth={isActive ? 2 : 1.5} />
                  {l.label}
                </a>
              )
            })}

            <a
              href="https://wa.me/34694269008"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: '12px', background: 'var(--gold)', color: 'var(--navy)',
                textAlign: 'center', padding: '13px', borderRadius: 'var(--radius-md)',
                fontWeight: '600', fontSize: '14px', textDecoration: 'none', display: 'block',
              }}
            >
              Consulta Gratuita
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
