import { Work } from "./Work";

export const Modal = ({
  work,
  projectLeader,
  receipt,
  onRate,
  toggle,
}) => {

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 h-full w-full z-10 overflow-y-auto">
      <div className="relative flex justify-center items-start pt-20 mx-auto w-3/4">
        <div className="relative bg-white rounded-lg shadow-lg w-full max-h-[80vh] overflow-y-auto">
          <button
            onClick={toggle}
            className="absolute top-2 right-2 p-2 text-slate-500 hover:text-gray-300 font-medium text-xl"
          >
            X
          </button>
          <div className="pb-6 px-8 pt-14">
            <Work
              work={work}
              projectLeader={projectLeader}
              receipt={receipt}
              onRate={onRate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
