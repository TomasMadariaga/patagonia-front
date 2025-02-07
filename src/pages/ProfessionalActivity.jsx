import { Budgets } from "../components/Budgets";
import { SideBar } from "../components/SideBar";
import { useState } from "react";
import { Works } from "../components/Works";
import { IncomeReport } from "../components/IncomeReport";

export const ProfessionalActivity = () => {
    const [activeTab, setActiveTab] = useState("Presupuestos");

    const contenido = {
      Presupuestos: <Budgets/>,
      Trabajos: <Works/>,
      Ingresos: <IncomeReport/>
    };
  return (
    <div className="xl:flex xl:flex-row flex-col mt-16 h-full min-h-screen">
      <SideBar content={contenido} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <main className="flex-1 p-4 overflow-auto">
        {contenido[activeTab] || <h1>Seleccione una opción</h1>}
      </main>
    </div>
  )
}
