import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ProtectedRoute from "./protect_route";
import Error from '../component/error';

// Lazy loaded pages
const About_us = lazy(() => import("../pages/abo_us"));
const Profile = lazy(() => import('../pages/profile'));
const Home = lazy(() => import('../pages/home'));
const Regis = lazy(() => import('../pages/regis'));
const Login = lazy(() => import('../pages/login'));
const Landing = lazy(() => import('../pages/landing'));

function Approute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regis" element={<Regis />} />

        {/* Protected Routes */}
        <Route
          path="/abo_us"
          element={
            <ProtectedRoute>
              <About_us />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Catch-All Error Route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}

export default Approute;
