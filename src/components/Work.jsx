import { DownloadReceipt } from "./Pdf";
import { ProfessionalCard } from "./ProfessionalCard";

export const Work = ({ work, projectLeader, receipt, onRate }) => {
  return (
    <div className="bg-white flex flex-col gap-10 w-full">
      <div className="flex w-full justify-between">
        <h2 className="font-medium text-slate-600">
          <span className="text-xl text-slate-700">Dirección: </span>
          {work.address}
        </h2>
        <h2 className="font-medium text-slate-600">
          <span className="text-xl text-slate-700">Profesional a cargo: </span>
          {projectLeader.name} {projectLeader.lastname}
        </h2>
      </div>
      <div className="flex flex-col items-center gap-12">
        <h2 className="font-medium text-2xl text-slate-700 text-center">
          Servicio
        </h2>
        <div className="w-full flex flex-col justify-center gap-10">
          <div className="flex justify-between w-full">
            <p className="font-medium underline underline-offset-2">Detalles</p>
            <p className="break-words max-w-sm text-slate-500">
              {work.description}
            </p>
          </div>
          <div className="flex justify-between w-full">
            <p className="font-medium underline underline-offset-2">Valor</p>
            <p className="text-slate-500">
              ${(work.value + work.commission).toLocaleString("es")}
            </p>
          </div>
          <div className="flex justify-between w-full">
            <p className="font-medium underline underline-offset-2">
              Método de pago
            </p>
            <p className="text-slate-500">{work.paymentMethod}</p>
          </div>
        </div>
      </div>
      <div>
        <ProfessionalCard
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
          description={receipt?.description}
          budgetNumber={receipt?.budgetNumber}
          projectLeader={`${projectLeader?.name} ${projectLeader?.lastname}`}
          paymentMethod={receipt?.paymentMethod}
        />
      </div>
    </div>
  );
};
