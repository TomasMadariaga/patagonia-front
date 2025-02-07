import { useEffect, useState } from "react";
import { useWork } from "../context/WorkContext";
import { useAuth } from "../context/AuthContext";

export const Budgets = () => {
  const { findReceiptsByProfessionalId } = useWork();
  const { user } = useAuth();

  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const getReceipts = async () => {
      try {
        const receipts = await findReceiptsByProfessionalId(user?.id);
  
        const filteredReceipts = receipts
          .filter((receipt) => {
            return receipt?.work?.status !== "Activo" && receipt?.work?.status !== "Completo";
          })
          .map((receipt) => {
            const { work, ...rest } = receipt;
            return {
              ...rest,
              client: work.client,
            };
          });
  
        setBudgets(filteredReceipts);
      } catch (error) {
        console.error("Error al obtener los recibos:", error);
      }
    };
  
    getReceipts();
  }, [user?.id]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Nº presupuesto</th>
            <th className="border px-4 py-2">Cliente</th>
            <th className="border px-4 py-2">Dirección</th>
            <th className="border px-4 py-2">Detalles</th>
            <th className="border px-4 py-2">Valor</th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {budgets?.map((budget) => (
            <tr key={budget?.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{budget?.id}</td>
              <td className="border px-4 py-2">{`${budget?.client?.name} ${budget?.client?.lastname}`}</td>
              <td className="border px-4 py-2">{budget?.address}</td>
              <td className="border px-4 py-2">{budget?.description}</td>
              <td className="border px-4 py-2">${(budget?.value + budget?.commission).toLocaleString('es')}</td>
              <td className="border px-4 py-2">Accion</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
