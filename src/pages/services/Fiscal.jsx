import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MessageCircle, FileText, BarChart2, Calculator, TrendingDown, Clock, BookOpen, Shield, Star } from 'lucide-react'
import FAQ from '../../components/FAQ.jsx'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Travesía Legal",
  "url": "https://travesialegal.com",
  "telephone": "+34694269008"
}

const faqItems = [
  {
    q: '¿Cuándo hay que presentar la declaración de la renta?',
    a: 'La declaración de la renta se presenta entre abril y junio del año siguiente al ejercicio fiscal. Para el ejercicio 2024, el plazo es del 2 de abril al 30 de junio de 2025. Es recomendable no esperar al último momento, especialmente si el resultado es a ingresar, ya que permite planificar el pago.',
  },
  {
    q: '¿Qué gastos puede deducirse un autónomo?',
    a: 'Un autónomo puede deducirse los gastos directamente vinculados a su actividad: cuotas de la Seguridad Social, alquiler de local o porcentaje del domicilio habitual, material de oficina, servicios profesionales (gestoría, asesoría jurídica), seguros relacionados con la actividad, y los intereses de préstamos empresariales. La deducción de gastos mixtos (como el teléfono o el coche) requiere justificación de su uso profesional.',
  },
  {
    q: '¿Cuándo está obligada una empresa a llevar contabilidad?',
    a: 'Todas las sociedades mercantiles (S.L., S.A.) están obligadas a llevar contabilidad formal ajustada al Plan General Contable. Los autónomos en estimación directa simplificada están obligados a llevar libros de ingresos, gastos, bienes de inversión y provisiones, aunque no la contabilidad completa exigida a las sociedades.',
  },
  {
    q: '¿Qué es el modelo 303 de IVA?',
    a: 'El modelo 303 es la declaración trimestral de IVA que deben presentar autónomos y sociedades. Se presenta en enero, abril, julio y octubre para liquidar la diferencia entre el IVA repercutido (cobrado a clientes) y el IVA soportado (pagado a proveedores). Si el resultado es positivo se ingresa a Hacienda; si es negativo, puede compensarse en declaraciones posteriores o solicitar la devolución en la declaración anual (modelo 390).',
  },
  {
    q: '¿Cuánto cuesta una gestoría para autónomos al mes?',
    a: 'El coste de una gestoría para autónomos varía según los servicios incluidos y el volumen de operaciones. En Travesía Legal ofrecemos presupuestos personalizados sin coste. Nuestros servicios incluyen la presentación de declaraciones trimestrales, gestión de nóminas si procede y asesoramiento continuo durante todo el año.',
  },
  {
    q: '¿Qué pasa si no presento el IVA a tiempo?',
    a: 'La presentación fuera de plazo del IVA conlleva recargos automáticos: 1% por cada mes de retraso durante los primeros 12 meses, y el 15% a partir del mes 13, más intereses de demora. Si Hacienda requiere la presentación antes de que el contribuyente la realice voluntariamente, además de los recargos puede aplicarse una sanción formal de entre 150€ y 400€.',
  },
]

const fadeUp = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

const quarters = [
  { label: 'Q1', months: 'Ene–Mar', deadline: '20 Abril', models: ['Mod. 303', 'Mod. 130', 'Mod. 111'] },
  { label: 'Q2', months: 'Abr–Jun', deadline: '20 Julio', models: ['Mod. 303', 'Mod. 130', 'Mod. 111'] },
  { label: 'Q3', months: 'Jul–Sep', deadline: '20 Oct.', models: ['Mod. 303', 'Mod. 130', 'Mod. 111'] },
  { label: 'Q4', months: 'Oct–Dic', deadline: '20 Enero', models: ['Mod. 303', 'Mod. 130', 'Mod. 390*'] },
]

