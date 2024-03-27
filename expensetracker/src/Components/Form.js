import React from "react";

function Form() {
  return(
  <div className="container-fluid">
  <form>
    <div className="w-25 h-auto border border-1 border-dark-subtle">
<select className="form-select w-25">
  <option className="form-control">Mr</option>
  <option className="form-control">Mrs</option>
  <option className="form-control">Miss</option>
  </select>    
  <label className="form-label ps-2 pe-2">Name:</label>
  <input type="text" name="name" className="form-control"/>
  <label className="form-label ps-2 pe-2">Date:</label>
  <input type="date" name="date" className="form-control"/>
  <select className="form-select" id="traveltype">
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
<button className="form-submit btn btn-danger text-white fw-bold">Submit</button>
    </div>
  </form>
  </div>
  )
  
}

export default Form
