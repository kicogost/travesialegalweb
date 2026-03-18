import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Clock, ArrowLeft } from 'lucide-react'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Autónomos en España: Declaración de la Renta y Deducciones (2026)",
  "datePublished": "2026-02-10",
  "author": { "@type": "Person", "name": "Raul Lopez" },
  "publisher": { "@type": "Organization", "name": "Travesía Legal" }
}

const fadeUp = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

const articleStyles = {
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

export default function AutonomosDeclaracion() {
  return (
    <>
      <Helmet>
        <title>Autónomos en España: Declaración de la Renta y Deducciones (2026) | Travesía Legal</title>
        <meta name="description" content="Guía práctica para autónomos: modelos 303, 130, 111, deducciones fiscales y declaración anual de la renta en España 2026." />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
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
              <span style={{ background: '#FEF9EC', color: '#A8853A', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px' }}>Fiscal</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Clock size={12} /> 7 min de lectura</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Calendar size={12} /> 10 febrero 2026</span>
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
              Autónomos en España: Declaración de la Renta y Deducciones (2026)
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.7 }}>
              Por Raul Lopez · Asesor Fiscal y Laboral
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article */}
      <section style={{ background: 'var(--off-white)', padding: '64px 0 96px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '64px', alignItems: 'flex-start' }}>
            <motion.article {...fadeUp}>
              <p style={articleStyles.lead}>
                La realidad fiscal del autónomo en España puede resultar abrumadora al principio: múltiples modelos tributarios, plazos trimestrales inamovibles, la complejidad de las deducciones... y la amenaza constante de una sanción de Hacienda si algo no cuadra. Sin embargo, con una buena organización y el asesoramiento adecuado, la gestión fiscal de un autónomo puede convertirse en algo ordenado y predecible. Este artículo es una guía práctica y actualizada para 2026 que cubre todo lo que necesitas saber: qué impuestos pagas, qué modelos debes presentar cada trimestre, qué gastos puedes deducirte legalmente, y cómo presentar la declaración de la renta sin cometer los errores más habituales.
              </p>

              <h2 style={articleStyles.h2}>¿Qué impuestos paga un autónomo en España?</h2>
              <p style={articleStyles.p}>
                Un autónomo en España está sujeto a tres grandes figuras tributarias. El primero es el IRPF (Impuesto sobre la Renta de las Personas Físicas), que grava los rendimientos netos de la actividad económica. Los autónomos en estimación directa determinan su rendimiento neto restando los gastos deducibles de los ingresos, y ese resultado se integra en la base imponible general del IRPF junto con el resto de rentas del contribuyente.
              </p>
              <p style={articleStyles.p}>
                El segundo es el IVA (Impuesto sobre el Valor Añadido). La mayoría de autónomos están obligados a repercutir IVA en sus facturas (el tipo general es el 21%, aunque existen tipos reducidos del 10% y 4% según el sector) y a declararlo trimestralmente. Algunos autónomos están exentos de IVA por su actividad (médicos, dentistas, profesores...) pero deben verificar si su actividad cumple los requisitos de la exención.
              </p>
              <p style={articleStyles.p}>
                El tercero es la cotización a la Seguridad Social. Desde 2023 existe un nuevo sistema de cotización basado en los ingresos reales del autónomo, con 15 tramos que van desde una cuota mínima de 225€/mes hasta cuotas superiores para altos ingresos. Este sistema se implanta de forma gradual hasta 2031.
              </p>

              <h2 style={articleStyles.h2}>Modelos trimestrales obligatorios (303, 130, 111)</h2>
              <p style={articleStyles.p}>
                Los autónomos están obligados a presentar varios modelos tributarios de forma trimestral. Los plazos son los mismos cada año: del 1 al 20 (o 30 para domiciliaciones) de abril, julio, octubre y enero para los impuestos del trimestre anterior.
              </p>
              <p style={articleStyles.p}>
                El <strong>Modelo 303</strong> es la declaración trimestral de IVA. En él se liquida la diferencia entre el IVA repercutido en las facturas emitidas y el IVA soportado en las facturas recibidas. Si el resultado es positivo, se ingresa a Hacienda; si es negativo, se puede compensar en los trimestres siguientes o solicitar devolución en la declaración anual (Modelo 390).
              </p>
              <p style={articleStyles.p}>
                El <strong>Modelo 130</strong> es el pago fraccionado a cuenta del IRPF para autónomos en estimación directa. Se calcula como el 20% del rendimiento neto acumulado del año menos los pagos fraccionados previos ya ingresados. El objetivo es ir adelantando parte del IRPF que se liquidará definitivamente en la declaración de la renta de junio del año siguiente.
              </p>
              <p style={articleStyles.p}>
                El <strong>Modelo 111</strong> corresponde a la retención de IRPF sobre rendimientos del trabajo y de actividades profesionales. Lo presentan los autónomos que tienen empleados o que pagan honorarios a otros profesionales con retención aplicada.
              </p>

              <h2 style={articleStyles.h2}>Deducciones fiscales para autónomos: qué puedes desgravar</h2>
              <p style={articleStyles.p}>
                Las deducciones son el mecanismo que permite a los autónomos reducir su base imponible y, por tanto, pagar menos IRPF. La norma general es que los gastos deben estar relacionados con la actividad económica, estar justificados con factura o recibo, y estar contabilizados o registrados en los libros correspondientes.
              </p>
              <p style={articleStyles.p}>
                Los gastos más habituales que puede deducirse un autónomo incluyen: la cuota de la Seguridad Social (100% deducible), el alquiler del local de trabajo o, si trabaja desde casa, un porcentaje proporcional a la superficie dedicada a la actividad, los suministros del hogar (agua, luz, internet) en un 30% si trabaja desde casa, el material de oficina y papelería, los gastos de formación relacionados con la actividad, los seguros de responsabilidad civil, las cuotas de colegios profesionales, y los gastos de publicidad y marketing.
              </p>
              <p style={articleStyles.p}>
                Los gastos de vehículo son los más controvertidos: para deducir el 100% del IVA de la compra del vehículo es necesario que este se destine exclusivamente a la actividad, algo difícil de acreditar para la mayoría de los autónomos. En cuanto al IRPF, los vehículos solo son deducibles para actividades específicas (transporte, agentes comerciales).
              </p>

              <h2 style={articleStyles.h2}>La declaración de la renta: plazos y cómo presentarla</h2>
              <p style={articleStyles.p}>
                La declaración anual del IRPF es la liquidación definitiva de todos los impuestos sobre la renta del ejercicio anterior. Para los autónomos, no es un trámite opcional: si los ingresos de la actividad económica superan los 1.000€ anuales, la declaración es obligatoria.
              </p>
              <p style={articleStyles.p}>
                El plazo de presentación para la campaña de renta 2025 es del 1 de abril al 30 de junio de 2026. Las declaraciones se presentan a través de la Agencia Tributaria (Sede Electrónica de la AEAT) mediante el programa Renta Web o a través de una gestoría que disponga de representación fiscal.
              </p>
              <p style={articleStyles.p}>
                Para los autónomos, la declaración integra los rendimientos de actividades económicas (calculados a partir de los libros de ingresos y gastos), las retenciones ya soportadas, los pagos fraccionados realizados durante el año (modelos 130), y el resto de rentas del contribuyente (trabajo, capital mobiliario, ganancias patrimoniales...). El resultado puede ser a ingresar o a devolver en función de la diferencia entre lo ya pagado (retenciones y pagos fraccionados) y la cuota íntegra calculada.
              </p>

              <h2 style={articleStyles.h2}>Errores más comunes y cómo evitarlos</h2>
              <p style={articleStyles.p}>
                Años de experiencia gestionando autónomos nos permiten identificar los errores más frecuentes que se repiten en cada campaña fiscal. El primero y más costoso es no guardar las facturas de gastos o guardarlas sin las menciones obligatorias (NIF del emisor y del receptor, descripción del servicio, base imponible, tipo de IVA y cuota). Sin factura correcta, el gasto no es deducible.
              </p>
              <p style={articleStyles.p}>
                El segundo error habitual es confundir el IVA de las facturas recibidas. Solo puede deducirse el IVA de los gastos relacionados con la actividad económica, no el de los gastos personales. Mezclar ambos en el Modelo 303 es un error común que puede derivar en una liquidación paralela de Hacienda.
              </p>
              <p style={articleStyles.p}>
                Otro error frecuente es no presentar el Modelo 130 aunque el resultado sea cero. Incluso si en un trimestre no hay rendimiento neto positivo, la obligación de presentar el modelo subsiste (salvo que más del 70% de los ingresos ya lleven retención aplicada). No presentarlo genera sanciones por falta de declaración.
              </p>
              <p style={articleStyles.p}>
                Por último, no actualizar los datos censales cuando cambia la actividad, el domicilio o el régimen de estimación es un error que puede causar problemas en comprobaciones posteriores.
              </p>

              <h2 style={articleStyles.h2}>Preguntas frecuentes</h2>

              {[
                {
                  q: '¿Estoy obligado a presentar el Modelo 130 si ya tengo retenciones en mis facturas?',
                  a: 'No si el porcentaje de ingresos con retención es superior al 70% del total de los ingresos del trimestre. En ese caso, el autónomo queda exonerado de presentar el pago fraccionado, aunque debe acreditarlo ante Hacienda si se requiere. Sin embargo, si la proporción de ingresos con retención es inferior, la obligación de presentar el Modelo 130 se mantiene.',
                },
                {
                  q: '¿Puedo deducirme la cuota de autónomo si tengo pérdidas?',
                  a: 'Sí, la cuota de la Seguridad Social del autónomo es siempre deducible como gasto de la actividad económica, independientemente de que el resultado sea positivo o negativo. Las pérdidas pueden compensarse con los rendimientos de los cuatro ejercicios siguientes.',
                },
                {
                  q: '¿Qué es la estimación directa simplificada?',
                  a: 'La estimación directa simplificada es el régimen de tributación del IRPF más habitual para autónomos con ingresos inferiores a 600.000€ anuales. Permite deducir los gastos reales de la actividad con algunas simplificaciones contables, como la deducción de amortizaciones mediante tablas simplificadas y una provisión de difícil cobro del 5% sobre el rendimiento neto.',
                },
                {
                  q: '¿Qué es la tarifa plana para autónomos?',
                  a: 'La tarifa plana es una bonificación en la cuota de la Seguridad Social para nuevos autónomos que consiste en pagar solo 80€/mes durante el primer año, independientemente de los ingresos. A partir del segundo año la cuota se ajusta al tramo de ingresos reales según el nuevo sistema de cotización establecido en 2023.',
                },
                {
                  q: '¿Cuándo es conveniente contratar una gestoría?',
                  a: 'Desde el primer día como autónomo. Una gestoría te asegura que todas las obligaciones tributarias están correctamente cumplidas, te ayuda a maximizar las deducciones legales y te protege ante posibles requerimientos de Hacienda. El coste de una gestoría suele ser inferior a las sanciones que pueden generarse por errores en las declaraciones, y el tiempo ahorrado tiene un valor económico real.',
                },
              ].map(({ q, a }) => (
                <div key={q} style={{ background: 'var(--navy-faint)', borderRadius: 'var(--radius-md)', padding: '20px 24px', marginBottom: '16px' }}>
                  <p style={{ fontWeight: '600', color: 'var(--navy)', marginBottom: '8px', fontSize: '15px' }}>{q}</p>
                  <p style={{ color: 'var(--ink-mid)', fontSize: '14px', lineHeight: 1.7 }}>{a}</p>
                </div>
              ))}

              {/* CTA */}
              <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)', borderRadius: 'var(--radius-xl)', padding: '36px', textAlign: 'center', marginTop: '48px' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>
                  ¿Tienes dudas sobre tu declaración?
                </p>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', marginBottom: '24px' }}>
                  Consulta gratuita con Travesía Legal. Te orientamos sin compromiso.
                </p>
                <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} />
                  Consulta Gratuita
                </InteractiveButton>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside {...fadeUp} style={{ position: 'sticky', top: 'calc(var(--nav-height) + 24px)' }} className="article-sidebar">
              <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '28px', marginBottom: '20px' }}>
                <p style={{ fontWeight: '600', fontSize: '15px', color: 'var(--navy)', marginBottom: '16px' }}>Consulta gratuita</p>
                <p style={{ fontSize: '13px', color: 'var(--ink-mid)', lineHeight: 1.7, marginBottom: '20px' }}>
                  ¿Eres autónomo y tienes dudas fiscales? Te ayudamos sin compromiso.
                </p>
                <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer" style={{ width: '100%', justifyContent: 'center', fontSize: '14px' }}>
                  <MessageCircle size={16} />
                  WhatsApp
                </InteractiveButton>
              </div>
              <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '28px' }}>
                <p style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)', marginBottom: '16px', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Servicios relacionados</p>
                {[
                  { to: '/servicios/gestion-fiscal-contable', label: 'Gestión Fiscal y Contable' },
                  { to: '/servicios/asesoramiento-laboral', label: 'Asesoramiento Laboral' },
                  { to: '/gestoria-autonomos-barcelona', label: 'Gestoría Autónomos Barcelona' },
                  { to: '/gestoria-autonomos-sabadell', label: 'Gestoría Autónomos Sabadell' },
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
