import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import './Login.css'
export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    alert(`Logged in with: ${form.email}`);
  };

  return (
    <div>
      <div className="cantenar min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <Navbar />
        <div className="login w-full max-w-md shadow-xl rounded-2xl p-8">
          <p className="p1"></p>
          <form onSubmit={handleSubmit} className="form1 p-5 rounded-4 space-y-5 ">
            <h2 className=" text-2xl font-bold text-center">Login</h2>
            <br />
            <div>
              <label className="block mb-2 font-medium">Email</label><br />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email..."
                className="imput w-full border  rounded-4 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <br />
            <div>
              <label className="block  font-medium">Password</label><br />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password..."
                className="imput w-full rounded-4 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <br />
            <button
              type="submit"
              className="butt w-full bg-red-500 hover:bg-red-600 text-black rounded-xl transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <br /><br />
      <Footer />
    </div>
  );
}
