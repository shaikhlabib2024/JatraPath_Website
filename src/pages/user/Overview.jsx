import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./../../styles/pages/user/Overview.css";

const Overview = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost/jatrapath/api/overview.php", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  if (loading) {
    return (
      <div className="overview-page">
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="overview-page">

      {/* HERO */}
      <div className="overview-hero">

        <div className="overview-left">

          <span className="welcome-badge">
            ✈ Welcome Back
          </span>

          <h1>
            Hello, {data?.user?.name || user?.name || "Traveler"} 👋
          </h1>

          <p>
            Manage your journeys, track bookings, explore destinations,
            purchase gift cards, and discover Bangladesh smarter with JatraPath.
          </p>

          <div className="hero-actions">

            

            <Link to="/user/destinations" className="primary-btn">
              Explore Destinations
            </Link>

            <button className="secondary-btn">
              View Orders
            </button>

          </div>

        </div>

        <div className="overview-right">

          <div className="travel-card">
            <h3>🌍 Trending Destination</h3>

            <img
              src="https://i.pinimg.com/736x/b5/2f/58/b52f589daebd13077f27ccabd2bacfe0.jpg"
              alt="travel"
            />

            <div className="travel-info">
              <h4>Sajek Valley</h4>
              <p>Clouds above the hills.</p>
            </div>
          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="stats-grid">

        <div className="stats-card">
          <h4>Total Orders</h4>
          <h2>{data?.stats?.orders || 0}</h2>
          <p>Completed bookings</p>
        </div>

        <div className="stats-card">
          <h4>Cart Items</h4>
          <h2>{data?.stats?.cart_items || 0}</h2>
          <p>Trips waiting checkout</p>
        </div>

        <div className="stats-card">
          <h4>Gift Cards</h4>
          <h2>3</h2>
          <p>Available for use</p>
        </div>

        <div className="stats-card">
          <h4>Saved Places</h4>
          <h2>18</h2>
          <p>Favorite destinations</p>
        </div>

      </div>

      {/* QUICK ACTIONS */}
      <div className="overview-section">

        <div className="section-header">
          <h2>Quick Actions</h2>
        </div>

        <div className="actions-grid">

          <div className="action-card">
            <span>🧭</span>
            <h3>Explore Trips</h3>
            <p>Find your next adventure.</p>
          </div>

          <div className="action-card">
            <span>🛒</span>
            <h3>View Cart</h3>
            <p>Manage your bookings.</p>
          </div>

          <div className="action-card">
            <span>🎁</span>
            <h3>Buy Gift Cards</h3>
            <p>Send travel gifts easily.</p>
          </div>

          <div className="action-card">
            <span>📦</span>
            <h3>Track Orders</h3>
            <p>Monitor booking progress.</p>
          </div>

        </div>

      </div>

      {/* RECENT ACTIVITY */}
      <div className="overview-section">

        <div className="section-header">
          <h2>Recent Activity</h2>
        </div>

        <div className="activity-list">

          <div className="activity-item">
            <span>✅</span>
            <div>
              <h4>Booking Confirmed</h4>
              <p>Cox's Bazar Tour Package</p>
            </div>
          </div>

          <div className="activity-item">
            <span>🎁</span>
            <div>
              <h4>Gift Card Purchased</h4>
              <p>৳5000 Travel Gift Card</p>
            </div>
          </div>

          <div className="activity-item">
            <span>🛒</span>
            <div>
              <h4>Added to Cart</h4>
              <p>Sylhet Adventure Tour</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Overview;