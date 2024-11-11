import { UpIcon } from "../icons/Icons";

export const Upbutton = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="z-10 lg:block hidden fixed bottom-5 right-5 text-white rounded-full bg-marine-blue p-3 text-xl transition-all duration-300 hover:bg-marine-blue/85"
    >
      <UpIcon />
    </button>
  );
};
