import { useEffect, useState } from "react";
import "../../styles/pages/user/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  /* FETCH CART */
  useEffect(() => {
    fetch("http://localhost/JatraPath_Website/backend/api/cart.php", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data.cart || []);
      });
  }, []);

  /* UPDATE PERSONS */
  const updatePersons = (cart_id, newCount) => {
    const formData = new FormData();
    formData.append("cart_id", cart_id);
    formData.append("persons", newCount);

    fetch("http://localhost/jatrapath/api/cart_update.php", {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    setCartItems((prev) =>
      prev.map((item) =>
        item.cart_id === cart_id
          ? { ...item, persons: newCount }
          : item
      )
    );
  };

  /* DELETE ITEM */
  const removeItem = (cart_id) => {
    const formData = new FormData();
    formData.append("cart_id", cart_id);

    fetch("http://localhost/jatrapath/api/cart_delete.php", {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    setCartItems((prev) =>
      prev.filter((item) => item.cart_id !== cart_id)
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
          <p>Review your selected destinations and continue booking.</p>
        </div>
      </div>

      {/* EMPTY */}
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
        </div>
      ) : (
        <div className="cart-layout">

          {/* LEFT */}
          <div className="cart-items">

            {cartItems.map((item) => (
              <div className="cart-card" key={item.cart_id}>

                <img src={item.image} alt={item.name} />

                <div className="cart-content">

                  <div className="cart-top">
                    <div>
                      <h3>{item.name}</h3>
                      <p>📍 {item.location}</p>
                      <span>{item.days} Days Tour</span>
                    </div>

                    <button onClick={() => removeItem(item.cart_id)}>
                      ✕
                    </button>
                  </div>

                  <div className="cart-bottom">

                    <div className="quantity-box">

                      <button
                        onClick={() =>
                          updatePersons(item.cart_id, item.persons - 1)
                        }
                      >
                        -
                      </button>

                      <span>{item.persons}</span>

                      <button
                        onClick={() =>
                          updatePersons(item.cart_id, item.persons + 1)
                        }
                      >
                        +
                      </button>

                    </div>

                    <h2>৳{item.price * item.persons}</h2>

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

          </div>

        </div>
      )}

    </div>
  );
};

export default Cart;