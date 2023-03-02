import { Link } from "react-router-dom";
import "./sidebar.scss";
import Project from "../../Assets/eq.png";
import TableChartIcon from "@mui/icons-material/TableChart";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = ({ children }) => {
  return (
    <>
      <div className="parent-child">
        <div className="sidebar-container">
          <div className="project-name">
            <img src={Project} alt="equalizer" />
            <div className="project-data">
              <h4>singularity 1.1</h4>
              <p>Software Project</p>
            </div>
          </div>

          <ul className="side-links-container">
            <Link to="/board" className="side-links" >
              <li>
                <TableChartIcon className="icon" /> Board
              </li>
            </Link>

            <Link to="/projectsettings" className="side-links" >
              <li>
                <SettingsIcon className="icon" /> Project settings
              </li>
            </Link>
          </ul>

          <hr />

          <div className="btn-end">
            <button className="btn">Create</button>
          </div>

          <div className="footer">Created by HAMZA AAMIR</div>
        </div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
