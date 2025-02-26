import { IFooterLinksProps } from "../../types";
import { Link } from "react-router-dom";

const FooterLinks = ({ title, links }: IFooterLinksProps) => {
  return (
    <div>
      <h3 className="font-medium text-lg mb-6">{title}</h3>
      <ul className="space-y-4 text-primary-text">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={"#"} className="hover:text-primary">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
