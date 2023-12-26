import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css";
import { useState } from "react";
import Button from "../common/Button";
import SectionsTitle from "../common/SectionsTitle";

const ProjectCard = ({
  id,
  subTitle,
  title,
  description,
  location,
  image,
  href,
  isNumber,
}) => {
  const [details, setDetails] = useState(false);

  const buttonText = details ? "less" : "more";

  const isReversed = isNumber ? "md:flex-row-reverse" : "md:flex-row";

  const rightPosition =
    "-right-[22rem] lg:-right-[26rem] xl:-right-[30rem] 2xl:-right-[38rem]";
  const leftPosition =
    "-left-[22rem] lg:-left-[26rem] xl:-left-[30rem] 2xl:-left-[38rem]";

  const bgPositionAndColor = isNumber
    ? `bg-mid-purple ${rightPosition}`
    : `bg-light-blue ${leftPosition}`;

  const posAnimation = isNumber ? "Left" : "Right";

  return (
    <div
      className={`flex flex-col justify-between gap-x-[30px] gap-y-6 lg:gap-x-[70px] ${isReversed}`}
    >
      <div className="relative">
        {/* Card image */}
        <img src={image} alt={title} className="w-full object-cover" />

        {/* Image background */}
        <div
          className={`absolute -top-7 -z-[10] hidden h-72 w-[30rem] md:block lg:-top-12 lg:aspect-video lg:h-auto lg:w-[38rem] xl:-top-16 xl:w-[48rem] 2xl:w-[56rem] ${bgPositionAndColor}`}
        ></div>
      </div>
      <div className="grid items-center justify-items-start gap-y-4">
        <div className="grid gap-y-6">
          <h3 className="-mb-6 text-sm uppercase lg:text-[22px]">{subTitle}</h3>

          {/* Title and description */}
          <SectionsTitle text={title} isBgDark={false} isTitle={false} />
          <p className="w-full max-w-[470px]">{description}</p>
          {details && (
            <p className="w-full max-w-[470px]">
              {description}
              {description}
              {description}
            </p>
          )}

          {/* Hidden description */}
        </div>
        <Button
          onClick={() => setDetails(!details)}
          text={`${buttonText} details`}
          buttonText={buttonText}
        />

        {/* Location */}
        <a href={href} className="location relative ml-6">
          <span className="text-dark-blue absolute -left-6 text-[15px]">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          {location}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
