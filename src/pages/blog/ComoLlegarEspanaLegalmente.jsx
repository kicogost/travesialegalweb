import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Clock, ArrowLeft, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo llegar a España legalmente desde un inicio (2026)",
  "datePublished": "2026-03-21",
  "author": { "@type": "Person", "name": "Pau Iglesias" },
  "publisher": { "@type": "Organization", "name": "Travesía Legal" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cuál es la diferencia entre el visado de estudios y la contratación en origen?", "acceptedAnswer": { "@type": "Answer", "text": "El visado de estudios permite venir a España para cursar estudios reglados. La contratación en origen permite ser contratado por una empresa española desde tu país, obteniendo una autorización de residencia y trabajo antes de llegar. Son dos vías legales distintas con requisitos y plazos diferentes." } },
    { "@type": "Question", "name": "¿Puedo trabajar con un visado de estudios?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, pero con limitaciones. El visado de estudios permite trabajar hasta 30 horas semanales en actividades compatibles con los estudios. Debes solicitar la autorización de trabajo correspondiente para poder ejercer de forma legal." } },
    { "@type": "Question", "name": "¿Cuánto tarda la contratación en origen?", "acceptedAnswer": { "@type": "Answer", "text": "El proceso de contratación en origen puede tardar entre 2 y 6 meses desde que la empresa presenta la oferta hasta que el trabajador obtiene el visado en el consulado. Los plazos varían según el consulado y el país de origen." } },
    { "@type": "Question", "name": "¿Qué pasa si entro a España sin visado correcto?", "acceptedAnswer": { "@type": "Answer", "text": "Entrar sin visado o con un visado de turista con intención de trabajar o residir es una infracción que puede acarrear sanciones, expulsión y prohibición de entrada. Siempre es preferible planificar la entrada legal desde el inicio." } },
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

