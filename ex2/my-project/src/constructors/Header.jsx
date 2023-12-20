import Burger from "../components/Burger";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Social from "../components/Social";

const Header = () => {
  return (
    <header className="py-2">
      <div className="md:grid-cols-header container grid grid-cols-2 items-center gap-x-2">
        <Logo />
        <Burger />
        <Nav />
        <Social />
      </div>
    </header>
  );
};

export default Header;
