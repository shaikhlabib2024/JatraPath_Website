import { Routes, Route } from "react-router-dom";

import UserDashboard from "./pages/UserPanel.jsx";
import Home from "./pages/home.jsx";
import Auth from "./components/auth.jsx";
import SearchResults from "./pages/searchResults.jsx";

import GiftCards from "./pages/giftCards";
import SafetyInfo from "./pages/safetyInfo";

import Blog from "./pages/blog";
import Contact from "./pages/contact";
import FAQ from "./pages/faq";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";

import DestinationsUser from "./pages/user/Destinations.jsx";
import Destinations from "./pages/destinations.jsx";
import DestinationDetails from "./pages/destinationDetails.jsx";

import Cart from "./pages/user/Cart.jsx";

import "./styles/App.css";

function App() {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* AUTH */}
      <Route path="/login" element={<Auth />} />

      {/* DESTINATIONS */}
      <Route path="/destinations" element={<Destinations />} />

      {/* DESTINATION DETAILS */}
      <Route path="/destination/:id" element={<DestinationDetails />} />

      {/* USER DASHBOARD */}
      <Route path="/user" element={<UserDashboard />} />

      {/* USER DESTINATIONS */}
      <Route
        path="/user/destinations"
        element={<DestinationsUser />}
      />

      {/* CART */}
      <Route path="/cart" element={<Cart />} />

      {/* SEARCH */}
      <Route path="/search" element={<SearchResults />} />

      {/* GIFT CARDS */}
      <Route path="/gift-cards" element={<GiftCards />} />

      {/* SAFETY INFO */}
      <Route path="/safety-info" element={<SafetyInfo />} />

      {/* MORE DROPDOWN PAGES */}
      <Route path="/blog" element={<Blog />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/faq" element={<FAQ />} />

      <Route path="/terms" element={<Terms />} />

      <Route path="/privacy" element={<Privacy />} />
      {/* FALLBACK */}
      <Route path="*" element={<Home />} />

    </Routes>
  );
}

export default App;