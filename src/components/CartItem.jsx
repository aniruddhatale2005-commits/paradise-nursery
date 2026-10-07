import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleCheckout = () => {
    alert("Checkout Coming Soon!");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
          backgroundColor: "#2e7d32",
          color: "white",
        }}
      >
        <h2>Paradise Nursery</h2>

        <div>
          <a
            href="/"
            style={{
              color: "white",
              margin: "0 15px",
              textDecoration: "none",
            }}
          >
            Home
          </a>

          <a
            href="/plants"
            style={{
              color: "white",
              margin: "0 15px",
              textDecoration: "none",
            }}
          >
            Plants
          </a>

          <a
            href="/cart"
            style={{
              color: "white",
              margin: "0 15px",
              textDecoration: "none",
            }}
          >
            Cart
          </a>
        </div>
      </nav>

      <main style={{ padding: "30px" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#2e7d32",
          }}
        >
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <h2>Your cart is empty</h2>

            <a href="/plants">
              <button
                style={{
                  padding: "12px 25px",
                  backgroundColor: "#2e7d32",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Continue Shopping
              </button>
            </a>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  backgroundColor: "white",
                  padding: "20px",
                  marginBottom: "15px",
                  borderRadius: "10px",
                  boxShadow:
                    "0 2px 8px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h2>{item.name}</h2>

                  <p>
                    Unit Price: <strong>${item.price}</strong>
                  </p>

                  <p>
                    Quantity: <strong>{item.quantity}</strong>
                  </p>

                  <p>
                    Total Cost:{" "}
                    <strong>
                      ${(item.price * item.quantity).toFixed(2)}
                    </strong>
                  </p>

                  <button
                    onClick={() => decreaseQuantity(item)}
                    style={{
                      padding: "8px 14px",
                      marginRight: "8px",
                      cursor: "pointer",
                    }}
                  >
                    −
                  </button>

                  <button
                    onClick={() => increaseQuantity(item)}
                    style={{
                      padding: "8px 14px",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>

                  <button
                    onClick={() =>
                      dispatch(removeItem(item.id))
                    }
                    style={{
                      padding: "8px 14px",
                      marginLeft: "15px",
                      backgroundColor: "#d32f2f",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <div
              style={{
                backgroundColor: "white",
                padding: "25px",
                marginTop: "25px",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <h2>
                Total Cart Amount: $
                {totalAmount.toFixed(2)}
              </h2>

              <button
                onClick={handleCheckout}
                style={{
                  padding: "12px 25px",
                  backgroundColor: "#2e7d32",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginRight: "15px",
                }}
              >
                Checkout
              </button>

              <a href="/plants">
                <button
                  style={{
                    padding: "12px 25px",
                    backgroundColor: "#555",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Continue Shopping
                </button>
              </a>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;
