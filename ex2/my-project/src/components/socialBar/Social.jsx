import Facebook from "../socialIcons/Facebook";
import Instagram from "../socialIcons/Instagram";
import Twitter from "../socialIcons/Twitter";

const Social = () => {
  return (
    <div className="hidden items-center gap-x-4 justify-self-end text-white md:flex">
      <Facebook />
      <Twitter />
      <Instagram />
    </div>
  );
};

export default Social;
