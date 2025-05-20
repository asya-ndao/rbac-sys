import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const {login} = useAuth()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password }
      );
      if(response.data.success) {
        // alert("Successfully login")
        login(response.data.user)
        localStorage.setItem("token", response.data.token)
        if (response.data.user.role === "admin") {
          navigate("/admin-dashboard")
        } else {
          navigate("/employee-dashboard")
        }

      }
    } catch (error) {
      console.error("login error: ", error);
      if(error.response && !error.response.data.success){
        setError(error.response.data.error)
      } else{
        setError("Server Error")
      }
    }
  };

  return (
    <div
      className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-purple-800
     from-50% to-purple-500 to-50% space-y-8"
    >
      <h2 className="font-semibold text-3xl text-white items-center">
        Authentication System and Role Management
      </h2>
      <div className="p-6 w-80 bg-purple-50 rounded-lg shadow-2xl shadow-purple-950 border-4 border-purple-800">
        <h2 className="text-2xl text-center font-bold mb-4">Login</h2>
         {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md border-gray-400 outline-purple-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="border border-gray-400 w-full px-3 py-2 rounded-md outline-purple-700"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox cursor-pointer text-purple-800" />
              <span className="ml-2 text-gray-700"> Remember Me </span>
            </label>
            <a href="#" className="text-purple-500">
              Forgot Password?
            </a>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-800 w-full text-white py-2 cursor-pointer rounded-md transition-all duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
