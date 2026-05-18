import { useState } from "react";
import "../../styles/pages/user/GiftCards.css";

import Anniversary from "../../assets/images/Anniversary.jpeg";
import Eidmubarak from "../../assets/images/Eidmubarak.jpeg";
import Birthday from "../../assets/images/Birthday.jpeg";
import Family from "../../assets/images/Family.jpeg";
import Adventure from "../../assets/images/Adventure.jpeg";
import Holiday from "../../assets/images/Holiday.jpeg";

const giftCardsData = [
  {
    id: 1,
    title: "Birthday Special",
    category: "Birthday",
    description:
      "Celebrate their special day with unforgettable journeys.",
    image: Birthday,
    price: 5000,
  },

  {
    id: 2,
    title: "Eid Mubarak",
    category: "Festival",
    description:
      "Share the joy of Eid with memorable travel gifts.",
    image: Eidmubarak,
    price: 10000,
  },

  {
    id: 3,
    title: "Anniversary Tour",
    category: "Couple",
    description:
      "Make their anniversary even more special.",
    image: Anniversary,
    price: 15000,
  },

  {
    id: 4,
    title: "Family Vacation",
    category: "Family",
    description:
      "Create beautiful memories with your loved ones.",
    image: Family,
    price: 20000,
  },

  {
    id: 5,
    title: "Adventure Escape",
    category: "Adventure",
    description:
      "For thrill-seekers and explorers at heart.",
    image: Adventure,
    price: 10000,
  },

  {
    id: 6,
    title: "Holiday Surprise",
    category: "Holiday",
    description:
      "Surprise them with the gift of travel and joy.",
    image: Holiday,
    price: 5000,
  },
];

const GiftCards = () => {

  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] =
    useState("All");

  const categories = [
    "All",
    "Birthday",
    "Festival",
    "Couple",
    "Family",
    "Adventure",
    "Holiday",
  ];

  /* FILTER */
  const filteredCards = giftCardsData.filter((card) => {

    const matchSearch =
      card.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "All" ||
      card.category === activeCategory;

    return matchSearch && matchCategory;
  });

  /* BUY NOW */
  const handleBuyNow = async (card) => {

    try {

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      if (!user) {

        alert("Please login first");

        return;
      }

      const formData = new FormData();

      formData.append("title", card.title);
      formData.append("price", card.price);
      formData.append("category", card.category);

      const response = await fetch(
        "http://localhost/JatraPath_Website/backend/api/buy_giftcard.php",
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      );

      const data = await response.json();

      console.log(data);

      if (data.status === "success") {

        alert("Gift Card Purchased Successfully!");

      } else {

        alert(data.message || "Purchase failed");

      }

    } catch (error) {

      console.log(error);

      alert("Server Error");

    }
  };

  return (

    <div className="giftcards-page">

      {/* HEADER */}
      <div className="giftcards-header">

        <div>

          <h1>Gift Cards 🎁</h1>

          <p>
            Buy travel gift cards for yourself
            or someone special.
          </p>

        </div>

        {/* SEARCH */}
        <div className="giftcards-search">

          <input
            type="text"
            placeholder="Search gift cards..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <button>
            Search
          </button>

        </div>

      </div>

      {/* FILTERS */}
      <div className="giftcards-filters">

        {categories.map((cat) => (

          <button
            key={cat}
            className={
              activeCategory === cat
                ? "active-filter"
                : ""
            }
            onClick={() =>
              setActiveCategory(cat)
            }
          >
            {cat}
          </button>

        ))}

      </div>

      {/* GRID */}
      <div className="giftcards-grid">

        {filteredCards.map((card) => (

          <div
            className="giftcard-card"
            key={card.id}
          >

            {/* IMAGE */}
            <div className="giftcard-image">

              <img
                src={card.image}
                alt={card.title}
              />

              <span className="giftcard-price">
                ৳ {card.price.toLocaleString()}
              </span>

            </div>

            {/* CONTENT */}
            <div className="giftcard-content">

              <h3>{card.title}</h3>

              <p className="giftcard-category">
                📦 {card.category}
              </p>

              <p className="giftcard-description">
                {card.description}
              </p>

              <div className="giftcard-actions">

                <button className="view-btn">
                  View Details
                </button>

                <button
                  className="buy-btn"
                  onClick={() =>
                    handleBuyNow(card)
                  }
                >
                  Buy Now
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* TERMS */}
      <div className="terms-section">

        <h2>
          Terms & Conditions
        </h2>

        <div className="terms-grid">

          <div className="term-card">
            <p>
              Gift cards are valid for
              1 year from purchase date.
            </p>
          </div>

          <div className="term-card">
            <p>
              Gift cards are non-refundable
              and non-transferable.
            </p>
          </div>

          <div className="term-card">
            <p>
              Gift cards can only be used
              on JatraPath services.
            </p>
          </div>

          <div className="term-card">
            <p>
              One gift card can be used
              per booking.
            </p>
          </div>

          <div className="term-card">
            <p>
              Lost or expired cards
              will not be replaced.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default GiftCards;