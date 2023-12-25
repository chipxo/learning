import "animate.css";
import { useEffect, useRef, useState } from "react";
import Button from "../common/Button";
import SectionsTitle from "../common/SectionsTitle";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const images = [
  {
    id: 1,
    src: "/gallery_img/gallery_1.png",
  },
  {
    id: 2,
    src: "/gallery_img/gallery_2.png",
  },
  {
    id: 3,
    src: "/gallery_img/gallery_3.png",
  },
  {
    id: 4,
    src: "/gallery_img/gallery_4.png",
  },
  {
    id: 5,
    src: "/gallery_img/gallery_5.png",
  },
];

const Gallery = (props) => {
  const [hiddenImg, setHiddenImg] = useState(false);

  const buttonText = hiddenImg ? "less" : "more";

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
          {images.map(({ id, src }) => (
            <img
              key={id}
              src={src}
              className="hover:cursor-glass w-full shadow-lg transition hover:scale-95 sm:max-w-full"
              alt={`img-${id}`}
              data-fancybox="gallery"
            />
          ))}
        </div>
        <div className="relative ">
          {hiddenImg && (
            <div
              className={`grid-cols-gallery-min animate__animated animate__fadeInDown grid gap-3 duration-200`}
            >
              {[...images, ...images].map(({ id, src }, index) => (
                <img
                  key={`${id} + ${index}`}
                  src={src}
                  className="hover:cursor-glass w-full transition hover:scale-105 sm:max-w-full"
                  alt={`img-${id}`}
                  data-fancybox="gallery"
                />
              ))}
            </div>
          )}
        </div>
        <Button
          text={`See ${buttonText}`}
          buttonText={buttonText}
          onClick={() => setHiddenImg(!hiddenImg)}
        />
      </div>
    </section>
  );
};

export default Gallery;
