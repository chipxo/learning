const SectionsTitle = ({ text, isBgDark }) => {
  const titleClassName = isBgDark
    ? "text-white before:bg-white"
    : "text-blue-700 before:blue-700";

  return (
    <h2
      className={`relative my-[90px] text-center text-4xl font-bold uppercase  before:absolute before:-top-5 before:h-[2px] before:w-[100px] before:translate-x-20  before:content-[''] ${titleClassName}`}
    >
      {text}
    </h2>
  );
};

export default SectionsTitle;
