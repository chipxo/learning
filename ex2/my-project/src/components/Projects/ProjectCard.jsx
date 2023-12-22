import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button";
import SectionsTitle from "../SectionsTitle";

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

  return (
    <div
      className={`flex flex-col justify-between gap-y-6 md:flex-row ${reversed} gap-x-[70px]`}
    >
      <div className="img">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="grid items-center justify-items-start gap-y-4">
        <div className="grid gap-y-6">
          <h3 className="-mb-6 text-sm lg:text-[22px]">{subTitle}</h3>
          <SectionsTitle text={title} isBgDark={false} isTitle={false} />
          <p className="w-full max-w-[470px]">{description}</p>
        </div>
        <Button href={href} text={"More Details"} />
        <a href={href} className="relative ml-6">
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
