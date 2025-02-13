import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../context/UserContext";
import { useWork } from "../context/WorkContext";
import { toast } from "react-toastify";

export const WorkForm = () => {
  const { findClients, findProfessionals } = useUser();
  const { createAWork } = useWork();
  const { register, handleSubmit } = useForm();
  const [clients, setClients] = useState([]);
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const clientsData = await findClients();
      setClients(clientsData);
      const professionalsData = await findProfessionals();
      setProfessionals(professionalsData);
    };
    fetchData();
  }, []);

  const onSubmit = async (work) => {
    try {
      if (work.clientId === "" || work.projectLeader === "") {
        toast.error("Por favor, seleccione un cliente y un líder de proyecto válidos.", {
          toastId: 1,
          position: "top-center",
          pauseOnHover: false,
          autoClose: 3000,
          closeButton: false,
          className: "text-center",
        });
        return;
      }

      const formattedWork = {
        ...work,
        value: Number(work.value),
        commission: Number(work.commission),
        clientId: Number(work.clientId),
        budgetNumber: Number(work.budget),
        projectLeaderId: Number(work.projectLeader),
      };

      delete formattedWork.budget;
      delete formattedWork.professional;
      delete formattedWork.projectLeader;

      const data = await createAWork(formattedWork);
      toast.success("Trabajo creado exitosamente", {
        toastId: 1,
        position: "top-center",
        pauseOnHover: false,
        autoClose: 3000,
        closeButton: false,
        className: "text-center",
      });
      return data;
    } catch (error) {
      toast.error(`Hubo un error al crear el trabajo`, {
        toastId: 1,
        position: "top-center",
        pauseOnHover: false,
        autoClose: 3000,
        closeButton: false,
        className: "text-center",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-8">
      <h1 className="text-3xl font-medium text-slate-600">
        Formulario de trabajos
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 xl:w-1/3 w-full flex flex-col border border-slate-200 shadow p-4 rounded-md"
      >
        <div>
          <label htmlFor="address" className="block text-sm font-semibold">
            Dirección
          </label>
          <input
            id="address"
            type="text"
            {...register("address", { required: true })}
            className="border rounded p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-semibold">
            Servicio
          </label>
          <input
            id="service"
            type="text"
            {...register("service", { required: true })}
            className="border rounded p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-semibold">
            Descripción del servicio
          </label>
          <textarea
            id="description"
            type="text"
            {...register("description", { required: true })}
            className="border rounded p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-semibold">
            Nº presupuesto
          </label>
          <input
            id="budget"
            type="number"
            {...register("budget", { required: true })}
            className="border rounded p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="value" className="block text-sm font-semibold">
            Precio del servicio
          </label>
          <input
            id="value"
            type="number"
            {...register("value", { required: true })}
            className="border rounded p-2 w-full appearance-none [-moz-appearance:textfield]"
          />
        </div>

        <div>
          <label htmlFor="commission" className="block text-sm font-semibold">
            Comisión
          </label>
          <input
            id="commission"
            type="number"
            {...register("commission", { required: true })}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="client" className="block text-sm font-semibold">
            Seleccionar Cliente
          </label>
          <select
            id="client"
            {...register("clientId", { required: true })}
            className="border rounded p-2 w-full"
          >
            <option value="">Elija un cliente</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name} {client.lastname}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="projectLeader" className="block text-sm font-semibold">
            Seleccionar quien estará a cargo
          </label>
          <select
            id="projectLeader"
            {...register("projectLeader", { required: true })}
            className="border rounded p-2 w-full"
          >
            <option value="">Elija un líder de proyecto</option>
            {professionals.map((professional) => (
              <option key={professional.id} value={professional.id}>
                {professional.name} {professional.lastname} ({professional.role})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="paymentMethod" className="block text-sm font-semibold">
            Seleccionar método de pago
          </label>
          <select
            id="paymentMethod"
            {...register("paymentMethod", { required: true })}
            className="border rounded p-2 w-full"
          >
            <option value="">Elija un método de pago</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Tarjeta de crédito">Tarjeta de crédito</option>
            <option value="Tarjeta de débito">Tarjeta de débito</option>
            <option value="Transferencia bancaria">Transferencia bancaria</option>
            <option value="Cheque">Cheque</option>
            <option value="Billetera digital">Billetera digital</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Crear Trabajo
        </button>
      </form>
    </div>
  );
};