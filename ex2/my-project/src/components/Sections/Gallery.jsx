import Button from "../common/Button";
import SectionsTitle from "../common/SectionsTitle";

import img1 from "/gallery_img/gallery_1.png";
import img2 from "/gallery_img/gallery_2.png";
import img3 from "/gallery_img/gallery_3.png";
import img4 from "/gallery_img/gallery_4.png";
import img5 from "/gallery_img/gallery_5.png";

import { useEffect, useRef, useState } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Gallery = (props) => {
  const hiddenImgStyle = "duration-200 absolute w-full z-[-999] opacity-0";

  const [hiddenImg, setHiddenImg] = useState(hiddenImgStyle);

  const buttonText = hiddenImg === hiddenImgStyle ? "more" : "less";

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, { ...options, toolbar: true });

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, [props.delegate, props.options]);

  return (
    <section ref={containerRef} id="gallery" className="relative mt-20">
      <div className="container grid gap-y-12 text-center">
        <div>
          <SectionsTitle isBgDark={false} isTitle={true} text={"Gallery"} />
        </div>
        <div className="md:photos relative z-[888] grid gap-3 ">
          <img
            src={img1}
            className="hover:cursor-glass w-full  shadow-lg sm:max-w-full"
            alt="photo-1"
            data-fancybox="gallery"
          />
          <img
            src={img2}
            className="hover:cursor-glass w-full shadow-lg"
            alt="photo-2"
            data-fancybox="gallery"
          />
          <img
            src={img3}
            className="hover:cursor-glass w-full shadow-lg"
            alt="photo-3"
            data-fancybox="gallery"
          />
          <img
            src={img4}
            className="hover:cursor-glass w-full shadow-lg"
            alt="photo-4"
            data-fancybox="gallery"
          />
          <img
            src={img5}
            className="hover:cursor-glass w-full shadow-lg"
            alt="photo-5"
            data-fancybox="gallery"
          />
        </div>
        <div className="relative -top-10 ">
          <div className={`hide-me gap-3 ${hiddenImg}`}>
            <img
              src={img2}
              className="hover:cursor-glass shadow-lg"
              alt="photo-2"
              data-fancybox="gallery"
            />
            <img
              src={img3}
              className="hover:cursor-glass shadow-lg"
              alt="photo-3"
              data-fancybox="gallery"
            />
            <img
              src={img4}
              className="hover:cursor-glass shadow-lg"
              alt="photo-4"
              data-fancybox="gallery"
            />
            <img
              src={img5}
              className="hover:cursor-glass shadow-lg"
              alt="photo-5"
              data-fancybox="gallery"
            />
            <img
              src={img5}
              className="hover:cursor-glass shadow-lg"
              alt="photo-2"
              data-fancybox="gallery"
            />
            <img
              src={img3}
              className="hover:cursor-glass shadow-lg"
              alt="photo-2"
              data-fancybox="gallery"
            />
            <img
              src={img2}
              className="hover:cursor-glass shadow-lg"
              alt="photo-3"
              data-fancybox="gallery"
            />
            <img
              src={img2}
              className="hover:cursor-glass shadow-lg"
              alt="photo-4"
              data-fancybox="gallery"
            />
            <img
              src={img4}
              className="hover:cursor-glass shadow-lg"
              alt="photo-5"
              data-fancybox="gallery"
            />
            <img
              src={img5}
              className="hover:cursor-glass shadow-lg"
              alt="photo-5"
              data-fancybox="gallery"
            />
          </div>
        </div>
        <Button
          text={`See ${buttonText}`}
          buttonText={buttonText}
          onClick={() =>
            setHiddenImg(
              hiddenImg === hiddenImgStyle
                ? "duration-500 relative opacity-1"
                : hiddenImgStyle,
            )
          }
        />
      </div>
    </section>
  );
};

export default Gallery;
