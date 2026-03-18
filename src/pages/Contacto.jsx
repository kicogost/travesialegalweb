import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Travesía Legal",
  "url": "https://travesialegal.com",
  "telephone": "+34694269008",
  "email": "info@travesialegal.com",
  "openingHours": "Mo-Fr 08:30-18:30",
  "sameAs": [
    "https://www.instagram.com/iglesiasextranjeria/",
    "https://www.tiktok.com/@travesialegal"
  ],
  "address": [
    { "@type": "PostalAddress", "streetAddress": "C/ Sardenya, 311", "addressLocality": "Barcelona", "postalCode": "08025", "addressCountry": "ES" },
    { "@type": "PostalAddress", "streetAddress": "C/ Vallirana, 7 local", "addressLocality": "Sabadell", "postalCode": "08207", "addressCountry": "ES" }
  ]
}

const fadeUp = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

export default function Contacto() {
  return (
    <>
      <Helmet>
        <title>Contacto | Travesía Legal — Gestoría en Barcelona y Sabadell</title>
        <meta name="description" content="Contacta con Travesía Legal: consulta gratuita por WhatsApp o reserva una cita. Oficinas en C/ Sardenya 311 Barcelona y C/ Vallirana 7 Sabadell." />
        <link rel="canonical" href="https://travesialegal.com/contacto" />
        <meta property="og:title" content="Contacto | Travesía Legal" />
        <meta property="og:description" content="Consulta gratuita por WhatsApp o reserva una cita. Oficinas en Barcelona y Sabadell." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://travesialegal.com/contacto" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)',
        paddingTop: 'calc(var(--nav-height) + 80px)',
        paddingBottom: '80px',
      }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ maxWidth: '560px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', display: 'block' }}>
              Contacto
            </span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: '700',
              color: 'var(--white)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}>
              Hablemos
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
              Consulta gratuita sin compromiso. Cuéntanos tu caso y te orientamos sobre los pasos a seguir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA block */}
      <section style={{ background: '#25D366', padding: '28px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <p style={{ color: 'white', fontSize: '16px', fontWeight: '500', margin: 0 }}>
            La forma más rápida de obtener respuesta es por WhatsApp
          </p>
          <a href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'white', color: '#25D366',
            fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: '600',
            padding: '10px 24px', borderRadius: 'var(--radius-md)', textDecoration: 'none',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <MessageCircle size={16} />
            Escríbenos ahora
          </a>
        </div>
      </section>

      {/* Main contact section */}
      <section style={{ background: 'var(--off-white)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '64px', alignItems: 'flex-start' }}>

            {/* Left: CTA actions */}
            <motion.div {...fadeUp}>
              <span className="section-label">Empieza ahora</span>
              <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: '700', color: 'var(--navy)', marginBottom: '12px' }}>
                Elige cómo prefieres contactarnos
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.75, marginBottom: '40px', maxWidth: '480px' }}>
                Respondemos en menos de 24 horas. Si tu consulta es urgente, WhatsApp es siempre la vía más rápida — estamos disponibles también fuera del horario de oficina.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                {/* WhatsApp card */}
                <a
                  href="https://wa.me/34694269008"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                    background: 'var(--white)',
                    border: '1.5px solid #25D366',
                    borderRadius: 'var(--radius-lg)',
                    padding: '24px 28px',
                    textDecoration: 'none',
                    transition: 'box-shadow 0.2s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.2s cubic-bezier(0.25,0.46,0.45,0.94)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{
                    width: '52px', height: '52px', flexShrink: 0,
                    background: '#25D366',
                    borderRadius: '14px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <MessageCircle size={24} color="white" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--navy)', marginBottom: '4px' }}>
                      WhatsApp
                    </p>
                    <p style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.5 }}>
                      Consulta gratuita — respuesta garantizada en menos de 24h
                    </p>
                    <p style={{ fontSize: '13px', color: '#25D366', fontWeight: '600', marginTop: '6px' }}>+34 694 269 008</p>
                  </div>
                </a>

                {/* Email card */}
                <a
                  href="mailto:info@travesialegal.com"
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                    background: 'var(--white)',
                    border: '1.5px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '24px 28px',
                    textDecoration: 'none',
                    transition: 'box-shadow 0.2s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.2s cubic-bezier(0.25,0.46,0.45,0.94)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{
                    width: '52px', height: '52px', flexShrink: 0,
                    background: 'var(--navy-faint)',
                    borderRadius: '14px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Mail size={24} color="var(--navy)" strokeWidth={1.5} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--navy)', marginBottom: '4px' }}>
                      Email
                    </p>
                    <p style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.5 }}>
                      Para consultas no urgentes o envío de documentación
                    </p>
                    <p style={{ fontSize: '13px', color: 'var(--navy-light)', fontWeight: '600', marginTop: '6px' }}>info@travesialegal.com</p>
                  </div>
                </a>

              </div>
            </motion.div>

            {/* Right: info + offices */}
            <motion.aside {...fadeUp}>
              {/* Hours + quick contact */}
              <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '28px', marginBottom: '20px' }}>
                <span className="section-label">Información de contacto</span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                  <a href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '12px', alignItems: 'center', textDecoration: 'none' }}>
                    <div style={{ width: '36px', height: '36px', background: '#25D366', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MessageCircle size={16} color="white" />
                    </div>
                    <div>
                      <p style={{ fontSize: '12px', color: 'var(--slate)', marginBottom: '1px' }}>WhatsApp</p>
                      <p style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)' }}>+34 694 269 008</p>
                    </div>
                  </a>

                  <a href="tel:+34694269008" style={{ display: 'flex', gap: '12px', alignItems: 'center', textDecoration: 'none' }}>
                    <div style={{ width: '36px', height: '36px', background: 'var(--navy-faint)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={16} color="var(--navy)" />
                    </div>
                    <div>
                      <p style={{ fontSize: '12px', color: 'var(--slate)', marginBottom: '1px' }}>Teléfono</p>
                      <p style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)' }}>+34 694 269 008</p>
                    </div>
                  </a>

                  <a href="mailto:info@travesialegal.com" style={{ display: 'flex', gap: '12px', alignItems: 'center', textDecoration: 'none' }}>
                    <div style={{ width: '36px', height: '36px', background: 'var(--navy-faint)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={16} color="var(--navy)" />
                    </div>
                    <div>
                      <p style={{ fontSize: '12px', color: 'var(--slate)', marginBottom: '1px' }}>Email</p>
                      <p style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)' }}>info@travesialegal.com</p>
                    </div>
                  </a>
                </div>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <Clock size={16} color="var(--gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--navy)', marginBottom: '4px' }}>Horario de oficina</p>
                      <p style={{ fontSize: '13px', color: 'var(--ink-mid)', lineHeight: 1.65 }}>
                        Lunes a viernes<br />8:30 — 18:30
                      </p>
                      <p style={{ fontSize: '12px', color: 'var(--slate)', marginTop: '6px', lineHeight: 1.5 }}>
                        Siempre disponibles por WhatsApp fuera del horario de oficina.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div style={{ borderTop: '1px solid var(--border)', marginTop: '20px', paddingTop: '20px' }}>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: 'var(--slate)', marginBottom: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Redes sociales</p>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <a href="https://www.instagram.com/iglesiasextranjeria/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--ink-mid)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--navy)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-mid)'}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                      Instagram
                    </a>
                    <a href="https://www.tiktok.com/@travesialegal" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--ink-mid)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--navy)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-mid)'}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.36 6.36 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
                      TikTok
                    </a>
                  </div>
                </div>
              </div>

              {/* Offices with maps */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { city: 'Barcelona', address: 'C/ Sardenya, 311, 08025 Barcelona', coords: '41.4036252,2.1727265', url: 'https://maps.app.goo.gl/9srsqQKHAX7h1iM86' },
                  { city: 'Sabadell', address: 'C/ Vallirana, 7 local, 08207 Sabadell', coords: '41.5620675,2.1002197', url: 'https://maps.app.goo.gl/onMzH6xbvt4zf9U16' },
                ].map(({ city, address, coords, url }) => (
                  <div key={city} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                    <iframe
                      title={`Oficina Travesía Legal ${city}`}
                      src={`https://maps.google.com/maps?q=${coords}&output=embed&hl=es&z=17`}
                      width="100%"
                      height="160"
                      style={{ border: 0, display: 'block' }}
                      loading="lazy"
                      allowFullScreen
                    />
                    <div style={{ padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <MapPin size={14} color="var(--gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <p style={{ fontWeight: '600', fontSize: '13px', color: 'var(--navy)', marginBottom: '1px' }}>{city}</p>
                          <p style={{ fontSize: '12px', color: 'var(--ink-light)' }}>{address}</p>
                        </div>
                      </div>
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', fontWeight: '500', color: 'var(--navy-light)', textDecoration: 'none', whiteSpace: 'nowrap', marginLeft: '8px' }}>
                        Ver mapa
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) {
            section > div > div[style*='grid-template-columns: 1fr 380px'] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </>
  )
}
