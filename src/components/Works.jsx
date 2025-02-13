import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useWork } from "../context/WorkContext";
import { Modal } from "./ModalWindow";

export const Works = () => {
  const { user } = useAuth();
  const { findWorksByProfessional } = useWork();

  const [works, setWorks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
      const filteredWorks = data.filter((work) => work?.status !== "Pendiente");
      filteredWorks.forEach((work) => {
        work.receipt.total = work.commission + work.value;
      });
      setWorks(filteredWorks);
      setFilteredWorks(filteredWorks);
    } catch (err) {
      setError(err.message);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Fecha no disponible";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = works.filter((work) => {
      const fullName = `${work.projectLeader.name} ${work.projectLeader.lastname}`.toLowerCase();
      const value = work.value.toString().toLowerCase();

      return (
        work.address.toLowerCase().includes(term) ||
        fullName.includes(term) ||
        work.service.toLowerCase().includes(term) ||
        work.status.toLowerCase().includes(term) ||
        formatDate(work.createdAt).includes(term) ||
        value.includes(term)
    )});

    setFilteredWorks(filtered);
  };

  useEffect(() => {
    getWorkDetails();
  }, [user.id]);

  return (
    <div className="overflow-x-auto block max-h-[500px] overflow-y-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar trabajos por nombre, apellido, valor, etc..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
        />
      </div>

      {filteredWorks.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 border">Dirección</th>
              <th className="py-2 px-4 border">Estado</th>
              <th className="py-2 px-4 border">Líder de Proyecto</th>
              <th className="py-2 px-4 border">Fecha</th>
              <th className="py-2 px-4 border">Servicio</th>
              <th className="py-2 px-4 border">Valor</th>
              <th className="py-2 px-4 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredWorks.map((work) => (
              <tr key={work?.id} className="text-gray-700">
                <td className="py-2 px-4 border">{work?.address}</td>
                <td className="py-2 px-4 border">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      work.status === "Activo"
                        ? "bg-blue-400 text-white"
                        : "bg-green-400 text-white"
                    }`}
                  >
                    {work?.status}
                  </span>
                </td>
                <td className="py-2 px-4 border gap-2">
                  {work?.projectLeader.name} {work?.projectLeader.lastname}
                </td>
                <td className="py-2 px-4 border">{formatDate(work?.createdAt)}</td>
                <td className="py-2 px-4 border">{work?.service}</td>
                <td className="py-2 px-4 border font-bold text-green-600">
                  ${work.value.toLocaleString("es")}
                </td>
                <td className="py-2 px-4 border">
                  <button
                    className="p-2 rounded-md font-medium text-white bg-blue-500 transition-colors hover:bg-blue-600"
                    onClick={() => openModal(work)}
                  >
                    Detalles
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center text-xl text-slate-600">
          No hay trabajos disponibles.
        </div>
      )}

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