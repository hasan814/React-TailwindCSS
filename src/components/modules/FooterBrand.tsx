import SocialIcons from "./SocialIcons";

const FooterBrand = () => {
  return (
    <div className="lg:col-span-1">
      <div className="flex items-center gap-2 mb-5">
        <img
          className="h-8"
          src="https://img.icons8.com/pulsar-color/48/logo.png"
          alt="logo"
        />
        <span className="text-xl font-bold">LastVPN</span>
      </div>
      <p>
        LastVPN is a private virtual network that has unique features and has
        high security.
      </p>
      <SocialIcons />
      <p className="text-primary-text mt-8">
        &copy; 2024 developed by Hasan Moosavi
      </p>
    </div>
  );
};

export default FooterBrand;
