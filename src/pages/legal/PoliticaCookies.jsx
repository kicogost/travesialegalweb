import LegalPage, { Section, P, Ul } from '../../components/LegalPage.jsx'

export default function PoliticaCookies() {
  return (
    <LegalPage
      title="Política de Cookies"
      description="Política de cookies de Travesía Legal. Información sobre los tipos de cookies utilizadas y cómo gestionarlas en tu navegador."
      canonical="/politica-de-cookies"
    >
      <Section title="¿Qué es una cookie?">
        <P>Conforme con la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI), en relación con el Reglamento (UE) 2016/679 (GDPR) y la Ley Orgánica 3/2018 (LOPDGDD), es obligación obtener el consentimiento expreso del usuario antes de instalar cookies prescindibles en su dispositivo.</P>
        <P>Las cookies son pequeños archivos de texto que se usan para almacenar información. Se almacenan en tu dispositivo cuando accedes a una página web desde tu navegador. Estas cookies nos ayudan a hacer funcionar la web, a hacerla más segura, a mejorar la experiencia de usuario y a entender cómo se comporta la web.</P>
      </Section>

      <Section title="Tipos de cookies y finalidad">
        <P><strong>Cookies propias</strong> — Las creadas o gestionadas por el responsable de la página web.</P>
        <Ul items={[
          'Finalidad técnica: permiten la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existan.',
          'Finalidad de análisis: permiten el seguimiento y análisis del comportamiento de los usuarios de la página web para la elaboración de perfiles de navegación.',
          'Finalidad de personalización: almacenan información del comportamiento del usuario obtenida a través del registro de sus hábitos de navegación.',
        ]} />
        <P><strong>Cookies de terceros</strong> — Servidas y administradas por prestadores de servicios de análisis o publicitarios ajenos al responsable de la página web. Permiten la gestión eficaz de campañas publicitarias e informativas.</P>
      </Section>

      <Section title="Cookies según el plazo de conservación">
        <P><strong>Cookies de sesión:</strong> diseñadas para recobar y almacenar datos mientras el usuario accede a una página web. Desaparecen al finalizar la sesión del navegador.</P>
        <P><strong>Cookies persistentes:</strong> los datos siguen almacenados en el terminal y pueden ser accedidos durante un período definido por el responsable de la cookie, que puede ir de unos minutos a varios años.</P>
      </Section>

      <Section title="¿Cómo bloquear o permitir las cookies?">
        <P>La mayoría de los navegadores están configurados de forma predeterminada para aceptar cookies, pero puedes cambiar la configuración para bloquearlas. A continuación se indican las instrucciones para los navegadores más habituales:</P>
        <Ul items={[
          'Google Chrome: Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.',
          'Mozilla Firefox: Preferencias → Privacidad y seguridad → Cookies y datos del sitio.',
          'Safari (Mac): Preferencias → Privacidad.',
          'Safari (iOS): Ajustes → Safari → Privacidad y seguridad.',
          'Microsoft Edge: Configuración → Privacidad, búsqueda y servicios → Cookies.',
        ]} />
        <P>Si decides bloquear las cookies, es posible que algunas funcionalidades del sitio web no estén disponibles o no funcionen correctamente.</P>
      </Section>

      <Section title="Más información">
        <P>Este sitio web no instalará cookies prescindibles sin el consentimiento previo del usuario. Para cualquier duda sobre nuestra política de cookies puede contactarnos en info@travesialegal.com.</P>
      </Section>
    </LegalPage>
  )
}
