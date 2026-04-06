import { MessageCircle, Calendar, Clock, ArrowLeft, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Reagrupación Familiar en España: Quién Puede Pedir y Cómo Tramitarla (2026)",
  "datePublished": "2026-01-28",
  "author": { "@type": "Person", "name": "Pau Iglesias" },
  "publisher": { "@type": "Organization", "name": "Travesía Legal" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cuánto tiempo tarda la reagrupación familiar en España?", "acceptedAnswer": { "@type": "Answer", "text": "El plazo legal es de tres meses, pero en la práctica suele tardar entre cuatro y ocho meses dependiendo del consulado español en el país de origen del familiar y de la carga de trabajo de la Delegación del Gobierno. Recomendamos iniciar el trámite con suficiente antelación." } },
    { "@type": "Question", "name": "¿Puedo reagrupar a mis padres en España?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, pero solo si tienes la residencia de larga duración (cinco años de residencia continuada) y puedes demostrar que los padres están a tu cargo y que cuentas con medios económicos suficientes para mantenerlos. La reagrupación de padres es más exigente en cuanto a requisitos económicos." } },
    { "@type": "Question", "name": "¿Qué ingresos necesito para reagrupar a un familiar?", "acceptedAnswer": { "@type": "Answer", "text": "Para reagrupar a un familiar se requieren ingresos mínimos del 150% del IPREM mensual para el reagrupante y su cónyuge, más un 50% adicional por cada familiar reagrupado. En 2026 el IPREM mensual es de 620 €, por lo que con un familiar se necesitarían unos 1.240 € netos al mes." } },
    { "@type": "Question", "name": "¿Pueden trabajar los familiares reagrupados?", "acceptedAnswer": { "@type": "Answer", "text": "El cónyuge reagrupado y los hijos mayores de 16 años tienen derecho a trabajar desde que obtienen su autorización de residencia por reagrupación familiar, sin necesidad de una autorización de trabajo separada. Esta es una de las grandes ventajas de la reagrupación frente a otros permisos." } },
    { "@type": "Question", "name": "¿Qué pasa si me divorcio del cónyuge reagrupado?", "acceptedAnswer": { "@type": "Answer", "text": "Si el matrimonio se disuelve, el cónyuge reagrupado puede solicitar una autorización de residencia independiente si lleva al menos dos años en España con residencia legal. También puede mantener su residencia si hay hijos en común o si ha sido víctima de violencia de género." } },
  ]
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

