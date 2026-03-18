import LegalPage, { Section, P, Ul } from '../../components/LegalPage.jsx'

export default function DeclaracionAccesibilidad() {
  return (
    <LegalPage
      title="Declaración de Accesibilidad"
      description="Declaración de accesibilidad de Travesía Legal conforme a la norma UNE-EN 301 549:2022 y las pautas WCAG 2.1 AA."
      canonical="/declaracion-accesibilidad"
    >
      <Section title="1. Declaración de accesibilidad">
        <P>Este sitio web se ha comprometido a hacer accesible su contenido de conformidad con el criterio de accesibilidad del Programa Kit Digital, conforme a los anexos de la norma UNE-EN 301 549:2022.</P>
      </Section>

      <Section title="2. Situación de cumplimiento">
        <P>Este sitio web es <strong>parcialmente conforme</strong> con las pautas de accesibilidad WCAG 2.1 nivel AA. A continuación se detallan los aspectos de accesibilidad con los que el sitio es conforme:</P>
        <Ul items={[
          '9.1.3.3 Características sensoriales.',
          '9.1.3.4 Orientación.',
          '9.1.4.1 Uso del color.',
          '9.1.4.3 Contraste (mínimo).',
          '9.1.4.4 Cambio de tamaño del texto.',
          '9.1.4.10 Reajuste del texto.',
          '9.1.4.11 Contraste no textual.',
          '9.2.1.1 Teclado.',
          '9.2.1.2 Sin trampas para el foco del teclado.',
          '9.2.4.1 Evitar bloques.',
          '9.2.4.2 Titulado de páginas.',
          '9.2.4.3 Orden del foco.',
          '9.2.4.7 Foco visible.',
          '9.3.1.1 Idioma de la página.',
          '9.3.2.1 Al recibir el foco.',
          '9.3.2.2 Al recibir entradas.',
          '9.3.3.1 Identificación de errores.',
          '9.4.1.2 Nombre, función, valor.',
          '9.4.1.3 Mensajes de estado.',
        ]} />
      </Section>

      <Section title="3. Contenido no accesible">
        <P>El contenido que se recoge a continuación no es accesible por los siguientes motivos:</P>
        <Ul items={[
          '9.1.1.1 Contenido no textual: algunas imágenes decorativas pueden carecer de texto alternativo adecuado.',
          '9.1.3.1 Información y relaciones: algunas relaciones de información pueden no estar correctamente marcadas semánticamente.',
          '9.2.4.4 Propósito de los enlaces (en contexto): algunos enlaces pueden no ser suficientemente descriptivos fuera de su contexto.',
          '9.2.4.6 Encabezados y etiquetas: algunos encabezados pueden no describir adecuadamente el tema o propósito.',
          '9.4.1.1 Procesamiento: algunos elementos pueden no cumplir completamente los requisitos de validación HTML.',
        ]} />
      </Section>

      <Section title="4. Preparación de la presente declaración">
        <P>La presente declaración fue preparada el 1 de enero de 2025. El método empleado ha sido una autoevaluación llevada a cabo por el propio responsable del sitio web, que certifica que el presente sitio web corresponde sustancialmente a la interpretación de la guía informativa proporcionada por las pautas WCAG 2.1 AA.</P>
        <P>En este esfuerzo continuo en la eliminación de barreras, seguiremos mejorando este sitio hasta alcanzar una accesibilidad y usabilidad óptimas para todos los usuarios.</P>
        <P><strong>Última revisión de la declaración:</strong> 1 de enero de 2025.</P>
      </Section>

      <Section title="5. Observaciones y datos de contacto">
        <P>Si encuentra barreras de acceso o problemas con alguna página o función de este sitio web que pueda suponer un obstáculo para los visitantes, puede ponerse en contacto en cualquier momento:</P>
        <P><strong>Email:</strong> info@travesialegal.com</P>
        <P><strong>Teléfono:</strong> +34 694 269 008</P>
        <P>Atenderemos su solicitud y trabajaremos para resolver las incidencias de accesibilidad identificadas a la mayor brevedad posible.</P>
      </Section>
    </LegalPage>
  )
}
