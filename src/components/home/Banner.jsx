<<<<<<< HEAD
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
=======
import React from 'react'

const Banner = () => {
  return ( 
    <div className="w-full py-2.5 font-medium text-sm text-green-800 text-center bg-gradient-to-r from-[#ABFF7E] to-[#FDFEFF]">
        <p><span className="px-3 py-1 rounded-lg text-white bg-green-600 mr-2">New</span>AI Feature Added</p>
    </div>
  )
}

export default Banner
>>>>>>> 1200b9124667ff97b1ee242db0a797198649b165
