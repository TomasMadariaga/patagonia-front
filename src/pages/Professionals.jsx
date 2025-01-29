import { useEffect } from "react";
import { ProfessionalCard } from "../components/ProfessionalCard";
import { useUser } from "../context/UserContext";
import { scheduleTokenRenewal } from "../api/auth";

export const Professionals = () => {
  const { findProfessionals, onRate, professionals, setProfessionals } =
    useUser();
  // const [professionals, setProfessionals] = useState([
  //   {
  //     id: 1,
  //     name: "Carlos Pérez",
  //     role: "Desarrollador Fullstack",
  //     photo: "https://randomuser.me/api/portraits/men/1.jpg",
  //     rating: 0,
  //     totalVotes: 0,
  //   },
  //   {
  //     id: 2,
  //     name: "María González",
  //     role: "Diseñadora UX",
  //     photo: "https://randomuser.me/api/portraits/women/2.jpg",
  //     rating: 4.9,
  //     totalVotes: 22,
  //   },
  //   {
  //     id: 3,
  //     name: "Juan López",
  //     role: "Product Manager",
  //     photo: "https://randomuser.me/api/portraits/men/3.jpg",
  //     rating: 3.8,
  //     totalVotes: 8,
  //   },
  // ]);

  // const handleRate = (id, value) => {
  //   setProfessionals((prev) =>
  //     prev.map((prof) => {
  //       if (prof.id === id) {
  //         const newTotalVotes = prof.totalVotes + 1;
  //         const newRating =
  //           (prof.rating * prof.totalVotes + value) / newTotalVotes;

  //         return {
  //           ...prof,
  //           rating: newRating,
  //           totalVotes: newTotalVotes,
  //         };
  //       }
  //       return prof;
  //     })
  //   );
  // };

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
          <h1 className="font-roboto font-semibold text-slate-700 text-xl">Aun no tenemos profesionales, quieres adherirte a nosotros?</h1>
        </div>
      ) : (
        professionals.map((professional) => (
          <ProfessionalCard
            key={professional.id}
            find={find}
            id={professional.id}
            name={professional.name}
            role={professional.role}
            photo={professional.profilePicture}
            rating={professional.rating}
            totalVotes={professional.totalVotes}
            onRate={(value) => onRate(professional.id, value)}
          />
        ))
      )}
      {/* <button onClick={() => scheduleTokenRenewal()}>refresh</button> */}
    </div>
  );
};
