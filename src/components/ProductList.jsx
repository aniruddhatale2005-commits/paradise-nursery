import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Monstera",
    price: 40,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "ZZ Plant",
    price: 28,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1632207691144-2e9a2f6f4c7d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Spider Plant",
    price: 22,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 35,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=500&q=80",
  },

  // Succulents
  {
    id: 7,
    name: "Aloe Vera",
    price: 18,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Echeveria",
    price: 20,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Haworthia",
    price: 19,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Jade Plant",
    price: 24,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1597055181300-5c8a3c9a3f5c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Zebra Haworthia",
    price: 21,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "String of Pearls",
    price: 26,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },

  // Flowering Plants
  {
    id: 13,
    name: "Rose Plant",
    price: 32,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Orchid",
    price: 45,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1566907225471-2f9a1b9b5c5c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Anthurium",
    price: 38,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "African Violet",
    price: 29,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Begonia",
    price: 27,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "Geranium",
    price: 31,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items || []);
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((previous) => [...previous, plant.id]);
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Flowering Plants",
  ];

  return (
    <div>
      {/* Navigation Bar */}
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
            href="#plants"
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
            Cart 🛒 ({cartCount})
          </a>
        </div>
      </nav>

      {/* Product Listing */}
      <main
        id="plants"
        style={{
          padding: "30px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#2e7d32" }}>
          Paradise Nursery Plants
        </h1>

        {categories.map((category) => (
          <section key={category} style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#2e7d32" }}>{category}</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
              }}
            >
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div
                    key={plant.id}
                    style={{
                      backgroundColor: "white",
                      padding: "15px",
                      borderRadius: "10px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    }}
                  >
                    <img
                      src={plant.image}
                      alt={plant.name}
                      style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />

                    <h3>{plant.name}</h3>

                    <p>
                      Price: <strong>${plant.price}</strong>
                    </p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={
                        addedItems.includes(plant.id) ||
                        cartItems.some(
                          (item) => item.id === plant.id
                        )
                      }
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "none",
                        borderRadius: "6px",
                        backgroundColor:
                          addedItems.includes(plant.id) ||
                          cartItems.some(
                            (item) => item.id === plant.id
                          )
                            ? "#999"
                            : "#2e7d32",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      {addedItems.includes(plant.id) ||
                      cartItems.some(
                        (item) => item.id === plant.id
                      )
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
