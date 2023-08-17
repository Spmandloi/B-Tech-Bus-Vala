// // components/BusInformation.js
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const BusInformation = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const date = searchParams.get('date');
//   const source = searchParams.get('source');
//   const destination = searchParams.get('destination');

//   return (
//     <div className="bus-information">
//       <h2>Bus Information</h2>
//       <p>Date: {date}</p>
//       <p>Source: {source}</p>
//       <p>Destination: {destination}</p>
//     </div>
//   );
// };

// export default BusInformation;

// StudentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentList.css'; // Import the CSS file for custom styling
import BookTable from './BookTable';

const BookingDetails = () => {
  const [busList, setBuss] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/busList/')
      .then(res => {
        setBuss(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const dataTable = busList.map((bus, i) => {
    return <BookTable obj={bus} key={i} />;
  });

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Bus Id</th>
            <th>Date</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Total-Seat</th>
            <th>Category</th>
            <th>Fare</th>
            <th>Boading-Point</th>
            <th>Boading-Time</th>
            <th>Dropping-Point</th>
            <th>Dropping-Time</th>
            <th>Modifying</th>
          </tr>
        </thead>
        <tbody>
          {dataTable}
        </tbody>
      </table>
    </div>
  );
};

export default BookingDetails;

