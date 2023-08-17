import React, { useState, useEffect } from 'react';
import './EditStudent.css'; // Custom CSS styles for EditStudent component
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditBus = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bus, setBus] = useState({
    id: '',
    date: '',
    source: '',
    destination: '',
    totalSeat: '',
    category: '',
    fare: '',
    boardingPoint: '',
    boardingTime: '',
    droppingPoint: '',
    droppingTime: '',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/busList/edit-bus/${id}`)
      .then((res) => {
        setBus(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const onChangeBusId = (e) => {
    setBus({ ...bus, id: e.target.value });
  };

  const onChangeBusDate = (e) => {
    setBus({ ...bus, date: e.target.value });
  };

  const onChangeBusSource = (e) => {
    setBus({ ...bus, source: e.target.value });
  };

  const onChangeBusDestination = (e) => {
    setBus({ ...bus, destination: e.target.value });
  };

  const onChangeBusTotalSeat = (e) => {
    setBus({ ...bus, totalSeat: e.target.value });
  };

  const onChangeBusCategory = (e) => {
    setBus({ ...bus, category: e.target.value });
  };

  const onChangeBusFare = (e) => {
    setBus({ ...bus, fare: e.target.value });
  };

  const onChangeBusBoardingPoint = (e) => {
    setBus({ ...bus, boardingPoint: e.target.value });
  };

  const onChangeBusBoardingTime = (e) => {
    setBus({ ...bus, boardingTime: e.target.value });
  };

  const onChangeBusDroppingPoint = (e) => {
    setBus({ ...bus, droppingPoint: e.target.value });
  };

  const onChangeBusDroppingTime = (e) => {
    setBus({ ...bus, droppingTime: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/busList/update-bus/${id}`, bus)
      .then((res) => {
        console.log(res.data);
        alert('Bus successfully updated');
        navigate('/bus-list'); // Redirect to Student List after update using useNavigate
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="Name">Id</label>
          <input
            type="number"
            value={bus.id}
            onChange={onChangeBusId}
            id="Id"
            placeholder="Enter your Bus Id"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Name">Date</label>
          <input
            type="date"
            value={bus.date}
            onChange={onChangeBusDate}
            id="Date"
            placeholder="Enter your Bus Date"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Source</label>
          <input
            type="text"
            value={bus.source}
            onChange={onChangeBusSource}
            id="Source"
            placeholder="Enter Your Source Place"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="RollNo">Destination</label>
          <input
            type="text"
            value={bus.destination}
            onChange={onChangeBusDestination}
            id="Destination"
            placeholder="Enter your Destination "
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="RollNo">Total Seat</label>
          <input
            type="number"
            value={bus.totalSeat}
            onChange={onChangeBusTotalSeat}
            id="TotalSeat"
            placeholder="Enter total bus seat"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="RollNo">Category</label>
          <input
            type="text"
            value={bus.category}
            onChange={onChangeBusCategory}
            id="Category"
            placeholder="Enter your bus Category"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="RollNo">Fare</label>
          <input
            type="number"
            value={bus.fare}
            onChange={onChangeBusFare}
            id="Fare"
            placeholder="Enter Your Fare of Seat "
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="RollNo">Boarding Point</label>
          <input
            type="text"
            value={bus.boardingPoint}
            onChange={onChangeBusBoardingPoint}
            id="BoadingPoint"
            placeholder="Enter your Boading Point "
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Name">Boading-Time</label>
          <input
            type="time"
            value={bus.boardingTime}
            onChange={onChangeBusBoardingTime}
            id="BoardingTime"
            placeholder="Enter your Bus Boarding Time"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="RollNo">Dropping Point</label>
          <input
            type="text"
            value={bus.droppingPoint}
            onChange={onChangeBusDroppingPoint}
            id="DroppingPoint"
            placeholder="Enter your Dropping Point"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Name">Dropping-Time</label>
          <input
            type="time"
            value={bus.droppingTime}
            onChange={onChangeBusDroppingTime}
            id="DroppingTime"
            placeholder="Enter your Bus Dropping Time"
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Update Bus
        </button>
      </form>
    </div>
  );
};

export default EditBus;
