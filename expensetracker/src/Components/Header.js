import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
          <button
            data-bs-toggle="collapse"
            data-bs-target="#navbars"
            class="navbar-toggler"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <h2 class="navbar-brand">Expense Tracker</h2>
          <div class="navbar-collapse collapse" id="navbars">
            <ul class="navbar-nav me-auto">
              <Link to="/home">
              <li class="nav-item">
                <a class="nav-link" href=" ">
                  Home
                </a>
              </li>
              </Link>
              <Link to="/approveexpense">
              <li class="nav-item">
                <a class="nav-link" href=" ">
                  Approved Expenses
                </a>
              </li>
              </Link>
              <Link to="/submitexpense">
              <li class="nav-item">
                <a class="nav-link" href=" ">
                  Submited Expenses
                </a>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
