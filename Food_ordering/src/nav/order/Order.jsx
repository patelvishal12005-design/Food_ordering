import React, { useState, useEffect } from "react";
import "./Order.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
const burgerImg = 'burger.jpg'
const pizzaImg = 'pizza.jpg'
const sandwichImg = 'sandwich.jpg'

function Order() {
  const [products, setProducts] = useState([
    { id: 1, name: "Burger", price: 120, image: burgerImg },
    { id: 2, name: "Pizza", price: 180, image: pizzaImg },
    { id: 3, name: "Sandwich", price: 90, image: sandwichImg },
    { id: 4, name: "Special Burger", price: 150, image: burgerImg },
    { id: 5, name: "Large Pizza", price: 250, image: pizzaImg },
    { id: 6, name: "Veg Sandwich", price: 110, image: sandwichImg },
  ]);

  useEffect(() => {
    fetch("http://localhost:8000/api/foods/")
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setProducts(data);
        }
      })
      .catch(err => console.error("Error fetching foods:", err));
  }, []);

  const [cart, setCart] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // ✅ Add to cart
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // ✅ Grand total
  const grandTotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // ✅ COD Order
  const placeOrder = async () => {
    if (cart.length === 0) {
      alert("🛒 Cart is empty");
      return;
    }

    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert("❌ Please fill Name, Email, Phone & Address");
      return;
    }

    const orderData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      items: cart.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.qty
      })),
      total: grandTotal
    };

    try {
      const response = await fetch("http://localhost:8000/api/order/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("✅ Order Placed Successfully and saved to MongoDB!");
        setCart([]);
        setFormData({ name: "", email: "", phone: "", address: "" });
      } else {
        alert("❌ Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("❌ Connection error");
    }
  };

  // ✅ Form change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="order-page">
      <Navbar />
<video autoPlay loop muted className="bg-video">
  <source src="https://www.shutterstock.com/shutterstock/videos/1056189248/preview/stock-footage-pizza-margherita-take-a-slice-of-homemade-pizza-with-long-strings-of-melted-cheese-and-tomatoes.mp4" type="video/mp4" />
</video>
      <h2 className="title">🍔 Food Menu</h2>

      {/* PRODUCTS */}
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* CART SECTION */}
      <div className="cart-section">
        <h3>🛒 Your Cart</h3>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <div className="table-box">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>₹{item.price}</td>
                    <td>{item.qty}</td>
                    <td>₹{item.price * item.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="total mt-3">
              <strong>Grand Total: ₹{grandTotal}</strong>
            </div>
          </div>
        )}
      </div>

      {/* CONTACT FORM (FOR ORDERING) */}
      <div className="order-form">
        <h3>📍 Delivery Details</h3>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
          <button type="button" onClick={placeOrder}>
            🚀 Place Order (COD)
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Order;