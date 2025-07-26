import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import "../css/Login.css";
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
const handleLogin = async () => {
  
  // const response = await fetch('http://localhost:8080/api/auth/login', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ username, password })
  // });

  // if (!response.ok) {
  //   alert('Invalid credentials');
  //   return;
  // }

  // const data = await response.json(); // { username, roles, token }
  // login(data.username, data.roles, data.token); // Save all roles
 const data={
  "username": "harish",
  "roles": ["ui","api" ],  // can be ["api"], ["ui"], or ["api", "ui"]
  "token": "jwt-token-here"
}

  // Redirect based on primary access or dashboard
  if (data.roles.includes('manager')) navigate('/dashboard');
  else if (data.roles.includes('ui')) navigate('/ui');
  else if (data.roles.includes('api')) navigate('/api');
  else navigate('/forbidden');
};

  return (
    <div>
    
<div className="login-page">
  <div className="branding">ZEOMEGA</div>
  <div className="animated-bg-circle"></div>
  <div className="login-card">
    <h2>Welcome Back</h2>
    <input type="text" value={username} placeholder="Username" onChange={e => setUsername(e.target.value)}/>
    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
     <button onClick={handleLogin}>Login</button>
      <a href="">forgot password?</a>
  </div>
</div>

    </div>
  );
};

export default Login;
