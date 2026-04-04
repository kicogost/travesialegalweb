import { motion } from 'framer-motion'
import {
  FileText, RefreshCw, Users, Star, Shield, Heart, Scale,
  Home, Briefcase, BarChart2, Globe, Building2, TrendingUp,
  Calculator, BookOpen, CheckCircle, Landmark, GraduationCap,
  Wifi, Award, Flag, MapPin, Clock, Zap, ArrowRight,
  MessageCircle, ClipboardList, Search, UserCheck, Layers,
  DollarSign, PieChart, AlertCircle, Handshake, Settings
} from 'lucide-react'
import FAQ from './FAQ.jsx'
import InteractiveButton from './InteractiveButton.jsx'

const ICON_MAP = {
  FileText, RefreshCw, Users, Star, Shield, Heart, Scale,
  Home, Briefcase, BarChart2, Globe, Building2, TrendingUp,
  Calculator, BookOpen, CheckCircle, Landmark, GraduationCap,
  Wifi, Award, Flag, MapPin, Clock, Zap, ArrowRight,
  ClipboardList, Search, UserCheck, Layers,
  DollarSign, PieChart, AlertCircle, Handshake, Settings
}

const DEFAULT_STEPS = [
  { step: '01', title: 'Consulta inicial', desc: 'Nos escribes por WhatsApp o rellenas el formulario. Hablamos de tu situación y te decimos qué vía es la adecuada para tu caso.' },
  { step: '02', title: 'Revisamos tu documentación', desc: 'Te pedimos los documentos necesarios y te guiamos para conseguir los que te falten, paso a paso.' },
  { step: '03', title: 'Gestionamos tu expediente', desc: 'Nos encargamos de presentar la solicitud y hacemos el seguimiento con la administración. Te mantenemos informado en todo momento.' },
  { step: '04', title: 'Resolución', desc: 'Te comunicamos el resultado y te ayudamos con los trámites posteriores si los hay. El proceso no termina hasta que tú estás tranquilo.' },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

export default function ServiceSubpage({ data }) {
  const steps = data.steps || DEFAULT_STEPS

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'radial-gradient(ellipse 600px 400px at 80% 50%, rgba(200,169,110,0.08) 0%, transparent 70%), linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)',
        paddingTop: 'calc(var(--nav-height) + 80px)',
        paddingBottom: '80px',
      }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ maxWidth: '640px' }}>
            <a
              href={`/servicios/${data.categorySlug}/`}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px',
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                textDecoration: 'none', opacity: 0.85,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.85'}
            >
              ← {data.category}
            </a>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: '700',
              color: 'var(--white)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}>
              {data.titleLine1 ? (
                <>{data.titleLine1}<br /><span style={{ color: 'var(--gold)' }}>{data.titleLine2}</span></>
              ) : (
                <span style={{ color: 'var(--gold)' }}>{data.title}</span>
              )}
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '36px', maxWidth: '520px' }}>
              {data.description}
            </p>
            <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} />
              Consulta Gratuita por WhatsApp
            </InteractiveButton>
          </motion.div>
        </div>
      </section>

      {/* Features grid */}
      <section style={{ background: 'var(--off-white)', padding: '80px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Qué gestionamos</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              {data.featuresTitle || 'Nuestro servicio incluye'}
            </h2>
          </motion.div>
          <motion.div {...fadeUp} style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px',
          }}>
            {data.features.map(({ icon, label }) => {
              const Icon = ICON_MAP[icon] || CheckCircle
              return (
                <div key={label} style={{
                  flex: '0 0 calc(25% - 15px)', minWidth: '210px',
                  background: 'var(--white)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)', padding: '24px',
                  display: 'flex', gap: '14px', alignItems: 'flex-start',
                  transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                  <div style={{
                    width: '36px', height: '36px', flexShrink: 0,
                    background: 'var(--navy-faint)', borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} color="var(--navy)" strokeWidth={1.5} />
                  </div>
                  <span style={{ fontWeight: '500', fontSize: '15px', color: 'var(--navy)', lineHeight: 1.4, paddingTop: '6px' }}>{label}</span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process steps */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Cómo trabajamos</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
              Tu proceso, paso a paso
            </h2>
          </motion.div>
          <motion.div {...fadeUp} style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px',
          }}>
            {steps.map(({ step, title, desc }) => (
              <div key={step} style={{ textAlign: 'center', padding: '0 8px' }}>
                <div style={{
                  width: '60px', height: '60px', borderRadius: '50%',
                  background: 'var(--navy)', color: 'var(--gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: '18px', fontWeight: '500',
                  margin: '0 auto 20px',
                }}>
                  {step}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--navy)', marginBottom: '10px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.65 }}>{desc}</p>
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
              {data.faqTitle || 'Dudas habituales'}
            </h2>
          </motion.div>
          <motion.div {...fadeUp} style={{ maxWidth: '780px', margin: '0 auto' }}>
            <FAQ items={data.faqItems} />
          </motion.div>
        </div>
      </section>

      {/* Related post (optional) */}
      {data.relatedPost && (
        <section style={{ background: 'var(--navy-faint)', padding: '48px 0' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p style={{ fontSize: '13px', color: 'var(--slate)', marginBottom: '4px', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Artículo relacionado</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--navy)' }}>{data.relatedPost.title}</p>
            </div>
            <InteractiveButton variant="outline" to={data.relatedPost.href}>
              Leer artículo <ArrowRight size={16} />
            </InteractiveButton>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)',
        padding: '80px 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: '700', color: 'var(--white)', marginBottom: '16px' }}>
              {data.ctaTitle || '¿Necesitas ayuda con este trámite?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', marginBottom: '36px', maxWidth: '420px', margin: '0 auto 36px', lineHeight: 1.7 }}>
              {data.ctaDesc || 'Consulta gratuita sin compromiso. Te orientamos sobre tu situación y los pasos a seguir.'}
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
