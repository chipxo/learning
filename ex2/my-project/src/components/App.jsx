import Footer from "./Sections/Footer";
import Gallery from "./Sections/Gallery";
import Header from "./Sections/Header";
import LatestNews from "./Sections/LatestNews";
import Map from "./Sections/Map";
import MaskGroup from "./Sections/MaskGroup";
import Projects from "./Sections/Projects";

const App = () => {
  return (
    <>
      <main>
        <MaskGroup />
        <Header />
        <Projects />
        <LatestNews />
        <Gallery />
        <Map />
      </main>
      <footer id="footer" className="bg-footer bg-cover bg-center">
        <Footer />
      </footer>
    </>
  );
};

export default App;

// AIzaSyBUstuBUHe-HtvTtI1mL57p9dKzsOSzcgo
