import { useEffect, useState, useCallback } from "react";
import { useUser } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";
import { Modal } from "../components/ModalWindow";
import { useWork } from "../context/WorkContext";

export const ClientActivity = () => {
  const { user } = useAuth();
  const { onRate} = useUser();
  const { findWorksByClient, deleteAWork, updateWork } = useWork();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [works, setWorks] = useState([]);
  const [selectedWork, setSelectedWork] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedWork(null);
    setIsModalOpen(false);
  };

  const getWorkDetails = useCallback(async () => {
    try {
      const data = await findWorksByClient(user.id);
      const updatedWorks = data.map((work) => ({
        ...work,
        receipt: {
          ...work.receipt,
          total: work?.receipt?.value + work?.receipt?.commission,
        },
      }));
      setWorks(updatedWorks);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [findWorksByClient, user.id]);

  const acceptWork = async (workId, work) => {
    try {
      const { status, id, createdAt, receipt, employeeWorks, projectLeader, ...rest } = work;
      const updatedWork = { ...rest, status: "Activo" };
      await updateWork(workId, updatedWork);
      await getWorkDetails();
    } catch (error) {
      setError("Error al aceptar el trabajo.");
    }
  };

  useEffect(() => {
    getWorkDetails();
  }, [getWorkDetails]);

  if (loading) return <div className="mt-20">Cargando...</div>;
  if (error) return <div className="mt-20">Error: {error}</div>;

  return (
    <div className="mt-16 flex flex-1 min-h-96 justify-center bg-gray-100 p-6">
      <div className="w-full max-w-7xl overflow-x-auto  block max-h-[500px] overflow-y-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Dirección</th>
              <th className="p-3 text-left">Estado</th>
              <th className="p-3 text-left">A cargo</th>
              <th className="p-3 text-left">Presupuesto Nº</th>
              <th className="p-3 text-left">Servicio</th>
              <th className="p-3 text-left">Total</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {works.length > 0 ? (
              works.map((work) => (
                <tr key={work.id} className="border-t">
                  <td className="p-3">{work.address}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        work.status === "Pendiente"
                          ? "bg-gray-400 text-white"
                          : work.status === "Activo"
                          ? "bg-blue-400 text-white"
                          : "bg-green-400 text-white"
                      }`}
                    >
                      {work.status}
                    </span>
                  </td>
                  <td className="p-3">{work.projectLeader.name} {work.projectLeader.lastname}</td>
                  <td className="p-3">{work.receipt.budgetNumber}</td>
                  <td className="p-3">{work.service}</td>
                  <td className="p-3 font-bold text-green-600">
                    ${(work.receipt.total).toLocaleString("es")}
                  </td>
                  <td className="p-3 text-center">
                    {work.status === "Pendiente" ? (
                      <>
                        <button
                          className="bg-green-500 px-3 py-1 text-white rounded-md hover:bg-green-600 mr-2"
                          onClick={() => acceptWork(work.id, work)}
                        >
                          Aceptar
                        </button>
                        <button
                          className="bg-red-500 px-3 py-1 text-white rounded-md hover:bg-red-600"
                          onClick={() => {
                            deleteAWork(work.id);
                            getWorkDetails();
                          }}
                        >
                          Rechazar
                        </button>
                      </>
                    ) : (
                      <button
                        className="bg-blue-500 px-3 py-1 text-white rounded-md hover:bg-blue-600"
                        onClick={() => openModal(work)}
                      >
                        Detalles
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-600">
                  No hay trabajos disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {isModalOpen && selectedWork && (
        <Modal
          work={selectedWork}
          projectLeader={selectedWork.projectLeader}
          receipt={selectedWork.receipt}
          onRate={onRate}
          toggle={closeModal}
        />
      )}
    </div>
  );
};
