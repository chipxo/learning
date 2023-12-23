// import { useEffect } from "react";
import Button from "../common/Button";
import SectionsTitle from "../common/SectionsTitle";

// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

import img1 from "/gallery_img/gallery_1.png";
import img2 from "/gallery_img/gallery_2.png";
import img3 from "/gallery_img/gallery_3.png";
import img4 from "/gallery_img/gallery_4.png";
import img5 from "/gallery_img/gallery_5.png";

// const Gallery = () => {
//   useEffect(() => {
//     Fancybox.bind("[data-fancybox]", {
//       toolbar: true,
//     });

//     return () => {
//       Fancybox.destroy();
//     };
//   }, []);

//   return (
//     <section id="gallery" className="my-20">
//       <div className="container grid gap-y-12 text-center">
//         <div>
//           <SectionsTitle isBgDark={false} isTitle={true} text={"Gallery"} />
//         </div>
//         <div className="md:photos grid grid-cols-2 gap-1">
//           <img src={img1} alt="" data-fancybox />
//           <img src={img2} alt="" data-fancybox />
//           <img src={img3} alt="" data-fancybox />
//           <img src={img4} alt="" data-fancybox />
//           <img src={img5} alt="" data-fancybox />
//         </div>
//         <Button text={"See More"} />
//       </div>
//     </section>
//   );
// };

// export default Gallery;

import { useEffect, useRef } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Gallery = (props) => {
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
    <section ref={containerRef} id="gallery" className="mt-20">
      <div className="container grid gap-y-12 text-center">
        <div>
          <SectionsTitle isBgDark={false} isTitle={true} text={"Gallery"} />
        </div>
        <div className="md:photos grid grid-cols-2 gap-1">
          <img
            src={img1}
            className="hover:cursor-glass shadow-lg"
            alt="photo-1"
            data-fancybox="gallery"
          />

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
        </div>
        <Button text={"See More"} />
      </div>
    </section>
  );
};

export default Gallery;
