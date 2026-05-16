import { useState } from "react";
import "../../styles/pages/user/Orders.css";

const initialOrders = [
  {
    id: "#JP1021",
    destination: "Cox's Bazar Tour",
    location: "Chattogram",
    date: "15 June 2026",
    status: "Confirmed",
    persons: 2,
    total: 13000,
    image:
      "https://i.pinimg.com/736x/71/a0/a3/71a0a3d9a91acd580f4e019884bf7025.jpg",
  },

  {
    id: "#JP1022",
    destination: "Sajek Valley Adventure",
    location: "Rangamati",
    date: "28 June 2026",
    status: "Pending",
    persons: 3,
    total: 13500,
    image:
      "https://i.pinimg.com/736x/b5/2f/58/b52f589daebd13077f27ccabd2bacfe0.jpg",
  },

  {
    id: "#JP1023",
    destination: "Sylhet Tea Garden Tour",
    location: "Sylhet",
    date: "02 July 2026",
    status: "Completed",
    persons: 1,
    total: 5200,
    image:
      "https://i.pinimg.com/1200x/11/99/d2/1199d2b57cf03528bec023822e49985e.jpg",
  },
];

const Orders = () => {
  const [orders] = useState(initialOrders);

  return (
    <div className="orders-page">

      {/* HEADER */}
      <div className="orders-header">

        <div>
          <h1>My Orders 📦</h1>

          <p>
            Track your bookings and manage travel orders easily.
          </p>
        </div>

      </div>

      {/* EMPTY */}
      {orders.length === 0 ? (
        <div className="empty-orders">

          <h2>No Orders Yet</h2>

          <p>
            You haven't booked any destination yet.
          </p>

        </div>
      ) : (
        <div className="orders-grid">

          {orders.map((order) => (

            <div
              className="order-card"
              key={order.id}
            >

              {/* IMAGE */}
              <div className="order-image">

                <img
                  src={order.image}
                  alt={order.destination}
                />

                <span
                  className={`status-badge ${order.status.toLowerCase()}`}
                >
                  {order.status}
                </span>

              </div>

              {/* CONTENT */}
              <div className="order-content">

                <div className="order-top">

                  <div>
                    <h2>{order.destination}</h2>

                    <p>📍 {order.location}</p>
                  </div>

                  <span className="order-id">
                    {order.id}
                  </span>

                </div>

                {/* DETAILS */}
                <div className="order-details">

                  <div className="detail-box">
                    <span>Travel Date</span>
                    <h4>{order.date}</h4>
                  </div>

                  <div className="detail-box">
                    <span>Travelers</span>
                    <h4>{order.persons} Persons</h4>
                  </div>

                  <div className="detail-box">
                    <span>Total Cost</span>
                    <h4>৳{order.total}</h4>
                  </div>

                </div>

                {/* ACTIONS */}
                <div className="order-actions">

                  <button className="details-btn">
                    View Details
                  </button>

                  <button className="invoice-btn">
                    Download Invoice
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default Orders;