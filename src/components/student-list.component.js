// StudentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentList.css'; // Import the CSS file for custom styling
import BusTableRow from './StudentTableRow';

const BusList = () => {
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
    return <BusTableRow obj={bus} key={i} />;
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

export default BusList;
