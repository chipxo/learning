import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Nav from "../nav/NavBar";
import links from "../nav/nav.json";

const Burger = () => {
  const [burger, setBurger] = useState(false);

  const whichBurger = burger ? faX : faBars;

  // const handleClick = () => {
  //   setBurger(!burger);
  // };

  return (
    <div
      className="grid place-items-end transition hover:cursor-pointer md:hidden"
      onClick={() => setBurger(!burger)}
    >
      <Nav links={links} isBurger={burger} />
      <FontAwesomeIcon
        icon={whichBurger}
        className="relative z-[999] justify-self-end text-6xl text-white"
      />
    </div>
  );
};

export default Burger;
