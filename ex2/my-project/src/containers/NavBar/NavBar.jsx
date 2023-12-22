const Nav = ({ links }) => {
  return (
    <nav className="hidden md:block">
      <ul className="grid grid-cols-4 justify-items-center pl-5 text-sm uppercase text-white ">
        {links.map(({ id, title, href }) => (
          <li key={id}>
            <a href={href}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
