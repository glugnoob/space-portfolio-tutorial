import { NavLink, useLocation } from "react-router-dom";
import RocketShip from "./rocket-ship";

const Navbar = () => {
  const route = useLocation().pathname;

  return (
    <nav className="absolute w-full bg-transparent top-0 inset-x-0 items-center z-50 text-white p-5 px-20 h-20">
      <div className="flex items-center gap-10 text-lg font-bold text-gray-400">
        <NavLink
          to="/contact"
          className={`transition hover:brightness-110 ${
            route === "/contact" && "text-white"
          }`}
        >
          Contact
        </NavLink>
        <NavLink
          to="/skills"
          className={`transition hover:brightness-110 ${
            route === "/skills" && "text-white"
          }`}
        >
          Skills
        </NavLink>
        <NavLink
          to="/projects"
          className={`transition hover:brightness-110 ${
            route === "/projects" && "text-white"
          }`}
        >
          Projects
        </NavLink>
      </div>
      <NavLink to="/" className="absolute right-1/2 top-3 font-bold">
        <RocketShip />
      </NavLink>
    </nav>
  );
};

export default Navbar;
