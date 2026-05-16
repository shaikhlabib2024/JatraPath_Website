import { useEffect, useState } from "react";
import "../../styles/pages/user/Cart.css";

const initialCart = [
  {
    id: 1,
    name: "Sajek Valley Tour",
    location: "Rangamati",
    price: 4500,
    persons: 2,
    days: 3,
    image:
      "https://i.pinimg.com/736x/b5/2f/58/b52f589daebd13077f27ccabd2bacfe0.jpg",
  },

  {
    id: 2,
    name: "Cox's Bazar Beach Tour",
    location: "Chattogram",
    price: 6500,
    persons: 1,
    days: 4,
    image:
      "https://i.pinimg.com/736x/71/a0/a3/71a0a3d9a91acd580f4e019884bf7025.jpg",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(initialCart);
  }, []);

  const increasePersons = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, persons: item.persons + 1 }
          : item
      )
    );
  };

  const decreasePersons = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.persons > 1
          ? { ...item, persons: item.persons - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.persons,
    0
  );

  const serviceFee = 500;

  const total = subtotal + serviceFee;

  return (
    <div className="cart-page">

      {/* HEADER */}
      <div className="cart-header">

        <div>
          <h1>Your Travel Cart 🛒</h1>

          <p>
            Review your selected destinations and continue booking.
          </p>
        </div>

      </div>

      {/* EMPTY CART */}
      {cartItems.length === 0 ? (
        <div className="empty-cart">

          <h2>Your cart is empty</h2>

          <p>
            Add some amazing destinations to start your journey.
          </p>

        </div>
      ) : (
        <div className="cart-layout">

          {/* LEFT */}
          <div className="cart-items">

            {cartItems.map((item) => (

              <div className="cart-card" key={item.id}>

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-content">

                  <div className="cart-top">

                    <div>
                      <h3>{item.name}</h3>

                      <p>📍 {item.location}</p>

                      <span>{item.days} Days Tour</span>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      ✕
                    </button>

                  </div>

                  <div className="cart-bottom">

                    <div className="quantity-box">

                      <button
                        onClick={() => decreasePersons(item.id)}
                      >
                        -
                      </button>

                      <span>{item.persons}</span>

                      <button
                        onClick={() => increasePersons(item.id)}
                      >
                        +
                      </button>

                    </div>

                    <h2>
                      ৳{item.price * item.persons}
                    </h2>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* RIGHT */}
          <div className="cart-summary">

            <h2>Booking Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>৳{subtotal}</span>
            </div>

            <div className="summary-row">
              <span>Service Fee</span>
              <span>৳{serviceFee}</span>
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <span>৳{total}</span>
            </div>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

            <button className="continue-btn">
              Continue Exploring
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default Cart;