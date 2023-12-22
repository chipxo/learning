import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Nav from "../containers/NavBar/NavBar";
import links from "../containers/NavBar/nav.json";

const Burger = () => {
  const [burger, setBurger] = useState(false);

  const whichBurger = burger ? faX : faBars;

  const handleClick = () => {
    setBurger(!burger);
  };

  return (
    <div
      className="grid place-items-end transition hover:cursor-pointer md:hidden"
      onClick={handleClick}
    >
      <Nav links={links} isBurger={burger} />
      <FontAwesomeIcon
        icon={whichBurger}
        className="relative z-[999] justify-self-end text-4xl text-white"
      />
    </div>
  );
};

export default Burger;
