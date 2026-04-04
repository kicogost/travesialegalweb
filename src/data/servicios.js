export const LEGAL_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Travesía Legal",
  "url": "https://travesialegal.com",
  "telephone": "+34694269008",
  "address": [
    { "@type": "PostalAddress", "streetAddress": "C/ Sardenya, 311", "addressLocality": "Barcelona", "postalCode": "08025", "addressCountry": "ES" },
    { "@type": "PostalAddress", "streetAddress": "C/ Vallirana, 7 local", "addressLocality": "Sabadell", "postalCode": "08207", "addressCountry": "ES" }
  ]
}

export const SERVICIOS_MENU = [
  {
    category: 'Ciudadanía',
    slug: 'ciudadania',
    items: [
      { label: 'Nacionalidad por residencia', to: '/servicios/ciudadania/nacionalidad-por-residencia' },
      { label: 'Nacionalidad por origen', to: '/servicios/ciudadania/nacionalidad-por-origen' },
      { label: 'Nacionalidad por opción', to: '/servicios/ciudadania/nacionalidad-por-opcion' },
      { label: 'Nacionalidad por nacimiento', to: '/servicios/ciudadania/nacionalidad-por-nacimiento' },
    ]
  },
  {
    category: 'Extranjería y Residencia',
    slug: 'extranjeria-y-residencia',
    items: [
      { label: 'Arraigo social y regularización', to: '/servicios/extranjeria-y-residencia/arraigo-social' },
      { label: 'Permiso de trabajo cuenta ajena', to: '/servicios/extranjeria-y-residencia/permiso-trabajo-cuenta-ajena' },
      { label: 'Permiso de trabajo autónomo', to: '/servicios/extranjeria-y-residencia/permiso-trabajo-autonomo' },
      { label: 'Residencia no lucrativa', to: '/servicios/extranjeria-y-residencia/residencia-no-lucrativa' },
      { label: 'Reagrupación familiar', to: '/servicios/extranjeria-y-residencia/reagrupacion-familiar' },
      { label: 'Residencia de larga duración', to: '/servicios/extranjeria-y-residencia/residencia-larga-duracion' },
      { label: 'Visado de estudiante', to: '/servicios/extranjeria-y-residencia/visado-estudiante' },
      { label: 'Nómadas digitales', to: '/servicios/extranjeria-y-residencia/nomadas-digitales' },
      { label: 'Tarjeta Azul UE', to: '/servicios/extranjeria-y-residencia/profesionales-cualificados-tarjeta-azul' },
      { label: 'Residencia para deportistas', to: '/servicios/extranjeria-y-residencia/residencia-deportistas' },
    ]
  },
  {
    category: 'Empresas e Inversión',
    slug: 'empresas-e-inversion',
    items: [
      { label: 'Constitución de sociedades', to: '/servicios/empresas-e-inversion/constitucion-sociedades' },
      { label: 'Residencia para emprendedores', to: '/servicios/empresas-e-inversion/residencia-emprendedores' },
      { label: 'Traslado de empleados a España', to: '/servicios/empresas-e-inversion/traslado-empleados' },
      { label: 'Asesoramiento legal para startups', to: '/servicios/empresas-e-inversion/asesoramiento-startups' },
      { label: 'Due diligence legal', to: '/servicios/empresas-e-inversion/due-diligence-legal' },
    ]
  },
  {
    category: 'Fiscal y Contable',
    slug: 'fiscal-y-contable',
    items: [
      { label: 'Declaración de la renta (IRPF)', to: '/servicios/fiscal-y-contable/declaracion-renta-irpf' },
      { label: 'Gestión fiscal autónomos y soc.', to: '/servicios/fiscal-y-contable/gestion-fiscal-autonomos-sociedades' },
      { label: 'Planificación fiscal', to: '/servicios/fiscal-y-contable/planificacion-fiscal' },
      { label: 'Régimen impatriados (Ley Beckham)', to: '/servicios/fiscal-y-contable/regimen-impatriados-ley-beckham' },
      { label: 'Impuesto sobre el Patrimonio', to: '/servicios/fiscal-y-contable/impuesto-patrimonio' },
      { label: 'Impuesto de Sociedades', to: '/servicios/fiscal-y-contable/impuesto-sociedades' },
      { label: 'Simulación fiscal e inspecciones', to: '/servicios/fiscal-y-contable/simulacion-fiscal-inspecciones' },
    ]
  },
]
