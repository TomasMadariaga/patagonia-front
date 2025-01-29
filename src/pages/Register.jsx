import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState, useRef } from "react";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { signup, isAuthenticated } = useAuth();

  const [previewImage, setPreviewImage] = useState(null);

  const onSubmit = handleSubmit(async (values) => {
    try {
      await signup(values);
    } catch (error) {
      throw new Error(error)
    }
  });

  const handleImagePreview = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const { ref: registerRef, ...rest } = register("profilePicture", {required: true});

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="mt-16 flex flex-col items-center font-inter">
      <form
        className="py-16 flex flex-col gap-6 w-1/4 px-2"
        onSubmit={onSubmit}
        encType="multipart/form-data"
      >
        <div className="pb-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4 items-center">
              <label className="text-slate-700 font-semibold">
                Foto de perfil
              </label>
              <div className="relative w-24 h-24">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-full shadow-md border-2 border-slate-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-500 rounded-full shadow-md border-2 border-slate-300">
                    Sin imagen
                  </div>
                )}
                <label
                  htmlFor="profilePicture"
                  className="absolute bottom-0 right-0 w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-red-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </label>
              </div>
              <input
                type="file"
                accept="image/png, image/jpeg"
                id="profilePicture"
                ref={(e) => {
                  registerRef(e)
                }}
                {...rest}
                onChange={handleImagePreview}
              />
              {errors.profilePicture && (
              <span className="text-red-600 text-sm">
                Foto de perfil es requerida.
              </span>
            )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-700" htmlFor="name">
              Nombre
            </label>
            <input
              className="rounded-md border w-full shadow-md p-2 focus:border-red-700 focus:outline-none focus:ring-4 focus:ring-red-200"
              {...register("name", { required: true })}
              type="text"
            />
            {errors.name && (
              <span className="text-red-600 text-sm">
                El nombre es requerido.
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-700" htmlFor="lastname">
              Apellido
            </label>
            <input
              className="rounded-md border w-full shadow-md p-2 focus:border-red-700 focus:outline-none focus:ring-4 focus:ring-red-200"
              {...register("lastname", { required: true })}
              type="text"
            />
            {errors.lastname && (
              <span className="text-red-600 text-sm">
                El apellido es requerido.
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-700" htmlFor="email">
              Correo electrónico
            </label>
            <input
              className="rounded-md border w-full shadow-md p-2 focus:border-red-700 focus:outline-none focus:ring-4 focus:ring-red-200"
              {...register("email", { required: true })}
              type="email"
            />
            {errors.email && (
              <span className="text-red-600 text-sm">
                El correo electrónico es requerido.
              </span>
            )}
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
            {errors.password && (
              <span className="text-red-600 text-sm">
                La contraseña es requerida.
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-700">Rol</label>
            <select
              className="rounded-md border shadow-md p-2 focus:border-red-700 appearance-none focus:outline-none focus:ring-4 focus:ring-red-200"
              {...register("role", { required: true })}
            >
              <option value={"Cliente"}>Cliente</option>
              <option value={"Pintor"}>Pintor</option>
              <option value={"Albañil"}>Albañil</option>
              <option value={"Singuero"}>Singuero</option>
              <option value={"Herrero"}>Herrero</option>
              <option value={"Carpintero"}>Carpintero</option>
            </select>
            {errors.role && (
              <span className="text-red-600 text-sm">
                El rol es obligatorio.
              </span>
            )}
          </div>
        </div>
        <button className="px-1 py-2 rounded-full bg-red-700/80 text-white transition-all duration-200 hover:bg-red-700/95">
          Crear cuenta
        </button>
        <p className="text-center text-slate-700">
          ¿Ya tienes una cuenta? Inicia sesión{" "}
          <Link
            to="/login"
            className="text-red-700 transition-all duration-150 hover:text-red-900 hover:underline"
          >
            aquí
          </Link>
        </p>
      </form>
    </div>
  );
};
