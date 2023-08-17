// StudentTableRow.js
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './StudentTableRow.css'; // Import the CSS file for custom styling

const BookTable = (props) => {
  const { obj } = props;
  const navigate = useNavigate();

  useEffect(() => {
    // Clean up function to cancel any ongoing requests if the component unmounts
    let isMounted = true;

    return () => {
      isMounted = false;
    };
  }, []);

  const deleteBus = () => {
    axios.delete(`http://localhost:4000/busList/delete-bus/${obj._id}`)
      .then((res) => {
        alert('Bus successfully deleted!');
        // Redirect to bus List after delete
        navigate('/bus-list');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <tr>
      <td>{obj.id}</td>
      <td>{obj.date}</td>
      <td>{obj.source}</td>
      <td>{obj.destination}</td>
      <td>{obj.totalSeat}</td>
      <td>{obj.category}</td>
      <td>{obj.fare}</td>
      <td>{obj.boardingPoint}</td>
      <td>{obj.boardingTime}</td>
      <td>{obj.droppingPoint}</td>
      <td>{obj.droppingTime}</td>
      <td>
       
        <button className="delete-btn" onClick={deleteBus}>
          Cancel the Ticket
        </button>
      </td>
    </tr>
  );
};

export default BookTable;
