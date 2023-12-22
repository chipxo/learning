import Facebook from "../../components/SocialLinks/Facebook";
import Instagram from "../../components/SocialLinks/Instagram";
import Twitter from "../../components/SocialLinks/Twitter";

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
