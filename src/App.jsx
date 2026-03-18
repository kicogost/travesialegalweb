import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const Nosotros = lazy(() => import('./pages/Nosotros.jsx'))
const Contacto = lazy(() => import('./pages/Contacto.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const Extranjeria = lazy(() => import('./pages/services/Extranjeria.jsx'))
const Laboral = lazy(() => import('./pages/services/Laboral.jsx'))
const Fiscal = lazy(() => import('./pages/services/Fiscal.jsx'))
const BlogExtranjeriaRegularizacion = lazy(() => import('./pages/blog/ExtranjeriaRegularizacion.jsx'))
const BlogAutonomosDeclaracion = lazy(() => import('./pages/blog/AutonomosDeclaracion.jsx'))
const BlogGestionContable = lazy(() => import('./pages/blog/GestionContable.jsx'))
const BlogDeclaracionRenta = lazy(() => import('./pages/blog/DeclaracionRenta.jsx'))
const BlogArrayigoSocial = lazy(() => import('./pages/blog/ArrayigoSocial.jsx'))
const BlogReagrupacionFamiliar = lazy(() => import('./pages/blog/ReagrupacionFamiliar.jsx'))
const BlogNacionalidadEspanola = lazy(() => import('./pages/blog/NacionalidadEspanola.jsx'))
const BlogAltaAutonomo = lazy(() => import('./pages/blog/AltaAutonomo.jsx'))
const BlogIvaAutonomos = lazy(() => import('./pages/blog/IvaAutonomos.jsx'))
const AvisoLegal = lazy(() => import('./pages/legal/AvisoLegal.jsx'))
const PoliticaPrivacidad = lazy(() => import('./pages/legal/PoliticaPrivacidad.jsx'))
const PoliticaCookies = lazy(() => import('./pages/legal/PoliticaCookies.jsx'))
const DeclaracionAccesibilidad = lazy(() => import('./pages/legal/DeclaracionAccesibilidad.jsx'))
const GestoriaExtranjeriaBarcelona = lazy(() => import('./pages/local/GestoriaExtranjeriaBarcelona.jsx'))
const GestoriaExtranjeriaSabadell = lazy(() => import('./pages/local/GestoriaExtranjeriaSabadell.jsx'))
const GestoriaAutonomosBarcelona = lazy(() => import('./pages/local/GestoriaAutonomosBarcelona.jsx'))
const GestoriaAutonomosSabadell = lazy(() => import('./pages/local/GestoriaAutonomosSabadell.jsx'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-body)',color:'var(--slate)'}}>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/servicios/extranjeria-y-nacionalidad" element={<Extranjeria />} />
          <Route path="/servicios/asesoramiento-laboral" element={<Laboral />} />
          <Route path="/servicios/gestion-fiscal-contable" element={<Fiscal />} />
          <Route path="/blog/extranjeria-regularizacion-latinoamericanos" element={<BlogExtranjeriaRegularizacion />} />
          <Route path="/blog/autonomos-declaracion-renta" element={<BlogAutonomosDeclaracion />} />
          <Route path="/blog/gestion-contable-fiscal-empresas" element={<BlogGestionContable />} />
          <Route path="/blog/declaracion-renta-2025-guia-completa" element={<BlogDeclaracionRenta />} />
          <Route path="/blog/arraigo-social-requisitos-documentacion" element={<BlogArrayigoSocial />} />
          <Route path="/blog/reagrupacion-familiar-espana" element={<BlogReagrupacionFamiliar />} />
          <Route path="/blog/nacionalidad-espanola-latinoamericanos-requisitos" element={<BlogNacionalidadEspanola />} />
          <Route path="/blog/alta-autonomo-espana-guia-completa" element={<BlogAltaAutonomo />} />
          <Route path="/blog/iva-autonomos-pymes-modelo-303" element={<BlogIvaAutonomos />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
          <Route path="/declaracion-accesibilidad" element={<DeclaracionAccesibilidad />} />
          <Route path="/gestoria-extranjeria-barcelona" element={<GestoriaExtranjeriaBarcelona />} />
          <Route path="/gestoria-extranjeria-sabadell" element={<GestoriaExtranjeriaSabadell />} />
          <Route path="/gestoria-autonomos-barcelona" element={<GestoriaAutonomosBarcelona />} />
          <Route path="/gestoria-autonomos-sabadell" element={<GestoriaAutonomosSabadell />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
