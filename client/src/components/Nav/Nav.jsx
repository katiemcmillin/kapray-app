import "./Nav.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/KapraySunLogo.png"

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add-product">
      ADD APPARELS
    </NavLink>
    <NavLink className="link" to="/sign-out">
      SIGN OUT
    </NavLink>
  </>
);
const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      ADD APPAREL
    </NavLink>
    <NavLink className="link" to="/sign-in">
      SIGN - IN
    </NavLink>
  </>
);
const alwaysOptions = (
  <>
    <NavLink className="link" to="/products">
      APPAREL
    </NavLink>
  </>
);
const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          <img src={logo} alt="KAPRAY SUN"/>
        </NavLink>
        <div className="links">
          {user && <div className="link welcome">HI, {(user.username).toUpperCase()}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};
export default Nav;
