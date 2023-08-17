// import "bootstrap/dist/css/bootstrap.css";
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = () => {
//     // Handle signup logic here
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
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
//       <button onClick={handleSignup}>Sign Up</button>
//       <p>
//         Already have an account? <Link to="/">Log in</Link>
//       </p>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import './CreateStudent.css'; // Custom CSS styles for CreateStudent component
import axios from 'axios';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const onChangeUserName = (e) => {
    setName(e.target.value);
  };

  const onChangeUserEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeUserPassword = (e) => {
    setPassword(e.target.value);
  };


  const onSubmit = (e) => {
    e.preventDefault();

    const busObject = {
      name: name,
      email: email,
      password: password,
     
    };

    axios.post('http://localhost:4000/users/register', busObject)
      .then((res) => alert("Signup is successful"));

    setName('');
    setEmail('');
    setPassword('');
   
  };

  return (
    <div className="form-wrapper">
      <h2 style={{textAlign:'center'}}>Sign-Up Page</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            value={name}
            onChange={onChangeUserName}
            id="Id"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            value={email}
            onChange={onChangeUserEmail}
            id="Date"
            placeholder="Enter your Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Password</label>
          <input
            type="password"
            value={password}
            onChange={onChangeUserPassword}
            id="Password"
            placeholder="Enter password"
            required
          />
        </div>   

           
        <button type="submit" className="btn-submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
