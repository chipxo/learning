import { useState } from "react";
import Footer from "./Sections/Footer";
import Gallery from "./Sections/Gallery";
import Header from "./Sections/Header";
import LatestNews from "./Sections/LatestNews";
import Map from "./Sections/Map";
import MaskGroup from "./Sections/MaskGroup";
import Projects from "./Sections/Projects";

const App = () => {
  const [showComponent, setShowComponent] = useState(false);

  const toggleVisibility = () => {
    setShowComponent(!showComponent);
  };

  return (
    <>
      <Header />
      <main>
        <MaskGroup />
        <Projects />
        <LatestNews />
        <Gallery />
        <Map />
      </main>
      <Footer />
    </>
  );
};

export default App;

// AIzaSyBUstuBUHe-HtvTtI1mL57p9dKzsOSzcgo
