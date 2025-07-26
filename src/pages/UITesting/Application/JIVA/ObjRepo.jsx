import { Link, Outlet, useNavigate } from "react-router-dom";
import "../../../../css/UIDashboard/ObjRepo.css";
import { NavLink } from "react-router-dom";
function ObjRepo() {
  return (
    <>
      <div id="ObjRepo">
        <div>
          <ul className="nav-bar">
            <li>
              <NavLink
                to="Modules"
                className={({ isActive }) => `link ${isActive ? "active" : ""}`}
              >
                Modules
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Components"
                className={({ isActive }) => `link ${isActive ? "active" : ""}`}
              >
                Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="getAllSubcomponents"
                className={({ isActive }) => `link ${isActive ? "active" : ""}`}
              >
                getAllSubcomponents
              </NavLink>
            </li>
          </ul>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
export default ObjRepo;
