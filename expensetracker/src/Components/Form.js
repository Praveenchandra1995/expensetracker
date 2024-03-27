import React, { useState } from "react";

function Form() {
  const [state,setstate]=useState("");
  const handleTravelTypeChange = (event) => {
    setstate(event.target.value);
  };
  return(
  
  <div className="container-fluid">
  <form>
    <div className="w-100 h-auto p-3 border border-1 border-dark-subtle mt-2 d-flex flex-column justify-content-evenly">

  <div className="d-flex flex-row ms-2">
  <select className="form-select w-25"

  >
  <option className="form-control">Mr</option>
  <option className="form-control">Mrs</option>
  <option className="form-control">Miss</option>
  </select>  
  <label className="form-label ps-2 pe-2">Name:</label>
  <input type="text" name="name" className="form-control w-50"/>
</div>
<div className="d-flex flex-row m-2">
  <label className="form-label ps-2 pe-2">Date:</label>
  <input type="date" name="date" className="form-control w-50"/>
  </div>
  <div className="d-flex flex-row m-2">
  <label for="expensetype">Expense Type:</label>
  <select className="form-select w-50 ms-2" id="traveltype " onChange={handleTravelTypeChange} value={state}>
    <option className="form-control">
      Stationary
    </option>
    <option className="form-control">
      Travel
    </option>
    <option className="form-control">
      Maintainance
    </option>

  </select>
  {state === "Travel" && (
            <div className="d-flex flex-column m-2">  
              <label htmlFor="Amount">From Place:</label>
              <input type="text" name="amounts" className="form-control w-50 ms-2"/>
              <label htmlFor="Amount">To Place:</label>
              <input type="text" name="amounts" className="form-control w-50 ms-2"/>
            </div>
          )}
  </div>
  <div className="d-flex flex-row m-2">  <label for="Amount">Amount:</label>
    <input type="number" name="amount" className="form-control w-50 ms-2"/>
    </div>

<button className="form-submit btn btn-danger text-white fw-bold mt-2">Submit</button>
    </div>
  </form>
  </div>
  )
  
}

export default Form
