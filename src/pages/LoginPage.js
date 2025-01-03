



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [validationErrors, setValidationErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateFields = () => {
    const errors = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateFields();

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const response = await axios.post("https://architecture-server.vercel.app/api/login", formData);

      if (response.status === 200) {
        const { token, user } = response.data;

        if (token && user) {
          localStorage.setItem("authToken", token);
          localStorage.setItem("user", JSON.stringify(user)); // Save user data in localStorage

          console.log(user);

          toast.success("Login successful! Redirecting...", {
            position: "top-center",
            autoClose: 2000,
          });

          window.location.href = "/";
        } else {
          toast.error("Invalid login response", {
            position: "top-center",
            autoClose: 2000,
          });
        }
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid credentials!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleSignupRedirect = () => {
    navigate("/register");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* First Row: Background Image with Heading */}
      <div
        style={{
          flex: 1,
          backgroundImage: 'url("/images/banner.jpg")', // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "36px", fontWeight: "bold", textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}>
          Login
        </h1>
      </div>

      {/* Second Row: Login Form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            maxWidth: "400px",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <ToastContainer />
          <h2 style={{ marginBottom: "20px" }}>Login</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontSize: "14px",
                  textAlign: "left",
                }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "14px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              {validationErrors.email && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {validationErrors.email}
                </p>
              )}
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontSize: "14px",
                  textAlign: "left",
                }}
              >
                Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "14px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "10px",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {validationErrors.password && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {validationErrors.password}
                </p>
              )}
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                color: "#fff",
                backgroundColor: "rgb(96, 63, 131)",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "rgb(96, 63, 131)")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "rgb(96, 63, 131)")
              }
            >
              Login
            </button>
          </form>
          <p style={{ marginTop: "20px", fontSize: "14px" }}>
            Don't have an account?{" "}
            <button
              onClick={handleSignupRedirect}
              style={{
                color: "rgb(96, 63, 131)",
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onMouseEnter={(e) => (e.target.style.color = "rgb(96, 63, 131)")}
              onMouseLeave={(e) => (e.target.style.color = "rgb(96, 63, 131)")}
            >
              Signup
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

