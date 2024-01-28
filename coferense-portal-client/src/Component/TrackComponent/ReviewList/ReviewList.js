import React, { useState } from "react";
import "./ReviewList.css";
import Modal from "../Modal/Modal";

const ReviewList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <section className="reviewContainer mb-5">
        <h4 className="text-center"> Reviewed List </h4>
        <table className="table  table-fluid">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Reviewed</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Excellent paper</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={openModal}
                >
                  Details
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Great one!!!</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={openModal}
                >
                  Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  );
};

export default ReviewList;
