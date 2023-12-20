const Burger = () => {
  return (
    <div className="justify-self-end md:hidden">
      <svg
        className="h-10 w-10 text-black dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 12"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h14M1 6h14M1 11h7"
        />
      </svg>
    </div>
  );
};

export default Burger;
