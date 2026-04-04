import { MapPin, Phone, Mail } from 'lucide-react'
import { SERVICIOS_MENU } from '../data/servicios.js'

const colH = { fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: '600', color: 'var(--white)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }
const linkStyle = { display: 'block', fontSize: '13px', color: 'var(--slate)', marginBottom: '8px', textDecoration: 'none', transition: 'color 0.2s' }

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: 'var(--white)', padding: '64px 0 32px' }}>
      <div className="container">

        {/* Top grid: Brand + 4 service columns + Empresa/Contacto */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div style={{ minWidth: '180px' }}>
            <img
              src="/brand_assets/TRAVESIA-LEGAL-web-transp-1920w.webp"
              alt="Travesía Legal"
              loading="lazy"
              style={{ height: '32px', width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: '16px' }}
            />
            <p style={{ fontSize: '13px', color: 'var(--slate)', lineHeight: 1.75, marginBottom: '20px' }}>
              Gestoría especializada en extranjería, ciudadanía, empresas y fiscal para personas y empresas en Barcelona y Madrid.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://www.instagram.com/iglesiasextranjeria/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'var(--slate)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--slate)'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@travesialegal" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{ color: 'var(--slate)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--slate)'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.36 6.36 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
              </a>
            </div>
          </div>

          {/* 4 service category columns */}
          {SERVICIOS_MENU.map(cat => (
            <div key={cat.slug}>
              <h3 style={colH}>
                <a href={`/servicios/${cat.slug}/`} style={{ color: 'var(--white)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--white)'}>
                  {cat.category}
                </a>
              </h3>
              {cat.items.slice(0, 6).map(item => (
                <a key={item.to} href={item.to} style={linkStyle}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--slate)'}>
                  {item.label}
                </a>
              ))}
              {cat.items.length > 6 && (
                <a href={`/servicios/${cat.slug}/`} style={{ ...linkStyle, color: 'var(--gold-dark)', fontSize: '12px' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--gold-dark)'}>
                  Ver todos →
                </a>
              )}
            </div>
          ))}

          {/* Empresa + Contacto */}
          <div>
            <h3 style={colH}>Empresa</h3>
            {[
              { to: '/nosotros', label: 'Quiénes Somos' },
              { to: '/blog', label: 'Blog y Recursos' },
              { to: '/contacto', label: 'Contacto' },
            ].map(l => (
              <a key={l.to} href={l.to} style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--slate)'}>
                {l.label}
              </a>
            ))}
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--slate)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--slate)'}>
                <Phone size={13} /> +34 694 269 008
              </a>
              <a href="mailto:info@travesialegal.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--slate)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--slate)'}>
                <Mail size={13} /> info@travesialegal.com
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--slate)' }}>
                <MapPin size={13} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Barcelona · Madrid</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 0', alignItems: 'center' }}>
            {[
              { to: '/aviso-legal', label: 'Aviso legal' },
              { to: '/politica-de-privacidad', label: 'Política de privacidad' },
              { to: '/politica-de-cookies', label: 'Política de cookies' },
              { to: '/declaracion-accesibilidad', label: 'Declaración de accesibilidad' },
            ].map((l, i, arr) => (
              <span key={l.to} style={{ display: 'flex', alignItems: 'center' }}>
                <a href={l.to} style={{ fontSize: '11px', color: 'rgba(135,149,168,0.7)', textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--slate)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(135,149,168,0.7)'}>
                  {l.label}
                </a>
                {i < arr.length - 1 && <span style={{ color: 'rgba(135,149,168,0.35)', margin: '0 10px', fontSize: '11px' }}>·</span>}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '12px', color: 'rgba(135,149,168,0.6)' }}>
            © {new Date().getFullYear()} Travesía Legal — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
