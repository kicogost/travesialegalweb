import { MessageCircle, FileText, Users, Shield, TrendingUp, Clock, Briefcase, UserCheck, Star } from 'lucide-react'
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
    q: '¿Cuánto cuesta darse de alta como autónomo?',
    a: 'Darse de alta como autónomo implica dos costes principales: la cuota a la Seguridad Social (desde 225€/mes con la tarifa plana para nuevos autónomos) y los honorarios de la gestoría para gestionar el alta censal en Hacienda. Los nuevos autónomos disfrutan de una tarifa plana de 80€/mes durante los primeros 12 meses con bonificaciones adicionales.',
  },
  {
    q: '¿Qué bonificaciones existen para nuevos autónomos en España?',
    a: 'Los nuevos autónomos tienen derecho a la tarifa plana de 80€/mes en la cuota de la Seguridad Social durante el primer año, prorrogable hasta 24 meses si los ingresos no superan el SMI. Además, los autónomos en municipios de menos de 5.000 habitantes tienen bonificaciones adicionales del 60% durante los primeros 18 meses.',
  },
  {
    q: '¿Cómo se gestiona una baja laboral?',
    a: 'La baja laboral por incapacidad temporal se gestiona a través del parte médico emitido por el médico de cabecera o el especialista. A partir del cuarto día de baja, el trabajador tiene derecho a prestación económica que cubre el 60% de la base reguladora hasta el día 20 y el 75% a partir del día 21.',
  },
  {
    q: '¿Qué obligaciones laborales tiene una empresa con sus empleados?',
    a: 'Una empresa está obligada a dar de alta a sus empleados en la Seguridad Social antes del primer día de trabajo, emitir nóminas mensuales, cotizar por los seguros sociales, respetar el convenio colectivo aplicable y cumplir con la normativa de prevención de riesgos laborales. El incumplimiento puede derivar en sanciones e inspecciones de trabajo.',
  },
  {
    q: '¿Puedo contratar a un empleado siendo autónomo?',
    a: 'Sí, un autónomo puede contratar empleados. En este caso pasa a ser autónomo empleador y debe cumplir con todas las obligaciones laborales como cualquier empresa: alta en Seguridad Social del trabajador, nóminas, seguros sociales y cumplimiento del convenio aplicable.',
  },
  {
    q: '¿Qué es un ERTE y cuándo se puede solicitar?',
    a: 'Un ERTE (Expediente de Regulación Temporal de Empleo) es una medida temporal que permite a la empresa suspender contratos o reducir jornadas por causas económicas, técnicas, organizativas o de producción. Se puede solicitar ante la autoridad laboral competente y, durante el ERTE, los trabajadores cobran prestación por desempleo mientras la empresa mantiene la relación laboral.',
  },
]


export default function Laboral() {
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
              Asesoramiento<br />
              <span style={{ color: 'var(--gold)' }}>Laboral</span>
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '36px', maxWidth: '520px' }}>
              Gestión laboral integral para autónomos y empresas en España. Nóminas, contratos, altas Seguridad Social y asesoramiento continuo.
            </p>
            <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} />
              Consulta Gratuita por WhatsApp
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Two-track section */}
      <section style={{ background: 'var(--off-white)', padding: '80px 0' }}>
        <div className="container">
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Dos perfiles, un servicio completo</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              ¿Eres autónomo o empresa?
            </h2>
          </div>

          <div className="animate-on-scroll" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}>
            <div style={{
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderTop: '4px solid var(--gold)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px',
            }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
                <UserCheck size={24} color="var(--gold-dark)" strokeWidth={1.5} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--navy)' }}>Autónomos</h3>
              </div>
              {[
                'Alta y baja como autónomo (RETA)',
                'Bonificaciones y tarifa plana',
                'Gestión de bajas laborales',
                'Contratos con trabajadores',
                'Asesoramiento en convenios colectivos',
                'Gestión de prestaciones y subsidios',
              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '7px' }} />
                  <span style={{ fontSize: '14px', color: 'var(--ink-mid)' }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderTop: '4px solid var(--navy)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px',
            }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
                <Briefcase size={24} color="var(--navy)" strokeWidth={1.5} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--navy)' }}>Empresas</h3>
              </div>
              {[
                'Altas y bajas en Seguridad Social',
                'Elaboración de nóminas mensuales',
                'Contratos laborales y finiquitos',
                'Seguros sociales y TC1/TC2',
                'ERTEs y expedientes disciplinarios',
                'Prevención de riesgos laborales',
              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--navy)', flexShrink: 0, marginTop: '7px' }} />
                  <span style={{ fontSize: '14px', color: 'var(--ink-mid)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Servicios</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Gestión laboral completa
            </h2>
          </div>

          <div className="animate-on-scroll" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
          }}>
            {[
              { icon: UserCheck, label: 'Alta y baja autónomos' },
              { icon: FileText, label: 'Contratos laborales' },
              { icon: TrendingUp, label: 'Nóminas mensuales' },
              { icon: Shield, label: 'Seguros sociales' },
              { icon: Users, label: 'Altas en Seguridad Social' },
              { icon: Clock, label: 'ERTEs y suspensiones' },
              { icon: Briefcase, label: 'Finiquitos y liquidaciones' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} style={{
                flex: '0 0 calc(25% - 15px)',
                minWidth: '200px',
                background: 'var(--navy-faint)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--navy-faint)'}
              >
                <Icon size={18} color="var(--navy)" strokeWidth={1.5} />
                <span style={{ fontWeight: '500', fontSize: '14px', color: 'var(--navy)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ background: 'var(--navy-faint)', padding: '64px 0' }}>
        <div className="container">
          <div className="animate-on-scroll" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            {/* TODO: Replace with real testimonial */}
            <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginBottom: '20px' }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="var(--gold)" color="var(--gold)" />)}
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '19px', fontStyle: 'italic', color: 'var(--navy)', lineHeight: 1.6, marginBottom: '24px' }}>
              "Llevan todas mis nóminas y gestiones laborales desde hace dos años. Muy profesionales y siempre al día con los cambios de normativa."
            </p>
            <p style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)' }}>Roberto F.</p>
            <p style={{ fontSize: '12px', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>Empresa con 5 empleados — Barcelona</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Preguntas frecuentes</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Dudas habituales sobre laboral
            </h2>
          </div>
          <div className="animate-on-scroll" style={{ maxWidth: '780px', margin: '0 auto' }}>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="animate-on-scroll">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: '700', color: 'var(--white)', marginBottom: '16px' }}>
              ¿Necesitas asesoramiento laboral?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', marginBottom: '36px', maxWidth: '420px', margin: '0 auto 36px', lineHeight: 1.7 }}>
              Consulta gratuita sin compromiso. Te ayudamos con todas tus gestiones laborales.
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
