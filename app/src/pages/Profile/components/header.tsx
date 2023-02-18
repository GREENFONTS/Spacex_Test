import { Logo } from "../assets";

const Header = () => {
  return (
    <div className="top">
      <img src={Logo} className="logo" alt="logo" />
    </div>
  );
};

export default Header;
