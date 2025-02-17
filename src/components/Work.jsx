import { useAuth } from "../context/AuthContext";
import { DownloadReceipt } from "./DownloadReceipt";
import { ProfessionalCard } from "./ProfessionalCard";

export const Work = ({ work, projectLeader, receipt, onRate }) => {
  const { user } = useAuth();

  const formatDate = (dateString) => {
    if (!dateString) return "Fecha no disponible";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-4xl mx-auto space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-700">
          <span className="font-bold">Dirección: </span>
          {work.address}
        </h2>
        <h2 className="text-lg sm:text-xl font-semibold text-slate-700">
          <span className="font-bold">Profesional a cargo: </span>
          {projectLeader.name} {projectLeader.lastname}
        </h2>
      </div>

      <div className="flex flex-col items-center gap-4 sm:gap-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 text-center">
          Detalles del servicio
        </h2>
        <div className="w-full space-y-4 sm:space-y-6">
          {[ 
            { label: "Fecha", value: formatDate(work.createdAt) },
            { label: "Servicio", value: work.service },
            { label: "Descripción", value: work.description },
            { label: "Valor", value: `$${(user?.role !== "Cliente" ? work.value : work.value + work.commission).toLocaleString("es")}` },
            { label: "Método de pago", value: work.paymentMethod }
          ].map(({ label, value }, index) => (
            <div key={index} className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-3 sm:p-4 rounded-lg">
              <p className="font-medium text-gray-700">{label}</p>
              <p className="text-gray-600 text-center sm:text-right break-words max-w-sm">{value}</p>
            </div>
          ))}
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
