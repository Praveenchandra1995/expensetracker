import { Link, Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="container-fluid" id="menu-content">
      <div className="navbar bg-dark">
        <div className="nav">
          <Link to="/expenses">
            <li className="nav-item">
              <a className="nav-link" href=" ">
                Expenses
              </a>
            </li>
          </Link>
        </div>
      </div>
      <div className="content" id="content">
        <Outlet />
      </div>
    </div>
  );
};
export default Body;
