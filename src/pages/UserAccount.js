

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AccountPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    phoneNumber: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    // Fetch user data on component mount (e.g., from an API or global state)
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://architecture-server.vercel.app/api/account", {
          headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }, // Ensure user is authenticated
        });
        console.log(localStorage.getItem("authToken"));
        setFormData(response.data); // Assuming the response contains user details
      } catch (err) {
        toast.error("Failed to fetch user data", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateFields = () => {
    const errors = {};

    if (!formData.FirstName.trim()) {
      errors.FirstName = "First Name is required";
    }

    if (!formData.LastName.trim()) {
      errors.LastName = "Last Name is required";
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number must be exactly 10 digits";
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
      const response = await axios.put(
        "https://architecture-server.vercel.app/api/update",
        formData,
        { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` } }
      );

      if (response.status === 200) {
        toast.success("User details updated successfully", {
          position: "top-center",
          autoClose: 2000,
        });
        navigate("/");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div>
      {/* First Row with Background Image and Heading */}
      <div
        style={{
          height: "300px",
          backgroundImage: "url('/images/banner.jpg')", // Change URL to your background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Heading in the Center of Background */}
        <h2 style={{ fontSize: "36px", color: "white", fontWeight: "bold", textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)" }}>
          Update Account
        </h2>
      </div>

      {/* Second Row with Form */}
      <div style={{ maxWidth: "600px", margin: "50px auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
            <div style={{ flex: "1", marginRight: "10px" }}>
              <label>First Name</label>
              <input
                name="FirstName"
                type="text"
                value={formData.FirstName}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px", marginBottom: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
              {validationErrors.FirstName && <p>{validationErrors.FirstName}</p>}
            </div>
            <div style={{ flex: "1", marginLeft: "10px" }}>
              <label>Last Name</label>
              <input
                name="LastName"
                type="text"
                value={formData.LastName}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px", marginBottom: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
              {validationErrors.LastName && <p>{validationErrors.LastName}</p>}
            </div>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              disabled
              style={{ width: "100%", padding: "8px", marginBottom: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Phone Number</label>
            <input
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginBottom: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
            />
            {validationErrors.phoneNumber && <p>{validationErrors.phoneNumber}</p>}
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "rgb(96, 63, 131)",
                color: "white",
                fontSize: "16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;
