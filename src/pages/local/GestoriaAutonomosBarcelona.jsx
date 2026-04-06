import { MessageCircle, MapPin, FileText, BarChart2, Users, Shield, Calculator, BookOpen, TrendingDown, UserCheck, CheckCircle } from 'lucide-react'
import FAQ from '../../components/FAQ.jsx'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Travesía Legal — Gestoría Autónomos Barcelona",
  "url": "https://travesialegal.com/gestoria-autonomos-barcelona",
  "telephone": "+34694269008",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C/ Sardenya, 311",
    "addressLocality": "Barcelona",
    "postalCode": "08025",
    "addressCountry": "ES"
  },
  "areaServed": "Barcelona"
}

const faqItems = [
  {
    q: '¿Cuánto cuesta darse de alta como autónomo en Barcelona?',
    a: 'El alta como autónomo tiene dos componentes: la cuota a la Seguridad Social (80€/mes con tarifa plana el primer año) y los honorarios de la gestoría para gestionar el alta censal y fiscal. En Travesía Legal realizamos el proceso completo de alta por un coste transparente que puedes consultar gratuitamente. El alta se puede hacer en 24-48 horas una vez recopilada la documentación.',
  },
  {
    q: '¿Necesito una gestoría si solo facturo de forma ocasional?',
    a: 'Si facturas de forma ocasional y tus ingresos de actividad económica son inferiores a 1.000€ anuales, puedes no estar obligado a darte de alta como autónomo. Sin embargo, si superas ese umbral con regularidad, el alta es obligatoria. Consulta con nosotros gratuitamente para evaluar tu situación específica y evitar problemas con Hacienda o la Seguridad Social.',
  },
  {
    q: '¿Podéis gestionar mis declaraciones si ya soy autónomo y tengo un gestor?',
    a: 'Sí, el cambio de gestoría es un proceso sencillo. Simplemente necesitamos que nos otorgues autorización para representarte ante la AEAT y la Seguridad Social, y nos encargamos de solicitar tus ficheros fiscales y continuar con la gestión desde el siguiente trimestre. Ofrecemos un servicio de bienvenida sin coste adicional para facilitar el traspaso.',
  },
  {
    q: '¿Ofrecéis asesoramiento para autónomos extranjeros en Barcelona?',
    a: 'Sí, atendemos a autónomos de cualquier nacionalidad con residencia en Barcelona. Si además necesitas regularizar tu situación documental en España, podemos gestionar tanto el aspecto fiscal como el de extranjería desde nuestra misma oficina, lo que supone un ahorro de tiempo y coordinación importante.',
  },
]


export default function GestoriaAutonomosBarcelona() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'radial-gradient(ellipse 600px 400px at 80% 50%, rgba(200,169,110,0.08) 0%, transparent 70%), linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)',
        paddingTop: 'calc(var(--nav-height) + 80px)',
        paddingBottom: '80px',
      }}>
        <div className="container">
          <div className="animate-on-scroll" style={{ maxWidth: '640px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <MapPin size={14} color="var(--gold)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Barcelona — Eixample
              </span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: '700',
              color: 'var(--white)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}>
              Gestoría para Autónomos<br />
              <span style={{ color: 'var(--gold)' }}>en Barcelona</span>
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '12px', maxWidth: '520px' }}>
              Gestión fiscal y laboral completa para autónomos barceloneses. Alta, declaraciones trimestrales, nóminas y asesoramiento continuo.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px' }}>
              C/ Sardenya, 311 · 08025 Barcelona
            </p>
            <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} />
              Consulta Gratuita
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <div className="animate-on-scroll" style={{ maxWidth: '720px' }}>
            <span className="section-label">Gestoría para autónomos en Barcelona</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '700', color: 'var(--navy)', marginBottom: '20px' }}>
              Tu gestor fiscal en el Eixample
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '20px' }}>
              Barcelona concentra el mayor número de autónomos de Cataluña, con una comunidad emprendedora muy activa en sectores como la tecnología, la hostelería, el comercio, los servicios profesionales y la economía creativa. Travesía Legal acompaña a los autónomos barceloneses desde el primer día: gestionamos el alta en Hacienda y en la Seguridad Social, presentamos todas las declaraciones trimestrales y anuales, y ofrecemos asesoramiento continuo para que el autónomo pueda dedicarse a su negocio sin preocuparse por los plazos fiscales.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8 }}>
              El área fiscal y laboral está liderada por Raul Lopez, con amplia experiencia en la asesoría de autónomos y pymes en el área metropolitana de Barcelona.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section style={{ background: 'var(--off-white)', padding: '80px 0' }}>
        <div className="container">
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Servicios para autónomos en Barcelona</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Gestión fiscal y laboral completa
            </h2>
          </div>

          <div className="animate-on-scroll" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}>
            {[
              { icon: UserCheck, label: 'Alta como autónomo en Hacienda y Seguridad Social (RETA)' },
              { icon: BarChart2, label: 'Presentación trimestral de IVA (Modelo 303) y IRPF (Modelo 130)' },
              { icon: FileText, label: 'Declaración anual de la renta para autónomos' },
              { icon: BookOpen, label: 'Libros de registro de ingresos y gastos' },
              { icon: Users, label: 'Gestión de altas y bajas de empleados (si los tiene)' },
              { icon: TrendingDown, label: 'Nóminas y seguros sociales' },
              { icon: Calculator, label: 'Asesoramiento sobre deducciones y planificación fiscal' },
              { icon: Shield, label: 'Recursos ante liquidaciones de Hacienda' },
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Preguntas frecuentes</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Autónomos en Barcelona: dudas habituales
            </h2>
          </div>
          <div className="animate-on-scroll" style={{ maxWidth: '780px', margin: '0 auto' }}>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="animate-on-scroll">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: '700', color: 'var(--white)', marginBottom: '16px' }}>
              ¿Eres autónomo en Barcelona?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', marginBottom: '36px', maxWidth: '420px', margin: '0 auto 36px', lineHeight: 1.7 }}>
              Consulta gratuita sin compromiso. Te ayudamos con todas tus gestiones fiscales y laborales.
            </p>
            <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} />
              Escríbenos por WhatsApp
            </InteractiveButton>
          </div>
        </div>
      </section>
    </>
  )
}
