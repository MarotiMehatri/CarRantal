import React from "react";
import Navbar from "./Components/Navbar.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Cars from "./Pages/Cars.jsx";
import MyBookings from "./Pages/MyBookings.jsx";
import Footer from "./Components/Footer.jsx";
import { useState } from "react";
import CarDetails from "./Pages/CarDetails.jsx";
import Layout from "./Pages/owner/Layout.jsx";
import Dashboard from "./Pages/owner/Dashboard.jsx";
import AddCar from "./Pages/owner/AddCar.jsx";
import ManageCars from "./Pages/owner/ManageCars.jsx";
import MangeBookings from "./Pages/owner/MangeBookings.jsx";
import Login from "./Components/Login/Login.jsx";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/My-bookings" element={<MyBookings />} />
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<MangeBookings />} />
        </Route>
      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  );
};

export default App;