export default function ComoLlegarEspanaLegalmente() {
  return (
    <>
      <Helmet>
        <title>Cómo llegar a España legalmente desde un inicio (2026) | Travesía Legal</title>
        <meta name="description" content="Guía completa sobre las opciones para llegar a España de forma legal: visado de estudios, contratación en origen y los pasos a seguir en cada caso." />
        <link rel="canonical" href="https://travesialegal.com/blog/como-llegar-a-espana-legalmente" />
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
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Clock size={12} /> 9 min de lectura</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Calendar size={12} /> 21 marzo 2026</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: '720px' }}>
              Cómo llegar a España legalmente desde un inicio (2026)
            </h1>
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'var(--white)', padding: '64px 0' }}>
        <div className="container">
          <article style={{ maxWidth: '720px', margin: '0 auto', width: '100%' }}>
            <motion.div {...fadeUp}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px', marginTop: '0' }}>
                ¿Por qué es importante llegar de forma legal?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Muchas personas llegan a España con un visado de turista o sin visado, con la intención de regularizarse después. Esta estrategia, aunque comprensible, cierra puertas importantes: dificulta el acceso a permisos de trabajo, genera situaciones de irregularidad y puede llevar a sanciones o expulsiones.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                La buena noticia es que existen vías completamente legales para llegar a España desde el principio, tanto si tu objetivo es estudiar como si es trabajar. Planificarlo desde el origen es siempre la opción que más protege tus derechos y facilita tu integración a largo plazo.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Las dos grandes vías de entrada legal
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '24px' }}>
                Para ciudadanos de países que no forman parte de la Unión Europea, las dos principales vías de entrada legal son:
              </p>

              <div style={{ background: 'var(--navy-faint)', borderRadius: 'var(--radius-md)', padding: '28px', marginBottom: '32px' }}>
                {[
                  {
                    titulo: '1. Visado de estudios',
                    desc: 'Permite residir en España para cursar estudios reglados: ciclos formativos, grados universitarios, másteres, cursos de idiomas de larga duración, etc. Puede ser el primer paso para acceder al mercado laboral en España.'
                  },
                  {
                    titulo: '2. Contratación en origen',
                    desc: 'Una empresa española contrata a un trabajador extranjero desde su país. El trabajador obtiene el visado antes de viajar y llega a España con su situación completamente regularizada desde el primer día.'
                  },
                ].map(({ titulo, desc }) => (
                  <div key={titulo} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--border)' }}>
                    <p style={{ fontSize: '15px', fontWeight: '700', color: 'var(--navy)', marginBottom: '8px' }}>{titulo}</p>
                    <p style={{ fontSize: '15px', color: 'var(--ink-mid)', lineHeight: 1.7 }}>{desc}</p>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Opción 1: Visado de estudios
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                El visado de estudios es una autorización que permite residir en España durante el tiempo que duren los estudios para los que fue concedido. Es una vía accesible para muchos ciudadanos latinoamericanos, ya que los requisitos son más sencillos que para un permiso de trabajo.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                <strong>Requisitos principales:</strong>
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                {[
                  'Admisión en un centro de estudios reconocido en España (universidad, escuela oficial de idiomas, formación profesional, etc.).',
                  'Pasaporte en vigor con al menos un año de validez.',
                  'Medios económicos suficientes para cubrir los gastos de estancia (se exige acreditar entre 600€ y 1.000€/mes aproximadamente).',
                  'Seguro médico con cobertura en España.',
                  'Certificado de antecedentes penales del país de origen apostillado.',
                  'Pago de la tasa correspondiente.',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '10px' }}>{item}</li>
                ))}
              </ul>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                Una ventaja importante: los estudiantes con visado de estudios pueden trabajar hasta 30 horas semanales, lo que permite financiar parcialmente la estancia y adquirir experiencia profesional en España. Una vez terminados los estudios, es posible solicitar una autorización de búsqueda de empleo o de prácticas, que facilita la transición al mercado laboral.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Opción 2: Contratación en origen
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                La contratación en origen es la vía más directa para llegar a España con un contrato de trabajo desde el principio. La empresa española tramita la autorización de residencia y trabajo ante la Delegación del Gobierno, y el trabajador solicita el visado en el consulado español de su país.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                <strong>Cómo funciona el proceso:</strong>
              </p>
              {[
                { num: '01', titulo: 'La empresa presenta la oferta de empleo', desc: 'La empresa española solicita a la Delegación del Gobierno la autorización inicial de residencia y trabajo para el trabajador extranjero, justificando que no hay candidatos nacionales o comunitarios disponibles (certificado de inexistencia de demandantes de empleo del SEPE).' },
                { num: '02', titulo: 'Resolución de la autorización', desc: 'La Delegación del Gobierno resuelve la solicitud, que puede tardar entre 1 y 3 meses. Si es favorable, se notifica tanto a la empresa como al trabajador.' },
                { num: '03', titulo: 'Solicitud del visado en el consulado', desc: 'Con la autorización en mano, el trabajador acude al consulado español de su país para solicitar el visado de residencia y trabajo. El plazo es de un mes desde la notificación.' },
                { num: '04', titulo: 'Entrada en España', desc: 'Una vez concedido el visado, el trabajador tiene 3 meses para entrar en España. Al llegar, debe darse de alta en la Seguridad Social y obtener la Tarjeta de Identidad de Extranjero (TIE) en los 30 días siguientes.' },
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
                ¿Qué vía me conviene más?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                La elección depende de tu situación personal y de tus objetivos en España:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                {[
                  'Si quieres estudiar y después acceder al mercado laboral: el visado de estudios es el mejor punto de partida. Te permite formarte en España, conocer el entorno laboral y construir una red de contactos antes de buscar empleo.',
                  'Si ya tienes una empresa española dispuesta a contratarte: la contratación en origen es la vía más rápida y segura. Llegas con trabajo garantizado y tu situación completamente regularizada.',
                  'Si eres profesional con experiencia y quieres trabajar por cuenta propia: existen visados específicos para emprendedores y profesionales altamente cualificados (Ley de Startups).',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '10px' }}>{item}</li>
                ))}
              </ul>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8 }}>
                En Travesía Legal asesoramos sobre cuál es la mejor vía en cada caso particular, analizando el perfil del cliente, su país de origen y sus objetivos a largo plazo en España.
              </p>
            </motion.div>

            <motion.div {...fadeUp} style={{ marginTop: '56px', paddingTop: '48px', borderTop: '2px solid var(--border)' }}>
              <span className="section-label">Preguntas frecuentes</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '32px' }}>
                Dudas sobre cómo llegar a España legalmente
              </h2>
              {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                <FAQ key={name} question={name} answer={acceptedAnswer.text} />
              ))}
            </motion.div>

            <motion.div {...fadeUp} style={{ marginTop: '56px', background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 100%)', borderRadius: 'var(--radius-xl)', padding: '40px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--white)', marginBottom: '12px' }}>
                ¿Necesitas orientación para llegar a España legalmente?
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', lineHeight: 1.7 }}>
                Nuestro equipo te asesora sobre la mejor vía según tu perfil. Consulta gratuita sin compromiso.
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
