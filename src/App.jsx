import { Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/UserPanel.jsx";
import Home from "./pages/home.jsx";
import Auth from "./components/auth.jsx";
import UserPanel from "./pages/UserPanel";
import SearchResults from "./pages/searchResults";

import Cart from "./pages/cart";

import Destinations from "./pages/destinations.jsx";
import DestinationDetails from "./pages/destinationDetails.jsx";

import "./styles/App.css";

function App() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* LOGIN */}
      <Route path="/login" element={<Auth />} />

      {/* DESTINATIONS PAGE */}
      <Route
        path="/destinations"
        element={<Destinations />}
      />

      {/* DESTINATION DETAILS PAGE */}
      <Route
        path="/destination/:id"
        element={<DestinationDetails />}
      />

      {/* USER DASHBOARD ROUTE */}
      <Route path="/user" element={<UserDashboard />} />
      <Route path="/search" element={<SearchResults />} />

      <Route path="/user" element={<UserPanel />} />
      {/* FALLBACK */}
      <Route path="*" element={<Home />} />

    </Routes>
  );
}

export default App;