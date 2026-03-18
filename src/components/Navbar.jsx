import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Globe, Briefcase, BarChart2, Users, BookOpen } from 'lucide-react'

const links = [
  { to: '/',                                    label: 'Inicio',     icon: Home,      end: true },
  { to: '/servicios/extranjeria-y-nacionalidad', label: 'Extranjería', icon: Globe,    end: false },
  { to: '/servicios/asesoramiento-laboral',      label: 'Laboral',    icon: Briefcase, end: false },
  { to: '/servicios/gestion-fiscal-contable',    label: 'Fiscal',     icon: BarChart2, end: false },
  { to: '/nosotros',                             label: 'Nosotros',   icon: Users,     end: false },
  { to: '/blog',                                 label: 'Blog',       icon: BookOpen,  end: false },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Derive active tab from current path
  const activeLink = links.find(l =>
    l.end ? location.pathname === l.to : location.pathname.startsWith(l.to)
  ) || links[0]

  const onDark = !scrolled
  // Tubelight accent colours adapt to background
  const tubeColor   = onDark ? '#C8A96E' : '#0D1F3C'   // gold on dark, navy on light
  const pillBg      = onDark ? 'rgba(200,169,110,0.12)' : 'rgba(13,31,60,0.06)'
  const linkColor   = onDark ? 'rgba(255,255,255,0.75)' : 'var(--ink-mid)'
  const activeColor = onDark ? '#C8A96E' : 'var(--navy)'
  const logoFilter  = onDark ? 'brightness(0) invert(1)' : 'none'

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      height: 'var(--nav-height)',
      transition: 'background 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 1px 0 rgba(13,31,60,0.08)' : 'none',
    }}>
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img
            src="/brand_assets/TRAVESIA-LEGAL-web-transp-1920w.webp"
            alt="Travesía Legal"
            loading="eager"
            style={{ height: '36px', width: 'auto', filter: logoFilter, transition: 'filter 0.3s' }}
          />
        </Link>

        {/* Desktop nav — tubelight pill container */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {links.map(l => {
            const isActive = l.end
              ? location.pathname === l.to
              : location.pathname.startsWith(l.to)
            const Icon = l.icon

            return (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: isActive ? '600' : '400',
                  color: isActive ? activeColor : linkColor,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = onDark ? 'white' : 'var(--navy)' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = linkColor }}
              >
                {/* Sliding pill background */}
                {isActive && (
                  <motion.span
                    layoutId="tubelight-pill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '999px',
                      background: pillBg,
                      zIndex: 0,
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                  >
                    {/* Tubelight glow bar on top */}
                    <span style={{
                      position: 'absolute',
                      top: '-3px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '32px',
                      height: '3px',
                      borderRadius: '0 0 3px 3px',
                      background: tubeColor,
                      zIndex: 1,
                    }}>
                      {/* Halo layers */}
                      <span style={{
                        position: 'absolute',
                        width: '48px',
                        height: '16px',
                        borderRadius: '50%',
                        background: onDark ? 'rgba(200,169,110,0.25)' : 'rgba(13,31,60,0.12)',
                        filter: 'blur(6px)',
                        top: '-6px',
                        left: '-8px',
                      }} />
                      <span style={{
                        position: 'absolute',
                        width: '32px',
                        height: '12px',
                        borderRadius: '50%',
                        background: onDark ? 'rgba(200,169,110,0.2)' : 'rgba(13,31,60,0.1)',
                        filter: 'blur(4px)',
                        top: '-4px',
                        left: '0',
                      }} />
                    </span>
                  </motion.span>
                )}

                <span style={{ position: 'relative', zIndex: 1 }}>{l.label}</span>
              </NavLink>
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
              background: 'var(--gold)',
              color: 'var(--navy)',
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: '600',
              padding: '9px 20px',
              borderRadius: 'var(--radius-sm)',
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s',
              whiteSpace: 'nowrap',
              flexShrink: 0,
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
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '8px', display: 'none', flexDirection: 'column', gap: '5px',
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '2px',
              background: scrolled ? 'var(--navy)' : 'white',
              borderRadius: '2px',
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

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: 'var(--nav-height)',
              left: 0, right: 0,
              background: 'var(--white)',
              borderTop: '1px solid var(--border)',
              padding: '12px 24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {links.map(l => {
              const Icon = l.icon
              const isActive = l.end
                ? location.pathname === l.to
                : location.pathname.startsWith(l.to)
              return (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  onClick={() => setMenuOpen(false)}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    fontWeight: isActive ? '600' : '400',
                    color: isActive ? 'var(--navy)' : 'var(--ink-mid)',
                    textDecoration: 'none',
                    padding: '13px 4px',
                    borderBottom: '1px solid var(--border)',
                    borderLeft: isActive ? '3px solid var(--gold)' : '3px solid transparent',
                    paddingLeft: isActive ? '12px' : '4px',
                    transition: 'border-color 0.2s, color 0.2s, padding-left 0.2s',
                  })}
                >
                  <Icon size={16} strokeWidth={isActive ? 2 : 1.5} />
                  {l.label}
                </NavLink>
              )
            })}
            <a
              href="https://wa.me/34694269008"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: '12px',
                background: 'var(--gold)',
                color: 'var(--navy)',
                textAlign: 'center',
                padding: '13px',
                borderRadius: 'var(--radius-md)',
                fontWeight: '600',
                fontSize: '14px',
                textDecoration: 'none',
                display: 'block',
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
