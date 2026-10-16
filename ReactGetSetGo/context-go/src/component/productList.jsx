import { useState, useEffect } from "react";
import productData from "../data/product.json";

export const ProductList = () => {
  const [products] = useState(productData);
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : {};
  });

  // ✅ Load cart from localStorage
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart"));
//     if (storedCart) setCart(storedCart);
//   }, []);

  // ✅ Persist cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🛒 Add to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev[product.id];

      const newQty = (existing?.quantity || 0) + 1;

      if (newQty > product.availableQuantity) return prev;

      return {
        ...prev,
        [product.id]: {
          ...product,
          quantity: newQty,
        },
      };
    });
  };

  // ➕ Increment
  const increment = (product) => {
    setCart((prev) => {
      const existing = prev[product.id];
      if (!existing) return prev;

      if (existing.quantity >= product.availableQuantity) return prev;

      return {
        ...prev,
        [product.id]: {
          ...existing,
          quantity: existing.quantity + 1,
        },
      };
    });
  };

  // ➖ Decrement
  const decrement = (product) => {
    setCart((prev) => {
      const existing = prev[product.id];
      if (!existing) return prev;

      if (existing.quantity === 1) {
        const updated = { ...prev };
        delete updated[product.id];
        return updated;
      }

      return {
        ...prev,
        [product.id]: {
          ...existing,
          quantity: existing.quantity - 1,
        },
      };
    });
  };

  // 💰 Total price
  const total = Object.values(cart).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Food Items</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {products.map((product) => {
          const cartItem = cart[product.id];
          const quantity = cartItem?.quantity || 0;
          const stock = product.availableQuantity - quantity
            console.log(stock)
          return (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "16px",
                width: "220px",
              }}
            >
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <p>Stock: {stock > 0 ? stock : "Out of Stock"}</p>

              {quantity > 0 ? (
                <div>
                  <button onClick={() => decrement(product)}>-</button>
                  <span style={{ margin: "0 10px" }}>{quantity}</span>
                  <button onClick={() => increment(product)}>+</button>
                </div>
              ) : 
                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
               }
            </div>
          );
        })}
      </div>

      {/* 🛒 Cart Summary */}
      <h2>Cart</h2>
      {Object.values(cart).length === 0 ? (
        <p>No items</p>
      ) : (
        <ul>
          {Object.values(cart).map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} = ₹
              {item.price * item.quantity}
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}