import { useEffect, useState } from "react";
import { useWork } from "../context/WorkContext";
import { useAuth } from "../context/AuthContext";
import { DownloadBudget } from "./DownloadBudget";

export const Budgets = () => {
  const { findReceiptsByProfessionalId } = useWork();
  const { user } = useAuth();

  const [budgets, setBudgets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReceipts = async () => {
      try {
        const receipts = await findReceiptsByProfessionalId(user?.id);

        const filteredReceipts = receipts
          .filter((receipt) => {
            return (
              receipt?.work?.status !== "Activo" &&
              receipt?.work?.status !== "Completo"
            );
          })
          .map((receipt) => {
            const { work, ...rest } = receipt;
            return {
              ...rest,
              client: work.client,
            };
          });

        setBudgets(filteredReceipts);
        setError(null);
      } catch (error) {
        setError("Error al cargar los presupuestos. Inténtalo de nuevo.");
      }
    };

    getReceipts();
  }, [user?.id]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 shadow-md table-fixed">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2 w-1/6 text-xs xl:text-base">Nº presupuesto</th>
            <th className="border px-4 py-2 w-1/6 text-xs xl:text-base">Cliente</th>
            <th className="border px-4 py-2 w-1/6 text-xs xl:text-base">Dirección</th>
            <th className="border px-4 py-2 w-1/6 text-xs xl:text-base">Servicio</th>
            <th className="border px-4 py-2 w-1/6 text-xs xl:text-base">Valor</th>
            <th className="border px-4 py-2 w-1/6 text-xs xl:text-base">Acciones</th>
          </tr>
        </thead>
      </table>
      <div className="block max-h-[500px] overflow-y-auto">
        <table className="w-full border border-gray-300 shadow-md table-fixed">
          <tbody>
            {budgets.length > 0 ? (
              budgets.map((budget) => (
                <tr key={budget.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2 w-1/6">{budget?.id}</td>
                  <td className="border px-4 py-2 w-1/6">{`${budget.client?.name} ${budget.client?.lastname}`}</td>
                  <td className="border px-4 py-2 w-1/6">{budget?.address}</td>
                  <td className="border px-4 py-2 w-1/6">{budget?.service}</td>
                  <td className="border px-4 py-2 w-1/6">
                    ${budget.value.toLocaleString("es")}
                  </td>
                  <td className="border px-4 py-2 w-1/6">
                    <DownloadBudget
                      budgetNumber={budget?.id}
                      client={budget?.client}
                      address={budget?.address}
                      service={budget?.service}
                      description={budget?.description}
                      value={budget?.value.toLocaleString("es")}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  {error ? error : "No hay presupuestos disponibles."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};