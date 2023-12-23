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
  const isReversed = isNumber ? "md:flex-row-reverse" : "md:flex-row";

  const right = "-right-[2rem] lg:-right-[3.8rem] xl:-right-[5.2rem]";
  const left = "-left-[2rem] lg:-left-[3.8rem] xl:-left-[5.2rem]";

  const bgPosition = isNumber ? right : left;

  const bgColor = isNumber ? "bg-mid-purple" : "bg-light-blue";

  return (
    <div
      className={`flex flex-col ${isReversed} justify-between gap-x-[30px] gap-y-6 lg:gap-x-[70px]`}
    >
      <div className="relative">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div
          className={`absolute ${bgPosition} ${bgColor} -top-10 -z-[10] hidden aspect-square w-[19rem]  md:block lg:aspect-[4/3] lg:w-[24rem] xl:-top-16 xl:w-[35rem]`}
        ></div>
      </div>
      <div className="grid items-center justify-items-start gap-y-4">
        <div className="grid gap-y-6">
          <h3 className="-mb-6 text-sm uppercase lg:text-[22px]">{subTitle}</h3>
          <SectionsTitle text={title} isBgDark={false} isTitle={false} />
          <p className="w-full max-w-[470px]">{description}</p>
        </div>
        <Button href={href} text={"More Details"} />
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
