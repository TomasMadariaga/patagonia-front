import { useForm } from "react-hook-form";
import { CallIcon, MailIcon, MapMarkerIcon } from "../icons/Icons";
import axios from "axios";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    try {
      const res = await axios.post("http://localhost:3000/email", values);
      console.log(res);
      // console.log(values);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <div className="mt-16">
      <div className="relative flex w-full bg-interior2 bg-fixed bg-cover bg-no-repeat p-9">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <h1 className="lg:text-5xl text-4xl text-white z-10 font-inter pl-10">
          Contáctenos
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col py-7">
        <div className="lg:w-2/3 lg:text-left text-center font-nunito pb-10">
          <p className="lg:px-20">
            Contáctenos sobre cualquier cosa relacionada con nuestra empresa o
            servicios. Haremos todo lo posible por responderle a la brevedad.
          </p>
          <div className="lg:px-20 px-10 flex flex-col py-5">
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
              <div className="flex lg:flex-row flex-col justify-between items-center">
                <label htmlFor="name" className="block lg:self-auto self-start">
                  Nombre<span className="text-red-500">*</span>
                </label>
                <input
                  className="rounded-md border border-black/20 lg:w-2/3 w-full p-2 shadow-md"
                  {...register("name")}
                />
              </div>
              <div className="flex lg:flex-row flex-col justify-between items-center">
                <label htmlFor="email" className="block lg:self-auto self-start">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="rounded-md border border-black/20 lg:w-2/3 w-full p-2 shadow-md"
                  {...register("email")}
                />
              </div>
              <div className="flex lg:flex-row flex-col justify-between items-center">
                <label htmlFor="phone" className="block lg:self-auto self-start">
                  Numero de Telefono<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="rounded-md border border-black/20 lg:w-2/3 w-full p-2 shadow-md"
                  {...register("phone")}
                />
              </div>
              <div className="flex lg:flex-row flex-col justify-between items-center">
                <label htmlFor="message" className="block lg:self-auto self-start">
                  Mensaje<span className="text-red-500">*</span>
                </label>
                <textarea
                  className="rounded-md border border-black/20 lg:w-2/3 w-full h-24 shadow-md"
                  {...register("message", { required: true })}
                />
              </div>
              <button className="text-white self-center bg-red-500/85 py-2 px-4 rounded-full w-1/3 transition-all duration-200 hover:bg-red-600">
                Enviar
              </button>
            </form>
          </div>
        </div>
        <div className="lg:p-0 pl-5">
          <p className="font-bold pb-5 font-roboto">Cruz Patagonia</p>
          <ul className="flex flex-col gap-1 font-nunito">
            <li className="flex gap-3 items-baseline">
              <MapMarkerIcon size={15} className="text-blue-500" />
              <p>Bariloche, Patagonia Argentina</p>
            </li>
            <li className="flex gap-3 items-baseline">
              <CallIcon size={15} className="text-blue-500" />
              <p>+54 294-4641368</p>
            </li>
            <li className="flex gap-3 items-baseline">
              <MailIcon size={15} className="text-blue-500" />
              <p>rrss.cruzpatagonia@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
