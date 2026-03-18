import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Clock, ArrowLeft, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "IVA para Autónomos y Pymes: Modelo 303 y Declaraciones Trimestrales (2026)",
  "datePublished": "2026-03-05",
  "author": { "@type": "Person", "name": "Raul Lopez" },
  "publisher": { "@type": "Organization", "name": "Travesía Legal" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cuándo hay que presentar el modelo 303 del IVA?", "acceptedAnswer": { "@type": "Answer", "text": "El modelo 303 se presenta cuatro veces al año: del 1 al 20 de enero (4T del año anterior), del 1 al 20 de abril (1T), del 1 al 20 de julio (2T) y del 1 al 20 de octubre (3T). Si el resultado es a ingresar y se domicilia el pago, el plazo se amplía hasta el 15 del mes correspondiente." } },
    { "@type": "Question", "name": "¿Puedo deducirme el IVA de los gastos de mi vehículo?", "acceptedAnswer": { "@type": "Answer", "text": "Para autónomos que no son agentes comerciales ni transportistas, la deducción del IVA del vehículo está limitada al 50% con carácter general (el otro 50% se presume uso privado). Para deducir el 100% del IVA debes poder acreditar que el vehículo se utiliza exclusivamente para la actividad, lo cual es muy difícil de probar ante Hacienda salvo en sectores específicos." } },
    { "@type": "Question", "name": "¿Qué pasa si presento el modelo 303 fuera de plazo?", "acceptedAnswer": { "@type": "Answer", "text": "Si presentas fuera de plazo con resultado a ingresar, se aplica un recargo de presentación extemporánea: 1% por mes de retraso hasta los 12 meses, y 15% más intereses de demora a partir del año. Si el resultado es a devolver o cero, se aplica una sanción formal mínima de 200 € (reducible al 50% si no impugnas)." } },
    { "@type": "Question", "name": "¿Están todas las actividades sujetas a IVA?", "acceptedAnswer": { "@type": "Answer", "text": "No. Hay actividades exentas de IVA por ley, como la enseñanza reglada, los servicios médicos y sanitarios, los servicios financieros, los arrendamientos de vivienda y algunas actividades culturales y deportivas. Si tu actividad está exenta, no repercutes IVA en tus facturas pero tampoco puedes deducirte el IVA soportado en tus gastos." } },
    { "@type": "Question", "name": "¿Qué es el modelo 390 y para qué sirve?", "acceptedAnswer": { "@type": "Answer", "text": "El modelo 390 es el resumen anual del IVA que se presenta en enero de cada año. Recoge el total del IVA repercutido, el IVA soportado deducible y el resultado de todas las declaraciones trimestrales del año anterior. Es obligatorio para todos los autónomos y empresas en régimen general de IVA, aunque en algunas comunidades puede presentarse de forma conjunta con el 303 del último trimestre." } },
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

export default function IvaAutonomos() {
  return (
    <>
      <Helmet>
        <title>IVA para Autónomos y Pymes: Modelo 303 y Declaraciones Trimestrales 2026 | Travesía Legal</title>
        <meta name="description" content="Guía completa del IVA para autónomos y pymes en España: cómo funciona el modelo 303, plazos trimestrales, qué se puede deducir y errores más comunes." />
        <link rel="canonical" href="https://travesialegal.com/blog/iva-autonomos-pymes-modelo-303" />
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
              <span style={{ background: '#FEF3C7', color: '#92400E', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px' }}>Fiscal</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Clock size={12} /> 7 min de lectura</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Calendar size={12} /> 5 marzo 2026</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: '720px' }}>
              IVA para Autónomos y Pymes: Modelo 303 y Declaraciones Trimestrales (2026)
            </h1>
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'var(--white)', padding: '64px 0' }}>
        <div className="container">
          <article style={{ maxWidth: '720px', margin: '0 auto', width: '100%' }}>
            <motion.div {...fadeUp}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px', marginTop: '0' }}>
                ¿Cómo funciona el IVA para un autónomo?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                El IVA (Impuesto sobre el Valor Añadido) es un impuesto indirecto que grava el consumo. Como autónomo o empresa, actúas de intermediario entre el consumidor final y Hacienda: cobras el IVA a tus clientes (IVA repercutido) y pagas IVA en tus compras y gastos (IVA soportado). La diferencia entre ambos es lo que ingresas o recuperas de Hacienda cada trimestre.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                Si el IVA que has cobrado a tus clientes es mayor que el que has pagado en tus gastos, pagas la diferencia a Hacienda. Si es al revés, tienes derecho a compensarlo en trimestres futuros o, en el último trimestre del año, a solicitar su devolución.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Tipos de IVA en España en 2026
              </h2>
              <div style={{ background: 'var(--navy-faint)', borderRadius: 'var(--radius-md)', padding: '24px', marginBottom: '32px' }}>
                {[
                  { tipo: 'IVA general — 21%', desc: 'Aplica a la mayoría de bienes y servicios: ropa, electrónica, servicios profesionales, hostelería, reparaciones, publicidad, etc.' },
                  { tipo: 'IVA reducido — 10%', desc: 'Alimentos no básicos, transporte de pasajeros, actividades culturales (cine, teatro), servicios de hostelería y restauración (en local), reforma de viviendas.' },
                  { tipo: 'IVA superreducido — 4%', desc: 'Pan, leche, huevos, frutas y verduras, libros, periódicos, medicamentos, prótesis y material para personas con discapacidad.' },
                  { tipo: 'Exento de IVA — 0%', desc: 'Servicios médicos, enseñanza reglada, arrendamiento de vivienda, seguros, servicios financieros. No se repercute IVA ni se puede deducir el IVA soportado.' },
                ].map(({ tipo, desc }) => (
                  <div key={tipo} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
                    <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--navy)', marginBottom: '4px' }}>{tipo}</p>
                    <p style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                El modelo 303: la declaración trimestral de IVA
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                El modelo 303 es el formulario con el que autónomos y empresas declaran el IVA cada trimestre. En él se recogen:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                {[
                  'IVA devengado (repercutido): el IVA total que has facturado a tus clientes durante el trimestre.',
                  'IVA deducible (soportado): el IVA que has pagado en tus compras y gastos relacionados con la actividad.',
                  'Resultado: si el devengado supera al deducible, debes ingresar la diferencia. Si es al revés, el saldo queda a compensar.',
                  'Saldo a compensar de trimestres anteriores (si los hubiera).',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                El modelo 303 se presenta obligatoriamente, aunque el resultado sea cero o a compensar. No presentarlo dentro del plazo —incluso con resultado de 0 €— genera una sanción formal mínima de 200 €.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Plazos de presentación del modelo 303 en 2026
              </h2>
              <div style={{ background: 'var(--navy-faint)', borderRadius: 'var(--radius-md)', padding: '24px', marginBottom: '32px' }}>
                {[
                  { trimestre: '4T 2025 (octubre–diciembre)', plazo: '1–20 enero 2026' },
                  { trimestre: '1T 2026 (enero–marzo)', plazo: '1–20 abril 2026' },
                  { trimestre: '2T 2026 (abril–junio)', plazo: '1–20 julio 2026' },
                  { trimestre: '3T 2026 (julio–septiembre)', plazo: '1–20 octubre 2026' },
                  { trimestre: '4T 2026 (octubre–diciembre)', plazo: '1–30 enero 2027' },
                ].map(({ trimestre, plazo }) => (
                  <div key={trimestre} style={{ display: 'flex', gap: '16px', padding: '10px 0', borderBottom: '1px solid var(--border)', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '14px', color: 'var(--ink-mid)', flex: 1, minWidth: '180px' }}>{trimestre}</span>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--navy)', fontFamily: 'var(--font-mono)' }}>{plazo}</span>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                ¿Qué gastos tienen IVA deducible?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Para deducir el IVA de un gasto, este debe estar relacionado directa y exclusivamente con la actividad económica y estar correctamente documentado con factura completa (no ticket de compra). Los gastos con IVA habitualmente deducible para autónomos son:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                {[
                  'Material de oficina y suministros de trabajo.',
                  'Software y herramientas digitales (suscripciones, licencias).',
                  'Publicidad y marketing digital.',
                  'Servicios de asesoría y gestoría.',
                  'Formación directamente relacionada con la actividad.',
                  'Alquiler de local de negocio o despacho.',
                  'Teléfono e internet (en la proporción vinculada a la actividad).',
                  'Vehículo de empresa (al 50% con carácter general, 100% en sectores específicos).',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Errores habituales en el IVA de autónomos
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Los errores más frecuentes que detectamos en la revisión de declaraciones de IVA son:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '0' }}>
                {[
                  'Deducirse el IVA de gastos con tickets en lugar de facturas: un ticket de compra no es suficiente; necesitas factura completa con tus datos para deducirte el IVA.',
                  'Confundir operaciones intracomunitarias: si compras servicios a una empresa de otro país de la UE, debes aplicar la inversión del sujeto pasivo y declararlo correctamente.',
                  'No declarar las operaciones con el exterior (importaciones y exportaciones) en el apartado correspondiente del modelo 303.',
                  'Aplicar el tipo de IVA incorrecto a tus servicios o productos.',
                  'Olvidar presentar el modelo 303 cuando el resultado es cero o negativo.',
                  'No conservar las facturas durante el plazo legal de cuatro años (período de prescripción de Hacienda).',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} style={{ marginTop: '56px', paddingTop: '48px', borderTop: '2px solid var(--border)' }}>
              <span className="section-label">Preguntas frecuentes</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '32px' }}>
                Dudas sobre el IVA y el modelo 303
              </h2>
              {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                <FAQ key={name} question={name} answer={acceptedAnswer.text} />
              ))}
            </motion.div>

            <motion.div {...fadeUp} style={{ marginTop: '56px', background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 100%)', borderRadius: 'var(--radius-xl)', padding: '40px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--white)', marginBottom: '12px' }}>
                ¿Quieres que llevemos tu IVA trimestral?
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', lineHeight: 1.7 }}>
                Nuestros asesores fiscales en Barcelona y Sabadell gestionan todas tus declaraciones trimestrales. Sin errores, sin sustos.
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
