import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Here you can implement your login logic, such as sending a request to your server
    // For the sake of simplicity, let's assume the login is successful if both fields are filled
    if (username && password) {
      // Clear any previous error message
      setError('');
      // Perform login logic here (e.g., sending login credentials to the server)
      console.log('Logged in successfully');
    } else {
      setError('Please fill in both username and password');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
