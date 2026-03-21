import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Clock, ArrowLeft, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo obtener tu visado de estudios en España (2026)",
  "datePublished": "2026-03-21",
  "author": { "@type": "Person", "name": "Pau Iglesias" },
  "publisher": { "@type": "Organization", "name": "Travesía Legal" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Dónde solicito el visado de estudios?", "acceptedAnswer": { "@type": "Answer", "text": "El visado de estudios se solicita en el consulado o embajada de España en tu país de residencia habitual. Es necesario acudir en persona para la entrevista y la entrega de documentación." } },
    { "@type": "Question", "name": "¿Puedo renovar el visado de estudios desde España?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Una vez en España, el visado de estudios inicial debe transformarse en una autorización de estancia por estudios. Puedes solicitar renovaciones anuales siempre que acredites que continúas matriculado y superando los estudios." } },
    { "@type": "Question", "name": "¿Puedo cambiar de estudios con el mismo visado?", "acceptedAnswer": { "@type": "Answer", "text": "Si cambias de centro o de programa de estudios durante tu estancia, debes comunicarlo y puede ser necesario solicitar una modificación de la autorización. Consulta con un especialista antes de realizar cambios." } },
    { "@type": "Question", "name": "¿El visado de estudios me permite traer a mi familia?", "acceptedAnswer": { "@type": "Answer", "text": "El visado de estudios no incluye por defecto reagrupación familiar. Tu cónyuge o hijos tendrían que solicitar su propio visado de residencia por circunstancias excepcionales o esperar a que cambies tu situación migratoria." } },
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

