import { useState } from "react";

const Nav = ({ links, isBurger }) => {
  const [activeLinkId, setActiveLinkId] = useState(null);
  const [hoveredLinkId, setHoveredLinkId] = useState(null);

  const showOnClick = isBurger
    ? "duration-500"
    : "-translate-y-full duration-300";

  const navStyle = `bg-news absolute left-0 top-0 grid h-screen w-full place-items-center bg-cover ${showOnClick}`;

  const ulActive = "grid place-items-center gap-y-24 text-3xl font-bold";

  const ulUnActive = "grid grid-cols-4 justify-items-center text-sm";

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
      className={window.innerWidth < 768 ? navStyle : "hidden md:block"}
    >
      <ul
        className={`${
          window.innerWidth < 768 ? ulActive : ulUnActive
        } pt-[4px] uppercase text-white`}
      >
        {links.map(({ id, title, href }) => (
          <li
            key={id}
            className="relative transition hover:scale-105 md:text-xl"
          >
            <a
              onClick={() => handleClick(id)}
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={handleMouseLeave}
              href={href}
              className="relative inline-block"
            >
              {/* Before Marker */}
              <span
                className={`absolute -left-[12px] top-[6px] hidden h-[6px] w-[6px] rounded-full border md:-left-[14px] md:top-[11px] md:inline-block md:h-[8px] md:w-[8px] ${
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
