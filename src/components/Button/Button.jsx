import "./Button.css";

const Button = ({ onClick, children }) => {
  return (
    <div className="Button">
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default Button;
