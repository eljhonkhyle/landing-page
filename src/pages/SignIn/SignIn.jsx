import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./form.css";
import SignUpImage from "../../assets/Logo1.png";
import { FcGoogle } from "react-icons/fc";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from "../../firebaseConfig.js"; // ✅ Import functions
import { toast } from "sonner"; // ✅ Import Toast Sonner

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors before validating
    setErrors({});

    let errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return; // Stop execution if there are errors
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("Signed in user:", userCredential.user);

      // ✅ Show toast on success
      toast.success("Login Successful", {
        description: "Welcome back!",
        duration: 2000,
        position: "top-right",
        style: {
          backgroundColor: "#e9f7ef", // Light green background
          color: "#1e8449", // Dark green text
          borderRadius: "8px",
          padding: "12px",
          fontSize: "14px",
          fontWeight: "bold",
        },
      });

      const user = userCredential.user;

      if (user.email === "havocproperties@gmail.com") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (error) {
      setErrors({ email: "Invalid credentials" });

      // ❌ Show toast for errors
      toast.error("Login Failed", {
        description: "Invalid email or password. Please try again.",
        duration: 2000,
        position: "top-right",
        style: {
          backgroundColor: "#fdecea", // Light red background
          color: "#c0392b", // Dark red text
          borderRadius: "8px",
          padding: "12px",
          fontSize: "14px",
          fontWeight: "bold",
        },
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        navigate("/home"); // ✅ Redirect after Google Sign-in
      }
    } catch (error) {
      console.error("Google Sign-In failed:", error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        {/* Left Side - Form */}
        <div className="signup-form">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <button type="submit" className="submit-button">
              Sign In
            </button>

            <span className="divider">Or</span>

            <button
              type="button"
              className="google-button"
              onClick={handleGoogleSignIn} // Correct function
            >
              <FcGoogle className="google-icon" size={18} /> Sign in with Google
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="signup-image">
          <img src={SignUpImage} alt="Sign up" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