export default function ReagrupacionFamiliar() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)', paddingTop: 'calc(var(--nav-height) + 60px)', paddingBottom: '60px' }}>
        <div className="container">
          <div className="animate-on-scroll">
            <a href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '24px', textDecoration: 'none' }}>
              <ArrowLeft size={14} /> Volver al blog
            </a>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ background: '#EBF4FF', color: '#1E3A6E', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px' }}>Extranjería</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Clock size={12} /> 7 min de lectura</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Calendar size={12} /> 28 enero 2026</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: '720px' }}>
              Reagrupación Familiar en España: Quién Puede Pedir y Cómo Tramitarla (2026)
            </h1>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--white)', padding: '64px 0' }}>
        <div className="container">
          <article style={{ maxWidth: '720px', margin: '0 auto', width: '100%' }}>
            <div className="animate-on-scroll">
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px', marginTop: '0' }}>
                ¿Qué es la reagrupación familiar?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                La reagrupación familiar es el derecho que tienen los extranjeros residentes legales en España a traer a vivir con ellos a determinados familiares que se encuentran en el extranjero. Es uno de los pilares del sistema de inmigración español y uno de los trámites más solicitados por latinoamericanos que llevan tiempo establecidos en España y quieren reunirse con su cónyuge, hijos u otros familiares directos.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                Para poder reagrupar, el residente en España —llamado "reagrupante"— debe cumplir ciertos requisitos económicos y de tiempo de residencia, y los familiares reagrupados deberán solicitar un visado de residencia por reagrupación familiar en el consulado español de su país de origen.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                ¿A quién se puede reagrupar?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                La ley española permite reagrupar a los siguientes familiares:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '32px' }}>
                {[
                  'Cónyuge o pareja de hecho registrada (no separados legalmente y con vínculo real, no de conveniencia).',
                  'Hijos menores de 18 años del reagrupante o de su cónyuge, incluidos los adoptados.',
                  'Hijos mayores de 18 años con discapacidad que no puedan proveer a sus propias necesidades.',
                  'Padres del reagrupante o de su cónyuge, siempre que el reagrupante tenga residencia de larga duración y los padres estén a su cargo.',
                  'Representante legal de menores extranjeros residentes en España.',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '10px' }}>{item}</li>
                ))}
              </ul>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Requisitos del reagrupante
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                El extranjero residente que quiere reagrupar debe acreditar los siguientes requisitos en el momento de presentar la solicitud:
              </p>
              <div style={{ background: 'var(--navy-faint)', borderRadius: 'var(--radius-md)', padding: '28px', marginBottom: '32px' }}>
                {[
                  { req: 'Residencia legal de al menos un año', desc: 'Y tener autorización para residir al menos otro año más. Si tienes un permiso de residencia temporal de dos años, estás en condiciones de reagrupar.' },
                  { req: 'Ingresos económicos suficientes', desc: 'Al menos el 150% del IPREM mensual para reagrupante y cónyuge (≈930 €), más un 50% adicional por cada familiar reagrupado. Los ingresos se calculan sobre los últimos seis meses.' },
                  { req: 'Vivienda adecuada', desc: 'Certificado de habitabilidad o informe de vivienda emitido por el ayuntamiento que acredite que el inmueble tiene las condiciones adecuadas para el número de personas que van a residir.' },
                  { req: 'Ausencia de antecedentes penales', desc: 'Ni en España ni en países de residencia anterior durante los últimos cinco años.' },
                ].map(({ req, desc }) => (
                  <div key={req} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--border)' }}>
                    <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px' }}>{req}</p>
                    <p style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                El proceso de reagrupación paso a paso
              </h2>
              {[
                { num: '01', titulo: 'Solicitud en España', desc: 'El reagrupante presenta la solicitud (formulario EX-02) en la Delegación del Gobierno de su provincia, junto con toda la documentación acreditativa de los requisitos.' },
                { num: '02', titulo: 'Resolución de la Delegación', desc: 'Si la solicitud es favorable, se emite una resolución que autoriza al familiar a solicitar el visado. El plazo legal es de tres meses pero puede extenderse.' },
                { num: '03', titulo: 'Solicitud de visado en el consulado', desc: 'El familiar en el extranjero solicita el visado de residencia por reagrupación familiar en el consulado español del país donde se encuentra, aportando la resolución y la documentación personal.' },
                { num: '04', titulo: 'Viaje a España y obtención de la TIE', desc: 'Con el visado, el familiar viaja a España. En el plazo de un mes desde la entrada debe solicitar la Tarjeta de Identidad de Extranjero (TIE) en la comisaría correspondiente.' },
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
                Documentación necesaria para reagrupar
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                La documentación varía según el familiar que se reagrupa, pero en general se requiere:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                {[
                  'Formulario de solicitud EX-02 debidamente cumplimentado.',
                  'Pasaporte en vigor del reagrupante y del familiar a reagrupar.',
                  'Certificado de matrimonio o libro de familia (apostillado y traducido si procede).',
                  'Certificados de nacimiento de los hijos (apostillados y traducidos).',
                  'Nóminas o declaración del IRPF de los últimos meses para acreditar ingresos.',
                  'Contrato de alquiler o escritura de propiedad + informe de habitabilidad del ayuntamiento.',
                  'Certificado de empadronamiento del reagrupante.',
                  'Certificado de antecedentes penales del reagrupante.',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8 }}>
                Todos los documentos extranjeros deben estar apostillados o legalizados y traducidos al español por un traductor jurado oficial. La falta de cualquier documento o la presentación de traducciones no juradas es la causa más frecuente de retrasos y denegaciones en las reagrupaciones familiares.
              </p>
            </div>

            <div className="animate-on-scroll" style={{ marginTop: '56px', paddingTop: '48px', borderTop: '2px solid var(--border)' }}>
              <span className="section-label">Preguntas frecuentes</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '32px' }}>
                Dudas sobre la reagrupación familiar
              </h2>
              {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                <FAQ key={name} question={name} answer={acceptedAnswer.text} />
              ))}
            </div>

            <div className="animate-on-scroll" style={{ marginTop: '56px', background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 100%)', borderRadius: 'var(--radius-xl)', padding: '40px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--white)', marginBottom: '12px' }}>
                ¿Quieres traer a tu familia a España?
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', lineHeight: 1.7 }}>
                Gestionamos reagrupaciones familiares en Barcelona y Sabadell con un alto índice de éxito. Consulta tu caso sin compromiso.
              </p>
              <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} /> Consulta por WhatsApp
              </InteractiveButton>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
