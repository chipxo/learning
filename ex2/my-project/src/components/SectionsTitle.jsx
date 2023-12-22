const SectionsTitle = ({ text, isBgDark }) => {
  const titleClassName = isBgDark
    ? "text-white before:bg-white"
    : "text-blue-700 before:blue-700";

  return (
    <h2
      className={`relative my-4 text-center text-xl font-bold uppercase before:absolute before:-top-5 before:h-[2px] before:w-[80px]  before:translate-x-[34%] before:content-[''] md:my-6 md:text-2xl md:before:w-[100px] md:before:translate-x-[30%] lg:my-[90px] lg:text-4xl lg:before:translate-x-[70%] ${titleClassName}`}
    >
      {text}
    </h2>
  );
};

export default SectionsTitle;
