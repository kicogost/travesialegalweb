import { motion } from 'framer-motion'
import { MessageCircle, Calendar, Clock, ArrowLeft, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo sacar tus antecedentes penales en Colombia, Perú, Honduras y El Salvador (2026)",
  "datePublished": "2026-03-21",
  "author": { "@type": "Person", "name": "Pau Iglesias" },
  "publisher": { "@type": "Organization", "name": "Travesía Legal" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cuánto tiempo tarda en llegar el certificado de antecedentes desde Colombia?", "acceptedAnswer": { "@type": "Answer", "text": "La Policía Nacional de Colombia emite el certificado en el momento si se solicita de forma presencial o por su portal web. El envío postal al extranjero puede tardar entre 2 y 4 semanas. Para el trámite de apostilla hay que adicionar el tiempo de gestión en la Cancillería, normalmente 5 días hábiles adicionales." } },
    { "@type": "Question", "name": "¿Qué pasa si tengo antecedentes cancelados?", "acceptedAnswer": { "@type": "Answer", "text": "Si tus antecedentes penales están cancelados (por extinción de la pena o por el plazo legal de cancelación), a efectos migratorios se consideran como si no existieran. No obstante, es importante que el certificado acredite expresamente que no existen antecedentes vigentes o que los existentes han sido cancelados." } },
    { "@type": "Question", "name": "¿Necesito traducir los antecedentes penales si ya están en español?", "acceptedAnswer": { "@type": "Answer", "text": "Si el certificado está en español (como en el caso de Colombia, Perú, Honduras o El Salvador) no necesitas traducción jurada. Sin embargo, sí necesitas la apostilla para que el documento sea válido en España." } },
    { "@type": "Question", "name": "¿Puedo solicitar los antecedentes desde España?", "acceptedAnswer": { "@type": "Answer", "text": "En algunos países es posible tramitarlo a través de los consulados de tu país en España. La disponibilidad y el coste varía según el consulado. En otros casos, necesitas que un familiar o gestor lo tramite directamente desde tu país de origen." } },
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

const countries = [
  {
    name: 'Colombia',
    authority: 'Policía Nacional de Colombia',
    website: 'antecedentes.policia.gov.co',
    steps: [
      'Entra en el portal de antecedentes judiciales de la Policía Nacional (antecedentes.policia.gov.co).',
      'Ingresa tu número de cédula de ciudadanía y completa el formulario.',
      'El sistema genera el certificado en PDF en tiempo real. Si no tienes antecedentes, aparecerá "no registra antecedentes".',
      'Para el trámite presencial, acude a cualquier estación de Policía con tu cédula.',
      'Lleva el documento a la Cancillería colombiana (o a una oficina autorizada) para tramitar la Apostilla de La Haya.',
    ],
    tips: 'Solicita siempre la versión más reciente, ya que la administración española puede rechazar documentos con más de 3-6 meses de antigüedad.',
  },
  {
    name: 'Perú',
    authority: 'Ministerio del Interior / INPE',
    website: 'requisitorias.pnp.gob.pe',
    steps: [
      'El certificado de antecedentes penales en Perú se obtiene en el Poder Judicial (certificado de antecedentes judiciales) o en la Policía Nacional (antecedentes policiales).',
      'Para trámites de extranjería en España, normalmente se requiere el certificado del Poder Judicial.',
      'Solicítalo en la oficina del Poder Judicial más cercana, con tu DNI peruano.',
      'También puedes solicitarlo en el Consulado Peruano en España si tienes actualizado tu registro consular.',
      'Una vez obtenido, llévalo a las oficinas del Ministerio de Relaciones Exteriores del Perú para la Apostilla (disponible también de forma electrónica en algunos casos).',
    ],
    tips: 'El Poder Judicial de Perú también tiene un portal de verificación en línea (pj.gob.pe). Consulta si la modalidad telemática está disponible para tu región.',
  },
  {
    name: 'Honduras',
    authority: 'Dirección Nacional de Investigación Criminal (DNIC)',
    website: 'dnic.gov.hn',
    steps: [
      'Acude a las oficinas de la DNIC en Tegucigalpa o a las delegaciones departamentales con tu documento de identidad (DNI hondureño o pasaporte).',
      'Completa el formulario de solicitud y abona el arancel correspondiente.',
      'El plazo de emisión varía entre 1 y 5 días hábiles dependiendo de la oficina.',
      'Una vez obtenido el certificado, tramita la Apostilla en la Secretaría de Relaciones Exteriores de Honduras.',
      'Si estás en España, puedes solicitar el certificado a través del Consulado de Honduras, aunque los tiempos son mayores.',
    ],
    tips: 'Es importante que el certificado especifique expresamente que la persona "no tiene antecedentes" o los detalle con las fechas y estados actuales de cada causa.',
  },
  {
    name: 'El Salvador',
    authority: 'Policía Nacional Civil (PNC)',
    website: 'pnc.gob.sv',
    steps: [
      'Solicita el certificado de antecedentes penales en las oficinas de la Policía Nacional Civil (PNC) con tu DUI o pasaporte salvadoreño.',
      'El trámite también puede iniciarse a través del Consulado de El Salvador en Barcelona o Madrid.',
      'El PNC emite el certificado en un plazo de 1 a 3 días hábiles.',
      'Tramita la Apostilla en el Ministerio de Relaciones Exteriores de El Salvador una vez obtenido el certificado original.',
      'No olvides solicitar varias copias apostilladas por si necesitas el documento para más de un trámite.',
    ],
    tips: 'El Salvador tiene convenio con varios municipios españoles. Verifica si tu municipio tiene oficina de coordinación que pueda facilitar el trámite.',
  },
]

export default function AntecedentesPenales() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)', paddingTop: 'calc(var(--nav-height) + 60px)', paddingBottom: '60px' }}>
        <div className="container">
          <motion.div initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <a href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '24px', textDecoration: 'none' }}>
              <ArrowLeft size={14} /> Volver al blog
            </a>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ background: '#EBF4FF', color: '#1E3A6E', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px' }}>Extranjería</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Clock size={12} /> 10 min de lectura</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Calendar size={12} /> 21 marzo 2026</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: '720px' }}>
              Cómo sacar tus antecedentes penales en Colombia, Perú, Honduras y El Salvador
            </h1>
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'var(--white)', padding: '64px 0' }}>
        <div className="container">
          <article style={{ maxWidth: '720px', margin: '0 auto', width: '100%' }}>
            <motion.div {...fadeUp}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px', marginTop: '0' }}>
                ¿Por qué necesito el certificado de antecedentes penales?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                El certificado de antecedentes penales del país de origen es un documento imprescindible en prácticamente todos los trámites de extranjería en España: arraigo social, residencia por reagrupación familiar, visados de estudios o trabajo, y solicitud de nacionalidad española.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                La administración española exige que este documento esté apostillado (o legalizado, según el país) y, si no está en español, traducido por traductor jurado. A continuación te explicamos el proceso específico para los cuatro países más frecuentes entre nuestros clientes.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                ¿Qué es la Apostilla de La Haya?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                La Apostilla es un sello oficial que certifica la autenticidad de un documento público para que sea válido en países firmantes del Convenio de La Haya. Colombia, Perú, Honduras y El Salvador son países firmantes, por lo que sus documentos públicos solo necesitan la Apostilla (no legalización consular) para ser válidos en España. La Apostilla la otorga el Ministerio de Relaciones Exteriores o el órgano designado de cada país.
              </p>

              {countries.map((country) => (
                <div key={country.name} style={{ marginBottom: '48px' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                    {country.name}
                  </h2>
                  <p style={{ fontSize: '15px', color: 'var(--ink-mid)', lineHeight: 1.7, marginBottom: '16px' }}>
                    <strong>Organismo emisor:</strong> {country.authority}
                  </p>
                  <div style={{ background: 'var(--navy-faint)', borderRadius: 'var(--radius-md)', padding: '24px', marginBottom: '16px' }}>
                    {country.steps.map((step, i) => (
                      <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: i < country.steps.length - 1 ? '16px' : '0', alignItems: 'flex-start' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: '700', color: 'var(--gold)', minWidth: '24px' }}>{String(i + 1).padStart(2, '0')}</span>
                        <p style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.7, margin: 0 }}>{step}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: '#FFF8E8', border: '1px solid var(--gold-light)', borderRadius: 'var(--radius-sm)', padding: '16px' }}>
                    <p style={{ fontSize: '13px', color: 'var(--ink-mid)', lineHeight: 1.6, margin: 0 }}>
                      <strong style={{ color: 'var(--gold-dark)' }}>Consejo:</strong> {country.tips}
                    </p>
                  </div>
                </div>
              ))}

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                ¿Con cuánta antelación debo solicitarlo?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Calcula siempre con margen suficiente. El proceso completo (solicitud + apostilla + envío a España) puede llevar entre 2 y 6 semanas dependiendo del país y del método de envío. Para evitar retrasos en tu trámite de extranjería:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                {[
                  'Empieza el proceso al menos 6-8 semanas antes de la fecha prevista de presentación.',
                  'Solicita 2 copias apostilladas por si necesitas el documento para más de un trámite.',
                  'Verifica la fecha de emisión: algunos organismos exigen que el certificado no tenga más de 3 o 6 meses de antigüedad.',
                  'Si tienes familiares en tu país, puede ser más rápido que ellos tramiten el original y te lo envíen por mensajería express certificada.',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '10px' }}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} style={{ marginTop: '56px', paddingTop: '48px', borderTop: '2px solid var(--border)' }}>
              <span className="section-label">Preguntas frecuentes</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '32px' }}>
                Dudas sobre los antecedentes penales del extranjero
              </h2>
              {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                <FAQ key={name} question={name} answer={acceptedAnswer.text} />
              ))}
            </motion.div>

            <motion.div {...fadeUp} style={{ marginTop: '56px', background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 100%)', borderRadius: 'var(--radius-xl)', padding: '40px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--white)', marginBottom: '12px' }}>
                ¿Necesitas ayuda con tu trámite de extranjería?
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', lineHeight: 1.7 }}>
                Gestionamos tu expediente completo y te orientamos en cada documento. Consulta gratuita.
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
