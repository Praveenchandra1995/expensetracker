import React from 'react';
import {useSelector} from "react-redux";

function SubmitedExpense() {
  debugger;
  const expenses=useSelector((state)=>state.form.expenses)
console.log(expenses);
const totalAmount=expenses.reduce((total,expense)=>total+parseFloat(expense.amount),0)
  return (
    <div className='container-fluid w-100 h-50'>
      <table className='table '>
        <thead className='column ps-4'>
          <th className='ps-4 pe-4'>Name:</th>
          <th className='ps-4 pe-4'>Date:</th>
          <th className='ps-4 pe-4'>ExpenseType:</th>
          <th className='ps-4 pe-4'>Amount:</th>
          {expenses.expenseType==="Travel"&&(
            <th className='ps-4 pe-4'>FromPlace:</th>,
            <th className='ps-4 pe-4'>ToPlace:</th>

          )}
        </thead>
          {expenses.map((input)=>{
            return(
              <tbody>
                <tr className='column ps-3'>
                  <td className=''>{input.name}</td>
                  <td className=''>{input.date}</td>
                  <td className=''>{input.expenseType}</td>
                  <td className=''>{input.amount}</td>
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
          <tfoot>
            <tr>
              <td>Total Amount:{totalAmount}</td>
              
            </tr>
          </tfoot>
      </table>
    </div>
  )
}
export default SubmitedExpense
