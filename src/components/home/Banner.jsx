import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-center gap-3 text-center">

        <div className="flex items-center gap-2">
          <Sparkles size={18} />
          <span className="font-medium">
            New AI Resume Assistant is Live
          </span>
        </div>

        <span className="hidden md:block opacity-50">•</span>

        <p className="text-white/90">
          Generate ATS-friendly resumes and improve your interview chances.
        </p>

        <button
          onClick={() => navigate("/app")}
          className="flex items-center gap-2 bg-white text-indigo-700 px-4 py-2 rounded-full font-medium hover:scale-105 transition-all"
        >
          Try Now
          <ArrowRight size={16} />
        </button>

      </div>
    </div>
  );
};

export default Banner;