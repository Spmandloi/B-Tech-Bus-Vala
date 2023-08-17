import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import CreateBus from './components/create-student.component';
import EditBus from './components/edit-student.component';
import BusList from './components/student-list.component';
import Dashboard from './components/Dashboard';
import BusInformation from './components/BusInformation';
import CreateUser from './components/Signup';
import LoginForm from './components/Login';
import BookingDetails from './components/BookingDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
            <div className="col-md-12">
              <div className="wrapper">
                <Routes>
                  <Route path="/booking" element={<Dashboard/>} />
                  <Route path="/bus-information" element={<BusInformation />} />
                  <Route path="/create-bus" element={<CreateBus/>} />
                  <Route path="/edit-bus/:id" element={<EditBus />} />
                  <Route path="/bus-list" element={<BusList />} />
                  <Route path="/register" element={<CreateUser/>} />
                  <Route path="/login" element={<LoginForm/>}/>
                  <Route path='/booking-details' element={<BookingDetails/>}/>
                </Routes>
              </div>
            </div>

        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
