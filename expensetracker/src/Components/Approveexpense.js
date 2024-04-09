import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ApprovalAuthority from './Data/data';

function Approveexpense(info) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const expensesoftypes = useSelector((state) => state.form.expenses);
  
  const handleApprove = (expense) => {
    dispatch({ type: "Approve_Exp", payload: expense });
  };

  const Approveexpenselevel = (id) => {
    const manager = ApprovalAuthority.find((data) => data.Designation === 'Manager');
    if (manager) {
      setShowModal(true);
    }
  };

  return (
    <div className='container-fluid'>
      <table className='table w-100 h-100'>
        <thead className='table-info text-secondary'>
          <tr>
            <th>Name:</th>
            <th>ExpenseType:</th>
            <th>Date:</th>
            <th>Amount:</th>
            <th>File</th>
            <th>Approval</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {expensesoftypes.map((info) => (
            <tr key={info.id}>
              <td>{info.name}</td>
              <td>{info.expenseType}</td>
              <td>{info.date}</td>
              <td>{info.amount}</td>
              <td>
                {info.file ? (
                  <a href={URL.createObjectURL(info.file)} download={info.file.name}>
                    {info.file.name}
                  </a>
                ) : (
                  'No File'
                )}
              </td>
              <td>
                <span className='btn btn-dark rounded rounded-1 rounded-end fw-bold bg-primary' onClick={Approveexpenselevel}>Approval</span>
              </td>
              <td>{info.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className='modal fade show' style={{ display: 'block' }}>
          <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>File Details</h5>
                <button className='btn-close' data-bs-dismiss='modal' onClick={() => setShowModal(false)}></button>
              </div>
              <div className='modal-body'>
                <h5>Compare the file details with expenses displayed in approve expense file</h5>
                {expensesoftypes.map((inputt) =>
                  inputt.file ? (
                    <a href={URL.createObjectURL(inputt.file)} download={inputt.file.name}>
                      {inputt.file.name}
                    </a>
                  ) : (
                    'No File'
                  )
                )}
              </div>
              <div className='modal-footer'>
                <button className='btn btn-success' onClick={() => handleApprove()}>Confirm</button>
                <button className='btn btn-success'>Reject</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Approveexpense;
