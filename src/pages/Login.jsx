import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // const { signin, isAuthenticated } = useAuth();

  const onSubmit = handleSubmit(async (values) => {
    try {
      await signin(values);
    } catch (error) {
      // Pop up de error
    }
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="mt-16 flex flex-col items-center font-inter">
      <form
        className="py-16 flex flex-col gap-4 w-1/4 px-2"
        onSubmit={onSubmit}
      >
        <div className="pb-8 flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-slate-700" htmlFor="email">
              Correo electrónico
            </label>
            <input
              className="rounded-md border w-full shadow-md p-2 focus:border-red-700 focus:outline-none focus:ring-4 focus:ring-red-200"
              {...register("email", { required: true })}
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-700" htmlFor="password">
              Contraseña
            </label>
            <input
              className="rounded-md border w-full shadow-md p-2 focus:border-red-700 focus:outline-none focus:ring-4 focus:ring-red-200"
              {...register("password", { required: true })}
              type="password"
            />
          </div>
        </div>
        <button className="px-1 py-2 rounded-full bg-red-700/80 text-white transition-all duration-200 hover:bg-red-700/95">
          Iniciar Sesión
        </button>
        <a
          href="#"
          className="text-red-700 transition-all duration-150 hover:text-red-900 hover:underline"
        >
          Restablecer contraseña
        </a>
        <p className="text-center text-slate-700">
          No tienes cuenta? Registrate{" "}
          <Link
            to="/register"
            className="text-red-700 transition-all duration-150 hover:text-red-900 hover:underline"
          >
            aquí
          </Link>
        </p>
      </form>
    </div>
  );
};
