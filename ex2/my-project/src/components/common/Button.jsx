const Button = ({ href, text }) => {
  return (
    <a href={href}>
      <button className="hover:bg-news hover:border-dark-blue border border-gray-500 bg-cover bg-center px-6 py-2 font-[Montserrat] uppercase transition-all hover:text-white md:px-10 md:py-3">
        {text}
      </button>
    </a>
  );
};

export default Button;
