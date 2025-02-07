import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useWork } from "../context/WorkContext";
import { FaUser } from "react-icons/fa";
import { Modal } from "./ModalWindow";

export const Works = () => {
  const { user } = useAuth();
  const { findWorksByProfessional } = useWork();

  const [works, setWorks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  const [error, setError] = useState(null);

  const openModal = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedWork(null);
    setIsModalOpen(false);
  };

  const getWorkDetails = async () => {
    try {
      const data = await findWorksByProfessional(user.id);
      const filteredWorks = data.filter((work) => {
        return work?.status !== "Pendiente";
      });
      filteredWorks.map((work) => {
        work.receipt.total = work.commission + work.value;
      })
      setWorks(filteredWorks);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getWorkDetails();
  }, [user.id]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {works.map((work) => {
        return (
          <div
            key={work.id}
            className="flex flex-col gap-4 bg-white h-fit rounded-lg shadow-lg hover:shadow-xl transition-shadow p-5 border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {work.address}
              </h2>
              <p
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  work.status === "Activo"
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
              ${(work.value + work.commission).toLocaleString('es')}
            </p>
            <button
              className="p-2 rounded-md font-medium text-white bg-blue-500 transition-colors hover:bg-blue-600"
              onClick={() => openModal(work)}
            >
              Detalles
            </button>
          </div>
        );
      })}
      {isModalOpen && selectedWork && (
        <Modal
          work={selectedWork}
          projectLeader={selectedWork.projectLeader}
          receipt={selectedWork.receipt}
          toggle={closeModal}
        />
      )}
    </div>
  );
};
