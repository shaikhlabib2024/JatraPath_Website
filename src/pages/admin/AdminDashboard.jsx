import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/admin/adminDashboard.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  /* FETCH ADMIN DATA */
  useEffect(() => {
    fetch(
      "http://localhost/JatraPath_Website/backend/api/overview.php",
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  /* LOGOUT */
  const handleLogout = async () => {
    try {
      await fetch(
        "http://localhost/JatraPath_Website/backend/controllers/logout.php",
        {
          method: "POST",
          credentials: "include",
        }
      );

      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="admin-container">

      {/* SIDEBAR */}
      <div className="admin-sidebar">
        <h2 className="logo">JatraPath Admin</h2>

        <ul>
          <li onClick={() => setActiveTab("dashboard")}>Dashboard</li>
          <li onClick={() => setActiveTab("destinations")}>Destinations</li>
          <li onClick={() => setActiveTab("users")}>Users</li>
          <li onClick={() => setActiveTab("orders")}>Orders</li>
          <li onClick={() => setActiveTab("settings")}>Settings</li>
        </ul>
      </div>

      {/* MAIN */}
      <div className="admin-main">

        {/* TOP BAR (ONLY ONCE) */}
        <div className="admin-topbar">
          <h3>Admin Dashboard</h3>

          <div className="admin-info">
            👤 {data?.user?.name || "Admin"}
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {/* DASHBOARD */}
        {activeTab === "dashboard" && (
          <div className="dashboard-content">

            <div className="stats-grid">
              <div className="stat-card">
                <h4>Total Users</h4>
                <p>{data?.stats?.users || 0}</p>
              </div>

              <div className="stat-card">
                <h4>Total Destinations</h4>
                <p>{data?.stats?.destinations || 0}</p>
              </div>

              <div className="stat-card">
                <h4>Total Orders</h4>
                <p>{data?.stats?.orders || 0}</p>
              </div>

              <div className="stat-card">
                <h4>Cart Items</h4>
                <p>{data?.stats?.cart_items || 0}</p>
              </div>
            </div>

            <div className="recent-box">
              <h3>Recent Bookings</h3>

              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Destination</th>
                    <th>Persons</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Rahim</td>
                    <td>Cox's Bazar</td>
                    <td>2</td>
                    <td>Confirmed</td>
                  </tr>

                  <tr>
                    <td>Karim</td>
                    <td>Sajek</td>
                    <td>3</td>
                    <td>Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* DESTINATIONS */}
        {activeTab === "destinations" && (
          <div>
            <h2>Manage Destinations</h2>
            <p>Add / Edit / Delete destinations here</p>
          </div>
        )}

        {/* USERS */}
        {activeTab === "users" && (
          <div>
            <h2>User Management</h2>
            <p>Manage all users here</p>
          </div>
        )}

        {/* ORDERS */}
        {activeTab === "orders" && (
          <div>
            <h2>Orders</h2>
            <p>Track bookings here</p>
          </div>
        )}

        {/* SETTINGS */}
        {activeTab === "settings" && (
          <div>
            <h2>Settings</h2>
            <p>System configuration</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;