import LegalPage, { Section, P } from '../../components/LegalPage.jsx'

export default function AvisoLegal() {
  return (
    <LegalPage
      title="Aviso Legal"
      description="Aviso legal de Travesía Legal. Información sobre el responsable del sitio web, términos de uso, propiedad intelectual y legislación aplicable."
      canonical="/aviso-legal"
    >
      <Section title="Datos identificativos">
        <P>De acuerdo con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se detallan los datos identificativos del responsable de este sitio web:</P>
        <P><strong>Razón social:</strong> Pau Iglesias Bernabeu</P>
        <P><strong>NIF:</strong> 48223707K</P>
        <P><strong>Dirección:</strong> C/ Vallirana, 7 local, 08207 Sabadell (Barcelona)</P>
        <P><strong>Teléfono:</strong> 694 269 008</P>
        <P><strong>Email:</strong> info@travesialegal.com</P>
      </Section>

      <Section title="Términos y condiciones de uso">
        <P>El acceso a este sitio web atribuye la condición de USUARIO, quien accede voluntariamente. El mero acceso no implica el establecimiento de ningún tipo de relación comercial entre el USUARIO y Pau Iglesias Bernabeu.</P>
        <P>La información suministrada en la página web tiene como finalidad facilitar el conocimiento de las actividades y servicios prestados. El responsable se reserva el derecho de efectuar, en cualquier momento, las modificaciones, variaciones, supresión o cancelaciones de los contenidos que considere necesarias. Esta facultad no otorga a los usuarios ningún derecho a percibir indemnización por daños y perjuicios.</P>
      </Section>

      <Section title="Uso indebido y responsabilidad">
        <P>El USUARIO asume la responsabilidad del uso del portal, comprometiéndose a realizar un buen uso de la página web y a aportar información veraz y lícita, no permitiéndose conductas que vayan contra la ley, los derechos o intereses de terceros.</P>
        <P>Se reserva el derecho a denegar o retirar el acceso a la web a aquellos USUARIOS que incumplan las condiciones y obligaciones de la presente página web, no haciéndose responsable del mal uso que se realice de los contenidos.</P>
        <P>Pau Iglesias Bernabeu declara haber adoptado todas las medidas necesarias, dentro de sus posibilidades y del estado de la tecnología, para garantizar el funcionamiento de la página web y evitar la existencia y transmisión de virus y demás componentes dañinos.</P>
      </Section>

      <Section title="Enlaces">
        <P>En el caso de que en el sitio web se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet, Pau Iglesias Bernabeu no ejercerá ningún tipo de control sobre dichos sitios y contenidos, no asumiendo en ningún caso responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.</P>
      </Section>

      <Section title="Propiedad intelectual e industrial">
        <P>El diseño, contenidos y creación de la página web son titularidad de Travesía Legal. El acceso gratuito no implica otros derechos o licencias para reproducción y/o distribución sin la previa autorización expresa del propietario.</P>
        <P>De conformidad con lo dispuesto en los artículos 8 y 32.1 de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, distribución y comunicación pública de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico sin previa autorización.</P>
        <P>Las marcas, logotipos, diseños, contenidos y programas que forman parte de esta página web están protegidos por leyes de propiedad industrial e intelectual. La reproducción, distribución, manipulación o desensamblaje no autorizado dará lugar a graves penalizaciones civiles y penales.</P>
      </Section>

      <Section title="Política de privacidad y protección de datos">
        <P>En virtud de lo dispuesto en el Reglamento General de Protección de Datos (RGPD), Reglamento UE 2016/679, y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD), se informa al USUARIO que todos los datos recabados mediante los diferentes formularios serán incorporados a un fichero bajo la responsabilidad de Pau Iglesias Bernabeu con el fin de gestionar el envío de la información solicitada.</P>
        <P>Los datos personales proporcionados se conservarán mientras se mantenga la relación mercantil y no se solicite su supresión por el interesado. El USUARIO está legitimado para retirar su consentimiento en cualquier momento, así como a ejercer sus derechos de acceso, rectificación, portabilidad y supresión de sus datos.</P>
      </Section>

      <Section title="Legislación aplicable y jurisdicción">
        <P>La relación con el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales que corresponda conforme a derecho.</P>
      </Section>
    </LegalPage>
  )
}
