import { motion } from 'framer-motion'
import { Shield, TrendingUp, Clock, MapPin, Globe, Briefcase, BarChart2, CheckCircle, Star, ArrowRight, MessageCircle } from 'lucide-react'
import ServiceCard from '../components/ServiceCard.jsx'
import BlogCard from '../components/BlogCard.jsx'
import InteractiveButton from '../components/InteractiveButton.jsx'

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Travesía Legal",
  "url": "https://travesialegal.com",
  "telephone": "+34694269008",
  "email": "info@travesialegal.com",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "C/ Sardenya, 311",
      "addressLocality": "Barcelona",
      "postalCode": "08025",
      "addressCountry": "ES"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "C/ Vallirana, 7 local",
      "addressLocality": "Sabadell",
      "postalCode": "08207",
      "addressCountry": "ES"
    }
  ],
  "areaServed": ["Barcelona", "Madrid", "España"],
  "description": "Gestoría especializada en extranjería, asesoramiento laboral y gestión fiscal para extranjeros, autónomos y empresas en España."
}

const fadeUp = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse 800px 600px at 70% 50%, rgba(200,169,110,0.06) 0%, transparent 70%), radial-gradient(ellipse 400px 400px at 20% 80%, rgba(30,58,110,0.4) 0%, transparent 60%), linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'var(--nav-height)',
      }}>
        {/* SVG Geometric Illustration */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '50%',
          opacity: 0.18,
          pointerEvents: 'none',
        }}>
          <svg viewBox="0 0 600 700" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            {/* Large circle */}
            <circle cx="380" cy="350" r="240" stroke="#C8A96E" strokeWidth="1" opacity="0.6"/>
            {/* Medium circle */}
            <circle cx="450" cy="280" r="160" stroke="white" strokeWidth="0.8" opacity="0.5"/>
            {/* Small accent circle */}
            <circle cx="300" cy="420" r="100" stroke="#C8A96E" strokeWidth="1.5" opacity="0.4"/>
            {/* Arc */}
            <path d="M 180 200 A 220 220 0 0 1 560 400" stroke="white" strokeWidth="0.8" opacity="0.4" fill="none"/>
            {/* Arc 2 */}
            <path d="M 200 500 A 180 180 0 0 0 520 200" stroke="#C8A96E" strokeWidth="0.6" opacity="0.5" fill="none"/>
            {/* Diagonal lines */}
            <line x1="120" y1="100" x2="500" y2="600" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            <line x1="200" y1="80" x2="580" y2="560" stroke="white" strokeWidth="0.5" opacity="0.15"/>
            {/* Dot grid */}
            {Array.from({ length: 10 }, (_, row) =>
              Array.from({ length: 8 }, (_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={140 + col * 42}
                  cy={120 + row * 50}
                  r="1.5"
                  fill="white"
                  opacity={0.2 + (row + col) * 0.012}
                />
              ))
            )}
            {/* Inner filled circles */}
            <circle cx="460" cy="180" r="8" fill="#C8A96E" opacity="0.5"/>
            <circle cx="300" cy="520" r="5" fill="white" opacity="0.4"/>
            <circle cx="530" cy="430" r="6" fill="#C8A96E" opacity="0.3"/>
            <circle cx="220" cy="320" r="4" fill="white" opacity="0.3"/>
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '120px 24px 100px' }}>
          <div style={{ maxWidth: '620px' }}>
            <motion.div
              initial={{ opacity: 1, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '20px',
                display: 'block',
              }}>
                Gestoría en Barcelona y Madrid
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 1, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5vw, 58px)',
                fontWeight: '700',
                color: 'var(--white)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '24px',
              }}
            >
              Tu Gestoría de<br />
              <span style={{ color: 'var(--gold)' }}>Confianza</span> en España
            </motion.h1>

            <motion.p
              initial={{ opacity: 1, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.7,
                marginBottom: '40px',
                maxWidth: '520px',
              }}
            >
              Especialistas en extranjería, gestión laboral y asesoría fiscal para autónomos y empresas en Barcelona y Madrid.
            </motion.p>

            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
            >
              <InteractiveButton
                variant="gold"
                href="https://wa.me/34694269008"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
                Consulta Gratuita
              </InteractiveButton>
              <InteractiveButton
                variant="outline-dark"
                to="/servicios/extranjeria-y-nacionalidad"
              >
                Ver nuestros servicios
              </InteractiveButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ background: 'var(--navy-faint)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ padding: '48px 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
          }}>
            {[
              { icon: Shield, label: 'Especialistas Colegiados', desc: 'Expertos en derecho de extranjería, laboral y fiscal' },
              { icon: TrendingUp, label: '+500 casos gestionados', desc: 'Expedientes resueltos con éxito en toda España' },
              { icon: Clock, label: 'Atención en 24 horas', desc: 'Respuesta garantizada en menos de un día hábil' },
              { icon: MapPin, label: 'Oficinas en toda España', desc: 'Presencia física en Barcelona y Madrid' },
            ].map(({ icon: Icon, label, desc }) => (
              <motion.div key={label} {...fadeUp} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '40px', height: '40px', flexShrink: 0,
                  background: 'white',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <Icon size={18} color="var(--gold-dark)" strokeWidth={1.5} />
                </div>
                <div>
                  <p style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)', marginBottom: '4px' }}>{label}</p>
                  <p style={{ fontSize: '13px', color: 'var(--ink-light)', lineHeight: 1.5 }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: 'var(--off-white)', padding: '96px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Nuestros Servicios</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: '700', color: 'var(--navy)', marginBottom: '16px' }}>
              Todo lo que necesitas,<br />en un solo lugar
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--ink-mid)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              Gestionamos los trámites más complejos para que tú puedas centrarte en lo que importa.
            </p>
          </motion.div>

          <motion.div {...fadeUp} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            <ServiceCard
              icon={Globe}
              title="Extranjería y Nacionalidad"
              description="Visados, arraigo y nacionalidad española para ciudadanos extranjeros. Gestionamos tu expediente de principio a fin."
              href="/servicios/extranjeria-y-nacionalidad"
            />
            <ServiceCard
              icon={Briefcase}
              title="Asesoramiento Laboral"
              description="Gestión de contratos, nóminas, altas y bajas en la Seguridad Social, para autónomos y empresas en toda España."
              href="/servicios/asesoramiento-laboral"
            />
            <ServiceCard
              icon={BarChart2}
              title="Gestión Fiscal y Contable"
              description="Declaraciones trimestrales, contabilidad completa, IVA, IRPF y cierre anual para autónomos y sociedades."
              href="/servicios/gestion-fiscal-contable"
            />
          </motion.div>
        </div>
      </section>

      {/* Why us */}
      <section style={{ background: 'var(--white)', padding: '96px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <motion.div {...fadeUp}>
              <span className="section-label">Por qué elegirnos</span>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '700', color: 'var(--navy)', marginBottom: '24px', lineHeight: 1.2 }}>
                Años de experiencia,<br />resultados reales
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink-mid)', lineHeight: 1.75, marginBottom: '36px' }}>
                En Travesía Legal combinamos el rigor técnico con una atención cercana y personalizada. Conocemos los procedimientos de la administración española, los plazos reales y los criterios de resolución.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Asesoramiento personalizado desde el primer contacto',
                  'Presupuestos transparentes sin letra pequeña',
                  'Seguimiento continuo de todos los expedientes',
                  'Acceso directo a tu gestor por WhatsApp',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle size={18} color="var(--gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '15px', color: 'var(--ink-mid)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} style={{
              background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)',
              borderRadius: 'var(--radius-xl)',
              padding: '48px 40px',
              color: 'white',
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                {[
                  { value: '+500', label: 'Expedientes gestionados' },
                  { value: '2', label: 'Oficinas en España' },
                  { value: '24h', label: 'Tiempo de respuesta' },
                  { value: '100%', label: 'Transparencia en costes' },
                ].map(({ value, label }) => (
                  <div key={label} style={{ textAlign: 'center' }}>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '36px',
                      fontWeight: '700',
                      color: 'var(--gold)',
                      marginBottom: '8px',
                    }}>{value}</p>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.4 }}>{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            section > div > div[style*='grid-template-columns: 1fr 1fr'] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Testimonials */}
      <section style={{ background: 'var(--navy-faint)', padding: '96px 0', overflow: 'hidden' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Testimonios</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '700', color: 'var(--navy)' }}>
              Lo que dicen nuestros clientes
            </h2>
          </motion.div>
        </div>

        <style>{`
          @keyframes testimonials-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .testimonials-track {
            display: flex;
            gap: 24px;
            width: max-content;
            animation: testimonials-scroll 32s linear infinite;
          }
          .testimonials-track:hover {
            animation-play-state: paused;
          }
          .testimonial-card {
            background: var(--white);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 28px;
            width: 340px;
            flex-shrink: 0;
          }
        `}</style>

        {(() => {
          const reviews = [
            {
              name: 'Didier Moreno',
              service: 'Extranjería',
              text: 'Son unas personas confiables y efectivas en especial Pau Iglesias, es muy eficiente, su estrategia de trabajo es rápida y segura, gracias a él y a su equipo de trabajo.',
              google: true,
            },
            {
              name: 'Ariadna Calatayud',
              service: 'Declaración de la Renta',
              text: 'Me realizaron la declaración de la renta, fue un proceso rápido y fácil. Los volveré a elegir el año que viene sin duda. Gracias.',
              google: true,
            },
            {
              name: 'Daniel Gómez Fernández',
              service: 'Nacionalidad Española',
              text: 'Me ayudaron a regularizar mi situación una vez llegué a España. Gracias a ellos disfruto de la nacionalidad española junto con mi mujer y mis dos hijas.',
              google: true,
            },
            {
              name: 'Vanessa Triana',
              service: 'Visado',
              text: 'Tuve una excelente experiencia con Travesía Legal durante todo mi proceso de visado. Desde el inicio fueron muy claros al explicar cada paso, resolvieron todas mis dudas y me acompañaron con mucho profesionalismo. Recomiendo totalmente sus servicios.',
              google: true,
            },
          ]
          const googleIcon = (
            <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          )
          const allReviews = [...reviews, ...reviews]
          return (
            <div style={{ overflow: 'hidden', padding: '8px 0' }}>
              <div className="testimonials-track">
                {allReviews.map(({ name, service, text, google }, i) => (
                  <div key={`${name}-${i}`} className="testimonial-card">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', gap: '2px' }}>
                        {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="var(--gold)" color="var(--gold)" />)}
                      </div>
                      {google && googleIcon}
                    </div>
                    <p style={{ fontSize: '15px', color: 'var(--ink-mid)', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic' }}>
                      "{text}"
                    </p>
                    <div>
                      <p style={{ fontWeight: '600', fontSize: '14px', color: 'var(--navy)' }}>{name}</p>
                      <p style={{ fontSize: '12px', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>{service}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })()}

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href="https://www.google.com/search?q=travesia+legal&num=10&cs=1&hl=en-ES&rlz=1C5CHFA_enES1178ES1179&sca_esv=e2250487dc351849&tbm=lcl&sxsrf=ANbL-n6JrVE6CKgUF2GXuGXoyfcTVUVMYg%3A1774279664615&ei=8FvBacOnJc3y7M8Ps9XqwQI&biw=1470&bih=797&ved=0ahUKEwjD35DpqraTAxVNOfsDHbOqOigQ4dUDCAo&uact=5&oq=travesia+legal&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIg50cmF2ZXNpYSBsZWdhbDIHEAAYgAQYEzIHEAAYgAQYEzIIEAAYFhgeGBMyCxAAGIAEGIoFGIYDMgUQABjvBTIFEAAY7wUyCBAAGIAEGKIEMgUQABjvBUjlMlDaHljhMHAFeACQAQCYAXCgAekKqgEEMTUuM7gBA8gBAPgBAZgCF6AC1QvCAgYQABgWGB7CAgsQABiABBiKBRiRAsICChAAGIAEGIoFGEPCAgUQABiABMICChAAGIAEGBQYhwLCAgkQABiABBgKGAvCAgcQABiABBgNwgIGEAAYHhgNmAMAiAYBkgcEMjAuM6AHn2GyBwQxNS4zuAfCC8IHBjAuNS4xOMgHSoAIAQ&sclient=gws-wiz-local#rlfi=hd:;si:15949484553280797983,l,Cg50cmF2ZXNpYSBsZWdhbEivspOLpbyAgAhaHBAAEAEYABgBIg50cmF2ZXNpYSBsZWdhbDICZXOSARRpbW1pZ3JhdGlvbl9hdHRvcm5leQ;mv:[[41.4616407,2.5407214],[40.378685,-4.3285168999999994]]"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: '600',
              color: 'var(--navy)',
              textDecoration: 'none',
              border: '1px solid var(--border)',
              borderRadius: '999px',
              padding: '10px 20px',
              background: 'var(--white)',
              transition: 'box-shadow 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(13,31,60,0.12)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Ver todas las reseñas en Google
          </a>
        </div>
      </section>

      {/* Founders teaser */}
      <section style={{ background: 'var(--white)', padding: '96px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">El Equipo</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: '700', color: 'var(--navy)' }}>
              Profesionales con experiencia real
            </h2>
          </motion.div>

          <motion.div {...fadeUp} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
            maxWidth: '960px',
            margin: '0 auto',
          }}>
            {[
              {
                photo: '/founders/pau-iglesias.jpg',
                initials: 'PI',
                name: 'Pau Iglesias',
                title: 'Especialista en Extranjería',
                bio: 'Experto en derecho de extranjería y nacionalidad con más de una década de experiencia en la gestión de permisos de residencia, arraigo y procesos de nacionalización.',
              },
              {
                photo: 'https://placehold.co/400x400',
                initials: 'NA',
                name: 'Nombre Apellido',
                title: 'Asesora Fiscal',
                bio: 'Especialista en gestión fiscal y contable para autónomos y empresas. Declaraciones trimestrales, IVA, IRPF y planificación fiscal anual.',
              },
              {
                photo: 'https://placehold.co/400x400',
                initials: 'NA',
                name: 'Nombre Apellido',
                title: 'Asesor Laboral',
                bio: 'Experto en asesoramiento laboral integral para autónomos y empresas. Nóminas, contratos, altas en la Seguridad Social y gestión de relaciones laborales.',
              },
            ].map(({ photo, initials, name, title, bio }) => (
              <div key={title} style={{
                background: 'var(--off-white)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: '36px 28px',
                textAlign: 'center',
              }}>
                {photo ? (
                  <img
                    src={photo}
                    alt={`${name}, co-fundador de Travesía Legal`}
                    loading="lazy"
                    style={{
                      width: '80px', height: '80px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      border: '2px solid var(--gold-light)',
                      margin: '0 auto 20px',
                      display: 'block',
                    }}
                  />
                ) : (
                  <div style={{
                    width: '80px', height: '80px',
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    color: 'var(--navy)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontSize: '24px',
                    fontWeight: '700',
                    margin: '0 auto 20px',
                  }}>
                    {initials}
                  </div>
                )}
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px' }}>{name}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '16px' }}>{title}</p>
                <p style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.7 }}>{bio}</p>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} style={{ textAlign: 'center', marginTop: '40px' }}>
            <InteractiveButton variant="outline" to="/nosotros">
              Conoce a nuestro equipo <ArrowRight size={16} />
            </InteractiveButton>
          </motion.div>
        </div>
      </section>

      {/* Blog teaser */}
      <section style={{ background: 'var(--navy-faint)', padding: '96px 0' }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="section-label">Blog y Recursos</span>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: '700', color: 'var(--navy)' }}>
                Guías prácticas y actualizadas
              </h2>
            </div>
            <a href="/blog" className="btn-ghost">
              Ver todos los artículos <ArrowRight size={14} />
            </a>
          </motion.div>

          <motion.div {...fadeUp} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            <BlogCard
              category="Extranjería"
              title="Extranjería y Regularización para Latinoamericanos en España (2025)"
              excerpt="Regularizar tu situación en España como ciudadano latinoamericano es uno de los pasos más importantes. Conoce las vías disponibles, requisitos y errores a evitar."
              readTime="8 min"
              href="/blog/extranjeria-regularizacion-latinoamericanos"
            />
            <BlogCard
              category="Fiscal"
              title="Autónomos en España: Declaración de la Renta y Deducciones (2025)"
              excerpt="Todo lo que necesitas saber sobre los modelos trimestrales, deducciones fiscales y la declaración anual de la renta como autónomo en España."
              readTime="7 min"
              href="/blog/autonomos-declaracion-renta"
            />
            <BlogCard
              category="Fiscal"
              title="Gestión Contable y Fiscal para Empresas en España (2025)"
              excerpt="La contabilidad y la fiscalidad empresarial explicadas de forma práctica: obligaciones, impuestos, planificación fiscal y señales de que necesitas un gestor."
              readTime="7 min"
              href="/blog/gestion-contable-fiscal-empresas"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #08142A 0%, #0D1F3C 60%, #162B52 100%)',
        padding: '96px 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '20px',
              display: 'block',
            }}>
              Empieza hoy
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: '700',
              color: 'var(--white)',
              marginBottom: '20px',
              lineHeight: 1.2,
            }}>
              ¿Listo para resolver tus trámites?
            </h2>
            <p style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.65)',
              marginBottom: '40px',
              maxWidth: '480px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              Consulta gratuita sin compromiso. Te orientamos sobre tu situación y los pasos a seguir.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <InteractiveButton variant="gold" href="https://wa.me/34694269008" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                Escríbenos por WhatsApp
              </InteractiveButton>
              <InteractiveButton variant="outline-dark" to="/contacto">
                Ver datos de contacto
              </InteractiveButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
