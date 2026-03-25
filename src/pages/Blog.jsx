import { motion } from 'framer-motion'
import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import BlogCard from '../components/BlogCard.jsx'
import InteractiveButton from '../components/InteractiveButton.jsx'

const posts = [
  {
    id: 1,
    category: 'Extranjería',
    title: 'Extranjería y Regularización para Latinoamericanos en España (2026)',
    excerpt: 'Regularizar tu situación en España como ciudadano latinoamericano es uno de los pasos más importantes. Conoce las vías disponibles: arraigo social, residencia y nacionalidad española.',
    readTime: '8 min',
    href: '/blog/extranjeria-regularizacion-latinoamericanos',
  },
  {
    id: 2,
    category: 'Fiscal',
    title: 'Autónomos en España: Declaración de la Renta y Deducciones (2026)',
    excerpt: 'Todo lo que necesitas saber sobre los modelos 303, 130 y 111, las deducciones fiscales y cómo presentar la declaración anual de la renta como autónomo en España.',
    readTime: '7 min',
    href: '/blog/autonomos-declaracion-renta',
  },
  {
    id: 3,
    category: 'Fiscal',
    title: 'Gestión Contable y Fiscal para Empresas en España (2026)',
    excerpt: 'La contabilidad y la fiscalidad empresarial explicadas de forma práctica: obligaciones legales, IVA, Impuesto sobre Sociedades, planificación fiscal y cuentas anuales.',
    readTime: '7 min',
    href: '/blog/gestion-contable-fiscal-empresas',
  },
  {
    id: 4,
    category: 'Fiscal',
    title: 'Declaración de la Renta 2026: Guía Completa para Particulares y Autónomos',
    excerpt: 'Todo lo que debes saber sobre la campaña de la renta 2026: quién está obligado, plazos, principales deducciones, tributación conjunta y los errores más frecuentes.',
    readTime: '9 min',
    href: '/blog/declaracion-renta-2025-guia-completa',
  },
  {
    id: 5,
    category: 'Extranjería',
    title: 'Arraigo Social en España: Requisitos, Documentación y Proceso (2026)',
    excerpt: 'El arraigo social es la vía principal de regularización para extranjeros con tres años de permanencia en España. Conoce todos los requisitos, documentos y pasos del proceso.',
    readTime: '8 min',
    href: '/blog/arraigo-social-requisitos-documentacion',
  },
  {
    id: 6,
    category: 'Extranjería',
    title: 'Reagrupación Familiar en España: Quién Puede Pedir y Cómo Tramitarla (2026)',
    excerpt: 'Guía completa sobre la reagrupación familiar: quién puede reagrupar, requisitos económicos de ingresos y vivienda, documentación y plazos de tramitación.',
    readTime: '7 min',
    href: '/blog/reagrupacion-familiar-espana',
  },
  {
    id: 7,
    category: 'Extranjería',
    title: 'Cómo Obtener la Nacionalidad Española: Guía para Latinoamericanos (2026)',
    excerpt: 'Los latinoamericanos solo necesitan dos años de residencia legal para solicitar la nacionalidad española. Descubre los requisitos, la prueba CCSE y la doble nacionalidad.',
    readTime: '8 min',
    href: '/blog/nacionalidad-espanola-latinoamericanos-requisitos',
  },
  {
    id: 8,
    category: 'Laboral',
    title: 'Alta de Autónomo en España: Guía Completa Paso a Paso (2026)',
    excerpt: 'Cómo darse de alta como autónomo en España: trámites en Hacienda y Seguridad Social, cuotas por ingresos reales, tarifa plana y obligaciones fiscales trimestrales.',
    readTime: '8 min',
    href: '/blog/alta-autonomo-espana-guia-completa',
  },
  {
    id: 9,
    category: 'Fiscal',
    title: 'IVA para Autónomos y Pymes: Modelo 303 y Declaraciones Trimestrales (2026)',
    excerpt: 'Todo sobre el IVA: tipos aplicables, cómo funciona el modelo 303, plazos de presentación, qué gastos tienen IVA deducible y los errores más comunes que cometen los autónomos.',
    readTime: '7 min',
    href: '/blog/iva-autonomos-pymes-modelo-303',
  },
  {
    id: 10,
    category: 'Extranjería',
    title: 'Cómo llegar a España legalmente desde un inicio (2026)',
    excerpt: 'Guía completa sobre las opciones para llegar a España de forma legal: visado de estudios, contratación en origen y los pasos a seguir en cada caso.',
    readTime: '9 min',
    href: '/blog/como-llegar-a-espana-legalmente',
  },
  {
    id: 11,
    category: 'Extranjería',
    title: 'Cómo obtener tu visado de estudios en España (2026)',
    excerpt: 'Requisitos, documentación, proceso paso a paso y consejos para obtener el visado de estudios en España y comenzar tu formación de forma completamente legal.',
    readTime: '8 min',
    href: '/blog/visado-estudios-espana',
  },
  {
    id: 12,
    category: 'Extranjería',
    title: 'Cómo sacar tus antecedentes penales en Colombia, Perú, Honduras y El Salvador',
    excerpt: 'Guía por país para obtener el certificado de antecedentes penales, tramitar la Apostilla de La Haya y presentarlo correctamente para trámites de extranjería en España.',
    readTime: '10 min',
    href: '/blog/antecedentes-penales-colombia-peru-honduras-el-salvador',
  },
  {
    id: 13,
    category: 'Legal',
    title: '¿Con cuánto tiempo me tienen que avisar para despedirme? (2026)',
    excerpt: 'Todo sobre los plazos de preaviso en España: tipos de despido, días que te corresponden, qué hacer si no se respetan y cómo calcular tu indemnización.',
    readTime: '7 min',
    href: '/blog/despido-preaviso-plazos',
  },
]

