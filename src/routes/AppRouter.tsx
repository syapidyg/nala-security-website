import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServicePage from "../pages/servicepage/ServicePage";
import HomePage from "../pages/homepage/HomePage";

function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/services" element={<ServicePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
