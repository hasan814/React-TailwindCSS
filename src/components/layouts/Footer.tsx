import FooterBrand from "../modules/FooterBrand";
import FooterLinks from "../modules/FooterLinks";

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8]">
      <div className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FooterBrand />
          <FooterLinks
            title="Product"
            links={["Download", "Pricing", "Locations", "Servers", "Blogs"]}
          />
          <FooterLinks
            title="Engage"
            links={["Download", "Pricing", "Locations", "Servers", "Blogs"]}
          />
          <FooterLinks
            title="Earn Money"
            links={["Download", "Pricing", "Locations"]}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
