import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Clock, ArrowLeft, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Alta de Autónomo en España: Guía Completa Paso a Paso (2026)",
  "datePublished": "2026-02-25",
  "author": { "@type": "Person", "name": "Raul Lopez" },
  "publisher": { "@type": "Organization", "name": "Travesía Legal" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cuánto paga un autónomo a la Seguridad Social en 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Desde 2023 rige el sistema de cotización por ingresos reales. La cuota mínima en 2026 para ingresos inferiores a 670 € netos al mes es de 210 €. Para ingresos entre 670 € y 900 € la cuota es de 230 €. A medida que aumentan los ingresos, la cuota sube progresivamente hasta un máximo de 620 € para ingresos superiores a 6.000 € al mes." } },
    { "@type": "Question", "name": "¿Qué es la tarifa plana de autónomos?", "acceptedAnswer": { "@type": "Answer", "text": "La tarifa plana es una cuota reducida de 80 € al mes durante los primeros 12 meses de actividad para nuevos autónomos. Se puede ampliar otros 12 meses adicionales si los rendimientos netos del segundo año son inferiores al salario mínimo interprofesional. No puede disfrutarse si ya se ha sido autónomo en los dos años anteriores." } },
    { "@type": "Question", "name": "¿Cuándo debo darme de alta como autónomo?", "acceptedAnswer": { "@type": "Answer", "text": "Debes darte de alta como autónomo antes de iniciar la actividad económica. En la Agencia Tributaria (modelo 036/037) y en la Seguridad Social (RETA) el alta debe realizarse antes del inicio de la actividad. La Seguridad Social permite gestionar el alta hasta el día anterior al inicio, y la cuota se paga desde el día efectivo de alta." } },
    { "@type": "Question", "name": "¿Puede darse de alta como autónomo un extranjero en España?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, siempre que cuente con la autorización de residencia correspondiente. Los ciudadanos extracomunitarios necesitan una autorización de trabajo por cuenta propia específica o una autorización de residencia que ya incluya el derecho a trabajar (como el arraigo social o la residencia de larga duración). Los ciudadanos de la UE pueden darse de alta directamente." } },
    { "@type": "Question", "name": "¿Qué IAE necesito para darme de alta como autónomo?", "acceptedAnswer": { "@type": "Answer", "text": "El IAE (Impuesto sobre Actividades Económicas) es el epígrafe que clasifica tu actividad. Los autónomos con facturación inferior a 1 millón de euros están exentos de pagarlo, pero deben indicarlo en el modelo 036/037 de alta en Hacienda. Es importante elegir el epígrafe correcto porque condiciona las deducciones fiscales aplicables y los modelos tributarios que debes presentar." } },
  ]
}

const fadeUp = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', gap: '16px' }}
        aria-expanded={open}
      >
        <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--navy)', lineHeight: 1.5 }}>{question}</span>
        <ChevronDown size={18} color="var(--gold-dark)" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
      </button>
      {open && <p style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.75, paddingBottom: '20px' }}>{answer}</p>}
    </div>
  )
}

