import { useEffect } from "react";
import { ProfessionalCard } from "../components/ProfessionalCard";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

export const Professionals = () => {
  const { findProfessionals, professionals, setProfessionals } = useUser();

  const find = async () => {
    const data = await findProfessionals();
    setProfessionals(data);
  };

  useEffect(() => {
    find();
  }, []);

  return (
    <div className="mt-16 py-20 flex-1 flex flex-wrap gap-4 justify-center">
      {professionals < 1 ? (
        <div className="flex justify-center items-center">
          <h1 className="font-roboto font-semibold text-slate-700 text-xl">
            Aun no tenemos profesionales, quieres adherirte a nosotros?
          </h1>
        </div>
      ) : (
        professionals.map((professional) => (
          <Link to={`../professional/${professional.id}`}>
            <ProfessionalCard
              key={professional.id}
              find={find}
              id={professional.id}
              name={professional.name}
              role={professional.role}
              photo={professional.profilePicture}
              rating={professional.rating}
              totalVotes={professional.totalVotes}
            />
          </Link>
        ))
      )}
    </div>
  );
};
