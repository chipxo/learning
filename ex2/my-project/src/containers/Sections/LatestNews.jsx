import SectionsTitle from "../../components/SectionsTitle";
import { Slider } from "../../components/Slider/Slider";
import slides from "../../components/Slider/mock.json";

const LatestNews = () => {
  return (
    <section id="news" className="bg-news mt-[60px] bg-cover bg-center">
      <div className="container px-0 py-20">
        <SectionsTitle text={"Latest News"} isBgDark={true} />
        <Slider slides={slides} />
      </div>
    </section>
  );
};

export default LatestNews;
