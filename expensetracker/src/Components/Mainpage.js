import React from "react";
function Mainpage() {
  return (
    <div className="container-fluid" id="mainpage">
    <div className=" sidebar pe-3 pt-3 h-100 w-25 mt-0" id="sidebar">
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
<img src="/Images/expense.png" width="80px" height="60px" alt="img" className="rounded rounded-1 rounded-circle"/>
<h2 className="fw-bold fs-4">Expenses</h2>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="bi bi-card-list"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0  text-white fw-bold">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href=" ">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href=" ">Entry Expense</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  
    <div className="content">
      hello
    </div>
  </div>
  
  );
}

export default Mainpage;
