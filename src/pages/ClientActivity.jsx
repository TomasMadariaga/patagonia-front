import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";
import { FaUser } from "react-icons/fa";
import { Modal } from "../components/ModalWindow";
import { useWork } from "../context/WorkContext";

export const ClientActivity = () => {
  const { user } = useAuth();
  const { findProfessionals, onRate, setProfessionals } = useUser();
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

  const rate = async(id, value) => {
    await onRate(id, value);
    await getWorkDetails();
  };

  const closeModal = () => {
    setSelectedWork(null);
    setIsModalOpen(false);
  };

  const getWorkDetails = async () => {
    try {
      const data = await findWorksByClient(user.id);
      data.map((work) => {
        work.receipt.total = work.receipt.value + work.receipt.commission;
      });
      setWorks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const acceptWork = async (clientId, work) => {
    const {
      status,
      id,
      createdAt,
      receipt,
      employeeWorks,
      projectLeader,
      ...rest
    } = work;
    rest.status = "Activo";
    await updateWork(clientId, rest);
    getWorkDetails(user.id);
  };

  const find = async () => {
    const data = await findProfessionals();
    setProfessionals(data);
  };

  useEffect(() => {
    find();
  }, [findProfessionals, setProfessionals]);

  useEffect(() => {
    getWorkDetails();
  }, [findWorksByClient, user.id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-16 flex flex-1 min-h-96 justify-center bg-gray-100 p-6">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {works.map((work) => {
            return (
              <div
                key={work.id}
                className="flex flex-col gap-4 h-fit bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-5 border border-gray-200"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {work.address}
                  </h2>
                  <p
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      work.status === "Pendiente"
                        ? "bg-gray-400 select-none text-white"
                        : work.status === "Activo"
                        ? "bg-blue-400 select-none text-white"
                        : "bg-green-400 select-none text-white"
                    }`}
                  >
                    {work.status}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaUser className="text-gray-500" />
                  <p className="text-gray-600">
                    {work.projectLeader.name} {work.projectLeader.lastname}
                  </p>
                </div>
                <p className="text-gray-700 text-sm">
                  Nº presupuesto: {work.receipt.budgetNumber}
                </p>
                <p className="text-gray-700 text-sm">{work.description}</p>

                <p className="text-lg font-bold text-green-600">
                  ${(work.commission + work.value).toLocaleString("es")}
                </p>
                {work.status === "Pendiente" ? (
                  <div className="flex justify-around">
                    <button
                      className="bg-green-500 p-2 font-medium text-white rounded-lg hover:bg-green-600 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        acceptWork(work.id, work);
                      }}
                    >
                      Aceptar
                    </button>
                    <button
                      className="bg-red-500 p-2 font-medium text-white rounded-lg hover:bg-red-600 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteAWork(work.id);
                        getWorkDetails(user.id);
                      }}
                    >
                      Rechazar
                    </button>
                  </div>
                ) : (
                  <button
                    className="p-2 rounded-md font-medium text-white bg-blue-500 transition-colors hover:bg-blue-600"
                    onClick={() => openModal(work)}
                  >
                    Detalles
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {isModalOpen && selectedWork && (
        <Modal
          work={selectedWork}
          projectLeader={selectedWork.projectLeader}
          receipt={selectedWork.receipt}
          onRate={rate}
          toggle={closeModal}
        />
      )}
    </div>
  );
};
