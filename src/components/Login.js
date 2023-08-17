// import "bootstrap/dist/css/bootstrap.css";
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import BusSearchResult from './BusSearchResult';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Simulating login logic here, you should replace this with actual login code
//     if (username === 'demo' && password === 'password') {
//       setLoggedIn(true);
//       navigate('/search'); // Redirect to the BusSearchResult component after successful login
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Send login request to the server
//     axios
//       .post('http://localhost:4000/users/login', { email, password })
//       .then((res) => {
//         // Handle successful login (e.g., save token, redirect)
//         console.log('Logged in successfully');
//         // Redirect to the booking bus page after successful login
//         // You can use React Router's useHistory hook to navigate to the booking bus page
//       })
//       .catch((error) => {
//         // Handle login error (e.g., show error message)
//         console.log('Login failed', error.response.data);
//       });
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send login request to the server
    axios
      .post('http://localhost:4000/users/login', {"email":email,"password":password})
      .then((res) => {

        if (res.data.message=="No user found"){
          alert("Invalid Email ID");
        } else if(res.data.message == "Password does not matched"){
          alert("Invalid Password");
        } else if (res.data.message=="Login Successful"){
        // Handle successful login (e.g., show success message)
        alert('Login successful',res);
        // Redirect to the booking bus page after successful login
        navigate('/booking');
        } else {
          alert("Login Error");
        }
      })
      .catch((error) => {
        // Handle login error (e.g., show error message)
        setError('Invalid email or password');
        console.log('Login failed', error);
      });
  };

  return (
    <div className="login-form-wrapper">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;

