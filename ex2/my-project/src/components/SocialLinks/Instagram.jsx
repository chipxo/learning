import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Instagram = () => {
  return (
    <a
      href="#"
      className="rounded-full border border-gray-400 px-[8px] py-1 transition-all hover:border-white"
    >
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  );
};

export default Instagram;
