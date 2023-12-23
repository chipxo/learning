import Facebook from "../socialIcons/Facebook";
import Instagram from "../socialIcons/Instagram";
import Twitter from "../socialIcons/Twitter";

const Social = ({ isHeader }) => {
  const display = isHeader ? "hidden md:flex" : "flex";

  return (
    <div
      className={`${display} items-center gap-x-4 justify-self-end text-white`}
    >
      <Facebook />
      <Twitter />
      <Instagram />
    </div>
  );
};

export default Social;
