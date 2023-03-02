import "./navbar.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../../Assets/Logo";
import { Outlet } from "react-router-dom";

const menuLinks = [
  "Projects",
  "Filters",
  "Dashboards",
  "Apps",
  "People",
  "Your work",
];

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo-menu-container">
          <div className="logo">
            <Logo />
          </div>

          <ul className="nav-links-container">
            {menuLinks.map((elements, index) => (
              <li key={index} className="navlink">
                {elements} <KeyboardArrowDownIcon className="icon" />
              </li>
            ))}
          </ul>
        </div>

        <div className="search-profile-container">
          <div className="search">
            <input type="text" placeholder="Search Here..." className="input" />
          </div>
          <AccountCircleIcon className="profile-icon" />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
