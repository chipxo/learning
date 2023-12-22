import "animate.css";
import { useState } from "react";

const Nav = ({ links, isBurger }) => {
  const [activeLinkId, setActiveLinkId] = useState(null);
  const [hoveredLinkId, setHoveredLinkId] = useState(null);

  const showOnClick = isBurger
    ? "absolute top-0 left-0 h-screen bg-header bg-cover w-full grid place-items-center duration-500"
    : "-translate-y-full absolute top-0 left-0 h-screen bg-header bg-cover w-full grid place-items-center duration-500";

  const setNavOnClick = isBurger
    ? "grid place-items-center gap-y-14 font-bold"
    : "grid place-items-center gap-y-14 font-bold";

  const handleMouseEnter = (id) => {
    setHoveredLinkId(id);
  };

  const handleMouseLeave = () => {
    setHoveredLinkId(null);
  };

  const handleClick = (id) => {
    setActiveLinkId(id);

    setTimeout(() => {
      setActiveLinkId(null);
    }, 1000);
  };

  return (
    <nav
      id="nav"
      className={window.innerWidth < 768 ? showOnClick : "hidden md:block"}
    >
      <ul
        className={`${
          window.innerWidth < 768
            ? setNavOnClick
            : "grid grid-cols-4 justify-items-center "
        } text-sm uppercase text-white`}
      >
        {links.map(({ id, title, href }) => (
          <li key={id} className="relative">
            <a
              onClick={() => handleClick(id)}
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={handleMouseLeave}
              href={href}
              className="relative inline-block"
            >
              <span
                className={`absolute -left-[12px] top-[7px] h-[6px] w-[6px] rounded-full border ${
                  id === activeLinkId || id === hoveredLinkId ? "bg-white" : ""
                }`}
              ></span>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
