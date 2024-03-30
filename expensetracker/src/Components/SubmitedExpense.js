import React from 'react';
import {useSelector} from "react-redux";

function SubmitedExpense() {
  debugger;
  const expenses=useSelector((state)=>state.form.expenses)
console.log(expenses);
  return (
    <div className='container-fluid w-100 h-50'>
      <table className='table '>
        <tr>
        <th className='column ps-3'>
          <th className='ps-3 pe-3'>Name:</th>
          <th className='ps-3 pe-3'>Date:</th>
          <th className='ps-3 pe-3'>ExpenseType:</th>
          <th className='ps-3 pe-3'>Amount:</th>
          {expenses.expenseType==="Travel"&&(
            <th className='ps-3 pe-3'>FromPlace:</th>,
            <th className='ps-3 pe-3'>ToPlace:</th>

          )}
        </th>
        </tr>
        <tbody>
          {expenses.map((input)=>{
            return(
              <tbody>
                <tr className='column ps-3'>
                  <td className='ps-2 pe-2'>{input.name}</td>
                  <td className='ps-2 pe-2'>{input.Date}</td>
                  <td className='ps-2 pe-2'>{input.expenseType}</td>
                  <td className='ps-2 pe-2'>{input.amount}</td>
                </tr>
                {expenses.expenseType==="Travel"&&(
            <tr>
              <td>{input.fromPlace}</td>
            </tr>,
            <tr>
            <td>{input.toPlace}</td>
          </tr>
          )}
       
              </tbody>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default SubmitedExpense
