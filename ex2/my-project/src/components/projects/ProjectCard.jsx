import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const reversed = isNumber ? "md:flex-row-reverse" : "";

  const bgPosition = isNumber ? "-right" : "-left";

  const bgColor = isNumber ? "bg-mid-purple" : "bg-light-blue";

  return (
    <div
      className={`flex flex-col justify-between gap-y-6 md:flex-row ${reversed} gap-x-[70px]`}
    >
      <div className="relative ">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div
          className={`${bgPosition}-[2rem] lg:${bgPosition}-[4.2rem] xl:${bgPosition}-22 ${bgColor} absolute -top-10 -z-[10] hidden aspect-square w-[19rem] md:block  lg:aspect-[4/3] lg:w-[24rem] xl:-top-16 xl:w-[35rem]`}
        ></div>
      </div>
      <div className="grid items-center justify-items-start gap-y-4">
        <div className="grid gap-y-6">
          <h3 className="-mb-6 text-sm lg:text-[22px]">{subTitle}</h3>
          <SectionsTitle text={title} isBgDark={false} isTitle={false} />
          <p className="w-full max-w-[470px]">{description}</p>
        </div>
        <Button href={href} text={"More Details"} />
        <a href={href} className="location relative ml-6">
          <span className="absolute -left-6 text-[15px]">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          {location}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
