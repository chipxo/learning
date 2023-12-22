import SectionsTitle from "../../components/SectionsTitle";
import { Slider } from "../../components/Slider/Slider";
import slides from "../../components/Slider/mock.json";

const LatestNews = () => {
  return (
    <section id="news" className="bg-news scroll-mt-16 bg-cover bg-center">
      <div className="container px-4 py-20 md:px-0">
        <SectionsTitle text={"Latest News"} isBgDark={true} isTitle={true} />
        <Slider slides={slides} />
      </div>
    </section>
  );
};

export default LatestNews;
