import { useEffect, useState } from "react";
import { useWork } from "../context/WorkContext";
import { useUser } from "../context/UserContext";

export const WorksList = () => {
  const { findWorks, updateWork, deleteAWork } = useWork();
  const { findClients, findProfessionals } = useUser();

  const [works, setWorks] = useState([]);
  const [professionals, setProfessionals] = useState([]);
  const [clients, setClients] = useState([]);
  const [editWork, setEditWork] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditWork((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredWorks = works.filter((work) => {
    const matchesFirstLevel = Object.values(work).some((value) =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const matchesNested =
      work.projectLeader?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      work.projectLeader?.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      work.client?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      work.client?.lastname.toLowerCase().includes(searchTerm.toLowerCase());
  
    return matchesFirstLevel || matchesNested;
  });

  const handledelete = async(id) => {
    await deleteAWork(id);
    await getData();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        id,
        createdAt,
        client,
        projectLeader,
        projectLeaderId,
        clientId,
        value,
        commission,
        ...rest
      } = editWork;

      const updatedWork = {
        ...rest,
        ...(projectLeaderId && { projectLeaderId: Number(projectLeaderId) }),
        ...(clientId && { clientId: Number(clientId) }),
        ...(value && { value: Number(value) }),
        ...(commission && { commission: Number(commission) }),
      };
      await updateWork(id, updatedWork);

      setEditWork(null);
      getData();
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const getData = async () => {
    const workData = await findWorks();
    setWorks(workData);

    const professionalsData = await findProfessionals();
    setProfessionals(professionalsData);

    const clientsData = await findClients();
    setClients(clientsData);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="p-4 flex flex-col items-center">
      <input
        type="text"
        placeholder="Buscar"
        className="mb-4 p-2 w-full border rounded"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />

      <h2 className="text-2xl font-bold mb-4">Lista de trabajos</h2>

      {editWork ? (
        <div className="mt-6 p-4 border rounded bg-gray-100 w-2/3">
          <h3 className="text-xl font-bold mb-4">Editar trabajo</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium mb-2"
              >
                Dirección
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="p-2 w-full border rounded"
                value={editWork.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="projectLeaderId"
                className="block text-sm font-medium mb-2"
              >
                Profesional
              </label>
              <select
                className="p-2 w-full border rounded"
                name="projectLeaderId"
                id="projectLeaderId"
                value={editWork.projectLeaderId}
                onChange={handleChange}
              >
                {professionals.map((professional) => (
                  <option key={professional.id} value={professional.id}>
                    {professional.name} {professional.lastname} (
                    {professional.role})
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="clientId"
                className="block text-sm font-medium mb-2"
              >
                Cliente
              </label>
              <select
                className="p-2 w-full border rounded"
                name="clientId"
                id="clientId"
                value={editWork.clientId}
                onChange={handleChange}
              >
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name} {client.lastname}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="paymentMethod"
                className="block text-sm font-medium mb-2"
              >
                Método de pago
              </label>
              <select
                className="p-2 w-full border rounded"
                name="paymentMethod"
                id="paymentMethod"
                onChange={handleChange}
                value={editWork.paymentMethod}
              >
                <option value={"Efectivo"}>Efectivo</option>
                <option value={"Tarjeta de crédito"}>Tarjeta de crédito</option>
                <option value={"Tarjeta de débito"}>Tarjeta de débito</option>
                <option value={"Transferencia bancaria"}>
                  Transferencia bancaria
                </option>
                <option value={"Cheque"}>Cheque</option>
                <option value={"Billetera digital"}>Billetera digital</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="service"
                className="block text-sm font-medium mb-2"
              >
                Servicio
              </label>
              <input
                type="text"
                name="service"
                id="service"
                className="p-2 w-full border rounded"
                value={editWork.service}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-2"
              >
                Descripción del servicio
              </label>
              <input
                type="text"
                name="description"
                id="description"
                className="p-2 w-full border rounded"
                value={editWork.description}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-sm font-medium mb-2"
              >
                Estado
              </label>
              <select
                className="p-2 w-full border rounded"
                name="status"
                id="status"
                onChange={handleChange}
                value={editWork.status}
              >
                <option value="Activo">Activo</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Completo">Completo</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="value" className="block text-sm font-medium mb-2">
                Valor
              </label>
              <input
                type="number"
                name="value"
                id="value"
                value={editWork.value}
                onChange={handleChange}
                className="p-2 w-full border rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="commission"
                className="block text-sm font-medium mb-2"
              >
                Comisión
              </label>
              <input
                type="number"
                name="commission"
                id="commission"
                value={editWork.commission}
                onChange={handleChange}
                className="p-2 w-full border rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Guardar cambios
            </button>
            <button
              type="button"
              className="ml-4 p-2 border rounded bg-red-500 text-white"
              onClick={() => setEditWork(null)}
            >
              Cancelar
            </button>
          </form>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full block max-h-[500px] overflow-y-auto border border-gray-300 shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">Profesional</th>
                <th className="border px-4 py-2">Dirección</th>
                <th className="border px-4 py-2">Cliente</th>
                <th className="border px-4 py-2">Método de pago</th>
                <th className="border px-4 py-2">Servicio</th>
                <th className="border px-4 py-2">Estado</th>
                <th className="border px-4 py-2">Valor</th>
                <th className="border px-4 py-2">Comisión</th>
                <th className="border px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredWorks?.map((work) => (
                <tr key={work.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">
                    {work.projectLeader.name} {work.projectLeader.lastname} (
                    {work.projectLeader.role})
                  </td>
                  <td className="border px-4 py-2">{work.address}</td>
                  <td className="border px-4 py-2">
                    {work.client.name} {work.client.lastname}
                  </td>
                  <td className="border px-4 py-2">{work.paymentMethod}</td>
                  <td className="border px-4 py-2">{work.service}</td>
                  <td className="border px-4 py-2">{work.status}</td>
                  <td className="border px-4 py-2">
                    ${work.value.toLocaleString("es")}
                  </td>
                  <td className="border px-4 py-2">
                    ${work.commission.toLocaleString("es")}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      className="text-blue-500 pb-2"
                      onClick={() => setEditWork({
                        ...work,
                        projectLeaderId: work.projectLeader?.id, 
                        clientId: work.client?.id, 
                      })}
                    >
                      Editar
                    </button>
                    <button
                      className="text-blue-500"
                      onClick={() => handledelete(work.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
