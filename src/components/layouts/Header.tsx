import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import { navItems } from "../../utils/LinkHelper";
import { NavItem } from "../../types";

const Header = () => {
  // ============= Context ===============
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("Header must be used within a MyContextProvider");
  }

  const { active, setActive, scrollHandler } = context;

  // ============= Rendering ===============
  return (
    <header className="max-w-[1200px] mx-auto p-4 shadow-md bg-white fixed top-0 right-0 left-0">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center gap-2">
          <img
            className="h-8"
            src="https://img.icons8.com/pulsar-color/48/logo.png"
            alt="logo"
          />
          <span className="text-primary">LastVPN</span>
        </div>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item: NavItem) => (
            <li key={item.id}>
              {/* Use item.id as the key */}
              <button
                className={`text-gray-600 hover:text-primary transition-colors duration-200 ${
                  active === item.name ? "text-primary font-bold" : ""
                }`}
                onClick={() => {
                  setActive(item.name);
                  scrollHandler(item.id);
                }}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="space-x-4">
          <button className="text-gray-600 hover:text-primary hidden sm:inline-flex">
            Sign In
          </button>
          <button className="bg-primary text-white hover:bg-red-600 px-4 py-2 rounded-full cursor-pointer">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
