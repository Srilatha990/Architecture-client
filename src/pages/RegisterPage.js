


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons from react-icons

// const SignupForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     FirstName: "",
//     LastName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     confirmpassword: "",
//     profileImage: null,
//   });

//   const [validationErrors, setValidationErrors] = useState({});
//   const [buttonBackground, setButtonBackground] = useState("#4CAF50");

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e) => {
//     if (e.target.name === "profileImage") {
//       setFormData({ ...formData, profileImage: e.target.files[0] });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const validateFields = () => {
//     const errors = {};

//     if (!formData.FirstName.trim()) {
//       errors.FirstName = "First Name is required";
//     }

//     if (!formData.LastName.trim()) {
//       errors.LastName = "Last Name is required";
//     }

//     if (!formData.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Enter a valid email address";
//     }

//     if (!formData.phoneNumber.trim()) {
//       errors.phoneNumber = "Phone number is required";
//     } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
//       errors.phoneNumber = "Phone number must be exactly 10 digits";
//     }

//     if (!formData.password) {
//       errors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       errors.password = "Password must be at least 6 characters";
//     }

//     if (!formData.confirmpassword) {
//       errors.confirmpassword = "Confirm Password is required";
//     } else if (formData.password !== formData.confirmpassword) {
//       errors.confirmpassword = "Passwords do not match";
//     }

//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = validateFields();

//     if (Object.keys(errors).length > 0) {
//       setValidationErrors(errors);
//       return;
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append("FirstName", formData.FirstName);
//     formDataToSend.append("LastName", formData.LastName);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("phoneNumber", formData.phoneNumber);
//     formDataToSend.append("password", formData.password);
//     formDataToSend.append("confirmpassword", formData.confirmpassword);
//     formDataToSend.append("profileImage", formData.profileImage);

//     setValidationErrors({});

//     try {
//       const response = await axios.post(
//         "https://architecture-server.vercel.app/api/register",
//         formDataToSend,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       if (response.status === 201) {
//         toast.success(response.data.message, {
//           position: "top-center",
//           autoClose: 2000,
//         });
//         setTimeout(() => navigate("/otp"), 500); // Redirect to OTP page
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Something went wrong!", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     }
//   };

//   const handleMouseOver = () => {
//     setButtonBackground("#45a049");
//   };

//   const handleMouseOut = () => {
//     setButtonBackground("#4CAF50");
//   };

//   const handleLoginRedirect = () => {
//     navigate("/login");
//   };

//   return (
//     <div>
//       {/* First Row with Background Image and Heading */}
//       <div
//         style={{
//           backgroundImage: 'url("/images/banner.jpg")', // Replace with your image URL
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "250px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           color: "white",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", fontWeight: "bold" }}>Register</h2>
//       </div>

//       {/* Second Row with the Signup Form */}
//       <div
//         style={{
//           maxWidth: "600px",
//           margin: "50px auto",
//           padding: "20px",
//           backgroundColor: "#f9f9f9",
//           borderRadius: "8px",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <ToastContainer />
//         <form onSubmit={handleSubmit}>
//           <div style={{ textAlign: "center", marginBottom: "20px" }}>
//             <input
//               name="profileImage"
//               type="file"
//               onChange={handleChange}
//               style={{ marginBottom: "10px" }}
//             />
//             {validationErrors.profileImage && <p>{validationErrors.profileImage}</p>}
//           </div>

//           <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
//             <div style={{ flex: "1", marginRight: "10px" }}>
//               <label>First Name</label>
//               <input
//                 name="FirstName"
//                 type="text"
//                 value={formData.FirstName}
//                 onChange={handleChange}
//                 style={{
//                   width: "100%",
//                   padding: "8px",
//                   marginBottom: "8px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//               {validationErrors.FirstName && <p>{validationErrors.FirstName}</p>}
//             </div>
//             <div style={{ flex: "1", marginLeft: "10px" }}>
//               <label>Last Name</label>
//               <input
//                 name="LastName"
//                 type="text"
//                 value={formData.LastName}
//                 onChange={handleChange}
//                 style={{
//                   width: "100%",
//                   padding: "8px",
//                   marginBottom: "8px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//               {validationErrors.LastName && <p>{validationErrors.LastName}</p>}
//             </div>
//           </div>

