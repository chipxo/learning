const SectionsTitle = ({ text, isBgDark, isTitle }) => {
  const titleClassName = isBgDark ? "text-white" : "text-dark-blue";

  const beforeBg = isBgDark ? "before:bg-white" : "before:bg-dark-blue";

  const secTitle = isTitle
    ? `before:absolute before:-top-5 before:h-[2px] before:w-[80px] before:content-[''] before:inset-x-auto md:before:w-[100px] my-4 text-center md:my-6 ${beforeBg} transform before:left-1/2 before:-translate-x-1/2`
    : "";

  return (
    <h2
      className={`relative font-[Montserrat] text-xl font-bold  uppercase md:text-2xl lg:text-4xl ${secTitle} ${titleClassName}`}
    >
      {text}
    </h2>
  );
};

export default SectionsTitle;
