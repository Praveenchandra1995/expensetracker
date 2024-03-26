// Mainpage.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Expense from "./Expense";
import Approveexpense from "./Approveexpense";
import SubmitedExpense from "./SubmitedExpense";

function Mainpage() {
  return (
    <div className="container-fluid" id="mainpage">
      <div className=" sidebar pe-3 pt-3 ">
        <nav>
          <ul>
            <li className="nav-item text-white fw-bold align-items-center pb-3">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item text-white fw-bold align-items-center">
              <Link to="/expenseentry" className="nav-link">
                Expenses Entry
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <Routes>
          <Route path="/expenseentry" element={<Expense />} />
          <Route path="/approveexpense" element={<Approveexpense />} />
          <Route path="/submitedexpense" element={<SubmitedExpense />} />
        </Routes>
      </div>
    </div>
  );
}

export default Mainpage;
