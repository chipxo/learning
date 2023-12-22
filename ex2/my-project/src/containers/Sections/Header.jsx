import Nav from "../NavBar/NavBar";
import links from "../NavBar/nav.json";
import Social from "../Social/Social";
import Burger from "/src/components/Burger";
import Logo from "/src/components/Logo";

const Header = () => {
  return (
    <header className="bg-header fixed left-0 top-0 z-[999] w-full bg-cover bg-no-repeat py-2 shadow-2xl">
      <div className="md:grid-cols-header container grid grid-cols-2 items-center gap-x-2">
        <Logo />
        <Burger />
        <Nav links={links} />
        <Social />
      </div>
    </header>
  );
};

export default Header;
