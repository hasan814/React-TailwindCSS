import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  return (
    <div className="flex gap-4 mt-3">
      <Link to={"/"}>
        <FaFacebook color="red" />
      </Link>
      <Link to={"/"}>
        <FaInstagram color="red" />
      </Link>
      <Link to={"/"}>
        <FiTwitter color="red" />
      </Link>
    </div>
  );
};

export default SocialIcons;
