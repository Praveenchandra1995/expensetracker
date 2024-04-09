import React, { useState } from 'react';

const TravelExpenseForm = () => {
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    receipt: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense(prevExpense => ({
      ...prevExpense,
      [name]: value
    }));
  };

  const handleReceiptChange = (e) => {
    const file = e.target.files[0];
    setExpense(prevExpense => ({
      ...prevExpense,
      receipt: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle form submission, like sending data to backend, etc.
    console.log('Expense submitted:', expense);
  };

  return (
    <div>
      <h2>Enter Travel Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Description:</label>
          <input 
            type="text" 
            id="description" 
            name="description" 
            value={expense.description} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input 
            type="text" 
            id="amount" 
            name="amount" 
            value={expense.amount} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="receipt">Upload Receipt:</label>
          <input 
            type="file" 
            id="receipt" 
            name="receipt" 
            onChange={handleReceiptChange} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TravelExpenseForm;
