import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import ApprovalAuthority from "./Data/data";
const Header = () => {
  debugger;
  const[open,setOpen]=useState(false);
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
const navigate=useNavigate()
  const handleInputName=(e)=>{
    setName(e.target.value);
  }
  const handleInputPassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleOpen=(e)=>{
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  }
  const handleClose=()=>{
    setOpen(false);
  }
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Name:",name);
    console.log("Password",password)
    const isAuthorized = ApprovalAuthority.find((info) => info.Name === name && info.Password === password);
  console.log("Is authorized:",isAuthorized)
    if (isAuthorized) {
      navigate("/approveexpense");
      setOpen(false)

    } else {
      alert("Invalid Username and password");
    }
  };
   return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark w-100">
        <div class="container-fluid">
          <button
            data-bs-toggle="collapse"
            data-bs-target="#navbars"
            class="navbar-toggler"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <h2 class="navbar-brand text-success">Expense Tracker</h2>
          <div class="navbar-collapse collapse text-success" id="navbars">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
              <Link to="/home" className="nav-link">

                  Home
                </Link>

              </li>
              {/* <Link to="/approveexpense"> */}
              <li class="nav-item" onClick={handleOpen}>
                <a class="nav-link" href=" ">
                  Approved Expenses
                </a>
              </li>
              {/* </Link> */}
              <li class="nav-item">
              <Link to="/submitexpense" className="nav-link">
                  Submited Expenses
                </Link>
              </li>
              </Link>
              <Link to="/rejectedexpense">
              <li class="nav-item">
                <a class="nav-link" href=" ">
                  Rejected Expenses
                </a>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      {open && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-success">
              <div className="modal-header">
                <h5 className="modal-title">Approved Expenses Login</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="p-3 w-100 h-50 border border-1 rounded rounded-2 text-center m-3">
                   <div className="d-flex flex-row ">
                    <label for="username" className="pe-2 fw-bold">UserName:</label>
                    <input type="text" className="form-control form-field-hover w-50 pb-1 " name="username" required value={name} onChange={handleInputName}/>
                    </div>
                    <div className="d-flex flex-row pt-2">
                    <label for="password" className="pe-2 fw-bold">Password:</label>
                    <input type="password" className="form-control form-field-hover w-50 pb-2" name="username" required value={password} onChange={handleInputPassword}/>
                    </div>
                    <button className="btn btn-danger align-items-center mt-2"  onClick={handleLogin}>Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
export default Header;
