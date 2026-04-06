import { MessageCircle, MapPin, FileText, BarChart2, Users, Shield, Calculator, BookOpen, TrendingDown, UserCheck } from 'lucide-react'
import FAQ from '../../components/FAQ.jsx'
import InteractiveButton from '../../components/InteractiveButton.jsx'

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Travesía Legal — Gestoría Autónomos Sabadell",
  "url": "https://travesialegal.com/gestoria-autonomos-sabadell",
  "telephone": "+34694269008",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C/ Vallirana, 7 local",
    "addressLocality": "Sabadell",
    "postalCode": "08207",
    "addressCountry": "ES"
  },
  "areaServed": "Sabadell"
}

const faqItems = [
  {
    q: '¿Qué ventajas tiene contratar una gestoría local en Sabadell?',
    a: 'Una gestoría local en Sabadell conoce el tejido empresarial de la ciudad, los convenios colectivos aplicables en el Vallès Occidental, y puede atenderte presencialmente con facilidad. La cercanía facilita la comunicación y la respuesta rápida ante cualquier requerimiento de Hacienda o la Seguridad Social. Además, el trato personal de un equipo pequeño garantiza que tu caso no se pierde entre miles de clientes.',
  },
  {
    q: '¿Gestionáis autónomos de todos los sectores?',
    a: 'Sí, atendemos autónomos de todos los sectores: comercio, hostelería, construcción, servicios profesionales, transportistas, artistas y creadores, etc. Cada sector tiene particularidades fiscales específicas (tipos de IVA, deducciones sectoriales, regímenes especiales...) que nuestro equipo conoce y aplica correctamente.',
  },
  {
    q: '¿Puedo contrataros solo para las declaraciones trimestrales?',
    a: 'Sí, ofrecemos servicios modulares que permiten contratar únicamente la presentación de declaraciones trimestrales (IVA e IRPF) si ya tienes otro gestor para el resto de la gestión, o si prefieres llevar tú mismo los libros contables. Adaptamos el servicio a tus necesidades reales para que no pagues por lo que no necesitas.',
  },
  {
    q: '¿Cómo me ayudáis a reducir mi factura fiscal como autónomo?',
    a: 'El primer paso es revisar si estás deduciendo todos los gastos a los que tienes derecho. Muchos autónomos pagan más de lo necesario simplemente porque no conocen todas las deducciones aplicables a su actividad. En Travesía Legal realizamos una revisión fiscal inicial gratuita para identificar oportunidades de ahorro y proponerte un plan de optimización fiscal dentro del marco legal.',
  },
]


export default function GestoriaAutonomosSabadell() {
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
                Sabadell — Vallès Occidental
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
              <span style={{ color: 'var(--gold)' }}>en Sabadell</span>
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '12px', maxWidth: '520px' }}>
              Gestión fiscal y laboral completa para autónomos en Sabadell y el Vallès Occidental. Sede principal de Travesía Legal.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px' }}>
              C/ Vallirana, 7 local · 08207 Sabadell
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
            <span className="section-label">Gestoría para autónomos en Sabadell</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '700', color: 'var(--navy)', marginBottom: '20px' }}>
              Tu gestor local en el Vallès Occidental
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '20px' }}>
              Sabadell tiene una larga tradición industrial y empresarial, con un tejido de pequeñas empresas y autónomos muy dinámico, especialmente en los sectores de la manufactura, el comercio local, la construcción y los servicios. Travesía Legal, con sede en el barrio Nord de Sabadell, conoce de primera mano las necesidades fiscales y laborales de los autónomos de la ciudad y del Vallès Occidental.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: '20px' }}>
              Ofrecemos un servicio completo y personalizado para autónomos de todos los sectores: desde el alta inicial hasta la gestión fiscal anual, pasando por el asesoramiento continuo en materia laboral.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.8 }}>
              Raul Lopez, responsable del área fiscal y laboral, combina el rigor técnico con una atención cercana y accesible que facilita la relación con la administración tributaria y la Seguridad Social.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section style={{ background: 'var(--off-white)', padding: '80px 0' }}>
        <div className="container">
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Servicios para autónomos en Sabadell</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Todo lo que necesita un autónomo
            </h2>
          </div>

          <div className="animate-on-scroll" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}>
            {[
              { icon: UserCheck, label: 'Alta como autónomo en Hacienda y Seguridad Social (RETA)' },
              { icon: BarChart2, label: 'Declaraciones trimestrales IVA e IRPF' },
              { icon: FileText, label: 'Declaración anual de la renta para autónomos' },
              { icon: BookOpen, label: 'Libros de registro de ingresos y gastos' },
              { icon: Users, label: 'Gestión laboral si tienes empleados' },
              { icon: TrendingDown, label: 'Nóminas y seguros sociales' },
              { icon: Calculator, label: 'Optimización fiscal y deducciones' },
              { icon: Shield, label: 'Atención ante requerimientos de Hacienda' },
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
              Autónomos en Sabadell: dudas habituales
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
              ¿Eres autónomo en Sabadell?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', marginBottom: '36px', maxWidth: '420px', margin: '0 auto 36px', lineHeight: 1.7 }}>
              Consulta gratuita sin compromiso. Tu gestor local en el Vallès Occidental.
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
