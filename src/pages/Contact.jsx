import { useForm } from "react-hook-form";
import { CallIcon, MailIcon, MapMarkerIcon } from "../icons/Icons";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <div className="mt-16">
      <div className="relative flex w-full bg-interior2 bg-fixed bg-cover bg-no-repeat p-9">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <h1 className="text-5xl text-white z-10 font-inter pl-10">Contáctenos</h1>
      </div>
      <div className="flex py-7">
        <div className="w-2/3 font-nunito">
          <p className="px-20">
            Contáctenos sobre cualquier cosa relacionada con nuestra empresa o
            servicios. Haremos todo lo posible por responderle a la brevedad.
          </p>
          <div className="px-20 flex flex-col py-5">
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <label htmlFor="name" className="block">
                  Nombre
                </label>
                <input
                  className="rounded-md border border-black/20 w-2/3 p-2 shadow-md"
                  {...register("name")}
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="email" className="block">
                  Email
                </label>
                <input
                  className="rounded-md border border-black/20 w-2/3 p-2 shadow-md"
                  {...register("email")}
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="message" className="block">
                  Mensaje
                </label>
                <textarea
                  className="rounded-md border border-black/20 w-2/3 h-24 shadow-md"
                  {...register("message")}
                />
              </div>
              <button className="text-white bg-red-500/85 py-2 px-4 rounded-full w-fit transition-all duration-200 hover:bg-red-600">
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div>
          <p className="font-bold pb-5 font-roboto">Mi Compañía</p>
          <ul className="flex flex-col gap-1 font-nunito">
            <li className="flex gap-3 items-baseline">
              <MapMarkerIcon size={15} color="#212529" />
              <p>3575 Fake Buena Vista Avenue</p>
            </li>
            <li className="flex gap-3 items-baseline">
              <CallIcon size={15} color="#212529" />
              <p>+1 555-555-5556</p>
            </li>
            <li className="flex gap-3 items-baseline">
              <MailIcon size={15} color="#212529" />
              <p>info@sucompañía.example.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};