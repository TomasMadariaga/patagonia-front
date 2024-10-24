export const Card = ({ title, description, image }) => {
  return (
    <div className="flex flex-col px-10 gap-3">
      <img src={image} className="rounded-t-lg w-full h-64"/>
      <div className="px-5 flex flex-col gap-3">
        <h2 className="text-3xl font-roboto text-black/80">
          {title}
        </h2>
        <p className="font-nunito text-black/75">
          {description}
        </p>
      </div>
    </div>
  );
};
