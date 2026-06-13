import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">

        <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium">
          🚀 AI Resume Builder
        </span>

        <h1 className="mt-8 text-6xl lg:text-8xl font-bold tracking-tight text-slate-900">
          Create Resumes
          <br />
          That Get
          <span className="text-indigo-600"> Interviews</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-xl text-slate-600 leading-8">
          Create professional ATS-friendly resumes in minutes.
          Upload your existing resume, improve it with AI,
          and download job-ready resumes instantly.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-12">

          <button
            onClick={() => navigate("/app")}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold flex items-center gap-2"
          >
            Create Resume
            <ArrowRight size={18} />
          </button>

          <button
            onClick={() => navigate("/app")}
            className="px-8 py-4 border border-slate-300 hover:border-indigo-500 rounded-xl font-semibold"
          >
            Upload Resume
          </button>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-3 max-w-3xl mx-auto mt-20 border-t border-slate-200 pt-10">

          <div>
            <h3 className="text-4xl font-bold text-slate-900">
              10K+
            </h3>
            <p className="text-slate-500 mt-2">
              Active Users
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-slate-900">
              50K+
            </h3>
            <p className="text-slate-500 mt-2">
              Resumes Created
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-slate-900">
              95%
            </h3>
            <p className="text-slate-500 mt-2">
              ATS Score
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
