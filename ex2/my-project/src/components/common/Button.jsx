const Button = ({ text, onClick, buttonText }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`to-light-blue from-mid-purple border px-6 py-2 font-[Montserrat] uppercase transition-all duration-200 hover:bg-gradient-to-br hover:text-white md:px-10 md:py-3 
        ${buttonText === "less" ? "bg-dark-blue text-white" : ""}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
