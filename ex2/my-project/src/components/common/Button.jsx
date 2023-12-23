const Button = ({ text, onClick }) => {
  return (
    <button className="to-light-blue from-mid-purple border px-6 py-2 font-[Montserrat] uppercase transition-all hover:bg-gradient-to-br hover:text-white md:px-10 md:py-3">
      {text}
    </button>
  );
};

export default Button;
