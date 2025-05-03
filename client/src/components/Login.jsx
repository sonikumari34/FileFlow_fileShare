import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./HeaderComp";
import Footer from "./Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/upload");
    } else {
      setError("Please enter email and password.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      <div className="flex flex-1 items-center justify-center py-12 px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-6"
        >
          <h2 className="text-3xl font-bold text-center text-[#22223b] mb-2">Login</h2>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-full font-semibold shadow hover:scale-105 hover:shadow-lg transition-transform duration-200"
          >
            Login
          </button>
          <div className="text-center text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login; 