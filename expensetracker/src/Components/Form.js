import React, { useState } from "react";
import {useDispatch} from "react-redux";

function Form() {

  const [formData, setFormData] = useState({
    salutation: "",
    name: "",
    date: "",
    expenseType: "",
    fromPlace: "",
    toPlace: "",
    amount: "",
  });

  const dispatch=useDispatch();

  const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch({type:"On_Submit",payload:formData});
    setFormData({
    salutation: "",
    name: "",
    date: "",
    expenseType: "",
    fromPlace: "",
    toPlace: "",
    amount: "",
    })
    }
  const handleTravelTypeChange = (event) => {
const {value}=event.target;
setFormData({
  ...formData,
  expenseType:value,
})


  };
  const handleInputChange=(event)=>{
   const {name,value}=event.target;
setFormData({
  ...formData,
[name]:value,  
});

  }
  console.log(formData)
  return(
  
  <div className="container-fluid">
  <form onSubmit={handleSubmit}>
    <div className="w-100 h-auto p-3 border border-1 border-dark-subtle mt-2 d-flex flex-column justify-content-evenly">

  <div className="d-flex flex-row ms-2">
  <select className="form-select w-25 " onChange={handleInputChange}
value={formData.salutation}
  >
  <option className="form-control">Mr</option>
  <option className="form-control">Mrs</option>
  <option className="form-control">Miss</option>
  </select>  
  <label className="form-label ps-2 pe-2">Name:</label>
  <input type="text" name="name" className="form-control w-50" value={formData.name} onChange={handleInputChange}/>
</div>
<div className="d-flex flex-row m-2">
  <label className="form-label ps-2 pe-2">Date:</label>
  <input type="date" name="date" className="form-control w-50" value={formData.date} onChange={handleInputChange} />
  </div>
  <div className="d-flex flex-row m-2">
  <label for="expensetype">Expense Type:</label>
  <select className="form-select w-50 ms-2" id="traveltype " onChange={handleTravelTypeChange} value={formData.expenseType} >
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
  {formData.expenseType === "Travel" && (
            <div className="d-flex flex-column m-2">  
              <label htmlFor="Amount">From Place:</label>
              <input type="text" name="amounts" className="form-control w-50 ms-2" value={formData.fromPlace} onChange={handleInputChange}/>
              <label htmlFor="Amount">To Place:</label>
              <input type="text" name="amounts" className="form-control w-50 ms-2" value={formData.toPlace} onChange={handleInputChange}/>
            </div>
          )}
  </div>
  <div className="d-flex flex-row m-2">  <label for="Amount">Amount:</label>
    <input type="number" name="amount" className="form-control w-50 ms-2" value={formData.amount} onChange={handleInputChange}/>
    </div>

<button className="form-submit btn btn-danger text-white fw-bold mt-2">Submit</button>
    </div>
  </form>
  </div>
  )
  
}

export default Form
