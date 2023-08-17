import React, { useState } from 'react';
import './CreateStudent.css'; // Custom CSS styles for CreateStudent component
import axios from 'axios';

const CreateBus = () => {
  const [id, setId] = useState('');
  const [date, setDate] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [totalSeat, setTotalSeat] = useState('');
  const [category, setCategory] = useState('');
  const [fare, setFare] = useState('');
  const [boardingPoint, setBoardingPoint] = useState('');
  const [boardingTime, setBoardingTime] = useState('');
  const [droppingPoint, setDroppingPoint] = useState('');
  const [droppingTime, setDroppingTime] = useState('');

  const onChangeBusId = (e) => {
    setId(e.target.value);
  };

  const onChangeBusDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeBusSource = (e) => {
    setSource(e.target.value);
  };

  const onChangeBusDestination = (e) => {
    setDestination(e.target.value);
  };

  const onChangeBusTotalSeat = (e) => {
    setTotalSeat(e.target.value);
  };
  const onChangeBusCategory = (e) => {
    setCategory(e.target.value);
  };

  const onChangeBusFare = (e) => {
    setFare(e.target.value);
  };

  const onChangeBusBoardingPoint = (e) => {
    setBoardingPoint(e.target.value);
  };

  const onChangeBusBoardingTime = (e) => {
    setBoardingTime(e.target.value);
  };

  const onChangeBusDroppingPoint = (e) => {
    setDroppingPoint(e.target.value);
  };

  const onChangeBusDroppingTime = (e) => {
    setDroppingTime(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const busObject = {
      id: id,
      date: date,
      source: source,
      destination: destination,
      totalSeat: totalSeat,
      category: category,
      fare: fare,
      boardingPoint: boardingPoint,
      boardingTime: boardingTime,
      droppingPoint: droppingPoint,
      droppingTime: droppingTime,
    };

    axios.post('http://localhost:4000/busList/create-bus', busObject)
      .then((res) => alert("Create bus is successful"));

    setId('');
    setDate('');
    setSource('');
    setDestination('');
    setTotalSeat('');
    setCategory('');
    setFare('');
    setBoardingPoint('');
    setBoardingTime('');
    setDroppingPoint('');
    setDroppingTime('');
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="Name">Bus Id</label>
          <input
            type="number"
            value={id}
            onChange={onChangeBusId}
            id="Id"
            placeholder="Enter Bus Id"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Date</label>
          <input
            type="date"
            value={date}
            onChange={onChangeBusDate}
            id="Date"
            placeholder="Enter your traveling Date"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Source</label>
          <input
            type="text"
            value={source}
            onChange={onChangeBusSource}
            id="Source"
            placeholder="Enter your source place"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Destination</label>
          <input
            type="text"
            value={destination}
            onChange={onChangeBusDestination}
            id="Email"
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Total-Seat</label>
          <input
            type="number"
            value={totalSeat}
            onChange={onChangeBusTotalSeat}
            id="Email"
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Bus Category</label>
          <input
            type="text"
            value={category}
            onChange={onChangeBusCategory}
            id="Email"
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Fare</label>
          <input
            type="number"
            value={fare}
            onChange={onChangeBusFare}
            id="Email"
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Boarding-Point</label>
          <input
            type="text"
            value={boardingPoint}
            onChange={onChangeBusBoardingPoint}
            id="Email"
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Boading-Time</label>
          <input
            type="time"
            value={boardingTime}
            onChange={onChangeBusBoardingTime}
            id="BoardingTime"
            placeholder="Enter when the bus start"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="RollNo">Dropping-Point</label>
          <input
            type="text"
            value={droppingPoint}
            onChange={onChangeBusDroppingPoint}
            id="RollNo"
            placeholder="Enter Roll No"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Dropping-Time</label>
          <input
            type="time"
            value={droppingTime}
            onChange={onChangeBusDroppingTime}
            id="DroppingTime"
            placeholder="Enter when you reach"
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Create Bus
        </button>
      </form>
    </div>
  );
};

export default CreateBus;