export default function Fiscal() {
  return (
    <>
      <Helmet>
        <title>Gestión Fiscal y Contable para Autónomos y Empresas | Travesía Legal</title>
        <meta name="description" content="Declaraciones trimestrales, contabilidad completa, IVA, IRPF y cierre anual para autónomos y empresas en Barcelona y Sabadell. Consulta gratuita." />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{
        background: 'radial-gradient(ellipse 600px 400px at 80% 50%, rgba(200,169,110,0.08) 0%, transparent 70%), linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)',
        paddingTop: 'calc(var(--nav-height) + 80px)',
        paddingBottom: '80px',
      }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ maxWidth: '640px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', display: 'block' }}>
              Servicio
            </span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: '700',
              color: 'var(--white)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}>
              Gestión Fiscal<br />
              <span style={{ color: 'var(--gold)' }}>y Contable</span>
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '36px', maxWidth: '520px' }}>
              Declaraciones trimestrales, contabilidad completa, IVA, IRPF y cierre anual para autónomos y empresas en Barcelona y Sabadell.
            </p>
            <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} />
              Consulta Gratuita por WhatsApp
            </InteractiveButton>
          </motion.div>
        </div>
      </section>

      {/* Fiscal Calendar */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Calendario fiscal</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Nunca pierdas un plazo
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--ink-mid)', marginTop: '12px', maxWidth: '480px', margin: '12px auto 0' }}>
              Gestionamos todas las declaraciones trimestrales y anuales para que estés siempre al día con Hacienda.
            </p>
          </motion.div>

          <motion.div {...fadeUp} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
          }}>
            {quarters.map((q, i) => (
              <div key={q.label} style={{
                background: i === 3 ? 'var(--navy)' : 'var(--navy-faint)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    fontWeight: '700',
                    color: i === 3 ? 'var(--gold)' : 'var(--navy)',
                  }}>{q.label}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: i === 3 ? 'rgba(255,255,255,0.6)' : 'var(--slate)',
                  }}>{q.months}</span>
                </div>
                <p style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: i === 3 ? 'white' : 'var(--ink-mid)',
                  marginBottom: '12px',
                }}>
                  Plazo: {q.deadline}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {q.models.map(m => (
                    <span key={m} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      background: i === 3 ? 'rgba(255,255,255,0.1)' : 'white',
                      color: i === 3 ? 'rgba(255,255,255,0.8)' : 'var(--navy)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      display: 'inline-block',
                    }}>{m}</span>
                  ))}
                </div>
                {i === 3 && <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '8px' }}>* Resumen anual IVA</p>}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ background: 'var(--off-white)', padding: '80px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Servicios</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Gestión fiscal completa
            </h2>
          </motion.div>

          <motion.div {...fadeUp} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
          }}>
            {[
              { icon: BarChart2, label: 'Declaraciones trimestrales IVA e IRPF' },
              { icon: FileText, label: 'Declaración anual de la renta' },
              { icon: BookOpen, label: 'Contabilidad completa de empresas' },
              { icon: Calculator, label: 'Impuesto sobre Sociedades' },
              { icon: TrendingDown, label: 'Planificación fiscal y optimización' },
              { icon: Shield, label: 'Atención ante requerimientos de Hacienda' },
              { icon: Clock, label: 'Cierre contable y cuentas anuales' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <Icon size={18} color="var(--gold-dark)" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontWeight: '500', fontSize: '14px', color: 'var(--navy)', lineHeight: 1.4 }}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What we save you */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Por qué contratarnos</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Lo que te ahorramos
            </h2>
          </motion.div>

          <motion.div {...fadeUp} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px',
          }}>
            {[
              {
                icon: Clock,
                title: 'Tiempo',
                desc: 'Elimina las horas dedicadas a entender formularios, plazos y normativa fiscal. Tú a tu negocio, nosotros a los trámites.',
              },
              {
                icon: TrendingDown,
                title: 'Dinero',
                desc: 'Maximizamos las deducciones legales aplicables a tu actividad. Una gestoría bien elegida se paga sola con el ahorro fiscal.',
              },
              {
                icon: Shield,
                title: 'Sanciones',
                desc: 'Evitamos errores y presentaciones fuera de plazo que generan recargos y sanciones de Hacienda o la Seguridad Social.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{
                background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)',
                borderRadius: 'var(--radius-xl)',
                padding: '36px 28px',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '56px', height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(200,169,110,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <Icon size={24} color="var(--gold)" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '700', color: 'var(--gold)', marginBottom: '12px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--off-white)', padding: '80px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Preguntas frecuentes</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Dudas habituales sobre fiscal
            </h2>
          </motion.div>
          <motion.div {...fadeUp} style={{ maxWidth: '780px', margin: '0 auto' }}>
            <FAQ items={faqItems} />
          </motion.div>
        </div>
      </section>

      {/* CTA with urgency */}
      <section style={{ background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', display: 'block' }}>
              Los plazos no esperan
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: '700', color: 'var(--white)', marginBottom: '16px' }}>
              No dejes los impuestos para el último día
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', marginBottom: '36px', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.7 }}>
              Cada trimestre hay plazos que no se pueden recuperar. Consulta con nosotros hoy y evita recargos innecesarios.
            </p>
            <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} />
              Escríbenos por WhatsApp
            </InteractiveButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