export default function AltaAutonomo() {
  return (
    <>
      <Helmet>
        <title>Alta de Autónomo en España: Guía Completa 2026 | Travesía Legal</title>
        <meta name="description" content="Cómo darse de alta como autónomo en España en 2026: trámites en Hacienda y Seguridad Social, cuotas, tarifa plana y obligaciones fiscales. Gestoría en Barcelona y Sabadell." />
        <link rel="canonical" href="https://travesialegal.com/blog/alta-autonomo-espana-guia-completa" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section style={{ background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)', paddingTop: 'calc(var(--nav-height) + 60px)', paddingBottom: '60px' }}>
        <div className="container">
          <motion.div initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '24px', textDecoration: 'none' }}>
              <ArrowLeft size={14} /> Volver al blog
            </Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ background: '#F0FDF4', color: '#166534', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px' }}>Laboral</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Clock size={12} /> 8 min de lectura</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Calendar size={12} /> 25 febrero 2026</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: '720px' }}>
              Alta de Autónomo en España: Guía Completa Paso a Paso (2026)
            </h1>
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'var(--white)', padding: '64px 0' }}>
        <div className="container">
          <article style={{ maxWidth: '720px', margin: '0 auto', width: '100%' }}>
            <motion.div {...fadeUp}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px', marginTop: '0' }}>
                ¿Qué significa ser autónomo en España?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Un autónomo (trabajador por cuenta propia) es una persona física que realiza de forma habitual, personal, directa y por cuenta propia una actividad económica o profesional a título lucrativo. En España hay más de 3,4 millones de autónomos, que van desde freelances y artistas hasta propietarios de pequeños comercios, profesionales liberales y emprendedores tecnológicos.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                Darse de alta como autónomo implica registrarse en dos organismos: la Agencia Tributaria (AEAT) para las obligaciones fiscales y la Tesorería General de la Seguridad Social (TGSS) para las cotizaciones sociales. Ambos trámites deben realizarse antes de iniciar la actividad, aunque pueden hacerse simultáneamente.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Paso 1: Alta en la Agencia Tributaria (modelo 036 o 037)
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                El primer paso es presentar el modelo 036 (o el simplificado 037 para autónomos individuales sin actividades especiales) en la Agencia Tributaria. En este formulario se declara el inicio de la actividad, el epígrafe del IAE que corresponde a tu actividad, el domicilio fiscal y las opciones de tributación:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                {[
                  'Estimación directa simplificada (la más habitual para autónomos con facturación inferior a 600.000 €).',
                  'Estimación directa normal (para autónomos con facturación superior o que lo elijan voluntariamente).',
                  'Estimación objetiva o módulos (para actividades específicas con requisitos de facturación).',
                  'Régimen general de IVA o alguno de los regímenes especiales (recargo de equivalencia para comerciantes minoristas, régimen simplificado, etc.).',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                El alta en Hacienda es gratuita y puede realizarse de forma presencial en la delegación de la AEAT, por internet con certificado digital, o a través de un representante autorizado como una gestoría.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Paso 2: Alta en el RETA (Régimen Especial de Trabajadores Autónomos)
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                El RETA es el sistema de Seguridad Social para trabajadores por cuenta propia. El alta se realiza en la Tesorería General de la Seguridad Social, ya sea presencialmente o a través de la Sede Electrónica de la Seguridad Social. Necesitarás:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                {[
                  'DNI o NIE en vigor.',
                  'Alta previa en Hacienda (modelo 036/037).',
                  'Número de cuenta bancaria para la domiciliación de las cuotas mensuales.',
                  'Elección de la base de cotización según los ingresos esperados.',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Las cuotas de autónomos en 2026: cotización por ingresos reales
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Desde 2023 España aplica un sistema de cotización progresiva por ingresos reales que se despliega en 15 tramos hasta 2031. En 2026, las cuotas aproximadas según ingresos netos mensuales son:
              </p>
              <div style={{ background: 'var(--navy-faint)', borderRadius: 'var(--radius-md)', padding: '24px', marginBottom: '32px', overflowX: 'auto' }}>
                {[
                  { tramo: 'Hasta 670 €', cuota: '210 €/mes' },
                  { tramo: '670 € – 900 €', cuota: '230 €/mes' },
                  { tramo: '900 € – 1.166,70 €', cuota: '270 €/mes' },
                  { tramo: '1.166,70 € – 1.300 €', cuota: '285 €/mes' },
                  { tramo: '1.300 € – 1.500 €', cuota: '305 €/mes' },
                  { tramo: '1.500 € – 1.700 €', cuota: '335 €/mes' },
                  { tramo: 'Más de 6.000 €', cuota: 'Hasta 620 €/mes' },
                ].map(({ tramo, cuota }) => (
                  <div key={tramo} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '14px', color: 'var(--ink-mid)' }}>{tramo} netos/mes</span>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--navy)', fontFamily: 'var(--font-mono)' }}>{cuota}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                Si eres nuevo autónomo y no habías cotizado en el RETA en los dos años anteriores, tienes derecho a la <strong>tarifa plana de 80 € al mes</strong> durante los primeros 12 meses (prorrogables otros 12 si los ingresos del segundo año son inferiores al SMI). Es imprescindible solicitarla expresamente al darse de alta.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Obligaciones fiscales del autónomo
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Una vez dado de alta, las principales obligaciones fiscales trimestrales son:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                {[
                  'Modelo 303 — Declaración trimestral de IVA (enero, abril, julio y octubre).',
                  'Modelo 130 — Pago fraccionado del IRPF (en estimación directa).',
                  'Modelo 111 — Retenciones de IRPF a trabajadores o profesionales si los tienes.',
                  'Modelo 115 — Retenciones por arrendamiento de inmuebles si tienes local de negocio.',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8 }}>
                Además, al año siguiente debes presentar la declaración anual de la renta (IRPF) que regulariza el resultado de los pagos fraccionados realizados durante el año. Una buena planificación fiscal desde el inicio puede ahorrarte cantidades significativas de dinero.
              </p>
            </motion.div>

            <motion.div {...fadeUp} style={{ marginTop: '56px', paddingTop: '48px', borderTop: '2px solid var(--border)' }}>
              <span className="section-label">Preguntas frecuentes</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '32px' }}>
                Dudas sobre el alta de autónomo
              </h2>
              {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                <FAQ key={name} question={name} answer={acceptedAnswer.text} />
              ))}
            </motion.div>

            <motion.div {...fadeUp} style={{ marginTop: '56px', background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 100%)', borderRadius: 'var(--radius-xl)', padding: '40px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--white)', marginBottom: '12px' }}>
                ¿Quieres que gestionemos tu alta de autónomo?
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', lineHeight: 1.7 }}>
                Te damos de alta en Hacienda y Seguridad Social y planificamos tu fiscalidad desde el primer día. Consulta gratuita.
              </p>
              <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} /> Consulta por WhatsApp
              </InteractiveButton>
            </motion.div>
          </article>
        </div>
      </section>
    </>
  )
}
