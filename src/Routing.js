import React from "react";
import { Route, Routes } from "react-router-dom";
import Enterprise from "./components/Enterprise";
import Home from "./components/Home";
import Individuals from "./components/Individuals";
import Teams from "./components/Teams";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Calendar from "./components/Calendar";
import Availability from "./components/Availability";
import Payments from "./components/Payments";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/individuals" element={<Individuals />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
};

export default Routing;
