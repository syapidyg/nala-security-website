import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServicePage from "../pages/servicepage/ServicePage";
import HomePage from "../pages/homepage/HomePage";
import AproposPage from "../pages/apropospage/AproposPage";

function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/a-propos" element={<AproposPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
