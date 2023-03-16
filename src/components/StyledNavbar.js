import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "btn active" : "btn")}>
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "btn active" : "btn")}>
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "btn active" : "btn")}>
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;
