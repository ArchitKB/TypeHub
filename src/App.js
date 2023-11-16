// Import necessary dependencies and components
import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from "./fontend/User";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Landing from "./fontend/Landing"; // Import your Landing component

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} /> {/* Landing page route */}
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/guest" element={<Header />} /> {/* Assuming Header is used for the dashboard */}
        </Routes>
      </div>
    </Router>
  );
};
