export const Card = ({ title, description, image }) => {
  return (
    <div className="flex flex-col lg:w-2/3 w-4/5 lg:border-none border lg:shadow-none shadow-lg border-gray-300 rounded-xl gap-3">
      <img src={image} className="rounded-t-lg w-full h-64 object-cover"/>
      <div className="px-5 flex flex-col gap-3">
        <h2 className="lg:text-3xl text-xl text-center font-roboto text-black/80">
          {title}
        </h2>
        <p className="font-nunito lg:text-left text-center text-black/75">
          {description}
        </p>
      </div>
    </div>
  );
};
