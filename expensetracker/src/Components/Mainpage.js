import React from "react";

function Mainpage() {
  return (
    <div className="container-fluid" id="mainpage">
      <div className=" sidebar pe-3 pt-3 ">
        <nav>
          <ul>
            <li className="nav-item text-white fw-bold align-items-center pb-3">
              <a href=" " className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item text-white fw-bold align-items-center">
              <a href=" " className="nav-link">
                Expenses Entry
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">hello</div>
    </div>
  );
}

export default Mainpage;
