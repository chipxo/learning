import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Facebook = () => {
  return (
    <>
      <a
        href="#"
        className="rounded-full border border-gray-400 px-[12px] py-1 transition-all hover:border-white"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
    </>
  );
};

export default Facebook;
