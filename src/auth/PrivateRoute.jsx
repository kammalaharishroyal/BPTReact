import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  // Check if user has any matching role
  const hasAccess = user.roles.some(role => allowedRoles.includes(role));
  if (!hasAccess) return <Navigate to="/forbidden" />;

  return children;
};


export default PrivateRoute;
