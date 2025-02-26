import { useEffect } from "react";

import FooterBrand from "../modules/FooterBrand";
import FooterLinks from "../modules/FooterLinks";
import AOS from "aos";

import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="bg-[#F8F8F8]">
      <div className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div data-aos="fade-right">
            <FooterBrand />
          </div>

          {/* Links Section */}
          <div data-aos="fade-up" data-aos-delay="100">
            <FooterLinks
              title="Product"
              links={["Download", "Pricing", "Locations", "Servers", "Blogs"]}
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <FooterLinks
              title="Engage"
              links={["Download", "Pricing", "Locations", "Servers", "Blogs"]}
            />
          </div>

          <div data-aos="fade-left" data-aos-delay="300">
            <FooterLinks
              title="Earn Money"
              links={["Download", "Pricing", "Locations"]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
