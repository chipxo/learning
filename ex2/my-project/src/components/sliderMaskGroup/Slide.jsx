const Slide = ({ title, description }) => {
  return (
    <div className="mt-4 text-center uppercase text-white">
      <h2 className="mb-4 text-2xl font-bold tracking-[8px] md:text-6xl lg:text-[80px]">
        {title}
      </h2>
      <p className="text-sm tracking-[6px]">{description}</p>
    </div>
  );
};

export default Slide;
