import { useEffect, useState } from "react";
import { useWork } from "../context/WorkContext";
import { useAuth } from "../context/AuthContext";

export const IncomeReport = () => {
  const { findWorksByProfessional } = useWork();
  const { user } = useAuth();
  const [earningsByMonth, setEarningsByMonth] = useState({});

  useEffect(() => {
    const findWorks = async () => {
      const data = await findWorksByProfessional(user.id);

      const groupedEarnings = data.reduce((acc, work) => {
        const date = new Date(work.createdAt);
        const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

        if (!acc[monthYear]) {
          acc[monthYear] = 0;
        }
        acc[monthYear] += work?.receipt?.value;
        return acc;
      }, {});

      setEarningsByMonth(groupedEarnings);
    };

    findWorks();
  }, [findWorksByProfessional, user.id]);

  const earningsArray = Object.entries(earningsByMonth).map(([month, earnings]) => ({
    month,
    earnings,
  }));

  const totalEarnings = earningsArray.reduce((sum, { earnings }) => sum + earnings, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reporte de Ganancias por Mes</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Mes</th>
            <th className="py-2 px-4 border-b">Ganancias</th>
          </tr>
        </thead>
        <tbody>
          {earningsArray.map(({ month, earnings }) => (
            <tr key={month} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b text-center">{month}</td>
              <td className="py-2 px-4 border-b text-center">${earnings.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-100">
            <td className="py-2 px-4 border-b font-bold text-center">Total</td>
            <td className="py-2 px-4 border-b font-bold text-center">${totalEarnings.toLocaleString()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};