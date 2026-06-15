import React from "react";
import { Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-slate-950 border-b border-slate-800">

      {/* Glow Effects */}

      <div className="absolute left-0 top-0 w-72 h-72 bg-indigo-600/20 blur-[120px]" />
      <div className="absolute right-0 top-0 w-72 h-72 bg-purple-600/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4 text-center">

          <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full">

            <CheckCircle
              size={16}
              className="text-green-400"
            />

            <span className="text-green-400 text-sm font-medium">
              AI Resume Builder Active
            </span>

          </div>

          <div className="flex items-center gap-2 text-slate-300">

            <Sparkles
              size={16}
              className="text-indigo-400"
            />

            <span>
              Create ATS-Friendly Resumes &
              Get More Interview Calls
            </span>

          </div>

          <button
            onClick={() => navigate("/app")}
            className="
              group
              flex
              items-center
              gap-2
              text-white
              font-medium
              hover:text-indigo-400
              transition
            "
          >
            Start Building

            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition"
            />
          </button>

        </div>

      </div>
    </div>
  );
};

export default Banner;