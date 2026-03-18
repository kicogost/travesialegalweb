import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Clock, ArrowLeft, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Arraigo Social en España: Requisitos, Documentación y Proceso (2026)",
  "datePublished": "2026-02-18",
  "author": { "@type": "Person", "name": "Pau Iglesias" },
  "publisher": { "@type": "Organization", "name": "Travesía Legal" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cuánto tiempo tarda en resolverse el arraigo social?", "acceptedAnswer": { "@type": "Answer", "text": "El plazo legal de resolución es de tres meses desde la presentación. Sin embargo, en la práctica, la Delegación del Gobierno en Barcelona está tardando entre cuatro y siete meses dependiendo de la carga de trabajo. El silencio administrativo en arraigo social es negativo." } },
    { "@type": "Question", "name": "¿Puedo trabajar mientras tramito el arraigo social?", "acceptedAnswer": { "@type": "Answer", "text": "No. El arraigo social no autoriza a trabajar durante la tramitación. Solo cuando la resolución es favorable y se ha obtenido la tarjeta de identidad de extranjero (TIE) se puede trabajar legalmente. El contrato de trabajo o la oferta de empleo se presenta como requisito, pero no habilita para trabajar antes de la resolución." } },
    { "@type": "Question", "name": "¿Qué es el informe de arraigo y cómo se obtiene?", "acceptedAnswer": { "@type": "Answer", "text": "El informe de arraigo es emitido por los servicios sociales del ayuntamiento donde resides. Acredita tu integración social en España (relaciones familiares, inserción laboral, participación comunitaria). Se solicita en el ayuntamiento y puede tardar varias semanas. No todos los ayuntamientos lo exigen expresamente, pero la Delegación del Gobierno sí lo valora positivamente." } },
    { "@type": "Question", "name": "¿Qué pasa si me denegan el arraigo social?", "acceptedAnswer": { "@type": "Answer", "text": "Tienes derecho a interponer un recurso de alzada ante el Ministerio del Interior en el plazo de un mes desde la notificación, o directamente un recurso contencioso-administrativo en el juzgado competente. También puedes volver a solicitar el arraigo si mejoras la documentación o cumples nuevos requisitos." } },
    { "@type": "Question", "name": "¿Puedo solicitar el arraigo si tengo antecedentes penales?", "acceptedAnswer": { "@type": "Answer", "text": "Los antecedentes penales en España son causa de denegación del arraigo social si no están cancelados. Los antecedentes en el país de origen también deben declararse y pueden afectar a la resolución dependiendo de la gravedad. Es fundamental obtener el certificado de antecedentes penales del país de origen apostillado y verificar si están o no cancelados." } },
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

export default function ArrayigoSocial() {
  return (
    <>
      <Helmet>
        <title>Arraigo Social en España: Requisitos y Documentación 2026 | Travesía Legal</title>
        <meta name="description" content="Guía completa sobre el arraigo social: requisitos, documentos necesarios, proceso paso a paso y errores a evitar. Especialistas en Barcelona y Sabadell." />
        <link rel="canonical" href="https://travesialegal.com/blog/arraigo-social-requisitos-documentacion" />
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
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Calendar size={12} /> 18 febrero 2026</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: '720px' }}>
              Arraigo Social en España: Requisitos, Documentación y Proceso (2026)
            </h1>
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'var(--white)', padding: '64px 0' }}>
        <div className="container">
          <article style={{ maxWidth: '720px', margin: '0 auto', width: '100%' }}>
            <motion.div {...fadeUp}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px', marginTop: '0' }}>
                ¿Qué es el arraigo social?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                El arraigo social es una autorización de residencia y trabajo temporal que permite regularizar la situación en España a personas extranjeras en situación irregular que llevan al menos tres años viviendo en el país. Es la vía más utilizada por latinoamericanos para obtener su primer permiso de residencia legal cuando no cumplen otros requisitos.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                A diferencia del arraigo familiar (que requiere tener cónyuge o hijos con residencia en España) o el arraigo laboral (que exige demostrar una relación laboral de al menos seis meses), el arraigo social se basa en el tiempo de permanencia y en vínculos familiares con residentes legales o en la integración social acreditada.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Requisitos del arraigo social
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '12px' }}>
                Para solicitar el arraigo social debes cumplir todos los siguientes requisitos de forma simultánea:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                {[
                  'Permanecer en España de forma continuada durante al menos tres años. La continuidad admite ausencias esporádicas y breves, pero no períodos prolongados fuera del país.',
                  'No tener antecedentes penales en España ni en los países donde hayas residido durante los últimos cinco años.',
                  'Disponer de un contrato de trabajo de al menos un año de duración (mínimo 30 horas semanales), o bien de lazos familiares con residentes legales en España (cónyuge, padres o hijos).',
                  'Acreditar medios económicos suficientes: si el contrato no lo garantiza, puede exigirse demostrar ingresos.',
                  'No ser ciudadano de un país de la UE (los ciudadanos europeos tienen libre circulación).',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '10px' }}>{item}</li>
                ))}
              </ul>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Documentación necesaria para el arraigo social
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                La documentación exigida puede variar ligeramente según la Delegación del Gobierno (Barcelona, Madrid, Valencia, etc.), pero en general se requiere:
              </p>
              <div style={{ background: 'var(--navy-faint)', borderRadius: 'var(--radius-md)', padding: '28px', marginBottom: '32px' }}>
                {[
                  { titulo: 'Pasaporte o documento de identidad', desc: 'Vigente o caducado desde hace menos de un año, con todas las páginas con sellos o visados.' },
                  { titulo: 'Certificado de empadronamiento histórico', desc: 'Expedido por el ayuntamiento. Debe acreditar al menos tres años de residencia continuada.' },
                  { titulo: 'Certificado de antecedentes penales de España', desc: 'Expedido por el Ministerio de Justicia (solicitable en sede electrónica con certificado digital o presencialmente).' },
                  { titulo: 'Certificado de antecedentes penales del país de origen', desc: 'Apostillado o legalizado y traducido por traductor jurado si no está en español.' },
                  { titulo: 'Contrato de trabajo', desc: 'Firmado por ambas partes, mínimo un año de duración y 30 horas semanales. El empleador debe estar al corriente con la Seguridad Social.' },
                  { titulo: 'Informe de arraigo (recomendado)', desc: 'Emitido por los servicios sociales del ayuntamiento. Acredita la integración social.' },
                  { titulo: 'Formulario EX-10', desc: 'Impreso oficial de solicitud de autorización de residencia por arraigo.' },
                  { titulo: 'Justificante de pago de la tasa', desc: 'Modelo 790 código 052. La tasa asciende a unos 15-18 € en 2026.' },
                ].map(({ titulo, desc }) => (
                  <div key={titulo} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--navy)', marginBottom: '4px' }}>{titulo}</p>
                    <p style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.6 }}>{desc}</p>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                El proceso paso a paso
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Entender el proceso completo te ayudará a prepararlo correctamente y evitar retrasos innecesarios:
              </p>
              {[
                { num: '01', titulo: 'Recopilación de documentación', desc: 'Obtén todos los documentos necesarios. El certificado de antecedentes penales del país de origen puede tardar semanas en llegar, empiézalo antes.' },
                { num: '02', titulo: 'Solicitud del informe de arraigo', desc: 'Acude a los servicios sociales de tu ayuntamiento. El informe puede tardar entre 2 y 6 semanas dependiendo del municipio.' },
                { num: '03', titulo: 'Firma del contrato de trabajo', desc: 'Consigue un empleador dispuesto a contratar en diferido (el contrato se activa cuando se concede el arraigo). El empresario debe estar al corriente con TGSS y AEAT.' },
                { num: '04', titulo: 'Pago de la tasa y presentación', desc: 'Paga el modelo 790-052 y presenta toda la documentación en la Unidad de Grandes Ciudades o Delegación del Gobierno correspondiente, o telemáticamente si dispones de representante.' },
                { num: '05', titulo: 'Resolución y obtención de la TIE', desc: 'Una vez resuelta favorablemente, solicita la Tarjeta de Identidad de Extranjero (TIE) en la comisaría. Es el documento que acredita tu residencia y te habilita para trabajar.' },
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
                Errores más comunes que retrasan o deniegan el arraigo
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Desde nuestra experiencia gestionando cientos de expedientes de arraigo social en Barcelona y Sabadell, los errores más frecuentes son:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                {[
                  'Presentar el certificado de antecedentes penales del país de origen sin apostillar o con traducción no jurada.',
                  'Aportar un contrato de trabajo que no alcanza las 30 horas semanales mínimas o es de duración inferior a un año.',
                  'No verificar que el empleador esté al corriente con la Seguridad Social y la Agencia Tributaria antes de firmar el contrato.',
                  'Empadronarse en un domicilio diferente al real, lo que genera inconsistencias que la Delegación detecta.',
                  'No haber solicitado el informe de arraigo a los servicios sociales o aportarlo de un ayuntamiento diferente al del empadronamiento.',
                  'Ausentarse de España durante períodos prolongados que interrumpen la continuidad de permanencia.',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8 }}>
                Contar con un especialista en extranjería desde el inicio no solo minimiza el riesgo de denegación, sino que puede acelerar significativamente los plazos al conocer los criterios exactos de cada Delegación del Gobierno.
              </p>
            </motion.div>

            <motion.div {...fadeUp} style={{ marginTop: '56px', paddingTop: '48px', borderTop: '2px solid var(--border)' }}>
              <span className="section-label">Preguntas frecuentes</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '32px' }}>
                Preguntas sobre el arraigo social
              </h2>
              {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                <FAQ key={name} question={name} answer={acceptedAnswer.text} />
              ))}
            </motion.div>

            <motion.div {...fadeUp} style={{ marginTop: '56px', background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 100%)', borderRadius: 'var(--radius-xl)', padding: '40px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--white)', marginBottom: '12px' }}>
                ¿Quieres que gestionemos tu arraigo social?
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', lineHeight: 1.7 }}>
                Pau Iglesias y su equipo gestionan expedientes de arraigo en Barcelona y Sabadell. Consulta gratuita sin compromiso.
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
