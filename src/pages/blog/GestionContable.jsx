import { MessageCircle, Calendar, Clock, ArrowLeft } from 'lucide-react'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Gestión Contable y Fiscal para Empresas en España (2026)",
  "datePublished": "2026-03-01",
  "author": { "@type": "Person", "name": "Raul Lopez" },
  "publisher": { "@type": "Organization", "name": "Travesía Legal" }
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

export default function GestionContable() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)',
        paddingTop: 'calc(var(--nav-height) + 60px)',
        paddingBottom: '60px',
      }}>
        <div className="container">
          <div className="animate-on-scroll">
            <a href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '24px', textDecoration: 'none' }}>
              <ArrowLeft size={14} /> Volver al blog
            </a>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ background: '#FEF9EC', color: '#A8853A', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px' }}>Fiscal</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Clock size={12} /> 7 min de lectura</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}><Calendar size={12} /> 1 marzo 2026</span>
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
              Gestión Contable y Fiscal para Empresas en España (2026)
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.7 }}>
              Por Raul Lopez · Asesor Fiscal y Laboral
            </p>
          </div>
        </div>
      </section>

      {/* Article */}
      <section style={{ background: 'var(--off-white)', padding: '64px 0 96px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '64px', alignItems: 'flex-start' }}>
            <article className="animate-on-scroll">
              <p style={articleStyles.lead}>
                La gestión contable y fiscal de una empresa en España es mucho más que llevar un registro de ingresos y gastos. Es el sistema nervioso financiero de la organización: la base sobre la que se toman decisiones de negocio, se cumple con las obligaciones legales y se minimiza la carga tributaria de forma legal. Sin embargo, muchos empresarios cometen el error de ver la contabilidad como un coste inevitable en lugar de como una herramienta de gestión. Una contabilidad bien llevada no solo evita sanciones sino que permite identificar áreas de mejora, optimizar los recursos y tomar decisiones con datos reales. En esta guía práctica explicamos las obligaciones contables de una empresa española, los impuestos principales a los que está sujeta, cómo llevar la contabilidad de una pyme paso a paso, y cómo planificar fiscalmente para pagar solo lo justo.
              </p>

              <h2 style={articleStyles.h2}>Obligaciones contables de una empresa en España</h2>
              <p style={articleStyles.p}>
                Todas las sociedades mercantiles constituidas en España (Sociedad Limitada, Sociedad Anónima...) están obligadas por el Código de Comercio a llevar una contabilidad ordenada, adecuada a su actividad, que permita un seguimiento cronológico de todas sus operaciones y la elaboración periódica de balances e inventarios.
              </p>
              <p style={articleStyles.p}>
                Las obligaciones contables básicas incluyen: llevar el libro diario (registro cronológico de todas las operaciones), el libro de inventarios y cuentas anuales (balance de situación, cuenta de pérdidas y ganancias, estado de cambios en el patrimonio neto y memoria), y para las sociedades no acogidas a régimen simplificado, el libro de actas y el libro registro de socios.
              </p>
              <p style={articleStyles.p}>
                Las cuentas anuales deben depositarse en el Registro Mercantil cada año antes del 30 de julio, correspondientes al ejercicio cerrado a 31 de diciembre del año anterior. El incumplimiento de esta obligación puede derivar en la clausura registral y en sanciones económicas. Además, el órgano de administración está obligado a formular las cuentas en el plazo de tres meses desde el cierre del ejercicio y someterlas a la aprobación de la junta general de socios.
              </p>

              <h2 style={articleStyles.h2}>Impuestos principales de las sociedades (IVA, IS, retenciones)</h2>
              <p style={articleStyles.p}>
                Las sociedades en España están sujetas a varios impuestos que deben gestionarse de forma coordinada para evitar desequilibrios de tesorería y sanciones.
              </p>
              <p style={articleStyles.p}>
                El <strong>Impuesto sobre Sociedades (IS)</strong> grava el beneficio obtenido por la sociedad. El tipo general es del 25%, aunque las entidades de nueva creación tributan al 15% durante los dos primeros ejercicios en los que obtienen base imponible positiva. El IS se liquida mediante pagos fraccionados trimestrales (modelos 202 y 222) y la declaración anual (modelo 200) en julio del año siguiente.
              </p>
              <p style={articleStyles.p}>
                El <strong>IVA</strong> funciona de la misma forma que para los autónomos: la sociedad repercute IVA en sus ventas y soporta IVA en sus compras. La diferencia se ingresa o se compensa trimestralmente (modelo 303) y se liquida anualmente (modelo 390). Las sociedades con facturación superior a 6 millones de euros deben presentar el SII (Suministro Inmediato de Información) con periodicidad mensual.
              </p>
              <p style={articleStyles.p}>
                Las <strong>retenciones e ingresos a cuenta</strong> (modelos 111, 115, 123) deben presentarse trimestralmente por las retenciones practicadas sobre nóminas, alquileres y rendimientos del capital mobiliario. Su correcta gestión es crítica para evitar regularizaciones en las inspecciones.
              </p>

              <h2 style={articleStyles.h2}>Cómo llevar la contabilidad de una pyme paso a paso</h2>
              <p style={articleStyles.p}>
                Llevar la contabilidad de una pyme de forma correcta y ordenada requiere un sistema de trabajo que se implante desde el inicio. El primer paso es elegir el software contable adecuado: existen soluciones específicas para pymes (Contasol, Sage, A3, entre otros) que permiten integrar facturación, contabilidad y declaraciones fiscales en un único entorno.
              </p>
              <p style={articleStyles.p}>
                El proceso mensual debe incluir: registro de todas las facturas emitidas y recibidas en el mismo mes, conciliación bancaria (verificar que los movimientos de la cuenta bancaria coinciden con los registros contables), contabilización de las nóminas y seguros sociales, y provisión de los gastos accrued (gastos devengados pero no pagados aún, como intereses o seguros).
              </p>
              <p style={articleStyles.p}>
                Al cierre del trimestre, se deben revisar los impuestos a presentar, verificar el saldo de los principales proveedores y clientes, y actualizar las amortizaciones de los activos. Al cierre anual, el proceso incluye las regularizaciones de existencias, la dotación de amortizaciones anuales completas, la provisión del Impuesto sobre Sociedades y la preparación de las cuentas anuales para su depósito en el Registro Mercantil.
              </p>

              <h2 style={articleStyles.h2}>Planificación fiscal: reducir la carga tributaria legalmente</h2>
              <p style={articleStyles.p}>
                La planificación fiscal es la práctica legítima de organizar las operaciones y decisiones de la empresa de modo que la carga tributaria sea la mínima posible dentro del marco legal. No es elusión fiscal ni fraude: es el uso inteligente de los incentivos que la propia normativa establece para estimular la inversión, la contratación y la innovación.
              </p>
              <p style={articleStyles.p}>
                Entre las herramientas de planificación fiscal más utilizadas por las pymes españolas encontramos la reserva de capitalización (reducción del 10% de la base imponible del IS por incremento de fondos propios), la reserva de nivelación para empresas de reducida dimensión (reducción anticipada de hasta el 10% de la base imponible), la aplicación de las deducciones por I+D+i, la deducción por inversión en producciones cinematográficas y eventos, y el régimen de amortización acelerada de activos.
              </p>
              <p style={articleStyles.p}>
                La elección de la forma jurídica también tiene implicaciones fiscales: mientras que el autónomo tributa por el tipo marginal del IRPF (que puede alcanzar el 47% en rentas altas), la sociedad tributa al 25% (o al 15% durante los primeros dos ejercicios). Para beneficios superiores a 40.000-50.000€ anuales, la constitución de una sociedad suele ser fiscalmente más eficiente.
              </p>

              <h2 style={articleStyles.h2}>Señales de que necesitas un gestor profesional</h2>
              <p style={articleStyles.p}>
                Muchos empresarios intentan gestionar la contabilidad y los impuestos por su cuenta en los primeros años, lo que es comprensible pero arriesgado. Hay señales claras de que ha llegado el momento de confiar en un gestor profesional.
              </p>
              <p style={articleStyles.p}>
                La primera señal es cuando recibes una notificación de Hacienda o de la Seguridad Social que no entiendes o que te genera incertidumbre. No responder adecuadamente o en plazo puede convertir una irregularidad menor en una sanción importante. Un gestor puede interpretar el requerimiento, preparar la respuesta y, si es necesario, recurrir la liquidación.
              </p>
              <p style={articleStyles.p}>
                La segunda señal es cuando empiezas a contratar empleados. La gestión laboral (nóminas, seguros sociales, altas y bajas, vacaciones, finiquitos) tiene una complejidad que requiere actualización constante de la normativa y no admite errores.
              </p>
              <p style={articleStyles.p}>
                La tercera es cuando el volumen de facturación crece y las operaciones se vuelven más complejas: operaciones intracomunitarias, operaciones con no residentes, arrendamientos sujetos a retención, reparto de dividendos... Cada una tiene implicaciones fiscales específicas que un gestor conoce y gestiona de forma eficiente.
              </p>

              <h2 style={articleStyles.h2}>Preguntas frecuentes</h2>

              {[
                {
                  q: '¿Qué diferencia hay entre contabilidad y fiscalidad?',
                  a: 'La contabilidad es el registro sistemático de todas las operaciones económicas de la empresa conforme al Plan General Contable. La fiscalidad es la aplicación de las normas tributarias para determinar los impuestos a pagar. Aunque parten de la contabilidad, las normas fiscales tienen sus propios criterios de imputación temporal y de deducibilidad que pueden diferir de los contables.',
                },
                {
                  q: '¿Cuándo debe una empresa presentar el Impuesto sobre Sociedades?',
                  a: 'El modelo 200 (declaración del Impuesto sobre Sociedades) se presenta en los 25 días naturales siguientes a los seis meses posteriores al cierre del ejercicio. Para empresas con ejercicio que coincide con el año natural (cierre a 31 de diciembre), el plazo es del 1 al 25 de julio. Además, deben realizarse pagos fraccionados en los meses de octubre, diciembre y abril mediante el modelo 202.',
                },
                {
                  q: '¿Es obligatorio depositar las cuentas en el Registro Mercantil?',
                  a: 'Sí, todas las sociedades mercantiles están obligadas a depositar sus cuentas anuales en el Registro Mercantil antes del 30 de julio de cada año. El incumplimiento puede resultar en la clausura de la hoja registral, lo que impide realizar cualquier operación registral hasta que se subsane el incumplimiento.',
                },
                {
                  q: '¿Qué es la reserva de capitalización y para qué sirve?',
                  a: 'La reserva de capitalización es un incentivo fiscal del Impuesto sobre Sociedades que permite a las empresas deducir el 10% del incremento de sus fondos propios de la base imponible. En la práctica, supone que si la empresa reinvierte sus beneficios en lugar de repartirlos, paga menos IS. Esta reserva debe mantenerse durante cinco años y es una de las estrategias de planificación fiscal más utilizadas por pymes rentables.',
                },
                {
                  q: '¿Cómo sé si mi empresa necesita auditoría obligatoria?',
                  a: 'Una empresa está obligada a auditarse si durante dos ejercicios consecutivos supera dos de los tres umbrales siguientes: activo total superior a 2,85 millones de euros, cifra de negocio superior a 5,7 millones de euros, o más de 50 empleados de media. También están sujetas a auditoría obligatoria las empresas que reciban subvenciones públicas superiores a 600.000€ o que emitan valores admitidos a cotización.',
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
                  ¿Necesitas gestor para tu empresa?
                </p>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', marginBottom: '24px' }}>
                  Consulta gratuita con Travesía Legal. Te orientamos sin compromiso.
                </p>
                <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} />
                  Consulta Gratuita
                </InteractiveButton>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="article-sidebar animate-on-scroll" style={{ position: 'sticky', top: 'calc(var(--nav-height) + 24px)' }}>
              <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '28px', marginBottom: '20px' }}>
                <p style={{ fontWeight: '600', fontSize: '15px', color: 'var(--navy)', marginBottom: '16px' }}>Consulta gratuita</p>
                <p style={{ fontSize: '13px', color: 'var(--ink-mid)', lineHeight: 1.7, marginBottom: '20px' }}>
                  ¿Tienes una empresa y necesitas gestoría? Te ayudamos sin compromiso.
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
                ].map(l => (
                  <a key={l.to} href={l.to} style={{ display: 'block', fontSize: '13px', color: 'var(--ink-mid)', marginBottom: '10px', textDecoration: 'none', paddingLeft: '12px', borderLeft: '2px solid var(--gold)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--navy)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-mid)'}>
                    {l.label}
                  </a>
                ))}
              </div>
            </aside>
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