export default function VisadoEstudios() {
  return (
    <>
      <Helmet>
        <title>Cómo obtener tu visado de estudios en España (2026) | Travesía Legal</title>
        <meta name="description" content="Guía completa para obtener el visado de estudios en España: requisitos, documentación, proceso paso a paso y consejos para una solicitud exitosa." />
        <link rel="canonical" href="https://travesialegal.com/blog/visado-estudios-espana" />
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
              <span style={{ background: '#EBF4FF', color: '#1E3A6E', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px' }}>Extranjería</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Clock size={12} /> 8 min de lectura</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Calendar size={12} /> 21 marzo 2026</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: '720px' }}>
              Cómo obtener tu visado de estudios en España (2026)
            </h1>
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'var(--white)', padding: '64px 0' }}>
        <div className="container">
          <article style={{ maxWidth: '720px', margin: '0 auto', width: '100%' }}>
            <motion.div {...fadeUp}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px', marginTop: '0' }}>
                ¿Qué es el visado de estudios?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                El visado de estudios es la autorización que permite a ciudadanos no comunitarios venir a España para cursar estudios o formación en centros reconocidos. Es una de las formas más accesibles de llegar a España de forma legal y puede ser el primer paso hacia una residencia más permanente.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                Existen diferentes tipos según la duración y el tipo de estudios: visado de corta estancia para cursos de menos de 90 días, y visado de larga estancia para estudios que superan ese período (el más común para quienes quieren residir en España).
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                ¿Para qué estudios sirve?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                El visado de estudios cubre una amplia variedad de formaciones en centros reconocidos:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '32px' }}>
                {[
                  'Grados universitarios y dobles grados en universidades españolas públicas o privadas.',
                  'Másteres y programas de posgrado.',
                  'Formación Profesional de grado medio o superior.',
                  'Cursos de idioma español en escuelas oficiales o academias reconocidas (duración superior a 90 días).',
                  'Programas de intercambio y movilidad académica (Erasmus, convenios bilaterales).',
                  'Doctorados e investigación en universidades y centros de investigación.',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '10px' }}>{item}</li>
                ))}
              </ul>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Documentación necesaria
              </h2>
              <div style={{ background: 'var(--navy-faint)', borderRadius: 'var(--radius-md)', padding: '28px', marginBottom: '32px' }}>
                {[
                  { titulo: 'Pasaporte en vigor', desc: 'Con al menos un año de validez desde la fecha prevista de regreso. Fotocopia de todas las páginas con sellos o anotaciones.' },
                  { titulo: 'Formulario de solicitud de visado de larga estancia', desc: 'Cumplimentado y firmado. Disponible en la web del consulado español en tu país.' },
                  { titulo: 'Carta de admisión del centro de estudios', desc: 'Documento oficial del centro donde conste que estás matriculado o admitido para el curso académico correspondiente.' },
                  { titulo: 'Justificante de medios económicos', desc: 'Extractos bancarios de los últimos 3-6 meses, carta de patrocinio familiar con documentación del patrocinador, beca confirmada, o combinación de los anteriores. El importe orientativo exigido es el IPREM mensual (alrededor de 600-700€/mes).' },
                  { titulo: 'Seguro médico con cobertura en España', desc: 'Seguro privado que cubra la estancia completa, con repatriación y asistencia sanitaria en España. No se acepta el EHIC ni la tarjeta sanitaria de otro país.' },
                  { titulo: 'Certificado de antecedentes penales', desc: 'Del país o países donde hayas residido en los últimos 5 años. Debe estar apostillado y traducido por traductor jurado si no está en español.' },
                  { titulo: 'Fotografía reciente', desc: 'Formato pasaporte, fondo blanco, en color.' },
                  { titulo: 'Pago de la tasa consular', desc: 'El importe varía según el país. Consulta la tarifa actualizada en el consulado español de tu ciudad.' },
                ].map(({ titulo, desc }) => (
                  <div key={titulo} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--navy)', marginBottom: '4px' }}>{titulo}</p>
                    <p style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.6 }}>{desc}</p>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Proceso paso a paso
              </h2>
              {[
                { num: '01', titulo: 'Obtén la admisión en un centro de estudios español', desc: 'Antes de solicitar el visado, necesitas una carta oficial de admisión o matrícula. Investiga los programas que te interesan, completa el proceso de admisión y solicita la carta cuando esté confirmada.' },
                { num: '02', titulo: 'Reúne toda la documentación', desc: 'Prepara todos los documentos con suficiente antelación. El certificado de antecedentes penales puede tardar semanas, especialmente si hay que apostillarlo y traducirlo.' },
                { num: '03', titulo: 'Solicita cita en el consulado', desc: 'Reserva cita en el consulado o embajada de España en tu ciudad. En algunos países la demanda es alta y los plazos se estiran. Hazlo con al menos 2-3 meses de antelación respecto al inicio de tus estudios.' },
                { num: '04', titulo: 'Acude a la cita y entrega la documentación', desc: 'Presenta la solicitud en persona. En muchos consulados se toman las huellas dactilares en esta misma cita. Lleva todos los documentos originales y copias.' },
                { num: '05', titulo: 'Espera la resolución', desc: 'El plazo de resolución es de 1 a 3 meses. Si se concede, recibirás el visado en tu pasaporte. Tienes 3 meses desde la concesión para entrar en España.' },
                { num: '06', titulo: 'Tramita la autorización de estancia en España', desc: 'Una vez en España, y antes de que caduque el visado inicial (90 días), debes solicitar la Tarjeta de Identidad de Extranjero (TIE) en la comisaría o extranjería.' },
              ].map(({ num, titulo, desc }) => (
                <div key={num} style={{ display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', fontWeight: '700', color: 'var(--gold)', minWidth: '32px' }}>{num}</span>
                  <div>
                    <p style={{ fontSize: '15px', fontWeight: '700', color: 'var(--navy)', marginBottom: '4px' }}>{titulo}</p>
                    <p style={{ fontSize: '15px', color: 'var(--ink-mid)', lineHeight: 1.7 }}>{desc}</p>
                  </div>
                </div>
              ))}

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px', marginTop: '8px' }}>
                Consejos para una solicitud exitosa
              </h2>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                {[
                  'Empieza el proceso con al menos 4-5 meses de antelación respecto al inicio del curso.',
                  'Verifica que el centro de estudios está reconocido por las autoridades educativas españolas.',
                  'Asegúrate de que el seguro médico cubre específicamente a España y no solo "Europa".',
                  'Conserva copia de toda la documentación entregada en el consulado.',
                  'Si presentas medios económicos de familiares, prepara también documentación que justifique el vínculo familiar (libro de familia, partida de nacimiento).',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '10px' }}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} style={{ marginTop: '56px', paddingTop: '48px', borderTop: '2px solid var(--border)' }}>
              <span className="section-label">Preguntas frecuentes</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '32px' }}>
                Dudas sobre el visado de estudios
              </h2>
              {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                <FAQ key={name} question={name} answer={acceptedAnswer.text} />
              ))}
            </motion.div>

            <motion.div {...fadeUp} style={{ marginTop: '56px', background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 100%)', borderRadius: 'var(--radius-xl)', padding: '40px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--white)', marginBottom: '12px' }}>
                ¿Necesitas ayuda con el visado de estudios?
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', lineHeight: 1.7 }}>
                Te asesoramos sobre los requisitos específicos para tu país y tipo de estudios. Consulta gratuita.
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
