// StudentTableRow.js
import React, { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import './StudentTableRow.css'; // Import the CSS file for custom styling

const UserTable = (props) => {
  const { obj } = props;
  const navigate = useNavigate();

  const handleBookBus = () => {
    // Navigate to the "Booking Details" page and pass the bus details as state
    navigate('/booking-details', { state: { busDetails: obj } });
  };

  // const handleBookBus = async () => {
  //   try {
  //     // Send a request to your backend to check if the data matches
  //     const response = await fetch(`http://localhost:4000/busList?date=${obj.date}&source=${obj.source}&destination=${obj.destination}`);
  //     const result = await response.json();

  //     if (result.match) {
  //       // Data matches, navigate to BusInformation component
  //       navigate(`/bus-information?date=${obj.date}&source=${obj.source}&destination=${obj.destination}`);
  //     } else {
  //       // Data doesn't match, show an error message or handle it as needed
  //       console.log('Bus not available for the selected data.');
  //     }
  //   } catch (error) {
  //     console.error('Error checking bus availability:', error);
  //   }
  // };

 

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
        
        <button className="delete-btn" onClick={handleBookBus}>
          Book the Bus
        </button>
      </td>
    </tr>
  );
};

export default UserTable;
