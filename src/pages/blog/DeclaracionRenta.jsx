import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Clock, ArrowLeft, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Declaración de la Renta 2026: Guía Completa para Particulares y Autónomos",
  "datePublished": "2026-03-10",
  "author": { "@type": "Person", "name": "Raul Lopez" },
  "publisher": { "@type": "Organization", "name": "Travesía Legal" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Quién está obligado a presentar la declaración de la renta?", "acceptedAnswer": { "@type": "Answer", "text": "En general, están obligados a declarar quienes hayan obtenido rendimientos del trabajo superiores a 22.000 € anuales de un solo pagador (o 15.000 € si tienen varios pagadores). Los autónomos con actividad económica siempre están obligados a declarar independientemente de sus ingresos." } },
    { "@type": "Question", "name": "¿Cuándo es la campaña de la renta 2026?", "acceptedAnswer": { "@type": "Answer", "text": "La campaña de la renta 2026 (ejercicio 2025) se inicia en abril de 2026 y finaliza el 30 de junio de 2026. Si el resultado es a ingresar y se quiere domiciliar el pago, el plazo cierra el 25 de junio." } },
    { "@type": "Question", "name": "¿Qué pasa si no presento la declaración de la renta?", "acceptedAnswer": { "@type": "Answer", "text": "Si estás obligado y no presentas la declaración, Hacienda puede iniciar un procedimiento sancionador. Las sanciones van desde el 50% hasta el 150% de la cuota no ingresada, con un mínimo de 300 €. También se aplican recargos e intereses de demora." } },
    { "@type": "Question", "name": "¿Puedo deducirme el alquiler en la declaración de la renta?", "acceptedAnswer": { "@type": "Answer", "text": "La deducción estatal por alquiler de vivienda habitual desapareció en 2015, pero si firmaste tu contrato antes del 1 de enero de 2015 y tus ingresos eran inferiores a 24.107,20 €, puedes seguir aplicándola. Muchas comunidades autónomas tienen deducciones autonómicas por alquiler propias." } },
    { "@type": "Question", "name": "¿Es conveniente hacer la declaración conjunta con mi pareja?", "acceptedAnswer": { "@type": "Answer", "text": "La tributación conjunta puede ser beneficiosa cuando uno de los cónyuges no tiene ingresos o estos son muy bajos, ya que se aplica una reducción adicional de 3.400 € en la base imponible. En parejas donde ambos trabajan, suele ser más ventajosa la declaración individual." } },
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

export default function DeclaracionRenta() {
  return (
    <>
      <Helmet>
        <title>Declaración de la Renta 2026: Guía Completa | Travesía Legal</title>
        <meta name="description" content="Todo lo que necesitas saber sobre la declaración de la renta 2026: quién está obligado, plazos, deducciones, tributación conjunta y errores más frecuentes." />
        <link rel="canonical" href="https://travesialegal.com/blog/declaracion-renta-2025-guia-completa" />
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
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Clock size={12} /> 9 min de lectura</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Calendar size={12} /> 10 marzo 2026</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: 'var(--white)', letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: '720px' }}>
              Declaración de la Renta 2026: Guía Completa para Particulares y Autónomos
            </h1>
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'var(--white)', padding: '64px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr min(680px, 100%)', gap: '0' }}>
          <article style={{ maxWidth: '720px', margin: '0 auto', width: '100%', gridColumn: '1 / -1' }}>
            <motion.div {...fadeUp}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px', marginTop: '0' }}>
                ¿Qué es la declaración de la renta y quién debe presentarla?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                La declaración de la renta —técnicamente el Impuesto sobre la Renta de las Personas Físicas (IRPF)— es el impuesto más importante que pagamos los residentes en España. A través de ella, cada contribuyente declara todos sus ingresos del año anterior: salarios, alquileres, ganancias de inversiones, rendimientos de actividades económicas, etc., y la Agencia Tributaria (Hacienda) determina si el contribuyente ha pagado de más —y le devuelve la diferencia— o de menos —y le reclama el pago.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                No todos los españoles y residentes están obligados a presentar la declaración, pero sí la gran mayoría. Los umbrales de obligación han variado en los últimos años, lo que genera confusión. A continuación detallamos quién debe declarar y quién está exento.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Umbrales de obligación: ¿tienes que declarar?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '12px' }}>
                Para el ejercicio 2025 (declaración presentada en 2026), están obligados a declarar:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                {[
                  'Trabajadores con ingresos del trabajo superiores a 22.000 € anuales de un único pagador.',
                  'Trabajadores con ingresos superiores a 15.000 € si tienen dos o más pagadores (y el segundo y siguientes superan los 1.500 €).',
                  'Autónomos y profesionales con cualquier nivel de ingresos de actividades económicas.',
                  'Quienes hayan obtenido rendimientos del capital mobiliario o ganancias patrimoniales superiores a 1.600 €.',
                  'Quienes hayan tenido pérdidas patrimoniales superiores a 500 €.',
                  'Quienes reciban rentas imputadas de bienes inmuebles, letras del Tesoro o subvenciones superiores a 1.000 €.',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                Aunque no estés obligado, puede ser conveniente declarar si el resultado es a devolver: Hacienda nunca te reclamará dinero si declaras voluntariamente y el resultado sale negativo para ti.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Calendario y plazos de la campaña 2026
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                La campaña de la declaración de la renta 2026 (ejercicio 2025) sigue el siguiente calendario orientativo:
              </p>
              <div style={{ background: 'var(--navy-faint)', borderRadius: 'var(--radius-md)', padding: '24px', marginBottom: '32px' }}>
                {[
                  { fecha: 'Abril 2026', hito: 'Apertura de Renta Web y presentación por internet (borrador disponible).' },
                  { fecha: 'Mayo 2026', hito: 'Inicio de atención telefónica de Hacienda para ayuda con la declaración.' },
                  { fecha: 'Junio 2026', hito: 'Atención presencial en oficinas de la Agencia Tributaria.' },
                  { fecha: '25 de junio', hito: 'Último día para domiciliar el pago si el resultado es a ingresar.' },
                  { fecha: '30 de junio', hito: 'Fin de la campaña. Fecha límite para presentar cualquier declaración.' },
                ].map(({ fecha, hito }) => (
                  <div key={fecha} style={{ display: 'flex', gap: '16px', marginBottom: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--gold-dark)', fontWeight: '600', minWidth: '110px', paddingTop: '2px' }}>{fecha}</span>
                    <span style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.6 }}>{hito}</span>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Principales deducciones que no debes perderte
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Una de las claves para pagar menos en la renta es conocer y aplicar correctamente las deducciones a las que tienes derecho. Muchos contribuyentes dejan dinero sobre la mesa por desconocimiento:
              </p>
              <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
                {[
                  'Deducción por maternidad: hasta 1.200 € anuales por cada hijo menor de 3 años si la madre trabaja.',
                  'Deducción por familia numerosa o personas con discapacidad a cargo.',
                  'Deducción por inversión en vivienda habitual (régimen transitorio para contratos anteriores a 2013).',
                  'Deducción por donativos: el 80% de los primeros 150 € donados a ONG certificadas y el 35% del exceso.',
                  'Planes de pensiones: aportaciones reducen la base imponible (hasta 1.500 € generales + 8.500 € empresa).',
                  'Deducciones autonómicas: cada comunidad tiene las suyas (alquiler, nacimiento de hijos, cuidado de mayores, etc.).',
                  'Gastos deducibles de autónomos: suministros, seguros, vehículo, formación, gestoría, etc.',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                ¿Declaración individual o conjunta?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Las parejas casadas tienen la opción de presentar la declaración de forma individual o conjunta. La regla general es la siguiente:
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                La tributación conjunta aplica una reducción adicional de 3.400 € sobre la base imponible general (o 2.150 € en el caso de familias monoparentales). Esto hace que la declaración conjunta sea ventajosa principalmente cuando uno de los cónyuges no trabaja o tiene ingresos muy bajos. Si ambos tienen ingresos similares, la declaración individual suele ser más beneficiosa porque se aplican dos mínimos personales.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                Renta Web permite simular ambas opciones antes de presentar, por lo que siempre conviene comparar el resultado antes de decidir. La opción elegida es irrevocable una vez presentada la declaración.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                Errores frecuentes en la declaración de la renta
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Presentar el borrador sin revisar es el error más común. Hacienda elabora el borrador con los datos que tiene, pero no siempre están completos: puede faltar información de rendimientos de alquileres, ganancias por venta de acciones, datos de cuentas extranjeras o deducciones autonómicas.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Otros errores habituales incluyen: no declarar ingresos del extranjero estando obligado (cuenta bancaria extranjera con saldo superior a 50.000 € requiere el modelo 720), olvidar incluir los rendimientos de plataformas digitales como Airbnb o Wallapop cuando superan los umbrales, o no aplicar la exención por reinversión en vivienda habitual cuando se ha vendido un piso y se ha comprado otro en el plazo de dos años.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '32px' }}>
                Si has cometido un error en una declaración anterior, puedes presentar una declaración rectificativa (antes llamada complementaria o sustitutiva). Si el error te perjudicó —pagaste de más o no aplicaste una deducción— puedes solicitar la rectificación en el plazo de cuatro años.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
                La renta cuando eres extranjero residente en España
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                Si llevas más de 183 días al año en España, eres considerado residente fiscal y debes declarar tu renta mundial en España, no solo tus ingresos de fuente española. Esto afecta especialmente a latinoamericanos con ingresos en su país de origen —alquileres, pensiones, dividendos— que deben incluirlos en su declaración española, aunque puede aplicarse la deducción por doble imposición internacional si España tiene convenio con ese país.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '0' }}>
                Los ciudadanos de países iberoamericanos que llevan residiendo legalmente en España dos años o más no deben confundir la residencia fiscal con el permiso de residencia: son dos conceptos independientes. Puedes tener permiso de residencia y no ser residente fiscal (si pasas más tiempo en tu país de origen) o al revés. Si tienes dudas sobre tu situación fiscal como extranjero, lo más recomendable es asesorarte con un especialista antes de presentar tu declaración.
              </p>
            </motion.div>

            {/* FAQ */}
            <motion.div {...fadeUp} style={{ marginTop: '56px', paddingTop: '48px', borderTop: '2px solid var(--border)' }}>
              <span className="section-label">Preguntas frecuentes</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '700', color: 'var(--navy)', marginBottom: '32px' }}>
                Dudas habituales sobre la declaración de la renta
              </h2>
              {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                <FAQ key={name} question={name} answer={acceptedAnswer.text} />
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div {...fadeUp} style={{ marginTop: '56px', background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 100%)', borderRadius: 'var(--radius-xl)', padding: '40px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--white)', marginBottom: '12px' }}>
                ¿Quieres que preparemos tu declaración de la renta?
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', lineHeight: 1.7 }}>
                Nuestros asesores fiscales en Barcelona y Sabadell te garantizan que no pagas ni un euro de más.
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
