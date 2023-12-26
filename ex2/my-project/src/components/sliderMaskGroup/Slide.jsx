const Slide = ({ title, description, bg }) => {
  return (
    <div
      className={`grid h-[60vh] w-screen bg-cover bg-center text-center uppercase text-white md:h-screen md:place-items-center ${bg}`}
    >
      <div className="flex flex-col justify-center px-8 pt-10 md:px-6">
        <h2 className="mb-4 text-2xl font-bold sm:tracking-[8px] md:text-6xl lg:text-[80px]">
          {title}
        </h2>
        <p className="mx-auto max-w-[420px] text-sm sm:mx-0 sm:max-w-[unset] sm:tracking-[6px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Slide;
