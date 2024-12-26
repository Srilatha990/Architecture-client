

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://architecture-backend-five.vercel.app/api/verify-otp",
        formData
      );

      if (response.status === 200) {
        toast.success(response.data.message || "OTP verified successfully!", {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => navigate("/login"), 2000); // Redirect to login page after 2 seconds
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      {/* First Row: Background Image and Heading */}
      <div
        style={{
          height: "300px",
          backgroundImage: "url('./images/banner.jpg')", // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "32px", fontWeight: "bold" }}>Verify Your Account</h2>
      </div>

      {/* Second Row: OTP Verification Form */}
      <div
        style={{
          maxWidth: "400px",
          margin: "50px auto",
          textAlign: "center",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Toast Container for notifications */}
        <ToastContainer />
        <h2 style={{ marginBottom: "20px" }}>Verify OTP</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="otp"
              style={{
                display: "block",
                marginBottom: "5px",
                fontSize: "14px",
                textAlign: "left",
              }}
            >
              OTP
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "14px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              color: "#fff",
              backgroundColor: "#26a69a",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#00796b")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#26a69a")}
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
