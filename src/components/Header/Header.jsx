import "./Header.css";

const Header = ({children}) => {
  return (
    <div className="Header">
      <header>
        {children}
      </header>
    </div>
  );
};

export default Header;
