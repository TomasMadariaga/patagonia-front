export const TermsAndConditions = () => {
  return (
    <div className="mt-16 flex flex-col items-center pb-20">
      <div className="relative flex w-full bg-interior2 bg-fixed bg-cover bg-no-repeat p-9">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <h1 className="text-5xl text-white z-10 font-inter pl-10">
          Términos y Condiciones
        </h1>
      </div>
      <div className="w-1/2">
        <h2 className="text-3xl font-bold text-center py-12 text-slate-900/95">
          Términos y Condiciones Generales de Uso de la Plataforma Cruz Patagonia
        </h2>
        <div className="font-inter text-slate-800">
          <ol className="list-decimal flex flex-col gap-6">
            <li>
              <h3 className="font-semibold text-lg pb-2">
                1. Introducción y Aceptación de los Términos
              </h3>
              <ol className="list-decimal pl-5 flex flex-col gap-2">
                <li>
                  <h4 className="font-semibold">1.1 Alcance y Aplicación</h4>
                  <p>
                    Los presentes Términos y Condiciones Generales (en adelante, "Términos") regulan el uso de la plataforma tecnológica proporcionada por{" "}
                    <span className="font-semibold">Cruz Patagonia</span> (en adelante, "la Empresa"), la cual actúa como intermediaria entre clientes (en adelante, "Clientes") y profesionales independientes (en adelante, "Profesionales") que ofrecen servicios en el ámbito de diseño, asesoramiento, construcción y reparación de inmuebles. Al utilizar la plataforma, tanto los Clientes como los Profesionales aceptan de manera irrevocable y vinculante los presentes Términos. El uso de la plataforma implica la aceptación expresa de estos Términos, y cualquier desacuerdo con los mismos deberá resultar en la no utilización de la plataforma.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">1.2 Capacidad Legal</h4>
                  <p>
                    Los usuarios de la plataforma declaran ser mayores de edad y tener la capacidad legal necesaria para celebrar contratos y aceptar estos Términos. En caso de que un usuario no cumpla con estos requisitos, deberá abstenerse de utilizar la plataforma.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">1.3 Modificaciones</h4>
                  <p>
                    La Empresa se reserva el derecho de modificar, actualizar o complementar estos Términos en cualquier momento. Las modificaciones serán notificadas a los usuarios a través de la plataforma o por correo electrónico. El uso continuado de la plataforma después de dichas modificaciones implicará la aceptación tácita de los nuevos Términos.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h3 className="font-semibold text-lg pb-2">
                2. Naturaleza de los Servicio
              </h3>
              <ol className="list-decimal pl-5 flex flex-col gap-2">
                <li>
                  <h4 className="font-semibold">2.1 Intermediación</h4>
                  <p>
                    Cruz Patagonia actúa exclusivamente como intermediaria entre Clientes y Profesionales, facilitando la conexión entre ambas partes. La Empresa no es responsable por la ejecución de los servicios contratados, ni tiene control directo sobre las actividades de los Profesionales, quienes actúan como contratistas independientes.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">2.2 Responsabilidad de los Profesionales</h4>
                  <p>
                    Los Profesionales son responsables de contar con todas las licencias, permisos, certificaciones y seguros de responsabilidad civil necesarios para la prestación de sus servicios. La Empresa no asume responsabilidad alguna por la falta de cumplimiento de estas obligaciones por parte de los Profesionales.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">2.3 Responsabilidad del Cliente</h4>
                  <p>
                    El Cliente es responsable de proporcionar información completa, precisa y veraz sobre el trabajo requerido. Cualquier omisión, inexactitud o error en la información proporcionada por el Cliente libera a la Empresa de toda responsabilidad por los problemas derivados de dicha información.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">2.4 Disponibilidad de la Plataforma</h4>
                  <p>
                    La Empresa no garantiza la disponibilidad continua o ininterrumpida de la plataforma, ni la exactitud de la información proporcionada por los usuarios. La Empresa se reserva el derecho de suspender, modificar o interrumpir el servicio en cualquier momento, sin previo aviso.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h3 className="font-semibold text-lg pb-2">
                3. Obligaciones de las Partes
              </h3>
              <ol className="list-decimal pl-5 flex flex-col gap-2">
                <li>
                  <h4 className="font-semibold">3.1 Obligaciones del Cliente</h4>
                  <ul className="list-disc pl-5 flex flex-col gap-1">
                    <li>
                      Proporcionar un entorno de trabajo seguro y adecuado para la ejecución de los servicios.
                    </li>
                    <li>
                      Obtener y gestionar todos los permisos, autorizaciones y licencias necesarias para la realización de los trabajos, salvo que se haya acordado expresamente con la Empresa la gestión de estos trámites.
                    </li>
                    <li>
                      Proteger sus bienes y propiedades durante la ejecución de los servicios. La Empresa no se hace responsable por daños a la propiedad del Cliente derivados de la prestación de los servicios.
                    </li>
                    <li>
                      Verificar las credenciales, licencias y seguros del Profesional antes de contratar sus servicios.
                    </li>
                  </ul>
                </li>
                <li>
                  <h4 className="font-semibold">3.2 Obligaciones del Profesional</h4>
                  <ul className="list-disc pl-5 flex flex-col gap-1">
                    <li>
                      Cumplir con los estándares de calidad, seguridad y normativas aplicables en la ejecución de los servicios.
                    </li>
                    <li>
                      Contar con los seguros de responsabilidad civil y demás coberturas necesarias para la prestación de sus servicios.
                    </li>
                    <li>
                      No desviar Clientes de la plataforma para trabajar directamente con ellos, bajo pena de eliminación inmediata de su perfil y pérdida de todo derecho a reclamo.
                    </li>
                    <li>
                      No utilizar la plataforma para actividades ilegales o fraudulentas.
                    </li>
                    <li>
                      Ser responsable de cualquier daño o lesión causada durante la prestación del servicio, liberando a la Empresa de toda responsabilidad en este sentido.
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              <h3 className="font-semibold text-lg pb-2">
                4. Pagos y Facturación
              </h3>
              <ol className="list-decimal pl-5 flex flex-col gap-2">
                <li>
                  <h4 className="font-semibold">4.1 Comisión de Servicio</h4>
                  <p>
                    Todos los pagos por servicios prestados a través de la plataforma estarán sujetos a una comisión de servicio, la cual será retenida por la Empresa como contraprestación por su rol de intermediación.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">4.2 Disputas de Pago</h4>
                  <p>
                    Cualquier disputa relacionada con pagos, retrasos o incumplimientos en la entrega de servicios será resuelta directamente entre el Cliente y el Profesional. La Empresa no asume responsabilidad alguna en estas disputas, salvo que se haya acordado expresamente lo contrario.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">4.3 Plazos de Pago</h4>
                  <p>
                    Los pagos deberán realizarse dentro de los plazos establecidos en el contrato. El retraso en los pagos podrá resultar en la suspensión del servicio o la aplicación de intereses moratorios.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">4.4 Cancelaciones y Reembolsos</h4>
                  <p>
                    En caso de cancelación por parte del Cliente, la Empresa se reserva el derecho a retener una parte proporcional de los pagos efectuados, de acuerdo con el avance del servicio y los costos incurridos. Si el Profesional incumple con la prestación del servicio, la Empresa podrá gestionar la devolución del dinero al Cliente, sin que ello implique responsabilidad directa por parte de la Empresa.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">4.5 Obligaciones Fiscales</h4>
                  <p>
                    La Empresa no será responsable por cualquier disputa relacionada con impuestos, retenciones o obligaciones fiscales derivadas de los pagos realizados a través de la plataforma.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h3 className="font-semibold text-lg pb-2">
                5. Garantías y Limitación de Responsabilidad
              </h3>
              <ol className="list-decimal pl-5 flex flex-col gap-2">
                <li>
                  <h4 className="font-semibold">5.1 Garantías</h4>
                  <p>
                    La Empresa garantiza la calidad del trabajo realizado únicamente en la medida en que se cumplan las condiciones previamente acordadas entre el Cliente y el Profesional. No obstante, la Empresa no asume responsabilidad por defectos, daños o perjuicios derivados de la utilización de materiales no especificados o no aprobados en el contrato inicial.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">5.2 Limitación de Responsabilidad</h4>
                  <p>
                    La responsabilidad de la Empresa se limita exclusivamente al uso de la plataforma tecnológica. En ningún caso la Empresa será responsable por daños indirectos, incluyendo pérdida de beneficios, interrupción del negocio o daños morales.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h3 className="font-semibold text-lg pb-2">
                6. Propiedad Intelectual
              </h3>
              <ol className="list-decimal pl-5 flex flex-col gap-2">
                <li>
                  <h4 className="font-semibold">6.1 Derechos de Propiedad</h4>
                  <p>
                    La Empresa retiene la titularidad y los derechos de propiedad intelectual sobre todos los diseños, planos, propuestas y demás materiales desarrollados durante la prestación de los servicios, a menos que se haya contratado expresamente un servicio de exclusividad y se hayan cubierto los costos adicionales asociados.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">6.2 Licencia de Uso</h4>
                  <p>
                    Los Profesionales otorgan a la Empresa una licencia no exclusiva, transferible y perpetua para utilizar, modificar y distribuir cualquier material generado a través de la plataforma.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">6.3 Uso de Materiales Protegidos</h4>
                  <p>
                    La Empresa no se hace responsable por el uso indebido de materiales o diseños protegidos por derechos de autor por parte de los Profesionales. El Profesional será el único responsable de cualquier infracción de derechos de propiedad intelectual y deberá obtener los derechos necesarios para cualquier material protegido utilizado en sus servicios.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h3 className="font-semibold text-lg pb-2">
                7. Resolución de Conflictos
              </h3>
              <ol className="list-decimal pl-5 flex flex-col gap-2">
                <li>
                  <h4 className="font-semibold">7.1 Arbitraje Vinculante</h4>
                  <p>
                    Cualquier controversia o conflicto que surja en relación con los servicios prestados y que no pueda resolverse mediante el diálogo directo entre las partes, se resolverá mediante arbitraje vinculante, de acuerdo con las normas de arbitraje de la jurisdicción de Bariloche. Los costos del arbitraje serán compartidos por las partes en disputa, a menos que el árbitro decida lo contrario.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">7.2 Terminación del Contrato</h4>
                  <p>
                    En caso de incumplimiento de los presentes Términos por parte del Cliente o del Profesional, la Empresa se reserva el derecho de dar por finalizada la relación contractual sin obligación de indemnizar a la parte incumplidora. Cualquier servicio interrumpido por este motivo se facturará según los términos acordados hasta el momento del incumplimiento. La empresa no será responsable por cualquier daño derivado de la terminación del contrato, incluyendo daños indirectos o lucro cesante.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h3 className="font-semibold text-lg pb-2">
                8. Jurisdicción y Ley Aplicable
              </h3>
              <ol className="list-decimal pl-5 flex flex-col gap-2">
                <li>
                  <h4 className="font-semibold">8.1 Jurisdicción Exclusiva</h4>
                  <p>
                    Estos Términos se regirán e interpretarán conforme a la legislación del país donde la Empresa tenga su sede principal. Cualquier disputa derivada de estos Términos será resuelta exclusivamente en los tribunales de la jurisdicción donde la empresa tenga su sede principal, y los usuarios renuncian expresamente a cualquier otra jurisdicción.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">8.2 Sumisión a la Jurisdicción</h4>
                  <p>
                    Los usuarios aceptan someterse a la jurisdicción exclusiva de los tribunales de la sede de la empresa para cualquier disputa relacionada con estos Términos.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h3 className="font-semibold text-lg pb-2">
                9. Indemnización
              </h3>
              <ol className="list-decimal pl-5 flex flex-col gap-2">
                <li>
                  <h4 className="font-semibold">9.1 Obligación de Indemnizar</h4>
                  <p>
                    Tanto Clientes como Profesionales acuerdan indemnizar y mantener indemne a Cruz Patagonia de cualquier reclamación, demanda o daño resultante del uso de la plataforma o de los servicios prestados a través de la misma, incluyendo costos legales y honorarios de abogados.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">9.2 Exclusión de Responsabilidad</h4>
                  <p>
                    La Empresa no será responsable por cualquier daño derivado de la conducta de los usuarios, incluyendo daños a terceros.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h3 className="font-semibold text-lg pb-2">
                10. Otras Disposiciones
              </h3>
              <ol className="list-decimal pl-5 flex flex-col gap-2">
                <li>
                  <h4 className="font-semibold">10.1 Fuerza Mayor</h4>
                  <p>
                    La Empresa no será responsable por cualquier incumplimiento de estos Términos causado por eventos fuera de su control razonable, incluyendo, pero no limitado a desastres naturales, pandemias, huelgas, actos de gobierno o fallos técnicos.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">10.2 Confidencialidad</h4>
                  <p>
                    Los usuarios se comprometen a mantener en secreto cualquier información confidencial obtenida a través de la plataforma, incluyendo, pero no limitado a datos personales, información financiera y detalles de los servicios prestados.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">10.3 No Competencia</h4>
                  <p>
                    Los Profesionales se comprometen a no utilizar la plataforma para competir directamente con la Empresa, ni para desviar Clientes o Profesionales hacia otras plataformas o servicios.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">10.4 Cesión</h4>
                  <p>
                    La Empresa podrá transferir sus derechos y obligaciones bajo estos Términos a terceros sin necesidad de consentimiento previo de los usuarios.
                  </p>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
