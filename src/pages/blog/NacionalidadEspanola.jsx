import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Clock, ArrowLeft, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo Obtener la Nacionalidad Española: Guía para Latinoamericanos (2026)",
  "datePublished": "2026-02-05",
  "author": { "@type": "Person", "name": "Pau Iglesias" },
  "publisher": { "@type": "Organization", "name": "Travesía Legal" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cuánto tiempo tarda en concederse la nacionalidad española?", "acceptedAnswer": { "@type": "Answer", "text": "El plazo oficial es de un año desde la presentación de la solicitud completa. Sin embargo, en la práctica el Ministerio de Justicia está tardando entre doce y veinticuatro meses dependiendo del volumen de solicitudes. Los expedientes con documentación completa y sin incidencias tienden a resolverse antes." } },
    { "@type": "Question", "name": "¿Necesito renunciar a mi nacionalidad de origen para obtener la española?", "acceptedAnswer": { "@type": "Answer", "text": "Los ciudadanos de países iberoamericanos (Argentina, Bolivia, Chile, Colombia, Costa Rica, Cuba, Ecuador, Guatemala, Honduras, México, Nicaragua, Panamá, Paraguay, Perú, República Dominicana, Uruguay y Venezuela) no necesitan renunciar a su nacionalidad de origen. España mantiene convenios de doble nacionalidad con todos estos países." } },
    { "@type": "Question", "name": "¿Qué es la prueba CCSE y cómo prepararla?", "acceptedAnswer": { "@type": "Answer", "text": "La CCSE (Conocimientos Constitucionales y Socioculturales de España) es un examen de 25 preguntas tipo test sobre historia, cultura, geografía y política española. Se puede realizar en el Instituto Cervantes. El material oficial de preparación está disponible en su web y hay muchas aplicaciones de práctica. Para superar el examen se requieren 15 respuestas correctas." } },
    { "@type": "Question", "name": "¿Puedo solicitar la nacionalidad si tengo hijos nacidos en España?", "acceptedAnswer": { "@type": "Answer", "text": "Tener hijos nacidos en España no te da derecho automático a la nacionalidad española, pero es un factor que los servicios sociales valoran positivamente en el informe de arraigo. El trámite de nacionalidad sigue requiriendo cumplir los requisitos de residencia legal continuada (dos años para iberoamericanos)." } },
    { "@type": "Question", "name": "¿Qué documentos del país de origen necesito apostillar?", "acceptedAnswer": { "@type": "Answer", "text": "Para la solicitud de nacionalidad necesitas apostillar: el certificado de nacimiento (literal), el certificado de estado civil (soltería, matrimonio o divorcio) y el certificado de antecedentes penales. Todos deben estar expedidos recientemente (menos de tres meses de antigüedad en algunos casos) y traducidos por traductor jurado si no están en español." } },
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

export default function NacionalidadEspanola() {
  return (
    <>
      <Helmet>
        <title>Cómo Obtener la Nacionalidad Española: Guía para Latinoamericanos 2026 | Travesía Legal</title>
        <meta name="description" content="Todo sobre la nacionalidad española para latinoamericanos: requisitos, plazos, prueba CCSE, documentación y doble nacionalidad. Especialistas en Barcelona y Sabadell." />
        <link rel="canonical" href="https://travesialegal.com/blog/nacionalidad-espanola-latinoamericanos-requisitos" />
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
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Calendar size={12} /> 5 febrero 2026</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: '720px' }}>
              Cómo Obtener la Nacionalidad Española: Guía para Latinoamericanos (2026)
            </h1>
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'var(--white)', padding: '64px 0' }}>
        <div className="container">
          <article style={{ maxWidth: '720px', margin: '0 auto', width: '100%' }}>
            <motion.div {...fadeUp}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px', marginTop: '0' }}>
                La ventaja iberoamericana: solo dos años para la nacionalidad
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Una de las grandes ventajas que tienen los ciudadanos latinoamericanos en España es el plazo reducido de residencia para solicitar la nacionalidad española. Mientras que la mayoría de extranjeros necesitan acreditar diez años de residencia legal continua, los ciudadanos de países iberoamericanos solo necesitan dos años. Esta ventaja, establecida en el artículo 22 del Código Civil, es uno de los lazos históricos más concretos entre España y América Latina.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                Además, la mayoría de países latinoamericanos tienen convenios de doble nacionalidad con España, lo que significa que al obtener la nacionalidad española no pierdes la de tu país de origen. Puedes ser ciudadano de ambos países simultáneamente.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Plazos de residencia según nacionalidad
              </h2>
              <div style={{ background: 'var(--navy-faint)', borderRadius: 'var(--radius-md)', padding: '24px', marginBottom: '32px' }}>
                {[
                  { grupo: 'Iberoamericanos, andorranos, filipinos, ecuatoguineanos y sefardíes', plazo: '2 años' },
                  { grupo: 'Nacidos en territorios que fueron parte de España', plazo: '1 año' },
                  { grupo: 'Cónyuge de español (con matrimonio no disuelto)', plazo: '1 año' },
                  { grupo: 'Nacidos en España de padre o madre originariamente españoles', plazo: '1 año' },
                  { grupo: 'Resto de extranjeros (régimen general)', plazo: '10 años' },
                ].map(({ grupo, plazo }) => (
                  <div key={grupo} style={{ display: 'flex', gap: '16px', marginBottom: '12px', alignItems: 'flex-start', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                    <span style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.6, flex: 1 }}>{grupo}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: '700', color: 'var(--gold-dark)', whiteSpace: 'nowrap' }}>{plazo}</span>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Requisitos para solicitar la nacionalidad española
              </h2>
              <ul style={{ paddingLeft: '24px', marginBottom: '32px' }}>
                {[
                  'Residencia legal y continuada en España durante el plazo correspondiente (dos años para latinoamericanos).',
                  'No tener antecedentes penales en España ni en el país de origen durante los últimos cinco años.',
                  'Superar la prueba CCSE (Conocimientos Constitucionales y Socioculturales de España) del Instituto Cervantes.',
                  'Superar la prueba DELE A2 (nivel de español) — excepto los nacionales de países hispanohablantes, que están exentos.',
                  'Buena conducta cívica acreditada.',
                  'Integración suficiente en la sociedad española.',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '10px' }}>{item}</li>
                ))}
              </ul>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Documentación necesaria
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                La solicitud se presenta ante el Registro Civil del domicilio. Desde 2022, el proceso está plenamente digitalizado y se tramita a través de la sede electrónica del Ministerio de Justicia. Los documentos que necesitas son:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '32px' }}>
                {[
                  'Formulario de solicitud (disponible en sede electrónica del Ministerio de Justicia).',
                  'Pasaporte en vigor.',
                  'Tarjeta de identidad de extranjero (TIE) o NIE.',
                  'Certificado de nacimiento apostillado y traducido (literal, expedido recientemente).',
                  'Certificado de estado civil apostillado y traducido (soltería, matrimonio o divorcio).',
                  'Certificado de antecedentes penales del país de origen apostillado y traducido.',
                  'Certificado de empadronamiento.',
                  'Certificado de antecedentes penales de España (del Ministerio de Justicia).',
                  'Diplomas de las pruebas CCSE y DELE A2 (si aplica).',
                  'Justificante de pago de la tasa (modelo 790 código 026).',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Las pruebas del Instituto Cervantes: CCSE y DELE
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                La prueba CCSE consta de 25 preguntas tipo test sobre historia de España, cultura, geografía, política e instituciones. Se necesitan 15 respuestas correctas para superar el examen. El Instituto Cervantes ofrece material de preparación oficial y la prueba se realiza varias veces al año en sus centros. La cuota en 2026 es de 90 € por examen.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                La prueba de español DELE A2 solo es obligatoria para los nacionales de países no hispanohablantes. Los latinoamericanos quedan exentos de este requisito al tener el español como lengua oficial.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '0' }}>
                Ambas pruebas tienen una validez indefinida una vez superadas, por lo que puedes realizarlas antes de completar los dos años de residencia y tenerlas listas cuando llegue el momento de solicitar la nacionalidad.
              </p>
            </motion.div>

            <motion.div {...fadeUp} style={{ marginTop: '56px', paddingTop: '48px', borderTop: '2px solid var(--border)' }}>
              <span className="section-label">Preguntas frecuentes</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '32px' }}>
                Dudas sobre la nacionalidad española
              </h2>
              {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                <FAQ key={name} question={name} answer={acceptedAnswer.text} />
              ))}
            </motion.div>

            <motion.div {...fadeUp} style={{ marginTop: '56px', background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 100%)', borderRadius: 'var(--radius-xl)', padding: '40px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--white)', marginBottom: '12px' }}>
                ¿Quieres que gestionemos tu nacionalidad española?
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', lineHeight: 1.7 }}>
                Más de 200 expedientes de nacionalidad gestionados. Consulta tu caso sin compromiso.
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
