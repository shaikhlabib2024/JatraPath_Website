import { useState } from "react";
import "../../styles/pages/user/Destinations.css";

const destinationsData = [
  {
    id: 1,
    name: "Sajek Valley",
    location: "Rangamati",
    image:
      "https://i.pinimg.com/736x/b5/2f/58/b52f589daebd13077f27ccabd2bacfe0.jpg",
    price: "৳4500",
  },

  {
    id: 2,
    name: "Cox's Bazar",
    location: "Chattogram",
    image:
      "https://i.pinimg.com/736x/71/a0/a3/71a0a3d9a91acd580f4e019884bf7025.jpg",
    price: "৳6500",
  },

  {
    id: 3,
    name: "Sylhet Tea Garden",
    location: "Sylhet",
    image:
      "https://i.pinimg.com/1200x/11/99/d2/1199d2b57cf03528bec023822e49985e.jpg",
    price: "৳5200",
  },

  {
    id: 4,
    name: "Bandarban",
    location: "Bandarban",
    image:
      "https://i.pinimg.com/736x/0f/e1/cd/0fe1cd18d5aae44d370ac712a5555f8e.jpg",
    price: "৳7000",
  },

  {
    id: 5,
    name: "Sundarban",
    location: "Khulna",
    image:
      "https://i.pinimg.com/736x/ef/9e/20/ef9e20b9d227d7e98654eb5f37125bc3.jpg",
    price: "৳5800",
  },
];

const Destinations = () => {

  const [search, setSearch] = useState("");

  const filteredDestinations = destinationsData.filter((destination) =>
    destination.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="destinations-page">

      {/* HEADER */}
      <div className="destination-header">

        <div>
          <h1>Explore Destinations 🌍</h1>

          <p>
            Discover breathtaking places across Bangladesh.
          </p>
        </div>

        {/* SEARCH */}
        <div className="destination-search">

          <input
            type="text"
            placeholder="Search destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>
            Search
          </button>

        </div>

      </div>

      {/* FILTERS */}
      <div className="filter-row">

        <button className="active-filter">
          All
        </button>

        <button>Beach</button>

        <button>Hill</button>

        <button>Forest</button>

        <button>Adventure</button>

      </div>

      {/* DESTINATIONS GRID */}
      <div className="destinations-grid">

        {filteredDestinations.map((destination) => (

          <div
            className="destination-card"
            key={destination.id}
          >

            <div className="destination-image">

              <img
                src={destination.image}
                alt={destination.name}
              />

              <span className="destination-price">
                {destination.price}
              </span>

            </div>

            <div className="destination-content">

              <h3>{destination.name}</h3>

              <p>📍 {destination.location}</p>

              <div className="destination-actions">

                <button className="view-btn">
                  View Details
                </button>

                <button className="cart-btn">
                  Add to Cart
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Destinations;