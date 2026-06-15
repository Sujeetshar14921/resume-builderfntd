import React, { useState } from "react";
import api from "../configs/api";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();

  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");

  const [state, setState] = useState(urlState || "login");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await api.post(
        `/api/users/${state}`,
        formData
      );

      dispatch(login(data));
      localStorage.setItem("token", data.token);

      toast.success(data.message);
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Resume Builder
          </h1>

          <p className="text-slate-500 mt-2">
            Create professional ATS-friendly resumes
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8"
        >
          <h2 className="text-2xl font-bold text-slate-900 text-center">
            {state === "login"
              ? "Welcome Back"
              : "Create Account"}
          </h2>

          <p className="text-slate-500 text-center mt-2 mb-8">
            {state === "login"
              ? "Login to continue"
              : "Create your account to get started"}
          </p>

          {state !== "login" && (
            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
              />
            </div>
          )}

          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
            />
          </div>

          <div className="mt-3 text-right">
            <button
              type="button"
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 mt-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all disabled:opacity-70"
          >
            {loading
              ? "Please wait..."
              : state === "login"
              ? "Login"
              : "Create Account"}
          </button>

          <div className="mt-6 text-center text-sm text-slate-500">
            {state === "login"
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              type="button"
              onClick={() =>
                setState(
                  state === "login"
                    ? "register"
                    : "login"
                )
              }
              className="ml-2 text-indigo-600 font-semibold hover:underline"
            >
              {state === "login"
                ? "Sign Up"
                : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;