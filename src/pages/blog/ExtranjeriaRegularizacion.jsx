import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Clock, ArrowLeft } from 'lucide-react'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Extranjería y Regularización para Latinoamericanos en España (2026)",
  "datePublished": "2026-01-15",
  "author": { "@type": "Person", "name": "Pau Iglesias" },
  "publisher": { "@type": "Organization", "name": "Travesía Legal" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cuánto tiempo tarda el arraigo social en resolverse?", "acceptedAnswer": { "@type": "Answer", "text": "El plazo legal es de tres meses, aunque en la práctica puede extenderse entre cuatro y seis meses." } },
    { "@type": "Question", "name": "¿Puedo trabajar mientras tramito el arraigo?", "acceptedAnswer": { "@type": "Answer", "text": "No, el arraigo social no autoriza a trabajar durante el trámite. La autorización solo se otorga cuando la resolución favorable es firme." } },
    { "@type": "Question", "name": "¿Qué pasa si me deniegan el arraigo?", "acceptedAnswer": { "@type": "Answer", "text": "Si la solicitud es denegada, tienes derecho a interponer un recurso de alzada en el plazo de un mes, o directamente un recurso contencioso-administrativo." } },
    { "@type": "Question", "name": "¿Puedo solicitar la nacionalidad con dos años de residencia siendo latinoamericano?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Los ciudadanos de países iberoamericanos pueden solicitar la nacionalidad española tras solo dos años de residencia legal y continuada." } },
    { "@type": "Question", "name": "¿Necesito apostillar los documentos de mi país de origen?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, todos los documentos públicos emitidos en el extranjero deben estar apostillados o legalizados y traducidos al español por un traductor jurado." } },
  ]
}

const fadeUp = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

