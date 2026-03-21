import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Clock, ArrowLeft, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "¿Con cuánto tiempo me tienen que avisar para despedirme? (2026)",
  "datePublished": "2026-03-21",
  "author": { "@type": "Person", "name": "Travesía Legal" },
  "publisher": { "@type": "Organization", "name": "Travesía Legal" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Qué pasa si la empresa me despide sin avisar con suficiente tiempo?", "acceptedAnswer": { "@type": "Answer", "text": "Si la empresa no respeta el plazo de preaviso legalmente establecido, debes cobrar los días de preaviso no cumplidos en el finiquito, con el mismo valor que si hubieras trabajado esos días. Esto se llama 'indemnización por falta de preaviso' y es exigible ante el SMAC o los juzgados de lo social." } },
    { "@type": "Question", "name": "¿El despido disciplinario requiere preaviso?", "acceptedAnswer": { "@type": "Answer", "text": "No. El despido disciplinario (por causas imputables al trabajador: faltas graves, absentismo injustificado, etc.) no requiere preaviso. Sin embargo, sí debe notificarse por escrito mediante carta de despido, con indicación de los hechos que lo motivan y la fecha de efectos." } },
    { "@type": "Question", "name": "¿Qué es el finiquito y cuándo me lo tienen que pagar?", "acceptedAnswer": { "@type": "Answer", "text": "El finiquito es la liquidación de todos los conceptos pendientes en el momento de extinción del contrato: días trabajados no cobrados, vacaciones no disfrutadas, partes proporcionales de pagas extras, e indemnización si corresponde. Debe pagarse el mismo día de la extinción del contrato, aunque en la práctica se suele entregar en los días siguientes." } },
    { "@type": "Question", "name": "¿Puedo impugnar mi despido aunque haya firmado el finiquito?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Firmar el finiquito con la expresión 'no conforme' o 'a reserva de acciones legales' no implica aceptar el despido. Incluso firmando el finiquito sin reservas, en algunos casos es posible impugnar el despido si se acredita que hubo error, engaño o coacción. Tienes 20 días hábiles desde la comunicación del despido para presentar papeleta de conciliación." } },
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

