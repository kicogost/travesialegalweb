import { MapPin, MessageCircle, Shield, Heart, TrendingUp } from 'lucide-react'
import InteractiveButton from '../components/InteractiveButton.jsx'

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Travesía Legal",
  "url": "https://travesialegal.com",
  "telephone": "+34694269008",
  "employee": [
    {
      "@type": "Person",
      "name": "Pau Iglesias",
      "jobTitle": "Especialista en Extranjería",
      "worksFor": { "@type": "Organization", "name": "Travesía Legal" }
    },
    {
      "@type": "Person",
      "name": "Leidy Yhoana Reina Vanegas",
      "jobTitle": "Especialista Fiscal y Contable",
      "worksFor": { "@type": "Organization", "name": "Travesía Legal" }
    }
  ]
}

export default function Nosotros() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'radial-gradient(ellipse 600px 400px at 80% 50%, rgba(200,169,110,0.08) 0%, transparent 70%), linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)',
        paddingTop: 'calc(var(--nav-height) + 80px)',
        paddingBottom: '80px',
      }}>
        <div className="container">
          <div className="animate-on-scroll" style={{ maxWidth: '640px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', display: 'block' }}>
              La empresa
            </span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: '700',
              color: 'var(--white)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}>
              Quiénes Somos
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: '520px' }}>
              Somos una gestoría especializada en extranjería, laboral y fiscal para extranjeros, autónomos y empresas en España. Nuestro objetivo es que los trámites burocráticos no sean un obstáculo para tu vida en España.
            </p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="section-label">Conócenos</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Conócenos en persona
            </h2>
          </div>
          <div className="animate-on-scroll" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{
              aspectRatio: '16/9',
              background: 'var(--navy)',
              borderRadius: 'var(--radius-xl)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              border: '1px solid var(--border)',
            }}>
              <div style={{
                width: '64px', height: '64px',
                borderRadius: '50%',
                background: 'rgba(200,169,110,0.15)',
                border: '2px solid var(--gold)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                Vídeo próximamente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section style={{ background: 'var(--white)', padding: '96px 0' }}>
        <div className="container">
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="section-label">El equipo</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: '700', color: 'var(--navy)' }}>
              Profesionales con experiencia real
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}>
            {[
              {
                photo: '/founders/pau-iglesias.jpg',
                initials: 'PI',
                name: 'Pau Iglesias',
                title: 'Especialista en Extranjería',
                badge: 'Extranjería y Nacionalidad',
                bio: `Pau Iglesias es el especialista en derecho de extranjería de Travesía Legal. Con más de una década de experiencia gestionando expedientes de residencia, arraigo y nacionalidad, conoce en profundidad los procedimientos de la administración española y los criterios actualizados de resolución de las Delegaciones del Gobierno.

Su trayectoria incluye la gestión de cientos de casos de regularización, reagrupación familiar y procesos de nacionalización para ciudadanos extranjeros. También es el responsable del canal de Instagram @iglesiasextranjeria, donde comparte información útil y actualizada sobre trámites de extranjería.`,
                instagram: 'https://www.instagram.com/iglesiasextranjeria/',
              },
              {
                photo: '/founders/Leidy%20Yhoana%20Reina%20Vanegas.jpg',
                initials: 'LY',
                name: 'Leidy Yhoana Reina Vanegas',
                title: 'Especialista Fiscal y Contable',
                badge: 'Fiscal y Contable',
                bio: `Especialista en fiscalidad, contabilidad y gestión tributaria para empresas y autónomos, con sólida trayectoria en el asesoramiento integral en el cumplimiento de obligaciones fiscales y contables.

Experta en cierres contables, presentación de impuestos, cuentas anuales y planificación fiscal. Combina un riguroso conocimiento técnico con atención al detalle y orientación a la seguridad jurídica del cliente.`,
              },
            ].map(({ photo, initials, name, title, badge, bio, instagram }) => (
              <div key={name} className="animate-on-scroll" style={{
                background: 'var(--off-white)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '40px',
              }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '24px' }}>
                  {photo ? (
                    <img
                      src={photo}
                      alt={`${name}, co-fundador de Travesía Legal`}
                      loading="lazy"
                      style={{
                        width: '80px', height: '80px', flexShrink: 0,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        border: '2px solid var(--gold-light)',
                      }}
                    />
                  ) : (
                  <div style={{
                    width: '80px', height: '80px', flexShrink: 0,
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    color: 'var(--navy)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontSize: '24px',
                    fontWeight: '700',
                  }}>
                    {initials}
                  </div>
                  )}
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--navy)', marginBottom: '4px' }}>{name}</h3>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '8px' }}>{title}</p>
                    <span style={{
                      background: 'var(--navy-faint)',
                      color: 'var(--navy)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontWeight: '500',
                    }}>{badge}</span>
                  </div>
                </div>
                <div>
                  {bio.split('\n\n').map((paragraph, i) => (
                    <p key={i} style={{ fontSize: '15px', color: 'var(--ink-mid)', lineHeight: 1.75, marginBottom: '16px' }}>{paragraph}</p>
                  ))}
                </div>
                {instagram && (
                  <a href={instagram} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '13px', color: 'var(--ink-light)', textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--navy)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-light)'}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    @iglesiasextranjeria
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: 'var(--navy-faint)', padding: '80px 0' }}>
        <div className="container">
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Nuestros valores</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '700', color: 'var(--navy)' }}>
              Lo que nos define
            </h2>
          </div>

          <div className="animate-on-scroll" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {[
              {
                icon: Shield,
                title: 'Transparencia',
                desc: 'Presupuestos claros desde el primer momento. Sin sorpresas, sin letra pequeña. Sabes exactamente qué gestionamos y cuánto cuesta.',
              },
              {
                icon: Heart,
                title: 'Cercanía',
                desc: 'Acceso directo a tu gestor por WhatsApp. Te tratamos como persona, no como número de expediente.',
              },
              {
                icon: TrendingUp,
                title: 'Resultados',
                desc: 'Más de 500 expedientes gestionados con éxito. Nuestra tasa de resolución positiva habla por nosotros.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '56px', height: '56px',
                  borderRadius: '50%',
                  background: 'var(--navy-faint)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <Icon size={24} color="var(--gold-dark)" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--navy)', marginBottom: '12px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Dónde estamos</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '700', color: 'var(--navy)' }}>
              Nuestras oficinas
            </h2>
          </div>

          <div className="animate-on-scroll" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}>
            {[
              {
                city: 'Barcelona',
                address: 'C/ Sardenya, 311\n08025 Barcelona',
                note: 'Barrio del Eixample, a cinco minutos del Passeig de Gràcia.',
                mapsUrl: 'https://maps.app.goo.gl/9srsqQKHAX7h1iM86',
                embedCoords: '41.4036252,2.1727265',
              },
              {
                city: 'Sabadell',
                address: 'C/ Vallirana, 7 local\n08207 Sabadell',
                note: 'Sede principal. Barrio Nord de Sabadell.',
                mapsUrl: 'https://maps.app.goo.gl/onMzH6xbvt4zf9U16',
                embedCoords: '41.5620675,2.1002197',
              },
            ].map(({ city, address, note, mapsUrl, embedCoords }) => (
              <div key={city} style={{
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
              }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <iframe
                    title={`Oficina Travesía Legal ${city}`}
                    src={`https://maps.google.com/maps?q=${embedCoords}&output=embed&hl=es&z=17`}
                    width="100%"
                    height="200"
                    style={{ border: 0, display: 'block' }}
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <p style={{ fontWeight: '600', fontSize: '15px', color: 'var(--navy)', marginBottom: '8px', whiteSpace: 'pre-line' }}>{address}</p>
                  <p style={{ fontSize: '13px', color: 'var(--ink-light)', marginBottom: '20px' }}>{note}</p>
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '13px', padding: '10px 20px' }}>
                    <MapPin size={13} /> Abrir en Google Maps
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="animate-on-scroll">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: '700', color: 'var(--white)', marginBottom: '16px' }}>
              ¿Listo para trabajar con nosotros?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', marginBottom: '36px', maxWidth: '420px', margin: '0 auto 36px', lineHeight: 1.7 }}>
              Consulta gratuita sin compromiso. Cuéntanos tu caso y te orientamos.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                WhatsApp
              </InteractiveButton>
              <InteractiveButton variant="outline-dark" to="/contacto">
                Ver contacto
              </InteractiveButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
