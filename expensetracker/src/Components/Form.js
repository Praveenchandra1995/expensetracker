import React from "react";

function Form() {
  return(
  
  <div className="container-fluid">
  <form>
    <div className="w-100 h-auto border border-1 border-dark-subtle mt-2">
<select className="form-select w-25">
  <option className="form-control">Mr</option>
  <option className="form-control">Mrs</option>
  <option className="form-control">Miss</option>
  </select>    
  <label className="form-label ps-2 pe-2">Name:</label>
  <input type="text" name="name" className="form-control w-50"/>
  <label className="form-label ps-2 pe-2">Date:</label>
  <input type="date" name="date" className="form-control w-50"/>
  <label for="expensetype">Expense Tye:</label>
  <select className="form-select w-50" id="traveltype ">
    <option className="form-control">
      Stationary
    </option>
    <option className="form-control">
      Travel
    </option>
    <option className="form-control">
      Maintainance
    </option>
    <label for="Amount">Amount:</label>
    <input type="number" name="amount" className="form-control"/>

  </select>
<button className="form-submit btn btn-danger text-white fw-bold">Submit</button>
    </div>
  </form>
  </div>
  )
  
}

export default Form