//           <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
//             <div style={{ flex: "1", marginRight: "10px" }}>
//               <label>Email</label>
//               <input
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={{
//                   width: "100%",
//                   padding: "8px",
//                   marginBottom: "8px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//               {validationErrors.email && <p>{validationErrors.email}</p>}
//             </div>
//             <div style={{ flex: "1", marginLeft: "10px" }}>
//               <label>Phone Number</label>
//               <input
//                 name="phoneNumber"
//                 type="tel"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 style={{
//                   width: "100%",
//                   padding: "8px",
//                   marginBottom: "8px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//               {validationErrors.phoneNumber && <p>{validationErrors.phoneNumber}</p>}
//             </div>
//           </div>

//           <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
//             <div style={{ flex: "1", marginRight: "10px" }}>
//               <label>Password</label>
//               <div style={{ position: "relative" }}>
//                 <input
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   value={formData.password}
//                   onChange={handleChange}
//                   style={{
//                     width: "100%",
//                     padding: "8px",
//                     marginBottom: "8px",
//                     border: "1px solid #ccc",
//                     borderRadius: "4px",
//                   }}
//                 />
//                 <span
//                   onClick={() => setShowPassword(!showPassword)}
//                   style={{
//                     position: "absolute",
//                     right: "10px",
//                     top: "10px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </span>
//               </div>
//               {validationErrors.password && <p>{validationErrors.password}</p>}
//             </div>
//             <div style={{ flex: "1", marginLeft: "10px" }}>
//               <label>Confirm Password</label>
//               <div style={{ position: "relative" }}>
//                 <input
//                   name="confirmpassword"
//                   type={showConfirmPassword ? "text" : "password"}
//                   value={formData.confirmpassword}
//                   onChange={handleChange}
//                   style={{
//                     width: "100%",
//                     padding: "8px",
//                     marginBottom: "8px",
//                     border: "1px solid #ccc",
//                     borderRadius: "4px",
//                   }}
//                 />
//                 <span
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   style={{
//                     position: "absolute",
//                     right: "10px",
//                     top: "10px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                 </span>
//               </div>
//               {validationErrors.confirmpassword && <p>{validationErrors.confirmpassword}</p>}
//             </div>
//           </div>

//           <div style={{ textAlign: "center" }}>
//             <button
//               type="submit"
//               style={{
//                 width: "100%",
//                 padding: "12px",
//                 backgroundColor: buttonBackground,
//                 color: "white",
//                 fontSize: "16px",
//                 border: "none",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//                 transition: "background-color 0.3s",
//               }}
//               onMouseOver={handleMouseOver}
//               onMouseOut={handleMouseOut}
//             >
//               Signup
//             </button>
//           </div>
//         </form>

//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <p>
//             Already have an account?{" "}
//             <span
//               onClick={handleLoginRedirect}
//               style={{ color: "#4CAF50", cursor: "pointer" }}
//             >
//               Login
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons from react-icons

// const SignupForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     FirstName: "",
//     LastName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     confirmpassword: "",
//   });

//   const [validationErrors, setValidationErrors] = useState({});
//   const [buttonBackground, setButtonBackground] = useState("#4CAF50");

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateFields = () => {
//     const errors = {};

//     if (!formData.FirstName.trim()) {
//       errors.FirstName = "First Name is required";
//     }

//     if (!formData.LastName.trim()) {
//       errors.LastName = "Last Name is required";
//     }

//     if (!formData.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Enter a valid email address";
//     }

//     if (!formData.phoneNumber.trim()) {
//       errors.phoneNumber = "Phone number is required";
//     } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
//       errors.phoneNumber = "Phone number must be exactly 10 digits";
//     }

//     if (!formData.password) {
//       errors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       errors.password = "Password must be at least 6 characters";
//     }

//     if (!formData.confirmpassword) {
//       errors.confirmpassword = "Confirm Password is required";
//     } else if (formData.password !== formData.confirmpassword) {
//       errors.confirmpassword = "Passwords do not match";
//     }

//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = validateFields();

//     if (Object.keys(errors).length > 0) {
//       setValidationErrors(errors);
//       return;
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append("FirstName", formData.FirstName);
//     formDataToSend.append("LastName", formData.LastName);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("phoneNumber", formData.phoneNumber);
//     formDataToSend.append("password", formData.password);
//     formDataToSend.append("confirmpassword", formData.confirmpassword);

//     setValidationErrors({});

//     try {
//       const response = await axios.post(
//         "https://architecture-server.vercel.app/api/register",
//         formDataToSend,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       if (response.status === 201) {
//         toast.success(response.data.message, {
//           position: "top-center",
//           autoClose: 2000,
//         });
//         setTimeout(() => navigate("/otp"), 500); // Redirect to OTP page
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Something went wrong!", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     }
//   };

//   const handleMouseOver = () => {
//     setButtonBackground("#45a049");
//   };

//   const handleMouseOut = () => {
//     setButtonBackground("#4CAF50");
//   };

//   const handleLoginRedirect = () => {
//     navigate("/login");
//   };

//   return (
//     <div>
//       {/* First Row with Background Image and Heading */}
//       <div
//         style={{
//           backgroundImage: 'url("/images/banner.jpg")', // Replace with your image URL
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "250px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           color: "white",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", fontWeight: "bold" }}>Register</h2>
//       </div>

//       {/* Second Row with the Signup Form */}
//       <div
//         style={{
//           maxWidth: "600px",
//           margin: "50px auto",
//           padding: "20px",
//           backgroundColor: "#f9f9f9",
//           borderRadius: "8px",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <ToastContainer />
//         <form onSubmit={handleSubmit}>
//           {/* Removed the file input for profile image */}
          
//           <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
//             <div style={{ flex: "1", marginRight: "10px" }}>
//               <label>First Name</label>
//               <input
//                 name="FirstName"
//                 type="text"
//                 value={formData.FirstName}
//                 onChange={handleChange}
//                 style={{
//                   width: "100%",
//                   padding: "8px",
//                   marginBottom: "8px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//               {validationErrors.FirstName && <p>{validationErrors.FirstName}</p>}
//             </div>
//             <div style={{ flex: "1", marginLeft: "10px" }}>
//               <label>Last Name</label>
//               <input
//                 name="LastName"
//                 type="text"
//                 value={formData.LastName}
//                 onChange={handleChange}
//                 style={{
//                   width: "100%",
//                   padding: "8px",
//                   marginBottom: "8px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//               {validationErrors.LastName && <p>{validationErrors.LastName}</p>}
//             </div>
//           </div>

//           <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
//             <div style={{ flex: "1", marginRight: "10px" }}>
//               <label>Email</label>
//               <input
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={{
//                   width: "100%",
//                   padding: "8px",
//                   marginBottom: "8px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//               {validationErrors.email && <p>{validationErrors.email}</p>}
//             </div>
//             <div style={{ flex: "1", marginLeft: "10px" }}>
//               <label>Phone Number</label>
//               <input
//                 name="phoneNumber"
//                 type="tel"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 style={{
//                   width: "100%",
//                   padding: "8px",
//                   marginBottom: "8px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//               {validationErrors.phoneNumber && <p>{validationErrors.phoneNumber}</p>}
//             </div>
//           </div>

//           <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
//             <div style={{ flex: "1", marginRight: "10px" }}>
//               <label>Password</label>
//               <div style={{ position: "relative" }}>
//                 <input
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   value={formData.password}
//                   onChange={handleChange}
//                   style={{
//                     width: "100%",
//                     padding: "8px",
//                     marginBottom: "8px",
//                     border: "1px solid #ccc",
//                     borderRadius: "4px",
//                   }}
//                 />
//                 <span
//                   onClick={() => setShowPassword(!showPassword)}
//                   style={{
//                     position: "absolute",
//                     right: "10px",
//                     top: "10px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </span>
//               </div>
//               {validationErrors.password && <p>{validationErrors.password}</p>}
//             </div>
//             <div style={{ flex: "1", marginLeft: "10px" }}>
//               <label>Confirm Password</label>
//               <div style={{ position: "relative" }}>
//                 <input
//                   name="confirmpassword"
//                   type={showConfirmPassword ? "text" : "password"}
//                   value={formData.confirmpassword}
//                   onChange={handleChange}
//                   style={{
//                     width: "100%",
//                     padding: "8px",
//                     marginBottom: "8px",
//                     border: "1px solid #ccc",
//                     borderRadius: "4px",
//                   }}
//                 />
//                 <span
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   style={{
//                     position: "absolute",
//                     right: "10px",
//                     top: "10px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                 </span>
//               </div>
//               {validationErrors.confirmpassword && <p>{validationErrors.confirmpassword}</p>}
//             </div>
//           </div>

//           <div style={{ textAlign: "center" }}>
//             <button
//               type="submit"
//               style={{
//                 width: "100%",
//                 padding: "12px",
//                 backgroundColor: buttonBackground,
//                 color: "white",
//                 fontSize: "16px",
//                 border: "none",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//                 transition: "background-color 0.3s",
//               }}
//               onMouseOver={handleMouseOver}
//               onMouseOut={handleMouseOut}
//             >
//               Signup
//             </button>
//           </div>
//         </form>

//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <p>
//             Already have an account?{" "}
//             <span
//               onClick={handleLoginRedirect}
//               style={{ color: "#4CAF50", cursor: "pointer" }}
//             >
//               Login
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons from react-icons

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmpassword: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [buttonBackground, setButtonBackground] = useState("#4CAF50");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number must be exactly 10 digits";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmpassword) {
      errors.confirmpassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmpassword) {
      errors.confirmpassword = "Passwords do not match";
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

    // Reset validation errors
    setValidationErrors({});

    try {
      const response = await axios.post(
        "https://architecture-server.vercel.app/api/register", // Ensure your backend endpoint is correct
        {
          FirstName: formData.FirstName,
          LastName: formData.LastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          password: formData.password,
          confirmpassword: formData.confirmpassword,
        },
        {
          headers: {
            "Content-Type": "application/json", // Ensure correct content type
          },
        }
      );

      if (response.status === 201) {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => navigate("/otp"), 500); // Redirect to OTP page
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleMouseOver = () => {
    setButtonBackground("#45a049");
  };

  const handleMouseOut = () => {
    setButtonBackground("#4CAF50");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div>
      {/* First Row with Background Image and Heading */}
      <div
        style={{
          backgroundImage: 'url("/images/banner.jpg")', // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "36px", fontWeight: "bold" }}>Register</h2>
      </div>

      {/* Second Row with the Signup Form */}
      <div
        style={{
          maxWidth: "600px",
          margin: "50px auto",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          {/* First and Last Name Fields */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
            <div style={{ flex: "1", marginRight: "10px" }}>
              <label>First Name</label>
              <input
                name="FirstName"
                type="text"
                value={formData.FirstName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
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
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              {validationErrors.LastName && <p>{validationErrors.LastName}</p>}
            </div>
          </div>

          {/* Email and Phone Number Fields */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
            <div style={{ flex: "1", marginRight: "10px" }}>
              <label>Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              {validationErrors.email && <p>{validationErrors.email}</p>}
            </div>
            <div style={{ flex: "1", marginLeft: "10px" }}>
              <label>Phone Number</label>
              <input
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              {validationErrors.phoneNumber && <p>{validationErrors.phoneNumber}</p>}
            </div>
          </div>

          {/* Password and Confirm Password Fields */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
            <div style={{ flex: "1", marginRight: "10px" }}>
              <label>Password</label>
              <div style={{ position: "relative" }}>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
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
              {validationErrors.password && <p>{validationErrors.password}</p>}
            </div>
            <div style={{ flex: "1", marginLeft: "10px" }}>
              <label>Confirm Password</label>
              <div style={{ position: "relative" }}>
                <input
                  name="confirmpassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmpassword}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "10px",
                    cursor: "pointer",
                  }}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {validationErrors.confirmpassword && <p>{validationErrors.confirmpassword}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ marginBottom: "15px" }}>
            <button
              type="submit"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "rgb(96, 63, 131)",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Register
            </button>
          </div>
        </form>
        <div>
          <p>
            Already have an account?{" "}
            <span
              style={{ color: "rgb(96, 63, 131)", cursor: "pointer" }}
              onClick={handleLoginRedirect}
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
