import { useEffect, useState } from "react";
import Logo from "../common//Logo";
import Burger from "../common/Burger";
import Nav from "../nav/NavBar";
import links from "../nav/nav.json";
import Social from "../socials/Social";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-[999] w-full bg-cover bg-no-repeat py-3 font-[Source-Sans] transition-all 
      ${isScrolled ? "bg-header bg-right-top shadow-2xl" : "md:top-4"}`}
    >
      <div className="container-header lg:grid-cols-header md:grid-cols-header-md md:gap-x-18 container-header grid grid-cols-2 items-center gap-x-5 lg:gap-x-5">
        <Logo />
        <Burger />
        {window.innerWidth > 768 ? (
          <Nav links={links} isBurger={false} />
        ) : null}
        <Social isHeader={true} />
      </div>
    </header>
  );
};

export default Header;
