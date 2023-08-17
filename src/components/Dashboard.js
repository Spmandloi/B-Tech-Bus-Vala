// components/Dashboard.js
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const Dashboard = (props) => {

  const{obj} = props;
  const [date, setDate] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleBookBus = () => {
    // Save the bus information to your data store or send it to the backend
    // For this example, we'll simply navigate to the BusInformation component with the information in the URL
    navigate(`/bus-information?date=${date}&source=${source}&destination=${destination}`);
  };

  //   const handleBookBus = async () => {
  //   try {
  //     // Send a request to your backend to check if the data matches
  //     const response = await fetch(`http://localhost:4000/bus_List/busList?date=${obj.date}&source=${obj.source}&destination=${obj.destination}`);
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
    <div className="dashboard">
      <h2>Book a Bus</h2>
      <form>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <div className="form-group">
          <label>Source:</label>
          <input type="text" value={source} onChange={handleSourceChange} />
        </div>
        <div className="form-group">
          <label>Destination:</label>
          <input type="text" value={destination} onChange={handleDestinationChange} />
        </div>
        <button type="button" onClick={handleBookBus}>Check the Bus</button>
      </form>
    </div>
  );
};

export default Dashboard;


// components/Dashboard.js


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const [date, setDate] = useState('');
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const navigate = useNavigate();

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };

//   const handleSourceChange = (e) => {
//     setSource(e.target.value);
//   };

//   const handleDestinationChange = (e) => {
//     setDestination(e.target.value);
//   };

//   const handleBookBus = async () => {
//     try {
//       console.log("date: " ,",source:" , "destination",`http://localhost:4000/busList?date=${date}&source=${source}&destination=${destination}`);
//       // Send a request to your backend to check if the data matches
//       const response = await fetch(`http://localhost:4000/busList?date=${date}&source=${source}&destination=${destination}`);
      
//       const result = await response.json();

//       if (result.match) {
//         // Data matches, navigate to BusInformation component
//         navigate(`/bus-information?date=${date}&source=${source}&destination=${destination}`);
//       } else {
//         // Data doesn't match, show an error message or handle it as needed
//         console.log('Bus not available for the selected data.');
//       }
//     } catch (error) {
//       console.error('Error checking bus availability:', error);
//     }
//   };

//   return (
//     <div className="dashboard">
//       <h2>Book a Bus</h2>
//       <form>
//         <div className="form-group">
//           <label>Date:</label>
//           <input type="date" value={date} onChange={handleDateChange} />
//         </div>
//         <div className="form-group">
//           <label>Source:</label>
//           <input type="text" value={source} onChange={handleSourceChange} />
//         </div>
//         <div className="form-group">
//           <label>Destination:</label>
//           <input type="text" value={destination} onChange={handleDestinationChange} />
//         </div>
//         <button type="button" onClick={handleBookBus}>Check the Bus</button>
//       </form>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const [date, setDate] = useState('');
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const navigate = useNavigate();

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };

//   const handleSourceChange = (e) => {
//     setSource(e.target.value);
//   };

//   const handleDestinationChange = (e) => {
//     setDestination(e.target.value);
//   };

//   const handleBookBus = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:4000/busList?date=${date}&source=${source}&destination=${destination}`
//       );
//       const result = await response.json();

//       if (result.match) {
//         navigate(
//           `/bus-information?date=${date}&source=${source}&destination=${destination}`
//         );
//       } else {
//         console.log('Bus not available for the selected data.');
//       }
//     } catch (error) {
//       console.error('Error checking bus availability:', error);
//     }
//   };

//   return (
//     <div className="dashboard">
//       <h2>Book a Bus</h2>
//       <form>
//         <div className="form-group">
//           <label>Date:</label>
//           <input type="date" value={date} onChange={handleDateChange} />
//         </div>
//         <div className="form-group">
//           <label>Source:</label>
//           <input type="text" value={source} onChange={handleSourceChange} />
//         </div>
//         <div className="form-group">
//           <label>Destination:</label>
//           <input type="text" value={destination} onChange={handleDestinationChange} />
//         </div>
//         <button type="button" onClick={handleBookBus}>
//           Check the Bus
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Dashboard;
