const Slide = ({ title, description }) => {
  return (
    <div className="text-center uppercase text-white">
      <h2 className="mb-4 text-4xl font-bold tracking-[8px] md:text-6xl lg:text-[80px]">
        {title}
      </h2>
      <p className="tracking-[6px]">{description}</p>
    </div>
  );
};

export default Slide;
