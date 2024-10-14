export const TermsAndConditions = () => {
  return (
    <div className="mt-16 flex flex-col items-center pb-20">
      <div className="relative flex w-full bg-interior2 bg-fixed bg-cover bg-no-repeat p-9">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <h1 className="text-5xl text-white z-10 font-inter pl-10">
          Términos y condiciones
        </h1>
      </div>
      <div className="w-1/2">
        <h2 className="text-3xl font-bold text-center py-12 text-slate-900/95">
          Términos y Condiciones para Profesionales y Clientes de Cruz Patagonia
        </h2>
        <div>
          <ul className="list-decimal flex flex-col gap-6 font-inter">
            <li>
              <h2 className="font-semibold text-lg pb-2">
                Relación Contractual
              </h2>
              <p>
                Estos Términos y Condiciones regulan el acceso y uso de la
                plataforma <span className="font-semibold">Cruz Patagonia</span>{" "}
                (en adelante "la Empresa"), destinada a conectar a profesionales
                independientes con clientes que buscan servicios de{" "}
                <span className="font-semibold">
                  construcción, reparación y diseño de inmuebles
                </span>
                . Al usar la plataforma, tanto{" "}
                <span className="font-semibold">Clientes</span> como{" "}
                <span className="font-semibold">Profesionales</span> aceptan
                estar sujetos a estos términos, formando una relación
                contractual con la Empresa. Si no se aceptan estos términos, no
                podrán acceder ni utilizar los servicios de la plataforma.
              </p>
            </li>
            <li>
              <h2 className="font-semibold text-lg pb-2">
                Servicios Prestados
              </h2>
              <p>
                Cruz Patagonia ofrece una{" "}
                <span className="font-semibold">plataforma tecnológica</span>{" "}
                que facilita la interacciónn entre{" "}
                <span className="font-semibold">Clientes</span> que requieren
                servicios y <span className="font-semibold">Profesionales</span>{" "}
                que los ofrecen. La Empresa actúa únicamente como intermediario
                y no tiene responsabilidad directa sobre la ejecución de los
                servicios contratados. Los profesionales son{" "}
                <span className="font-semibold">
                  contratistas independientes
                </span>{" "}
                y no empleados de la Empresa.
              </p>
            </li>
            <li>
              <h2 className="font-semibold text-lg pb-2">
                Obligaciones y Responsabilidades de los Profesionales
              </h2>
              <ul className="list-disc pl-5">
                <li>
                  Los profesionales deben contar con todas las{" "}
                  <span className="font-semibold">
                    licencias, permisos y certificaciones
                  </span>{" "}
                  necesarias para ofrecer sus servicios.
                </li>
                <li>
                  Son responsables de la{" "}
                  <span className="font-semibold">
                    calidad, seguridad y cumplimiento
                  </span>{" "}
                  de los trabajos realizados.
                </li>
                <li>
                  Cruz Patagonia no se hace responsable por incidentes como{" "}
                  <span className="font-semibold">
                    accidentes, daños a la propiedad
                  </span>{" "}
                  o lesiones personales derivadas de la prestación de los
                  servicios por parte de los profesionales.
                </li>
              </ul>
            </li>
            <li>
              <h2 className="font-semibold text-lg pb-2">
                Obligaciones de los Clientes
              </h2>
              <ul className="list-disc pl-5">
                <li>
                  Los Clientes deben proporcionar{" "}
                  <span className="font-semibold">
                    información completa y precisa
                  </span>{" "}
                  sobre el trabajo requerido, de lo contrario, la Empresa no se
                  responsabiliza por problemas derivados de la falta o
                  inexactitud de la información.
                </li>
                <li>
                  Los Clientes deben asegurarse de que el inmueble y los bienes
                  en la propiedad estén debidamente protegidos durante la
                  ejecución de los servicios. La Empresa no se hace responsable
                  por <span className="font-semibold">daños</span> a la
                  propiedad durante la prestación del servicio.
                </li>
              </ul>
            </li>
            <li>
              <h2 className="font-semibold text-lg">Pago y Comisiones</h2>
              <ul className="list-disc pl-5">
                <li>
                  Los pagos por los servicios se realizan exclusivamente a
                  través de la plataforma y están sujetos a una{" "}
                  <span className="font-semibold">comisión</span> de servicio.
                  La Empresa retendrá un porcentaje del pago por su rol de
                  intermediación.
                </li>
                <li>
                  Cualquier disputa por{" "}
                  <span className="font-semibold">retrasos en los pagos</span> o
                  incumplimientos en la entrega será gestionada entre el Cliente
                  y el Profesional, sin responsabilidad directa de la Empresa.
                </li>
              </ul>
            </li>
            <li>
              <h2 className="font-semibold text-lg">Política de Cancelación</h2>
              <ul className="list-disc pl-5">
                <li>
                  Los Clientes pueden cancelar o modificar su solicitud según
                  las condiciones establecidas en la{" "}
                  <span className="font-semibold">política de cancelación</span>
                  , la cual puede incluir penalizaciones.
                </li>
                <li>
                  Si el Profesional incumple con la prestación del servicio,
                  Cruz Patagonia se reserva el derecho de aplicar{" "}
                  <span className="font-semibold">sanciones</span> y gestionar
                  la devolución del dinero, si corresponde.
                </li>
              </ul>
            </li>
            <li>
              <h2 className="font-semibold text-lg">
                Limitación de Responsabilidad
              </h2>
              <ul className="list-disc pl-5">
                <li>
                  La Empresa no se responsabiliza de la{" "}
                  <span className="font-semibold">calidad</span> o{" "}
                  <span className="font-semibold">disponibilidad</span>
                  de los servicios prestados por los profesionales.
                </li>
                <li>
                  La responsabilidad de Cruz Patagonia se limita exclusivamente
                  al uso de la plataforma tecnológica y en ningún caso será
                  responsable por{" "}
                  <span className="font-semibold">daños indirectos</span>, lucro
                  cesante o perjuicios derivados de la relación entre Cliente y
                  Profesional.
                </li>
              </ul>
            </li>
            <li>
              <h2 className="font-semibold text-lg">Resolución de Disputas</h2>
              <p>
                Cruz Patagonia actuará como{" "}
                <span className="font-semibold">mediador</span> en disputas
                entre Clientes y Profesionales, pero no garantiza la resolución
                de las mismas. En caso de conflictos graves, la Empresa se
                reserva el derecho de{" "}
                <span className="font-semibold">suspender</span> o{" "}
                <span className="font-semibold">terminar</span> el acceso de
                cualquiera de las partes involucradas a la plataforma.
              </p>
            </li>
            <li>
              <h2 className="font-semibold text-lg">
                Seguros y Responsabilidades
              </h2>
              <ul className="list-disc pl-5">
                <li>
                  Los Profesionales son responsables de contar con{" "}
                  <span className="font-semibold">
                    seguros de responsabilidad civil
                  </span>{" "}
                  adecuados. Cruz Patagonia no proporciona seguros ni es
                  responsable de los daños ocasionados durante la prestación del
                  servicio.
                </li>
                <li>
                  La Empresa no asume ninguna obligación respecto a la{" "}
                  <span className="font-semibold">cobertura de riesgos</span>{" "}
                  durante la ejecución del trabajo.
                </li>
              </ul>
            </li>
            <li>
              <h2 className="font-semibold text-lg">
                Confidencialidad y Protección de Datos
              </h2>
              <p>
                La Empresa se compromete a proteger los{" "}
                <span className="font-semibold">datos personales</span> de
                Clientes y Profesionales, conforme a la normativa de protección
                de datos aplicable. Toda la información proporcionada para la
                ejecución de los servicios será tratada de manera confidencial y
                utilizada solo para los fines necesarios.
              </p>
            </li>
            <li>
              <h2 className="font-semibold text-lg">
                Modificación de los Términos
              </h2>
              <p>
                La Empresa se reserva el derecho de modificar estos Términos y
                Condiciones en cualquier momento, notificando a los usuarios
                mediante la plataforma o correo electrónico. El uso continuado
                de la plataforma después de la publicación de las modificaciones
                constituye la aceptación de los nuevos términos.
              </p>
            </li>
            <li>
              <h2 className="font-semibold text-lg">
                Jurisdicción y Legislación Aplicable
              </h2>
              <p>
                Estos Términos se regirán e interpretarán conforme a la
                legislación del país donde la Empresa tenga su sede principal, y
                cualquier disputa deberá ser resuelta en los tribunales
                competentes de dicha jurisdicción.
              </p>
            </li>
            <li>
              <h2 className="font-semibold text-lg">Indemnización</h2>
              <p>
                Tanto Clientes como Profesionales acuerdan{" "}
                <span className="font-semibold">
                  indemnizar y mantener indemne
                </span>{" "}
                a Cruz Patagonia de cualquier reclamación, demanda o daño
                resultante del uso de la plataforma o de los servicios prestados
                a través de la misma.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
