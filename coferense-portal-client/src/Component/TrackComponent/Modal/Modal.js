// Modal.js
import React from "react";
import './Modal.css';
const Modal = ({ isOpen, onClose, rowData }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Details</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Paper Title</th>
              <th scope="col">Reviewed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Test Paper</td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                officiis.
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
