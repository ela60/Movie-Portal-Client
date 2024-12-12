import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form"; 
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { userLogin, googleSignIn, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const onSubmit = (data) => {
      console.log(data);
    const { email, password } = data;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        toast.error(
          error.message === "EMAIL_NOT_FOUND"
            ? "Email not found. Please register."
            : error.message === "INVALID_PASSWORD"
            ? "Incorrect password. Please try again."
            : "Login failed. Please try again."
        );
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Logged in with Google!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Google login error:", error.message);
        toast.error("Google sign-in failed. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <h2 className="text-2xl font-semibold text-center">Login Your Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="email"
              className={`input input-bordered ${
                errors.email ? "input-error" : ""
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              type="password"
              placeholder="password"
              className={`input input-bordered ${
                errors.password ? "input-error" : ""
              }`}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>

        {/* Google Sign-In & Registration Links */}
        <div className="text-center my-4">
          <p className="font-semibold">
            Don't Have An Account?{" "}
            <Link className="text-red-600 underline" to="/auth/register">
              Register
            </Link>
          </p>
          <button
            className="btn btn-outline mt-4 w-full"
            onClick={handleGoogleSignIn}
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
