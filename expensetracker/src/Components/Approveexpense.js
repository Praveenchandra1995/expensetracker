import React from 'react'
import {useSelector} from "react-redux";
function Approveexpense() {
  const expensesoftypes=useSelector((state)=>state.form.expenses)
console.log(expensesoftypes);


  return (
    <div className='container-fluid '>
      {expensesoftypes.map((info)=>{
        return(
<table className='table'>
  <thead className='text-center'>
    <th>Name:</th>
    <th>ExpenseType:</th>
    <th>Date:</th>
    <th>Amount:</th>
    <th>Approval</th>
    <th>Reject</th>
    <th>Status</th>
  </thead>
  <tbody >
<tr>
  <td>{info.name}</td>
  <td>{info.expenseType}</td>
  <td>{info.date}</td>
  <td>{info.amount}</td>
  <td><button className='btn btn-dark rounded rounded-1 rounded-end fw-bold bg-primary'>Approval</button> </td>
  <td><button className='btn btn-dark rounded rounded-1 rounded-end fw-bold bg-primary'>Reject</button>  </td>
  <td> </td>
</tr>
  </tbody>
</table>
        )
      })}
    </div>
  )
}

export default Approveexpense
