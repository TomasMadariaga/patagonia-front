import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";
import { useWork } from "../context/WorkContext";
import { useForm } from "react-hook-form";
import { uploadImage } from "../api/user";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export const Profile = () => {
  const { user, updateUserData } = useAuth();
  const { findAUser, updateUser } = useUser();
  const { uploadWorkPhotos, getWorkPhotos, deleteWorkPhoto } = useWork();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    lastname: "",
    profilePicture: "",
    description: "",
    phone: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [workPhotos, setWorkPhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const profilePicture = watch("profilePicture");
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  useEffect(() => {
    if (profilePicture && profilePicture[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(profilePicture[0]);
    } else {
      setPreviewImage(null);
    }
  }, [profilePicture]);

  const onSubmit = handleSubmit(async (values) => {
    setIsLoading(true);
    try {
      if (values.password && values.password !== values.confirmPassword) {
        toast.error("Las contraseñas no coinciden.", {
          toastId: 1,
          position: "top-center",
          pauseOnHover: false,
          autoClose: 3000,
          closeButton: false,
          className: "text-center",
        });
        return;
      }

      if (values.password === "") delete values.password;

      if (values.profilePicture && values.profilePicture[0]) {
        const formData = new FormData();
        formData.append("profilePicture", values.profilePicture[0]);
        await uploadImage(user.id, formData);
      }

      const { profilePicture, confirmPassword, ...rest } = values;

      if (rest.workPhotos && rest.workPhotos.length > 0) {
        const formData = new FormData();

        Array.from(rest.workPhotos).forEach((photo) => {
          formData.append("workPhotos", photo);
        });
        await uploadWorkPhotos(user.id, formData);
        const photos = await getWorkPhotos(user.id);

        setWorkPhotos(photos);
      }
      const { workPhotos, ...userData } = rest;
      await updateUser(user.id, userData);
      updateUserData({ name: userData.name, lastname: userData.lastname });
      toast.success("Perfil actualizado correctamente.", {
        toastId: 1,
        position: "top-center",
        pauseOnHover: false,
        autoClose: 3000,
        closeButton: false,
        className: "text-center",
      });
    } catch (error) {
      toast.error("Error al actualizar el perfil: " + error.message, {
        toastId: 1,
        position: "top-center",
        pauseOnHover: false,
        autoClose: 3000,
        closeButton: false,
        className: "text-center",
      });
    } finally {
      setIsLoading(false);
    }
  });

  const handleDelete = async (id, filename) => {
    const data = await deleteWorkPhoto(id, filename);

    const photos = await getWorkPhotos(user.id);
    setWorkPhotos(photos);

    closeModal();

    return data;
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await findAUser(user.id);
        setUserData(data);
        setValue("email", data.email);
        setValue("name", data.name);
        setValue("lastname", data.lastname);
        setValue("description", data.description);
        setValue("phone", data.phone)

        const photos = await getWorkPhotos(user.id);

        setWorkPhotos(photos);
      } catch (error) {
        toast.error("Error al obtener los datos del usuario: " + error.message);
      }
    };
    getUserData();
  }, [user.id, findAUser, setValue]);

  return (
    <div className="min-h-screen mt-14 bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-5 items-center bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200">
          <div className="relative group">
            <img
              src={
                previewImage ||
                `http://localhost:3000/uploads/pfp/${userData.profilePicture}`
              }
              alt="Foto de perfil"
              className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
            />
            <label
              htmlFor="profilePicture"
              className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            >
              <span className="text-white text-sm font-medium">
                Cambiar foto
              </span>
            </label>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {userData.name} {userData.lastname}
            </h2>
            <p className="text-gray-600">{userData.email}</p>
          </div>

          <form
            onSubmit={onSubmit}
            encType="multipart/form-data"
            className="w-full max-w-md flex flex-col gap-6"
          >
            <input
              id="profilePicture"
              type="file"
              className="hidden"
              accept="image/png, image/jpeg"
              {...register("profilePicture")}
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="text"
                className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                {...register("email", { required: "El email es obligatorio" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-medium text-gray-700">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                {...register("name", { required: "El nombre es obligatorio" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="lastname" className="font-medium text-gray-700">
                Apellido
              </label>
              <input
                id="lastname"
                type="text"
                className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                {...register("lastname", {
                  required: "El apellido es obligatorio",
                })}
              />
              {errors.lastname && (
                <p className="text-red-500 text-sm">
                  {errors.lastname.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="description"
                className="font-medium text-gray-700"
              >
                Sobre ti
              </label>
              <input
                id="description"
                type="text"
                className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                {...register("description")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-medium text-gray-700">
                Número de celular
              </label>
              <input
                id="phone"
                type="text"
                className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                {...register("phone", {
                  pattern: {
                    value: /^[0-9]{8,15}$/,
                    message:
                      "El número de teléfono debe tener entre 8 y 15 dígitos.",
                  },
                })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-medium text-gray-700">
                Nueva contraseña
              </label>
              <input
                id="password"
                type="password"
                className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                {...register("password")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirmPassword"
                className="font-medium text-gray-700"
              >
                Confirmar contraseña
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === password || "Las contraseñas no coinciden",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            {["Admin", "Cliente"].includes(user?.role) ? (
              ""
            ) : (
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="workPhotos"
                  className="font-medium text-gray-700"
                >
                  Fotos de trabajo
                </label>
                <input {...register("workPhotos")} type="file" multiple />
              </div>
            )}
            {workPhotos.length > 0 && (
              <div className="mt-6 w-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Fotos de trabajo
                </h3>
                <Swiper
                  spaceBetween={5}
                  slidesPerView={3}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  className="w-full"
                >
                  {workPhotos.map((photo, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={photo.url}
                        alt={`Trabajo ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg shadow-md border"
                        onClick={() => openModal(photo)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}

            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full mx-4 relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div className="p-4">
                    <img
                      src={selectedPhoto.url}
                      alt={`${selectedPhoto.filename}`}
                      className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                    />
                  </div>

                  <div className="bg-gray-50 p-4 flex justify-end border-t border-gray-200">
                    <button
                      onClick={() =>
                        handleDelete(
                          selectedPhoto.userId,
                          selectedPhoto.filename
                        )
                      }
                      className="flex items-center justify-center px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="p-2 border rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors duration-150 disabled:bg-blue-300"
            >
              {isLoading ? "Guardando..." : "Guardar cambios"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
