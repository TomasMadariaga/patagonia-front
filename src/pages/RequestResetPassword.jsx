import { useState } from "react";
import api from "../api/axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const RequestResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setMessage("Por favor, ingresa un correo electrónico válido.");
      return;
    }
    setLoading(true);
    setMessage("");

    try {
      const response = await api.patch("/auth/request-reset-password", {
        email,
      });

      if (response.status === 200) {
        toast.success("Si el email está registrado, recibirás un enlace para restablecer tu contraseña.");
        navigate('/login');
      } else {
        toast.error("Ocurrió un error. Inténtalo de nuevo.");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Error al conectar con el servidor.");
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
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            disabled={loading || !email}
          >
            {loading ? "Enviando..." : "Enviar enlace"}
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
        )}
      </div>
    </div>
  );
};