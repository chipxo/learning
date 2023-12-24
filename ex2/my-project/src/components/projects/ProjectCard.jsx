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

  const rightPosition = "-right-[2rem] lg:-right-[3.8rem] xl:-right-[5.2rem]";
  const leftPosition = "-left-[2rem] lg:-left-[3.8rem] xl:-left-[5.2rem]";

  const bgPosition = isNumber ? rightPosition : leftPosition;

  const bgColor = isNumber ? "bg-mid-purple" : "bg-light-blue";

  const pos = isNumber ? "Left" : "Right";

  const handleClick = () => {
    setDetails(!details);
    setbuttonText(buttonText === "more" ? "less" : "more");
  };

  return (
    <>
      <div
        className={`flex flex-col justify-between gap-x-[30px] gap-y-6 lg:gap-x-[70px] ${isReversed}`}
      >
        <div className="relative">
          <img src={image} alt={title} className="w-full object-cover" />
          <div
            className={`absolute -top-10 -z-[10] hidden aspect-square w-[19rem] md:block lg:aspect-[4/3] lg:w-[24rem] xl:-top-16 xl:w-[35rem] ${bgPosition} ${bgColor}`}
          ></div>
        </div>
        <div className="grid items-center justify-items-start gap-y-4">
          <div className="grid gap-y-6">
            <h3 className="-mb-6 text-sm uppercase lg:text-[22px]">
              {subTitle}
            </h3>
            <SectionsTitle text={title} isBgDark={false} isTitle={false} />
            <p className="w-full max-w-[470px]">{description}</p>
            <div className="relative">
              {details && (
                <p
                  className={`animate__animated w-full max-w-[470px] animate__slideIn${pos} opacity-1 relative duration-500`}
                >
                  {description}
                  {description}
                  {description}
                  {description}
                </p>
              )}
            </div>
          </div>
          <Button
            onClick={handleClick}
            text={`${buttonText} details`}
            buttonText={buttonText}
          />
          <a href={href} className="location relative ml-6">
            <span className="text-dark-blue absolute -left-6 text-[15px]">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            {location}
          </a>
        </div>
      </div>
      {/* <div className="relative">
        {showComponent && (
          <p
            className={`animate__animated w-full max-w-[470px] animate__slideIn${pos} opacity-1 relative duration-500`}
          >
            {description}
            {description}
            {description}
            {description}
          </p>
        )}
      </div>
      <Button
        onClick={toggleVisibility}
        text={`${buttonText} details`}
        buttonText={buttonText}
      /> */}
    </>
  );
};

export default ProjectCard;
