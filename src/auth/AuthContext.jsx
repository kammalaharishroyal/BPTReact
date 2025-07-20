
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { username: '', role: 'api' | 'ui' }

  const login = (username, roles, token) => {
  const newUser = { username, roles, token }; // roles is now an array: ['api', 'ui']
  localStorage.setItem('user', JSON.stringify(newUser));
  setUser(newUser);
};

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
