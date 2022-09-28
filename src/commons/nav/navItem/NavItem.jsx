import "./NavItem.css";
import { Link } from "react-router-dom";

const NavItem = ({ direction, text}) => {
  return (
    <li>
      <Link to={direction} className="linkStyleDesktop">
        {text}
      </Link>
    </li>
  );
};

export default NavItem;
