const SectionsTitle = ({ text, isBgDark, isTitle }) => {
  const titleClassName = isBgDark
    ? "text-white before:bg-white"
    : "text-dark-blue before:bg-dark-blue";

  const secTitle = isTitle
    ? "before:absolute before:-top-5 before:h-[2px] before:w-[80px]  before:translate-x-[34%] before:content-[''] md:before:w-[100px] md:before:translate-x-[30%] lg:before:translate-x-[70%] relative my-4 text-center md:my-6"
    : "";

  return (
    <h2
      className={`font-[Montserrat] text-xl font-bold uppercase  md:text-2xl lg:text-4xl ${titleClassName} ${secTitle}`}
    >
      {text}
    </h2>
  );
};

export default SectionsTitle;
