import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import "../styles/pages/giftCards.css";
import Anniversary from "../assets/images/Anniversary.jpeg";
import Eidmubarak from "../assets/images/Eidmubarak.jpeg";
import Birthday from "../assets/images/Birthday.jpeg";
import Family from "../assets/images/Family.jpeg";
import Adventure from "../assets/images/Adventure.jpeg";
import Holiday from "../assets/images/Holiday.jpeg";

import { useEffect } from "react";
const giftCards = [
  {
    id: 1,
    title: "Birthday Special",
    description: "Celebrate their special day with unforgettable journeys.",
    image: Birthday,
    price: 5000,
  },
  {
    id: 2,
    title: "Eid Mubarak",
    description: "Share the joy of Eid with memorable travel gifts.",
    image: Eidmubarak,
    price: 10000,
  },
  {
    id: 3,
    title: "Anniversary Tour",
    description: "Make their anniversary even more special.",
    image: Anniversary,
    price: 15000,
  },
  {
    id: 4,
    title: "Family Vacation",
    description: "Create beautiful memories with your loved ones.",
    image: Family,
    price: 20000,
  },
  {
    id: 5,
    title: "Adventure Escape",
    description: "For thrill-seekers and explorers at heart.",
    image: Adventure,
    price: 10000,
  },
  {
    id: 6,
    title: "Holiday Surprise",
    description: "Surprise them with the gift of travel and joy.",
    image: Holiday,
    price: 5000,
  },
];

const GiftCards = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "JatraPath | Gift Cards";
  }, []);
  const handleAddToCart = () => {
    navigate("/login");
  };

  return (
    <Layout>
      <div className="giftcards-page">
        <div className="giftcards-hero">
          <h1>Choose a Gift Card</h1>
          <p>Select a gift card below to make someone's journey special.</p>
        </div>

        <div className="giftcards-grid">
          {giftCards.map((card) => (
            <div className="gift-card" key={card.id}>
              <div className="gift-image-container">
                <img src={card.image} alt={card.title} />
                <div className="gift-overlay">
                  <span>JatraPath</span>
                </div>
              </div>

              <div className="gift-card-content">
                <h2>{card.title}</h2>

                <p>{card.description}</p>

                <div className="gift-divider"></div>

                <div className="price-tag">
                  ৳ {card.price.toLocaleString()}
                </div>

                <button onClick={handleAddToCart}>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="terms-section">
          <h2>Terms & Conditions</h2>

          <div className="terms-grid">
            <div className="term-card">
              <p>Gift cards are valid for 1 year from purchase date.</p>
            </div>

            <div className="term-card">
              <p>Gift cards are non-refundable and non-transferable.</p>
            </div>

            <div className="term-card">
              <p>Gift cards can only be used on JatraPath services.</p>
            </div>

            <div className="term-card">
              <p>One gift card can be used per booking.</p>
            </div>

            <div className="term-card">
              <p>Lost or expired cards will not be replaced.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GiftCards;