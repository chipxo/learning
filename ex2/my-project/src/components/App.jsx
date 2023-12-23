import Gallery from "./Sections/Gallery";
import Header from "./Sections/Header";
import LatestNews from "./Sections/LatestNews";
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
      </main>
      <footer></footer>
    </>
  );
};

export default App;
