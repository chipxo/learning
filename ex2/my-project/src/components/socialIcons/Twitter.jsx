import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Twitter = () => {
  return (
    <a
      href="#"
      className="border-social-border rounded-full border px-[8px] py-1 transition-all hover:border-white"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  );
};

export default Twitter;
