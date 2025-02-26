import { AiOutlineSpotify } from "react-icons/ai";
import { TbBrandNetflix } from "react-icons/tb";
import { IoLogoAmazon } from "react-icons/io5";
import { ImReddit } from "react-icons/im";

const GlobalNetwork = () => {
  return (
    <section id="globalnetwork" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-heading-text mb-4 md:w-1/3 mx-auto">
          Huge Glbal Network of Fast VPN
        </h2>
        <p className="text-primary-text">
          See LastVPN everywhere to make it easier for you when you move
          locations.
        </p>
      </div>
      <div className="mb-16">
        <img src="/undraw_connected-world_anke.svg" alt="" />
      </div>
      <div className="flex flex-wrap justify-center gap-12 opacity-75 bg-gray-200 w-fit mx-auto p-4 rounded-lg">
        <TbBrandNetflix size={40} />
        <ImReddit size={40} />
        <IoLogoAmazon size={40} />
        <AiOutlineSpotify size={40} />
      </div>
    </section>
  );
};

export default GlobalNetwork;
