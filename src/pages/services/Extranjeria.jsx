import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, RefreshCw, Users, Star, Shield, Heart, Scale, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react'
import FAQ from '../../components/FAQ.jsx'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Travesía Legal",
  "url": "https://travesialegal.com",
  "telephone": "+34694269008",
  "address": [
    { "@type": "PostalAddress", "streetAddress": "C/ Sardenya, 311", "addressLocality": "Barcelona", "postalCode": "08025", "addressCountry": "ES" },
    { "@type": "PostalAddress", "streetAddress": "C/ Vallirana, 7 local", "addressLocality": "Sabadell", "postalCode": "08207", "addressCountry": "ES" }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cuánto tarda el proceso de residencia en España?", "acceptedAnswer": { "@type": "Answer", "text": "El proceso de residencia inicial suele tardar entre 3 y 6 meses desde la presentación de la solicitud." } },
    { "@type": "Question", "name": "¿Qué documentos necesito para el NIE?", "acceptedAnswer": { "@type": "Answer", "text": "Para obtener el NIE necesitas pasaporte original en vigor, formulario EX-15 o EX-17 cumplimentado, justificante del motivo de la solicitud y tasa abonada (modelo 790 código 012)." } },
    { "@type": "Question", "name": "¿Puedo solicitar la nacionalidad si llevo 10 años en España?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, y para ciudadanos iberoamericanos el plazo se reduce a 2 años de residencia legal continuada." } },
    { "@type": "Question", "name": "¿Qué es el arraigo social y quién puede solicitarlo?", "acceptedAnswer": { "@type": "Answer", "text": "El arraigo social es una autorización de residencia temporal para personas que llevan al menos 3 años en España en situación irregular." } },
    { "@type": "Question", "name": "¿Cuánto cuesta tramitar la residencia con una gestoría?", "acceptedAnswer": { "@type": "Answer", "text": "Los honorarios varían según la complejidad del trámite. Ofrecemos consulta inicial gratuita para evaluar tu caso." } },
    { "@type": "Question", "name": "¿Puedo traer a mi familia a España con la reagrupación familiar?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, si tienes residencia legal en España puedes solicitar la reagrupación familiar para tu cónyuge e hijos menores de edad." } },
  ]
}

const faqItems = [
  {
    q: '¿Cuánto tarda el proceso de residencia en España?',
    a: 'El proceso de residencia inicial suele tardar entre 3 y 6 meses desde la presentación de la solicitud, dependiendo de la comunidad autónoma y la carga de trabajo de la oficina de extranjería. Con la documentación completa y correcta, los plazos pueden reducirse significativamente. Recomendamos siempre iniciar el trámite con antelación suficiente.',
  },
  {
    q: '¿Qué documentos necesito para el NIE?',
    a: 'Para obtener el NIE necesitas pasaporte original en vigor, formulario EX-15 o EX-17 cumplimentado, justificante del motivo de la solicitud (contrato laboral, matrícula universitaria, escritura de compraventa, etc.) y tasa abonada (modelo 790 código 012). Los documentos en idioma extranjero deben estar debidamente traducidos y apostillados.',
  },
  {
    q: '¿Puedo solicitar la nacionalidad si llevo 10 años en España?',
    a: 'Sí, la residencia legal y continuada de 10 años en España te da derecho a solicitar la nacionalidad española por residencia. Para ciudadanos iberoamericanos el plazo se reduce a 2 años de residencia legal continuada, lo que supone una ventaja significativa respecto a ciudadanos de otras nacionalidades.',
  },
  {
    q: '¿Qué es el arraigo social y quién puede solicitarlo?',
    a: 'El arraigo social es una autorización de residencia temporal destinada a personas que llevan al menos 3 años en España en situación irregular. Para solicitarlo se requiere acreditar la permanencia en España, carecer de antecedentes penales en España y en el país de origen, y presentar un contrato de trabajo o informe de arraigo emitido por el ayuntamiento.',
  },
  {
    q: '¿Cuánto cuesta tramitar la residencia con una gestoría?',
    a: 'Los honorarios varían según la complejidad del trámite, pero en Travesía Legal ofrecemos presupuestos transparentes sin letra pequeña. Incluimos la consulta inicial gratuita para evaluar tu caso antes de comprometerte con ningún coste.',
  },
  {
    q: '¿Puedo traer a mi familia a España con la reagrupación familiar?',
    a: 'Sí, si tienes residencia legal en España puedes solicitar la reagrupación familiar para tu cónyuge e hijos menores de edad. Es necesario acreditar medios económicos suficientes y disponer de una vivienda adecuada. El proceso suele tardar entre 3 y 4 meses y puede realizarse desde el consulado español en el país de origen.',
  },
]

const fadeUp = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

