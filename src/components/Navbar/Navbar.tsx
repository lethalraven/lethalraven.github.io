import { Link } from "react-router-dom";
import { Button } from "@components/Button";



interface NavbarButtonProps {
  to: string;
  text: string;
};

const NavbarButton: React.FC<NavbarButtonProps> = ({ to, text }) => {
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Navbar Button Clicked");
  };
  
  return (
    <li>
      <Button onClick={handleClick}>
        <Link to={to} className="NavbarButton">
          {text}
        </Link>
      </Button>
    </li>
  );
};

interface NavbarProps {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="Navbar">
      <ul>
        <NavbarButton to="/" text="Welcome" />
        <NavbarButton to="/Home" text="Home" />
        <NavbarButton to="/about" text="About" />
      </ul>
    </div>
  );
};

export default Navbar;