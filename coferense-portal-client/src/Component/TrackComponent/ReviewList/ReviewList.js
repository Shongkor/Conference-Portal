import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import './ReviewList.css';
const ReviewList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Fetch the data from data.json
    fetch("/data.json") // Use the relative path to the public directory
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <section className="reviewContainer mb-5">
        <h4 className="text-center"> Reviewed List </h4>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => openModal(item)}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} rowData={selectedItem} />}
    </div>
  );
};

export default ReviewList;
