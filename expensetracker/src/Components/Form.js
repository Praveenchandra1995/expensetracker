import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Form() {
  const [formData, setFormData] = useState({
    salutation: "",
    name: "",
    date: "",
    expenseType: "",
    fromPlace: "",
    toPlace: "",
    amount: "",
    file:null,
    status:"",
  });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "On_Submit", payload: formData });
    setFormData({
      salutation: "",
      name: "",
      date: "",
      expenseType: "",
      fromPlace: "",
      toPlace: "",
      amount: "",
      file:null,
      status:"",
    });
  };

  const handleInputChange = (event) => {
    const { name, value,files } = event.target;
    setFormData({
      ...formData,
      [name]:name=== "file"?files[0]:value,
    });
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <div className="w-100 h-auto p-3 border border-1 border-dark-subtle mt-2 d-flex flex-column justify-content-between p-4 rounded rounded-2 ">
          <div className="d-flex flex-row ms-2">
            <select
              className="form-select w-25"
              onChange={handleInputChange}
              value={formData.salutation}
              name="salutation"
              required
            >
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
            </select>
            <label className="form-label ps-2 pe-2">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control w-50"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="d-flex flex-row m-2">
            <label className="form-label ps-2 pe-2">Date:</label>
            <input
              type="date"
              name="date"
              className="form-control w-50"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="d-flex flex-row m-2">
            <label htmlFor="expensetype">Expense Type:</label>
            <select
              className="form-select w-50 ms-2"
              onChange={handleInputChange}
              value={formData.expenseType}
              name="expenseType"
              required
            >
              <option value="Stationary">Stationary</option>
              <option value="Travel">Travel</option>
              <option value="Maintainance">Maintainance</option>
            </select>
          </div>
          {formData.expenseType === "Travel" && (
            <div>
              <div className="d-flex flex-column m-2">
                <label htmlFor="Place">From Place:</label>
                <input
                  type="text"
                  name="fromPlace"
                  className="form-control w-50 ms-2"
                  value={formData.fromPlace}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="d-flex flex-column m-2">
                <label htmlFor="Place2">To Place:</label>
                <input
                  type="text"
                  name="toPlace"
                  className="form-control w-50 ms-2"
                  value={formData.toPlace}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          )}
          <div className="d-flex flex-row m-2">
            <label htmlFor="Amount">Amount:</label>
            <input
              type="number"
              name="amount"
              className="form-control w-50 ms-2"
              value={formData.amount}
              onChange={handleInputChange}
              required
            />
            <label for="file" className="pe-2 ps-2 ">FileUpload:</label>
            <input type="file" name="file" onChange={handleInputChange}  required/>
          </div>

          <button className="form-submit btn btn-danger text-white fw-bold mt-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
