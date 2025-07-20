import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../auth/PrivateRoute';
import MainLayout from '../layouts/MainLayout';

import Login from '../pages/Login';
import Forbidden from '../pages/Forbidden';
import NotFound from '../pages/NotFound';

import APIDashboard from '../pages/APITesting/Dashboard';
import APITestRunner from '../pages/APITesting/TestRunner';

import UIDashboard from '../pages/UITesting/Dashboard';
import UITestRunner from '../pages/UITesting/TestRunner';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forbidden" element={<Forbidden />} />

      {/* Main protected layout */}
      <Route path="/" element={<MainLayout />}>
        {/* API Testing Section */}
        <Route
          path="api"
          element={
            <PrivateRoute allowedRoles={['api', 'manager']}>
              <APIDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="api/runner"
          element={
            <PrivateRoute allowedRoles={['api', 'manager']}>
              <APITestRunner />
            </PrivateRoute>
          }
        />

        {/* UI Testing Section */}
        <Route
          path="ui"
          element={
            <PrivateRoute allowedRoles={['ui', 'manager']}>
              <UIDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="ui/runner"
          element={
            <PrivateRoute allowedRoles={['ui', 'manager']}>
              <UITestRunner />
            </PrivateRoute>
          }
        />

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
