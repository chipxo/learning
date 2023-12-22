const Card = ({ id, image, title, description, userName, data, userPhoto }) => {
  return (
    <div className="mx-auto mb-12 max-w-[370px] bg-white drop-shadow-2xl">
      <img src={image} alt={title} className="h-44 w-full object-cover" />
      <div className="flex flex-col gap-y-4 px-5 py-5">
        <h2 className="text-[18px] font-bold text-blue-900 md:text-[22px]">
          {title}
        </h2>
        <p>{description}</p>
        <div className="mt-2 flex items-center gap-x-4 md:mt-4">
          <img
            src={userPhoto}
            alt={`photo of ${userName}`}
            className="rounded-full"
          />
          <div className="">
            <h3 className="text-[16px] md:text-[18px]">{userName}</h3>
            <p className="text-blue-300">{data}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
