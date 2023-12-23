import Button from "../common/Button";
import SectionsTitle from "../common/SectionsTitle";
import img1 from "/gallery_img/gallery_1.png";
import img2 from "/gallery_img/gallery_2.png";
import img3 from "/gallery_img/gallery_3.png";
import img4 from "/gallery_img/gallery_4.png";
import img5 from "/gallery_img/gallery_5.png";

const Gallery = () => {
  return (
    <section id="gallery" className="my-20">
      <div className="container grid gap-y-12 text-center">
        <div>
          <SectionsTitle isBgDark={false} isTitle={true} text={"Gallery"} />
        </div>
        <div className="md:photos grid grid-cols-2 gap-1">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
        <Button text={"See More"} />
      </div>
    </section>
  );
};

export default Gallery;
