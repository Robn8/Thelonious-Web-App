import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-black px-4 py-4 flex justify-between items-center shadow-lg">
      {/* App Name */}
      <div className="text-xl font-bold">Thelonious</div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        {[
          { name: "KEY LIST", path: "/key-list" },
          { name: "THEORY", path: "/theory" },
          { name: "MY ACCOUNT", path: "/my-account" }
        ].map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `hover:text-blue-400 pb-2 ${
                isActive ? "text-blue-400 border-b-2 border-blue-400" : "border-b-2 border-transparent"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
