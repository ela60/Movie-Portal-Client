import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Handle form submission for email/password registration
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // Password validation
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordValidation.test(password)) {
      setPasswordError(
        "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      toast.error("Invalid password! Check requirements and try again.", {
        position: "top-right",
      });
      return;
    }

    // Clear password error if validation passed
    setPasswordError("");

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        // Show success toast
        toast.success("Registration successful! Welcome to the platform.", {
          position: "top-right",
        });

        // Redirect to Home after 2 seconds for user experience
        setTimeout(() => navigate("/"), 2000);
      })
      .catch((error) => {
        // Show error toast for failed registration
        toast.error(`Registration failed: ${error.message}`, {
          position: "top-right",
        });
      });
  };

  // Handle Google Social Login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);

        // Show success toast
        toast.success("Logged in successfully with Google!", {
          position: "top-right",
        });

        // Navigate to Home page
        navigate("/");
      })
      .catch((error) => {
        // Show error toast for failed Google login
        toast.error(`Google Login failed: ${error.message}`, {
          position: "top-right",
        });
      });
  };

  return (
    <div className="flex justify-center items-center py-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Type your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            {passwordError && (
              <p className="text-red-600 text-sm mt-2">{passwordError}</p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already Have An Account?{" "}
          <Link className="text-red-600 underline" to="/auth/login">
            Login
          </Link>
        </p>
        <div className="text-center mt-4">
          <p className="mb-2 font-semibold">Or Sign in with Google</p>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-secondary w-full"
          >
            Sign in with Google
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
