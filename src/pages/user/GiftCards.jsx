import { useState } from "react";
import "../../styles/pages/user/GiftCards.css";

const giftCardsData = [
  {
    id: 1,
    name: "Travel Explorer Card",
    category: "Adventure",
    image:
      "https://i.pinimg.com/736x/0d/8f/1d/0d8f1d9a7d2c5e8b4d3f0a1d0d2c9b1f.jpg",
    price: "৳3000",
  },
  {
    id: 2,
    name: "Luxury Escape Card",
    category: "Luxury",
    image:
      "https://i.pinimg.com/736x/3a/2b/9c/3a2b9c4a8d1e6f7c5b2a1d0e9f8c7b6a.jpg",
    price: "৳5000",
  },
  {
    id: 3,
    name: "Foodie Delight Card",
    category: "Food",
    image:
      "https://i.pinimg.com/736x/1c/5d/7e/1c5d7e9a2b4c6d8f0a1b2c3d4e5f6a7b.jpg",
    price: "৳1500",
  },
  {
    id: 4,
    name: "Budget Saver Card",
    category: "Budget",
    image:
      "https://i.pinimg.com/736x/9f/8e/7d/9f8e7d6c5b4a3210f9e8d7c6b5a4d3c2.jpg",
    price: "৳1000",
  },
];

const GiftCards = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Adventure", "Luxury", "Food", "Budget"];

  const filteredCards = giftCardsData.filter((card) => {
    const matchSearch = card.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      activeCategory === "All" || card.category === activeCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div className="giftcards-page">

      {/* HEADER */}
      <div className="giftcards-header">

        <div>
          <h1>Gift Cards 🎁</h1>
          <p>Buy travel gift cards for yourself or someone special.</p>
        </div>

        {/* SEARCH */}
        <div className="giftcards-search">

          <input
            type="text"
            placeholder="Search gift cards..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>Search</button>

        </div>
      </div>

      {/* FILTERS */}
      <div className="giftcards-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active-filter" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="giftcards-grid">

        {filteredCards.map((card) => (
          <div className="giftcard-card" key={card.id}>

            <div className="giftcard-image">
              <img src={card.image} alt={card.name} />

              <span className="giftcard-price">
                {card.price}
              </span>
            </div>

            <div className="giftcard-content">
              <h3>{card.name}</h3>
              <p>📦 {card.category}</p>

              <div className="giftcard-actions">
                <button className="view-btn">View Details</button>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default GiftCards;