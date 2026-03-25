import { motion } from 'framer-motion'
import { MessageCircle, MapPin, FileText, RefreshCw, Users, Star, Shield, Heart, Scale, CheckCircle } from 'lucide-react'
import FAQ from '../../components/FAQ.jsx'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Travesía Legal — Gestoría Extranjería Sabadell",
  "url": "https://travesialegal.com/gestoria-extranjeria-sabadell",
  "telephone": "+34694269008",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C/ Vallirana, 7 local",
    "addressLocality": "Sabadell",
    "postalCode": "08207",
    "addressCountry": "ES"
  },
  "areaServed": "Sabadell"
}

const faqItems = [
  {
    q: '¿Los trámites de extranjería de Sabadell se gestionan en Barcelona?',
    a: 'Sí, los residentes en Sabadell y en el Vallès Occidental deben presentar sus solicitudes de extranjería ante la Subdelegación del Gobierno en Barcelona, ya que Sabadell no dispone de oficina de extranjería propia. Nuestros gestores se encargan de los desplazamientos y de la gestión ante la administración competente en Barcelona, sin que tengas que preocuparte por estos trámites.',
  },
  {
    q: '¿Puedo hacer la consulta inicial de forma telemática desde Sabadell?',
    a: 'Sí, ofrecemos consultas iniciales por videoconferencia o por WhatsApp para quienes prefieran no desplazarse hasta nuestra oficina. Sin embargo, para la entrega de documentación original, es necesaria la presencia o el envío físico de los documentos a nuestra sede de C/ Vallirana, 7 en Sabadell.',
  },
  {
    q: '¿Tenéis experiencia con la comunidad latinoamericana de Sabadell?',
    a: 'Sí, gran parte de nuestra clientela proviene de la comunidad latinoamericana residente en Sabadell y en los municipios del Vallès Occidental. Conocemos las casuísticas más habituales de las comunidades colombiana, venezolana, ecuatoriana, peruana y boliviana en la zona, y nos adaptamos a las circunstancias específicas de cada caso.',
  },
  {
    q: '¿Cuánto cuesta una consulta en vuestra gestoría de Sabadell?',
    a: 'La consulta inicial es completamente gratuita. En ella evaluamos tu situación documental, te informamos sobre las opciones disponibles y te ofrecemos un presupuesto transparente y sin compromisos para los trámites que necesites. Puedes solicitarla por WhatsApp o visitándonos en la oficina de C/ Vallirana, 7.',
  },
]

const fadeUp = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

export default function GestoriaExtranjeriaSabadell() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'radial-gradient(ellipse 600px 400px at 80% 50%, rgba(200,169,110,0.08) 0%, transparent 70%), linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)',
        paddingTop: 'calc(var(--nav-height) + 80px)',
        paddingBottom: '80px',
      }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ maxWidth: '640px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <MapPin size={14} color="var(--gold)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Sabadell — Vallès Occidental
              </span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: '700',
              color: 'var(--white)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}>
              Gestoría de Extranjería<br />
              <span style={{ color: 'var(--gold)' }}>en Sabadell</span>
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '12px', maxWidth: '520px' }}>
              Especialistas en extranjería para latinoamericanos en Sabadell y el Vallès Occidental. Sede principal de Travesía Legal.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px' }}>
              C/ Vallirana, 7 local · 08207 Sabadell
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                Consulta Gratuita
              </InteractiveButton>
              <a href="https://maps.app.goo.gl/onMzH6xbvt4zf9U16" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'transparent', color: 'white',
                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: '500',
                padding: '13px 20px', borderRadius: 'var(--radius-md)',
                border: '1.5px solid rgba(255,255,255,0.3)', textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
              >
                <MapPin size={14} /> Ver en el mapa
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <motion.div {...fadeUp}>
              <span className="section-label">Sede principal en Sabadell</span>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '700', color: 'var(--navy)', marginBottom: '20px' }}>
                Referencia de extranjería en el Vallès
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '20px' }}>
                Sabadell, segunda ciudad del Vallès Occidental y una de las más dinámicas del área metropolitana de Barcelona, alberga una importante comunidad latinoamericana que en muchos casos necesita apoyo profesional para gestionar sus trámites de extranjería.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '20px' }}>
                Travesía Legal tiene su sede principal en Sabadell, en el barrio Nord, y conoce a fondo los procedimientos de la Subdelegación del Gobierno en Barcelona, que es la que tramita los expedientes de extranjería para los residentes en Sabadell y el Vallès Occidental.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8 }}>
                La combinación de la experiencia de Pau Iglesias en derecho de extranjería con el conocimiento local de la ciudad convierte a Travesía Legal en la referencia de los trámites de residencia y nacionalidad en Sabadell.
              </p>
            </motion.div>
            <motion.div {...fadeUp}>
              {/* TODO: Embed Google Maps iframe for C/ Vallirana, 7, 08207 Sabadell */}
              <div style={{
                background: 'var(--navy-faint)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                textAlign: 'center',
                border: '1px solid var(--border)',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
              }}>
                <MapPin size={32} color="var(--navy)" strokeWidth={1.5} />
                <div>
                  <p style={{ fontWeight: '600', color: 'var(--navy)', marginBottom: '4px' }}>Sede principal Sabadell</p>
                  <p style={{ color: 'var(--ink-mid)', fontSize: '14px' }}>C/ Vallirana, 7 local<br />08207 Sabadell</p>
                </div>
                <a href="https://maps.app.goo.gl/onMzH6xbvt4zf9U16" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '13px', padding: '10px 20px' }}>
                  Abrir en Google Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            section > div > div[style*='grid-template-columns: 1fr 1fr'] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Sub-services */}
      <section style={{ background: 'var(--off-white)', padding: '80px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Nuestros servicios en Sabadell</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Trámites de extranjería en Sabadell y el Vallès
            </h2>
          </motion.div>

          <motion.div {...fadeUp} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}>
            {[
              { icon: FileText, label: 'NIE y TIE para residentes en Sabadell' },
              { icon: RefreshCw, label: 'Residencia temporal y larga duración en el Vallès' },
              { icon: Heart, label: 'Arraigo social, laboral y familiar' },
              { icon: Users, label: 'Reagrupación familiar' },
              { icon: Star, label: 'Nacionalidad española por residencia' },
              { icon: RefreshCw, label: 'Renovaciones de permisos de residencia' },
              { icon: Shield, label: 'Regularización de situaciones irregulares' },
              { icon: Scale, label: 'Recursos y apelaciones ante denegaciones' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <Icon size={18} color="var(--gold-dark)" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontWeight: '500', fontSize: '14px', color: 'var(--navy)', lineHeight: 1.4 }}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Preguntas frecuentes</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Extranjería en Sabadell: dudas habituales
            </h2>
          </motion.div>
          <motion.div {...fadeUp} style={{ maxWidth: '780px', margin: '0 auto' }}>
            <FAQ items={faqItems} />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: '700', color: 'var(--white)', marginBottom: '16px' }}>
              ¿Necesitas gestionar tu extranjería en Sabadell?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', marginBottom: '36px', maxWidth: '420px', margin: '0 auto 36px', lineHeight: 1.7 }}>
              Consulta gratuita sin compromiso. Sede principal en C/ Vallirana, 7, Sabadell.
            </p>
            <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} />
              Escríbenos por WhatsApp
            </InteractiveButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
