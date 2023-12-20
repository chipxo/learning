const Nav = () => {
  return (
    <nav className="hidden md:block">
      <ul className="grid grid-cols-4 justify-items-center text-sm uppercase">
        <li>
          <a
            className="-efore:-py-4 before:mr-1 before:rounded-full before:border before:border-black before:px-2 before:content-['']"
            href="#"
          >
            About us
          </a>
        </li>
        <li>
          <a
            className="-efore:-py-4 before:mr-1 before:rounded-full before:border before:border-black before:px-2 before:content-['']"
            href="#"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="before:-py-4 before:mr-1 before:rounded-full before:border before:border-black before:px-2 before:content-['']"
            href="#"
          >
            News
          </a>
        </li>
        <li>
          <a
            className="before:-py-4 before:mr-1 before:rounded-full before:border before:border-black before:px-2 before:content-['']"
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
