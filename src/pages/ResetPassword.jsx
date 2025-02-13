import { useState } from "react";
import api from "../api/axios";
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { resetPasswordToken } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setLoading(false)
      toast.error("Las contraseñas no coinciden", {
        toastId: 1,
        position: "top-center",
        pauseOnHover: false,
        autoClose: 3000,
        closeButton: false,
        className: "text-center",
      })
      return;
    }

    try {
      const response = await api.patch("/auth/reset-password", {
        resetPasswordToken,
        password,
      });

      if (response.status === 200) {
        toast.success("Contraseña restablecida correctamente.");
        navigate('/login');
      } else {
        toast.error("Ocurrió un error. Inténtalo de nuevo.");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message, {
          toastId: 1,
          position: "top-center",
          pauseOnHover: false,
          autoClose: 3000,
          closeButton: false,
          className: "text-center",
        });
      } else {
        toast.error("Error al conectar con el servidor.", {
          toastId: 1,
          position: "top-center",
          pauseOnHover: false,
          autoClose: 3000,
          closeButton: false,
          className: "text-center",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex justify-center items-center mt-16 py-10 bg-gray-100">
      <div className="p-20 bg-white rounded-lg shadow-md border">
        <h2 className="text-xl text-center font-semibold mb-4">Restablecer contraseña</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Nueva contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu nueva contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required
          />

          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirmar nueva contraseña
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirma tu nueva contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            disabled={loading || !password || !confirmPassword}
          >
            {loading ? "Restableciendo..." : "Restablecer contraseña"}
          </button>
        </form>
      </div>
    </div>
  );
};