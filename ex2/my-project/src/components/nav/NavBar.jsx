import "animate.css";
import { useState } from "react";

const Nav = ({ links, isBurger }) => {
  const [activeLinkId, setActiveLinkId] = useState(null);
  const [hoveredLinkId, setHoveredLinkId] = useState(null);

  const showOnClick = isBurger
    ? "duration-500"
    : "-translate-y-full duration-200";

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
      className={
        window.innerWidth < 768
          ? `${showOnClick} bg-header absolute left-0 top-0 grid h-screen w-full place-items-center bg-cover`
          : "hidden md:block"
      }
    >
      <ul
        className={`${
          window.innerWidth < 768
            ? "grid place-items-center gap-y-14 font-bold"
            : "grid grid-cols-4 justify-items-center"
        } pt-[4px] text-sm uppercase text-white`}
      >
        {links.map(({ id, title, href }) => (
          <li key={id} className="relative lg:text-xl">
            <a
              onClick={() => handleClick(id)}
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={handleMouseLeave}
              href={href}
              className="relative inline-block"
            >
              <span
                className={`absolute -left-[12px] top-[7px] h-[6px] w-[6px] rounded-full border lg:-left-[14px] lg:top-[10px] lg:h-[8px] lg:w-[8px] ${
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
