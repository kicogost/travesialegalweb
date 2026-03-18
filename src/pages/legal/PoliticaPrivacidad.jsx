import LegalPage, { Section, P, Ul } from '../../components/LegalPage.jsx'

export default function PoliticaPrivacidad() {
  return (
    <LegalPage
      title="Política de Privacidad"
      description="Política de privacidad de Travesía Legal. Información sobre el tratamiento de datos personales conforme al RGPD y la LOPDGDD."
      canonical="/politica-de-privacidad"
    >
      <Section title="Responsable del tratamiento">
        <P>A los efectos del cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales de 5 de diciembre (LOPDGDD), se establece la siguiente información:</P>
        <P><strong>Razón social:</strong> Pau Iglesias Bernabeu</P>
        <P><strong>NIF/CIF:</strong> 48223707K</P>
        <P><strong>Dirección:</strong> C/ Vallirana, 7 local, 08207 Sabadell (Barcelona)</P>
        <P><strong>Correo:</strong> info@travesialegal.com</P>
      </Section>

      <Section title="1. ¿Quién es el responsable del tratamiento de tus datos personales?">
        <P>Pau Iglesias Bernabeu, NIF/CIF: 48223707K, es el RESPONSABLE del tratamiento de los datos personales del USUARIO e informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).</P>
      </Section>

      <Section title="2. ¿Con qué finalidad se tratan los datos y cuál es la base que legitima el tratamiento?">
        <P>Se trata la información que nos facilitan las personas interesadas con el fin de gestionar el envío de la información que nos soliciten, pudiendo elaborarse, de ser necesario, un perfil comercial en base a la información facilitada. No se tomarán decisiones automatizadas en base a dicho perfil.</P>
        <P>También se tratan los datos para tramitar encargos, solicitudes, dar respuesta a las consultas o cualquier tipo de petición que sea realizada por el USUARIO a través de cualquiera de las formas de contacto disponibles en la página web.</P>
      </Section>

      <Section title="3. ¿Cuánto tiempo se conservan los datos?">
        <P>Los datos personales proporcionados se conservarán mientras se mantenga la relación mercantil y no se solicite su supresión por el interesado. Cuando ya no sea necesario, se suprimirán con las medidas de seguridad adecuadas.</P>
      </Section>

      <Section title="4. ¿Qué derechos existen y cómo ejercerlos?">
        <P>Los interesados tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando los datos ya no sean necesarios para los fines que fueron recogidos. Los derechos que le asisten son:</P>
        <Ul items={[
          'Solicitar el ACCESO a sus datos personales.',
          'Solicitar la RECTIFICACIÓN de sus datos.',
          'Solicitar la SUPRESIÓN o eliminación de sus datos (derecho al "olvido").',
          'LIMITAR u OPONERSE al uso que le damos a sus datos.',
          'Derecho a la PORTABILIDAD de sus datos.',
          'Derecho a RETIRAR su consentimiento en cualquier momento.',
          'Derecho a presentar una reclamación ante la Agencia Española de Protección de Datos a través de www.aepd.es.',
        ]} />
        <P>Para el ejercicio de sus derechos, deberá ponerse en contacto con el Responsable en la dirección C/ Vallirana, 7 local, 08207 Sabadell (Barcelona) o mediante correo electrónico a info@travesialegal.com, acompañado de copia del documento de identidad.</P>
      </Section>

      <Section title="5. ¿A quién facilitamos tus datos personales?">
        <P>Los datos personales no se cederán a terceros, salvo en su caso, otras empresas del grupo para fines administrativos internos o salvo obligación legal.</P>
      </Section>

      <Section title="6. ¿Se toman decisiones automatizadas?">
        <P>No se tomarán decisiones automatizadas en base al perfil comercial.</P>
      </Section>

      <Section title="7. ¿Se realizan transferencias internacionales de datos?">
        <P>No realizamos transferencias internacionales de sus datos.</P>
      </Section>

      <Section title="8. Legitimación">
        <P>Se solicita el consentimiento del interesado para el tratamiento de sus datos y la oferta prospectiva de productos y servicios. Los datos personales obtenidos a través de los formularios del sitio web serán tratados únicamente en base al consentimiento otorgado por el interesado, a través de la aceptación de la casilla dispuesta para tal fin. Este consentimiento puede ser retirado en cualquier momento.</P>
      </Section>
    </LegalPage>
  )
}
