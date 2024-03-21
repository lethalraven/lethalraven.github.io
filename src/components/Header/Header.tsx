import { Navbar } from "components/Navbar";

interface HeaderProps {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="Header"> 
      <Navbar />
    </div>
  );
};

export default Header;
