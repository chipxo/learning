const Button = ({ href, text }) => {
  return (
    <a href={href}>
      <button className="hover:bg-news border border-gray-500 bg-cover bg-center px-6 py-2 uppercase transition-all hover:border-blue-900 hover:text-white md:px-10 md:py-3">
        {text}
      </button>
    </a>
  );
};

export default Button;