export default function DespidoPreaviso() {
  return (
    <>
      <Helmet>
        <title>¿Con cuánto tiempo me tienen que avisar para despedirme? (2026) | Travesía Legal</title>
        <meta name="description" content="Guía completa sobre plazos de preaviso en despidos en España: tipos de despido, plazos legales, qué cobrar si no se respeta el preaviso y cómo actuar." />
        <link rel="canonical" href="https://travesialegal.com/blog/despido-preaviso-plazos" />
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
              <span style={{ background: '#E8F5E9', color: '#1B5E20', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px' }}>Legal</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Clock size={12} /> 7 min de lectura</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Calendar size={12} /> 21 marzo 2026</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: '720px' }}>
              ¿Con cuánto tiempo me tienen que avisar para despedirme?
            </h1>
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'var(--white)', padding: '64px 0' }}>
        <div className="container">
          <article style={{ maxWidth: '720px', margin: '0 auto', width: '100%' }}>
            <motion.div {...fadeUp}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px', marginTop: '0' }}>
                ¿Qué es el preaviso en un despido?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                El preaviso es el tiempo que la empresa está obligada a comunicarte el despido antes de que este sea efectivo. Su finalidad es darte tiempo para buscar un nuevo empleo antes de quedarte sin trabajo.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                La obligación de preaviso depende del tipo de despido. No todos los despidos tienen las mismas exigencias, y es importante saber cuáles son tus derechos en cada caso.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Tipos de despido y plazos de preaviso
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                {[
                  {
                    tipo: 'Despido objetivo',
                    desc: 'Por causas económicas, técnicas, organizativas o de producción (ETOP). También por faltas de asistencia justificadas pero superando ciertos límites.',
                    preaviso: '15 días',
                    indemnizacion: '20 días por año trabajado (máx. 12 mensualidades)',
                    color: 'var(--navy)',
                  },
                  {
                    tipo: 'Despido colectivo (ERE)',
                    desc: 'Afecta a un número mínimo de trabajadores según el tamaño de la plantilla. Requiere apertura de período de consultas con los representantes de los trabajadores.',
                    preaviso: '30 días desde la comunicación a la autoridad laboral',
                    indemnizacion: '20 días por año trabajado (mínimo legal; puede negociarse más)',
                    color: 'var(--navy)',
                  },
                  {
                    tipo: 'Despido disciplinario',
                    desc: 'Por incumplimientos graves del trabajador: absentismo injustificado, desobediencia, transgresión de la buena fe contractual, etc.',
                    preaviso: 'Sin preaviso (efectivo desde la entrega de la carta)',
                    indemnizacion: 'Ninguna si es procedente; 33 días/año si el juez lo declara improcedente',
                    color: '#c0392b',
                  },
                  {
                    tipo: 'Extinción de contrato temporal',
                    desc: 'Al finalizar el contrato de duración determinada por obra, servicio o circunstancias de la producción.',
                    preaviso: '15 días si el contrato tiene una duración superior a 1 año; sin preaviso si es de duración inferior',
                    indemnizacion: '12 días por año trabajado (según tipo de contrato)',
                    color: 'var(--navy)',
                  },
                ].map(({ tipo, desc, preaviso, indemnizacion, color }) => (
                  <div key={tipo} style={{
                    background: 'var(--navy-faint)',
                    border: `2px solid ${color === '#c0392b' ? '#fde8e8' : 'var(--border)'}`,
                    borderLeft: `4px solid ${color}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '24px',
                  }}>
                    <p style={{ fontSize: '16px', fontWeight: '700', color: 'var(--navy)', marginBottom: '8px' }}>{tipo}</p>
                    <p style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.6, marginBottom: '12px' }}>{desc}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div>
                        <p style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--slate)', marginBottom: '4px' }}>Preaviso</p>
                        <p style={{ fontSize: '14px', fontWeight: '600', color }}>{preaviso}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--slate)', marginBottom: '4px' }}>Indemnización mínima</p>
                        <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--navy)' }}>{indemnizacion}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                ¿Y si el convenio colectivo dice otra cosa?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                El convenio colectivo puede mejorar (nunca empeorar) los plazos y condiciones legales mínimas. En algunos sectores es habitual encontrar:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '32px' }}>
                {[
                  'Plazos de preaviso más largos (30 o incluso 60 días en sectores como la hostelería, la construcción o la metalurgia).',
                  'Indemnizaciones por despido objetivo superiores a los 20 días por año.',
                  'Procedimientos específicos de notificación (comunicación por burofax, entrega en mano con testigos, etc.).',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '10px' }}>{item}</li>
                ))}
              </ul>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                Consulta el convenio colectivo de tu sector para conocer si tienes derechos adicionales. Si no sabes cuál es tu convenio, puedes pedirle a la empresa que te lo indique o consultarlo en el BOE.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                ¿Qué hacer si me han despedido sin respetar el preaviso?
              </h2>
              {[
                { num: '01', titulo: 'Exige los días de preaviso en el finiquito', desc: 'Si la empresa te ha comunicado el despido con menos días de preaviso del obligatorio, tienes derecho a cobrar esos días en el finiquito. Indícalo expresamente antes de firmar.' },
                { num: '02', titulo: 'Firma el finiquito con reservas', desc: 'Si no estás conforme con el finiquito o las condiciones del despido, escribe "no conforme" junto a tu firma. Esto no impide que cobres las cantidades, pero deja abierta la vía legal.' },
                { num: '03', titulo: 'Presenta papeleta de conciliación en el SMAC', desc: 'Tienes 20 días hábiles desde la comunicación del despido para presentar papeleta de conciliación en el Servicio de Mediación, Arbitraje y Conciliación (SMAC). Este paso es obligatorio antes de acudir al juzgado.' },
                { num: '04', titulo: 'Consulta con un abogado o gestoría laboral', desc: 'La impugnación de despidos tiene plazos muy estrictos. Un especialista puede ayudarte a evaluar si el despido es procedente, improcedente o nulo, y a calcular la indemnización que te corresponde.' },
              ].map(({ num, titulo, desc }) => (
                <div key={num} style={{ display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', fontWeight: '700', color: 'var(--gold)', minWidth: '32px' }}>{num}</span>
                  <div>
                    <p style={{ fontSize: '15px', fontWeight: '700', color: 'var(--navy)', marginBottom: '4px' }}>{titulo}</p>
                    <p style={{ fontSize: '15px', color: 'var(--ink-mid)', lineHeight: 1.7 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp} style={{ marginTop: '56px', paddingTop: '48px', borderTop: '2px solid var(--border)' }}>
              <span className="section-label">Preguntas frecuentes</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '32px' }}>
                Dudas sobre preaviso y despidos
              </h2>
              {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                <FAQ key={name} question={name} answer={acceptedAnswer.text} />
              ))}
            </motion.div>

            <motion.div {...fadeUp} style={{ marginTop: '56px', background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 100%)', borderRadius: 'var(--radius-xl)', padding: '40px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--white)', marginBottom: '12px' }}>
                ¿Te han despedido y tienes dudas sobre tus derechos?
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', lineHeight: 1.7 }}>
                Nuestro equipo laboral revisa tu caso y te orienta sobre los pasos a seguir. Consulta gratuita sin compromiso.
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
