import { useEffect, useState } from "react";
import Logo from "../common//Logo";
import Burger from "../common/Burger";
import Nav from "../nav/NavBar";
import links from "../nav/nav.json";
import Social from "../socialBar/Social";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 z-[999] w-full bg-cover bg-no-repeat py-3 font-[Source-Sans] transition-all 
      ${
        isScrolled
          ? "to-light-blue from-mid-purple top-0 bg-gradient-to-br via-blue-500 shadow-2xl"
          : "top-0 md:top-4"
      }`}
    >
      <div className="md:grid-cols-header container grid grid-cols-2 items-center gap-x-5 md:px-2">
        <Logo />
        <Burger />
        {window.innerWidth > 768 ? (
          <Nav links={links} isBurger={false} />
        ) : null}
        <Social />
      </div>
    </header>
  );
};

export default Header;
