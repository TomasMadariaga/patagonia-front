import { useAuth } from "../context/AuthContext";
import { DownloadReceipt } from "./DownloadReceipt";
import { ProfessionalCard } from "./ProfessionalCard";

export const Work = ({ work, projectLeader, receipt, onRate }) => {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-lg font-semibold text-slate-700">
          <span className="text-xl font-bold">Dirección: </span>
          {work.address}
        </h2>
        <h2 className="text-lg font-semibold text-slate-700">
          <span className="text-xl font-bold">Profesional a cargo: </span>
          {projectLeader.name} {projectLeader.lastname}
        </h2>
      </div>

      {/* Servicio */}
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-semibold text-slate-700 text-center">Detalles del servicio</h2>
        <div className="w-full space-y-6">
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <p className="font-medium text-gray-700">Servicio</p>
            <p className="max-w-sm text-gray-600 text-right">{work.service}</p>
          </div>
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <p className="font-medium text-gray-700">Valor</p>
            <p className="text-green-600 font-semibold">
              ${user?.role !== "Cliente" ? work.value.toLocaleString("es") : (work.value + work.commission).toLocaleString("es")}
            </p>
          </div>
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <p className="font-medium text-gray-700">Método de pago</p>
            <p className="text-gray-600">{work.paymentMethod}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <ProfessionalCard
          work={work}
          id={projectLeader.id}
          name={projectLeader.name}
          role={projectLeader.role}
          photo={projectLeader.profilePicture}
          rating={projectLeader.rating}
          totalVotes={projectLeader.totalVotes}
          find={find}
          onRate={(value) => onRate(projectLeader.id, value)}
        />
      </div>

      <div className="flex justify-center">
        <DownloadReceipt
          total={receipt?.total.toLocaleString("es")}
          value={receipt?.value.toLocaleString("es")}
          commission={receipt?.commission.toLocaleString("es")}
          receiptId={receipt?.id}
          service={receipt?.service}
          budgetNumber={receipt?.budgetNumber}
          projectLeader={`${projectLeader?.name} ${projectLeader?.lastname}`}
          paymentMethod={receipt?.paymentMethod}
        />
      </div>
    </div>
  );
};
