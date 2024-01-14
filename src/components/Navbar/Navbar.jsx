import "./Navbar.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const NavbarButton = ({ to, text }) => {
  return (
    <li>
      <Button>
        <Link to={to} className="Navbar--Button">
          {text}
        </Link>
      </Button>
    </li>
  );
};

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <NavbarButton to="/" text="Home" />
        <NavbarButton to="/about" text="About" />
      </ul>
    </div>
  );
};

export default Navbar;
