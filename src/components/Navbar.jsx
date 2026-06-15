// src/components/Navbar.jsx

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../app/features/authSlice";
import { LogOut, User } from "lucide-react";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const logoutUser = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition overflow-hidden">
            <img src="icons8-r-96.png" alt="Logo" className="w-full h-full object-cover" />
          </div>

          <div className="leading-tight">
            <h1 className="text-lg font-bold text-slate-900">
              Resume Builder
            </h1>
            <p className="text-xs text-slate-500">
              AI Powered ATS Resumes
            </p>
          </div>
        </Link>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center gap-3">

          {/* USER BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-xl hover:shadow transition"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center font-semibold">
              {user?.name?.charAt(0)?.toUpperCase() || <User size={16} />}
            </div>

            <div className="hidden sm:block text-left">
              <p className="text-sm font-semibold text-slate-900 leading-tight">
                {user?.name || "User"}
              </p>
              <p className="text-xs text-slate-500">Account</p>
            </div>
          </button>

          {/* DROPDOWN */}
          {open && (
            <div className="absolute right-0 top-14 w-44 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">

              <button
                onClick={logoutUser}
                className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50"
              >
                <LogOut size={16} />
                Logout
              </button>

            </div>
          )}

        </div>
      </div>
    </header>
  );
};

export default Navbar;