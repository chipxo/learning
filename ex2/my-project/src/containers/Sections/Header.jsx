import { useEffect, useState } from "react";
import Nav from "../NavBar/NavBar";
import links from "../NavBar/nav.json";
import Social from "../Social/Social";
import Burger from "/src/components/Burger";
import Logo from "/src/components/Logo";

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
      className={`fixed left-0 z-[999] w-full bg-cover bg-no-repeat py-3  transition-all ${
        isScrolled
          ? "bg-news top-0 bg-cover bg-center shadow-2xl"
          : "top-0 md:top-4"
      }`}
    >
      <div className="md:grid-cols-header container grid grid-cols-2 items-center gap-x-2 md:px-2">
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