export default function ExtranjeriaRegularizacion() {
  return (
    <>
      <Helmet>
        <title>Extranjería y Regularización para Latinoamericanos en España (2026) | Travesía Legal</title>
        <meta name="description" content="Guía completa sobre arraigo social, residencia y nacionalidad española para latinoamericanos en España. Requisitos, documentación y errores a evitar." />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)',
        paddingTop: 'calc(var(--nav-height) + 60px)',
        paddingBottom: '60px',
      }}>
        <div className="container">
          <motion.div initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '24px', textDecoration: 'none' }}>
              <ArrowLeft size={14} /> Volver al blog
            </Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ background: '#EBF4FF', color: '#1E3A6E', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px' }}>Extranjería</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Clock size={12} /> 8 min de lectura</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Calendar size={12} /> 15 enero 2026</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: '700',
              color: 'var(--white)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              maxWidth: '760px',
              marginBottom: '20px',
            }}>
              Extranjería y Regularización para Latinoamericanos en España (2026)
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.7 }}>
              Por Pau Iglesias · Especialista en Derecho de Extranjería
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section style={{ background: 'var(--off-white)', padding: '64px 0 96px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 320px',
            gap: '64px',
            alignItems: 'flex-start',
          }}>
            {/* Main content */}
            <motion.article {...fadeUp} style={{ fontFamily: 'var(--font-body)' }}>
              <div style={articleStyles.prose}>

                <p style={articleStyles.lead}>
                  Regularizar tu situación en España como ciudadano latinoamericano es uno de los pasos más importantes que puedes dar para construir una vida estable y con derechos plenos en el país. Vivir en situación irregular no solo implica limitaciones legales para trabajar, acceder a servicios o viajar, sino que también genera una incertidumbre constante que afecta a tu bienestar y el de tu familia. España cuenta con varios mecanismos legales para regularizar la situación de los inmigrantes que llevan tiempo en el país, y la clave está en conocerlos, preparar correctamente la documentación y presentar la solicitud en el momento adecuado. En esta guía completa te explicamos las principales vías de regularización disponibles, los requisitos específicos de cada una y los errores más comunes que debes evitar para maximizar tus posibilidades de éxito.
                </p>

                <h2 style={articleStyles.h2}>¿Qué es el arraigo social y quién puede pedirlo?</h2>
                <p style={articleStyles.p}>
                  El arraigo social es la vía de regularización más utilizada en España y está diseñada específicamente para personas que llevan al menos tres años residiendo en el país en situación irregular. Es una autorización de residencia temporal por circunstancias excepcionales que reconoce que, a pesar de la situación documental, existe un vínculo real con el territorio español.
                </p>
                <p style={articleStyles.p}>
                  Para poder solicitarlo es imprescindible cumplir varios requisitos: acreditar una permanencia continuada en España de al menos tres años (mediante empadronamiento, contratos, facturas a tu nombre, informes médicos o cualquier documento fehaciente), carecer de antecedentes penales tanto en España como en el país de origen o en los países en los que hayas residido en los últimos cinco años, y contar con un contrato de trabajo o un informe de arraigo emitido por el ayuntamiento de tu municipio de residencia.
                </p>
                <p style={articleStyles.p}>
                  El informe de arraigo municipal es un documento clave: acredita tu integración en la comunidad local, incluyendo tu participación en actividades sociales, el conocimiento del idioma español y los vínculos personales y familiares en España. Muchos ayuntamientos disponen de servicios de orientación y acompañamiento social que pueden ayudarte a preparar este informe. La solicitud se presenta ante la Delegación o Subdelegación del Gobierno competente por razón del domicilio, y el plazo de resolución es de tres meses, aunque en la práctica puede extenderse más.
                </p>

                <h2 style={articleStyles.h2}>Residencia inicial: requisitos y documentación necesaria</h2>
                <p style={articleStyles.p}>
                  La residencia temporal no lucrativa y la residencia por cuenta ajena son las vías más habituales para quienes llegan a España de forma regular desde Latinoamérica. La residencia temporal no lucrativa está destinada a personas que tienen medios económicos suficientes para vivir en España sin necesidad de trabajar, y se solicita desde el consulado español en el país de origen.
                </p>
                <p style={articleStyles.p}>
                  La residencia por cuenta ajena, en cambio, se solicita cuando tienes un contrato de trabajo en España. El empleador debe tramitar la autorización de residencia y trabajo, y el proceso implica demostrar que el puesto no puede ser cubierto por trabajadores ya presentes en el mercado laboral español (conocido como el requisito de "situación nacional de empleo"), salvo en el caso de ocupaciones en el catálogo de difícil cobertura.
                </p>
                <p style={articleStyles.p}>
                  Los documentos habitualmente requeridos incluyen: pasaporte en vigor con al menos seis meses de validez restante, contrato de trabajo firmado por el empleador, inscripción de la empresa en la Seguridad Social, certificado de antecedentes penales del país de origen debidamente apostillado y traducido, y en algunos casos, titulación académica o profesional si el puesto lo requiere. La solicitud se presenta en la Subdelegación del Gobierno y el plazo legal de resolución es de tres meses.
                </p>

                <h2 style={articleStyles.h2}>Renovaciones de residencia: plazos y errores más comunes</h2>
                <p style={articleStyles.p}>
                  Una vez obtenida la primera autorización de residencia, es fundamental no descuidar las renovaciones. El principal error que cometen muchos residentes extranjeros es no solicitar la renovación dentro del plazo establecido, lo que puede provocar la extinción del permiso y la necesidad de iniciar el proceso desde cero.
                </p>
                <p style={articleStyles.p}>
                  La regla general establece que la solicitud de renovación debe presentarse durante los 60 días naturales anteriores a la caducidad del permiso, o hasta los 90 días posteriores a esa fecha (aunque en este segundo caso se aplica sanción económica). Si la solicitud se presenta dentro del plazo y el permiso caduca mientras está en trámite, la persona sigue en situación regular gracias a la "prórroga automática de la autorización".
                </p>
                <p style={articleStyles.p}>
                  Los errores más frecuentes en las renovaciones incluyen: no actualizar el empadronamiento antes de presentar la solicitud, no acreditar correctamente los medios económicos (especialmente para residencias no lucrativas), presentar contratos de trabajo que no cumplen los requisitos mínimos de jornada o duración, y no solicitar la renovación de la Tarjeta de Identidad de Extranjero (TIE) junto con la autorización.
                </p>

                <h2 style={articleStyles.h2}>El proceso de nacionalidad española paso a paso</h2>
                <p style={articleStyles.p}>
                  La nacionalidad española por residencia es el objetivo final de muchos latinoamericanos que llevan años construyendo su vida en España. Para los ciudadanos iberoamericanos (incluidos todos los países latinoamericanos de habla hispana), el requisito de residencia se reduce a solo dos años de residencia legal, continua e inmediatamente anterior a la solicitud, frente a los diez años exigidos con carácter general.
                </p>
                <p style={articleStyles.p}>
                  El proceso completo incluye varias fases. Primero, debes solicitar cita previa en el Registro Civil competente y presentar la documentación: pasaporte, certificado de empadronamiento, certificado de residencia legal, extractos de cotizaciones a la Seguridad Social, certificados de antecedentes penales en España y en tu país de origen (apostillado y traducido), y el libro de familia si tienes cónyuge o hijos.
                </p>
                <p style={articleStyles.p}>
                  En paralelo, debes superar las pruebas del CCSE (Conocimientos Constitucionales y Socioculturales de España) y el DELE A2 (o superior) si el español no es tu lengua materna. Los ciudadanos latinoamericanos generalmente están exentos del DELE al ser hispanohablantes nativos, pero deben confirmar esta exención con el Registro Civil correspondiente.
                </p>
                <p style={articleStyles.p}>
                  El plazo de resolución es de 12 meses desde la presentación de la solicitud, aunque en la práctica puede extenderse. Una vez concedida la nacionalidad, se debe prestar juramento o promesa ante el encargado del Registro Civil y proceder a la inscripción en el Registro Civil.
                </p>

                <h2 style={articleStyles.h2}>Preguntas frecuentes</h2>

                {[
                  {
                    q: '¿Cuánto tiempo tarda el arraigo social en resolverse?',
                    a: 'El plazo legal de resolución del arraigo social es de tres meses desde la presentación de la solicitud. En la práctica, dependiendo de la carga de trabajo de la Delegación del Gobierno, el plazo puede extenderse entre cuatro y seis meses. La solicitud presentada en plazo genera un derecho de prórroga de la situación administrativa mientras se resuelve.',
                  },
                  {
                    q: '¿Puedo trabajar mientras tramito el arraigo?',
                    a: 'No, el arraigo social no autoriza a trabajar durante el trámite. La autorización de residencia y trabajo (en su caso) solo se otorga cuando la resolución favorable es firme. Trabajar sin autorización durante el trámite puede afectar negativamente a la resolución de la solicitud.',
                  },
                  {
                    q: '¿Qué pasa si me deniegan el arraigo?',
                    a: 'Si la solicitud de arraigo es denegada, tienes derecho a interponer un recurso de alzada ante el órgano superior jerárquico en el plazo de un mes, o directamente un recurso contencioso-administrativo ante los tribunales. Una gestoría especializada puede ayudarte a identificar los motivos de la denegación y preparar el recurso con garantías.',
                  },
                  {
                    q: '¿Puedo solicitar la nacionalidad con dos años de residencia siendo latinoamericano?',
                    a: 'Sí. Los ciudadanos de países iberoamericanos, incluidos todos los latinoamericanos, pueden solicitar la nacionalidad española tras solo dos años de residencia legal y continuada. Esta es una de las ventajas más significativas del vínculo histórico y cultural entre España e Iberoamérica.',
                  },
                  {
                    q: '¿Necesito apostillar los documentos de mi país de origen?',
                    a: 'Sí, todos los documentos públicos emitidos en el extranjero deben estar apostillados (si el país firmó el Convenio de La Haya de 1961) o legalizados consulares (si no lo firmó), y traducidos al español por un traductor jurado reconocido en España. Sin estos requisitos formales, los documentos no tienen validez legal ante la administración española.',
                  },
                ].map(({ q, a }) => (
                  <div key={q} style={{ background: 'var(--navy-faint)', borderRadius: 'var(--radius-md)', padding: '20px 24px', marginBottom: '16px' }}>
                    <p style={{ fontWeight: '600', color: 'var(--navy)', marginBottom: '8px', fontSize: '15px' }}>{q}</p>
                    <p style={{ color: 'var(--ink-mid)', fontSize: '14px', lineHeight: 1.7 }}>{a}</p>
                  </div>
                ))}

                {/* CTA */}
                <div style={{
                  background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '36px',
                  textAlign: 'center',
                  marginTop: '48px',
                }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>
                    ¿Necesitas ayuda con tu trámite?
                  </p>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', marginBottom: '24px' }}>
                    Consulta gratuita con Travesía Legal. Te orientamos sin compromiso.
                  </p>
                  <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={16} />
                    Consulta Gratuita
                  </InteractiveButton>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside {...fadeUp} style={{ position: 'sticky', top: 'calc(var(--nav-height) + 24px)' }} className="article-sidebar">
              <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '28px', marginBottom: '20px' }}>
                <p style={{ fontWeight: '600', fontSize: '15px', color: 'var(--navy)', marginBottom: '16px' }}>Consulta gratuita</p>
                <p style={{ fontSize: '13px', color: 'var(--ink-mid)', lineHeight: 1.7, marginBottom: '20px' }}>
                  ¿Tienes dudas sobre tu situación? Nuestros especialistas te orientan sin compromiso.
                </p>
                <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer" style={{ width: '100%', justifyContent: 'center', fontSize: '14px' }}>
                  <MessageCircle size={16} />
                  WhatsApp
                </InteractiveButton>
              </div>
              <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '28px' }}>
                <p style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)', marginBottom: '16px', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Servicios relacionados</p>
                {[
                  { to: '/servicios/extranjeria-y-nacionalidad', label: 'Extranjería y Nacionalidad' },
                  { to: '/gestoria-extranjeria-barcelona', label: 'Gestoría Extranjería Barcelona' },
                  { to: '/gestoria-extranjeria-sabadell', label: 'Gestoría Extranjería Sabadell' },
                ].map(l => (
                  <Link key={l.to} to={l.to} style={{ display: 'block', fontSize: '13px', color: 'var(--ink-mid)', marginBottom: '10px', textDecoration: 'none', paddingLeft: '12px', borderLeft: '2px solid var(--gold)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--navy)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-mid)'}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .article-sidebar { display: none !important; }
          section > div > div[style*='grid-template-columns: 1fr 320px'] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}

const articleStyles = {
  prose: {
    maxWidth: '720px',
  },
  lead: {
    fontSize: '18px',
    color: 'var(--ink-mid)',
    lineHeight: 1.8,
    marginBottom: '32px',
    fontStyle: 'italic',
    borderLeft: '3px solid var(--gold)',
    paddingLeft: '20px',
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontSize: '26px',
    fontWeight: '700',
    color: 'var(--navy)',
    marginTop: '48px',
    marginBottom: '20px',
    lineHeight: 1.2,
  },
  p: {
    fontSize: '16px',
    color: 'var(--ink-mid)',
    lineHeight: 1.8,
    marginBottom: '20px',
  },
}
