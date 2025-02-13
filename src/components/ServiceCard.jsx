export const ServiceCard = ({icon, title, description}) => {
  return (
    <div className="flex flex-col items-center lg:gap-10 gap-5 lg:pt-6 pt-1 text-white z-10 bg-white bg-opacity-20 self-baseline rounded-xl w-full">
      {icon}
      <div className="bg-blue-700 rounded-b-md lg:p-1 px-1 text-center">
        <h2 className="font-semibold text-lg lg:pb-2 pb-1">{title}</h2>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};