const subServices = [
  { icon: FileText, label: 'NIE y TIE' },
  { icon: RefreshCw, label: 'Residencia inicial y renovaciones' },
  { icon: Users, label: 'Reagrupación familiar' },
  { icon: Star, label: 'Nacionalidad española' },
  { icon: Shield, label: 'Regularización extraordinaria' },
  { icon: Heart, label: 'Arraigo social, laboral y familiar' },
  { icon: Scale, label: 'Recursos ante denegaciones' },
]

export default function Extranjeria() {
  return (
    <>
      <Helmet>
        <title>Extranjería y Nacionalidad para Latinoamericanos en España | Travesía Legal</title>
        <meta name="description" content="Especialistas en residencia, NIE, arraigo social y nacionalidad para latinoamericanos en España. Consulta gratuita. Oficinas en Barcelona y Sabadell." />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{
        background: 'radial-gradient(ellipse 600px 400px at 80% 50%, rgba(200,169,110,0.08) 0%, transparent 70%), linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)',
        paddingTop: 'calc(var(--nav-height) + 80px)',
        paddingBottom: '80px',
      }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ maxWidth: '640px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', display: 'block' }}>
              Servicio
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
              Extranjería y<br />
              <span style={{ color: 'var(--gold)' }}>Nacionalidad</span>
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '36px', maxWidth: '520px' }}>
              Especialistas en residencia, NIE, arraigo social y nacionalidad para latinoamericanos en España. Gestionamos tu expediente de principio a fin con total transparencia.
            </p>
            <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} />
              Consulta Gratuita por WhatsApp
            </InteractiveButton>
          </motion.div>
        </div>
      </section>

      {/* Sub-services grid */}
      <section style={{ background: 'var(--off-white)', padding: '80px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Qué gestionamos</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Todos los trámites de extranjería
            </h2>
          </motion.div>

          <motion.div {...fadeUp} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}>
            {subServices.map(({ icon: Icon, label }) => (
              <div key={label} style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={{
                  width: '36px', height: '36px', flexShrink: 0,
                  background: 'var(--navy-faint)',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} color="var(--navy)" strokeWidth={1.5} />
                </div>
                <span style={{ fontWeight: '500', fontSize: '15px', color: 'var(--navy)', lineHeight: 1.4, paddingTop: '6px' }}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process steps */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Cómo trabajamos</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Tu proceso, paso a paso
            </h2>
          </motion.div>

          <motion.div {...fadeUp} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px',
            position: 'relative',
          }}>
            {[
              { step: '01', title: 'Consulta inicial', desc: 'Evaluamos tu situación y te informamos de las opciones disponibles sin coste.' },
              { step: '02', title: 'Revisión documentación', desc: 'Comprobamos y preparamos toda la documentación necesaria para el trámite.' },
              { step: '03', title: 'Presentación solicitud', desc: 'Presentamos la solicitud ante la administración competente en tu nombre.' },
              { step: '04', title: 'Seguimiento hasta resolución', desc: 'Hacemos seguimiento del expediente e informamos de cada novedad.' },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ textAlign: 'center', padding: '0 8px' }}>
                <div style={{
                  width: '60px', height: '60px',
                  borderRadius: '50%',
                  background: 'var(--navy)',
                  color: 'var(--gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '18px',
                  fontWeight: '500',
                  margin: '0 auto 20px',
                }}>
                  {step}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--navy)', marginBottom: '10px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ background: 'var(--navy-faint)', padding: '64px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            {/* TODO: Replace with real testimonial */}
            <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginBottom: '20px' }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="var(--gold)" color="var(--gold)" />)}
            </div>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontStyle: 'italic',
              color: 'var(--navy)',
              lineHeight: 1.6,
              marginBottom: '24px',
            }}>
              "Travesía Legal me ayudó a conseguir mi arraigo social después de tres años de espera. Profesionales, claros y siempre disponibles para resolver mis dudas."
            </p>
            <p style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)' }}>Ana R.</p>
            <p style={{ fontSize: '12px', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>Arraigo Social — Barcelona</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Preguntas frecuentes</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Dudas habituales sobre extranjería
            </h2>
          </motion.div>
          <motion.div {...fadeUp} style={{ maxWidth: '780px', margin: '0 auto' }}>
            <FAQ items={faqItems} />
          </motion.div>
        </div>
      </section>

      {/* Related blog */}
      <section style={{ background: 'var(--navy-faint)', padding: '48px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontSize: '13px', color: 'var(--slate)', marginBottom: '4px', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Artículo relacionado</p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--navy)' }}>Extranjería y Regularización para Latinoamericanos en España (2025)</p>
          </div>
          <InteractiveButton variant="outline" to="/blog/extranjeria-regularizacion-latinoamericanos">
            Leer artículo <ArrowRight size={16} />
          </InteractiveButton>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)',
        padding: '80px 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: '700', color: 'var(--white)', marginBottom: '16px' }}>
              ¿Necesitas gestionar tu residencia?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', marginBottom: '36px', maxWidth: '420px', margin: '0 auto 36px', lineHeight: 1.7 }}>
              Consulta gratuita sin compromiso. Te orientamos sobre tu situación y los pasos a seguir.
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
