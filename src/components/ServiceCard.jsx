export const ServiceCard = ({icon, title, description}) => {
  return (
    <div className="flex flex-col items-center gap-10 pt-6 text-white z-10 bg-white bg-opacity-20 self-baseline rounded-xl w-full">
      {icon}
      <div className="bg-blue-700 rounded-b-md p-1 text-center">
        <h2 className="font-semibold text-lg pb-2">{title}</h2>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};
