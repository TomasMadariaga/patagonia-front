import { useState } from "react";
import { Users } from "../components/Users";
import { WorkForm } from "../components/WorkForm";
import { SideBar } from "../components/SideBar";
import { WorksList } from "../components/WorksList";
import { RegisterProfessional } from "./RegisterProfessional";

export const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("Usuarios");

  const contenido = {
    Usuarios: <Users />,
    Trabajos: <WorksList/>,
    Formulario: <WorkForm />,
    Profesional: <RegisterProfessional/>
  };

  return (
    <div className="xl:flex xl:flex-row flex-col mt-16 h-full min-h-screen">
      <SideBar content={contenido} setActiveTab={setActiveTab} activeTab={activeTab}/>
      <main className="flex-1 p-4 overflow-auto">
        {contenido[activeTab] || <h1>Seleccione una opción</h1>}
      </main>
    </div>
  );
};
