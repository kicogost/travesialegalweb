import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'

import Home from './pages/Home.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import Blog from './pages/Blog.jsx'
import Extranjeria from './pages/services/Extranjeria.jsx'
import Laboral from './pages/services/Laboral.jsx'
import Fiscal from './pages/services/Fiscal.jsx'
import BlogExtranjeriaRegularizacion from './pages/blog/ExtranjeriaRegularizacion.jsx'
import BlogAutonomosDeclaracion from './pages/blog/AutonomosDeclaracion.jsx'
import BlogGestionContable from './pages/blog/GestionContable.jsx'
import BlogDeclaracionRenta from './pages/blog/DeclaracionRenta.jsx'
import BlogArrayigoSocial from './pages/blog/ArrayigoSocial.jsx'
import BlogReagrupacionFamiliar from './pages/blog/ReagrupacionFamiliar.jsx'
import BlogNacionalidadEspanola from './pages/blog/NacionalidadEspanola.jsx'
import BlogAltaAutonomo from './pages/blog/AltaAutonomo.jsx'
import BlogIvaAutonomos from './pages/blog/IvaAutonomos.jsx'
import BlogComoLlegarEspana from './pages/blog/ComoLlegarEspanaLegalmente.jsx'
import BlogVisadoEstudios from './pages/blog/VisadoEstudios.jsx'
import BlogAntecedentesPenales from './pages/blog/AntecedentesPenales.jsx'
import BlogDespidoPreaviso from './pages/blog/DespidoPreaviso.jsx'
import AvisoLegal from './pages/legal/AvisoLegal.jsx'
import PoliticaPrivacidad from './pages/legal/PoliticaPrivacidad.jsx'
import PoliticaCookies from './pages/legal/PoliticaCookies.jsx'
import DeclaracionAccesibilidad from './pages/legal/DeclaracionAccesibilidad.jsx'
import GestoriaExtranjeriaBarcelona from './pages/local/GestoriaExtranjeriaBarcelona.jsx'
import GestoriaExtranjeriaSabadell from './pages/local/GestoriaExtranjeriaSabadell.jsx'
import GestoriaAutonomosBarcelona from './pages/local/GestoriaAutonomosBarcelona.jsx'
import GestoriaAutonomosSabadell from './pages/local/GestoriaAutonomosSabadell.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <Layout>
      <ScrollToTop />
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
        <Route path="/blog/como-llegar-a-espana-legalmente" element={<BlogComoLlegarEspana />} />
        <Route path="/blog/visado-estudios-espana" element={<BlogVisadoEstudios />} />
        <Route path="/blog/antecedentes-penales-colombia-peru-honduras-el-salvador" element={<BlogAntecedentesPenales />} />
        <Route path="/blog/despido-preaviso-plazos" element={<BlogDespidoPreaviso />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
        <Route path="/declaracion-accesibilidad" element={<DeclaracionAccesibilidad />} />
        <Route path="/gestoria-extranjeria-barcelona" element={<GestoriaExtranjeriaBarcelona />} />
        <Route path="/gestoria-extranjeria-sabadell" element={<GestoriaExtranjeriaSabadell />} />
        <Route path="/gestoria-autonomos-barcelona" element={<GestoriaAutonomosBarcelona />} />
        <Route path="/gestoria-autonomos-sabadell" element={<GestoriaAutonomosSabadell />} />
      </Routes>
    </Layout>
  )
}

export default App
