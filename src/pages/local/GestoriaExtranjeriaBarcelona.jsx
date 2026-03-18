import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MessageCircle, MapPin, FileText, RefreshCw, Users, Star, Shield, Heart, Scale, CheckCircle } from 'lucide-react'
import FAQ from '../../components/FAQ.jsx'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Travesía Legal — Gestoría Extranjería Barcelona",
  "url": "https://travesialegal.com/gestoria-extranjeria-barcelona",
  "telephone": "+34694269008",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C/ Sardenya, 311",
    "addressLocality": "Barcelona",
    "postalCode": "08025",
    "addressCountry": "ES"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "41.3975", "longitude": "2.1786" },
  "areaServed": "Barcelona"
}

const faqItems = [
  {
    q: '¿Dónde está la Oficina de Extranjería en Barcelona?',
    a: 'La Subdelegación del Gobierno en Barcelona, que gestiona los trámites de extranjería, está ubicada en el Passeig de Sant Joan, 189. La mayoría de trámites requieren cita previa, que debe solicitarse online a través del sistema de Sede Electrónica de la administración española. Nuestros gestores pueden ayudarte a obtener la cita y acompañarte en el proceso.',
  },
  {
    q: '¿Cuánto tiempo tardan los trámites de extranjería en Barcelona?',
    a: 'Los plazos en Barcelona varían según el tipo de trámite y la carga de trabajo de la Oficina de Extranjería. El arraigo social suele resolverse en entre cuatro y seis meses. Las renovaciones de residencia, si la documentación está completa, suelen resolverse en dos a tres meses. Gestionamos el seguimiento de todos los expedientes para anticipar posibles problemas.',
  },
  {
    q: '¿Atendéis en catalán?',
    a: 'Sí, nuestro equipo atiende tanto en castellano como en catalán. También podemos orientar en portugués para clientes brasileños. Nuestro objetivo es que la barrera del idioma nunca sea un obstáculo para acceder a nuestros servicios.',
  },
  {
    q: '¿Cómo puedo pedir cita con vuestra gestoría en Barcelona?',
    a: 'Puedes contactarnos por WhatsApp en el +34 694 269 008 o visitarnos directamente en nuestra oficina de C/ Sardenya, 311 en Barcelona. Ofrecemos consulta inicial gratuita para evaluar tu caso y orientarte sobre los pasos a seguir sin compromiso.',
  },
]

const fadeUp = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

export default function GestoriaExtranjeriaBarcelona() {
  return (
    <>
      <Helmet>
        <title>Gestoría de Extranjería en Barcelona | Travesía Legal</title>
        <meta name="description" content="Gestión de NIE, residencia, arraigo y nacionalidad en Barcelona. Especialistas en extranjería para latinoamericanos. Oficina en C/ Sardenya, 311. Consulta gratuita." />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

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
                Barcelona — Eixample
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
              <span style={{ color: 'var(--gold)' }}>en Barcelona</span>
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '12px', maxWidth: '520px' }}>
              Especialistas en extranjería para latinoamericanos en Barcelona. NIE, residencia, arraigo y nacionalidad gestionados por profesionales con presencia local.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px' }}>
              C/ Sardenya, 311 · 08025 Barcelona
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                Consulta Gratuita
              </InteractiveButton>
              <a href="https://maps.app.goo.gl/9srsqQKHAX7h1iM86" target="_blank" rel="noopener noreferrer" style={{
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
              <span className="section-label">Sobre nuestra oficina en Barcelona</span>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '700', color: 'var(--navy)', marginBottom: '20px' }}>
                Especialistas locales en extranjería
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '20px' }}>
                Travesía Legal es una gestoría especializada en extranjería con oficina en el corazón de Barcelona, en el barrio del Eixample. Atendemos a ciudadanos latinoamericanos y de otras nacionalidades que necesitan gestionar su situación documental en España: desde la primera solicitud de NIE hasta el proceso completo de nacionalidad española.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '20px' }}>
                Barcelona es una de las ciudades con mayor concentración de inmigrantes latinoamericanos de España, y la complejidad burocrática de los trámites de extranjería requiere profesionales que conozcan en profundidad los procedimientos de la Delegación del Gobierno en Cataluña, las especificidades del sistema de cita previa, y los plazos y requisitos actualizados de cada autorización.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8 }}>
                Nuestro equipo, liderado por Pau Iglesias, especialista en derecho de extranjería, ofrece una atención personalizada, en castellano o catalán, con total transparencia en costes y plazos.
              </p>
            </motion.div>
            <motion.div {...fadeUp}>
              {/* TODO: Embed Google Maps iframe for C/ Sardenya, 311, 08025 Barcelona */}
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
                  <p style={{ fontWeight: '600', color: 'var(--navy)', marginBottom: '4px' }}>Oficina Barcelona</p>
                  <p style={{ color: 'var(--ink-mid)', fontSize: '14px' }}>C/ Sardenya, 311<br />08025 Barcelona</p>
                </div>
                <a href="https://maps.app.goo.gl/9srsqQKHAX7h1iM86" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '13px', padding: '10px 20px' }}>
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
            <span className="section-label">Nuestros servicios en Barcelona</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Trámites de extranjería en Barcelona
            </h2>
          </motion.div>

          <motion.div {...fadeUp} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}>
            {[
              { icon: FileText, label: 'NIE y TIE para residentes en Barcelona' },
              { icon: RefreshCw, label: 'Residencia temporal y larga duración' },
              { icon: Heart, label: 'Arraigo social, laboral y familiar en Barcelona' },
              { icon: Users, label: 'Reagrupación familiar' },
              { icon: Star, label: 'Nacionalidad española por residencia (2 años para iberoamericanos)' },
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

      {/* Why Barcelona */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ maxWidth: '720px' }}>
            <span className="section-label">Por qué elegirnos en Barcelona</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)', marginBottom: '20px' }}>
              Conocimiento local, resultados reales
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '20px' }}>
              Nuestra oficina en C/ Sardenya, 311 está situada en el barrio del Eixample, a cinco minutos a pie del Passeig de Gràcia y perfectamente comunicada con el resto de la ciudad en transporte público. Conocemos los tiempos de la Delegación del Gobierno en Cataluña, los procedimientos del Consulado y las particularidades de los juzgados y registros civiles de Barcelona.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
              Gestionamos cientos de expedientes de extranjería al año, lo que nos da una visión actualizada y práctica de la normativa y los criterios de resolución vigentes.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Especialistas en la normativa de extranjería de Cataluña',
                'Atención en castellano y catalán (también portugués)',
                'Acceso directo a tu gestor por WhatsApp',
                'Consulta inicial gratuita sin compromiso',
              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <CheckCircle size={16} color="var(--gold-dark)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '15px', color: 'var(--ink-mid)' }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--navy-faint)', padding: '80px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Preguntas frecuentes</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Extranjería en Barcelona: dudas habituales
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
              ¿Necesitas gestionar tu extranjería en Barcelona?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', marginBottom: '36px', maxWidth: '420px', margin: '0 auto 36px', lineHeight: 1.7 }}>
              Consulta gratuita sin compromiso. Oficina en C/ Sardenya, 311, Barcelona.
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
