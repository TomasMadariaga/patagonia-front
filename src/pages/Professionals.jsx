import { useEffect, useState } from "react";
import { ProfessionalCard } from "../components/ProfessionalCard";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

export const Professionals = () => {
  const { findProfessionals, professionals, setProfessionals } = useUser();
  const [searchTerm, setSearchTerm] = useState("");

  const find = async () => {
    const data = await findProfessionals();
    setProfessionals(data);
  };

  const filteredProfessionals = professionals.filter((professional) => {
    const fullName = `${professional.name} ${professional.lastname}`.toLowerCase();
    const role = professional.role.toLowerCase();
    const term = searchTerm.toLowerCase();

    return fullName.includes(term) || role.includes(term);
  });

  useEffect(() => {
    find();
  }, []);

  return (
    <div className="mt-16 py-20 flex-1 flex flex-col items-center">
      <div className="w-full max-w-2xl px-4 mb-8">
        <input
          type="text"
          placeholder="Buscar profesionales por nombre o rol..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {filteredProfessionals.length < 1 ? (
          <div className="flex justify-center items-center">
            <h1 className="font-roboto font-semibold text-slate-700 text-xl">
              No se encontraron profesionales.
            </h1>
          </div>
        ) : (
          filteredProfessionals.map((professional) => (
            <Link to={`../professional/${professional.id}`} key={professional.id}>
              <ProfessionalCard
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
    </div>
  );
};