const categories = ['Todos', 'Extranjería', 'Fiscal', 'Laboral', 'Legal']

const fadeUp = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = activeCategory === 'Todos'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)',
        paddingTop: 'calc(var(--nav-height) + 80px)',
        paddingBottom: '80px',
      }}>
        <div className="container">
          <motion.div initial={{ opacity: 1, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: '560px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', display: 'block' }}>
              Blog y recursos
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
              Guías y Recursos<br />
              <span style={{ color: 'var(--gold)' }}>Legales</span>
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
              Información práctica y actualizada sobre extranjería, fiscal y laboral para latinoamericanos, autónomos y empresas en España.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog grid */}
      <section style={{ background: 'var(--off-white)', padding: '80px 0' }}>
        <div className="container">
          {/* Category filter */}
          <motion.div {...fadeUp} style={{ display: 'flex', gap: '8px', marginBottom: '48px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: activeCategory === cat ? '600' : '400',
                  color: activeCategory === cat ? 'var(--white)' : 'var(--ink-mid)',
                  background: activeCategory === cat ? 'var(--navy)' : 'var(--white)',
                  border: '1.5px solid',
                  borderColor: activeCategory === cat ? 'var(--navy)' : 'var(--border)',
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = 'var(--navy)'
                    e.currentTarget.style.color = 'var(--navy)'
                  }
                }}
                onMouseLeave={e => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--ink-mid)'
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {filtered.length > 0 ? (
            <motion.div {...fadeUp} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '24px',
            }}>
              {filtered.map(post => (
                <BlogCard key={post.id} {...post} />
              ))}
            </motion.div>
          ) : (
            <motion.div {...fadeUp} style={{ textAlign: 'center', padding: '64px 0' }}>
              <p style={{ fontSize: '16px', color: 'var(--ink-light)' }}>No hay artículos en esta categoría todavía.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'var(--white)', marginBottom: '16px' }}>
              ¿Tienes dudas después de leer nuestros artículos?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', marginBottom: '32px', maxWidth: '460px', margin: '0 auto 32px', lineHeight: 1.7 }}>
              Consulta gratuita sin compromiso. Nuestros especialistas te aclaran cualquier duda.
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
