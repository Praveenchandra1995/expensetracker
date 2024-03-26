
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
              <li class="nav-item">
                <a class="nav-link" href=" ">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href=" ">
                  Approve Expenses
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href=" ">
                  Submit Expenses
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
