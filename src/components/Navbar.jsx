import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-4 flex justify-between items-center shadow-lg">
      {/* App Name */}
      <div className="text-xl font-bold">Thelonious</div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <NavLink
          to="/key-list"
          className={({ isActive }) =>
            `hover:text-gray-300 ${isActive ? "text-blue-400" : ""}`
          }
        >
          KEY LIST
        </NavLink>
        <NavLink
          to="/theory"
          className={({ isActive }) =>
            `hover:text-gray-300 ${isActive ? "text-blue-400" : ""}`
          }
        >
          THEORY
        </NavLink>
        <NavLink
          to="/my-account"
          className={({ isActive }) =>
            `hover:text-gray-300 ${isActive ? "text-blue-400" : ""}`
          }
        >
          MY ACCOUNT
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
