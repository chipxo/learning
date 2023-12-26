import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Twitter from "./Twitter";

const Social = ({ isHeader }) => {
  const display = isHeader ? "hidden lg:flex" : "flex";

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
