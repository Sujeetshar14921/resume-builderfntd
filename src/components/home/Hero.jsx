import React from "react";
import {
  ArrowRight,
  Sparkles,
  CheckCircle,
  FileText,
  Wand2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0">

        {/* Aurora */}
        <div className="absolute -top-20 left-1/4 w-[700px] h-[700px] bg-indigo-300/30 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-purple-300/30 rounded-full blur-[140px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right,#6366f1 1px,transparent 1px),
              linear-gradient(to bottom,#6366f1 1px,transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />

      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* Top Content */}

        <div className="text-center">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium">
            <Sparkles size={16} />
            AI Powered Resume Builder
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            Create Resumes
            <br />
            That Get You
            <span className="text-indigo-600"> Hired</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-slate-600">
            Build ATS-friendly resumes, improve your profile with AI,
            and download professional resumes in minutes.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <button
              onClick={() => navigate("/app")}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-semibold flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
            >
              Create Resume
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => navigate("/app")}
              className="px-8 py-4 bg-white border border-slate-300 rounded-2xl font-semibold hover:border-indigo-500 hover:shadow-lg transition"
            >
              Upload Resume
            </button>

          </div>

        </div>

        {/* ================= RESUME STACK ================= */}

        <div className="relative mt-24 flex justify-center">

          {/* Floating ATS */}

          <div className="hidden lg:flex absolute left-10 top-24 bg-green-500 text-white px-5 py-4 rounded-2xl shadow-2xl items-center gap-2">
            <CheckCircle size={18} />
            ATS Score 96%
          </div>

          {/* Floating AI */}

          <div className="hidden lg:flex absolute right-10 top-10 bg-indigo-600 text-white px-5 py-4 rounded-2xl shadow-2xl items-center gap-2">
            <Wand2 size={18} />
            AI Optimized
          </div>

          {/* Floating PDF */}

          <div className="hidden lg:flex absolute right-0 bottom-10 bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-2xl items-center gap-2">
            <FileText size={18} />
            PDF Ready
          </div>

          {/* Stack Container */}

          <div className="relative w-full max-w-xl h-[420px]">

            {/* Resume 3 */}

            <div className="absolute top-0 left-12 right-0 h-[300px] bg-white rounded-3xl border border-slate-200 shadow-xl rotate-[10deg]" />

            {/* Resume 2 */}

            <div className="absolute top-6 left-6 right-0 h-[300px] bg-white rounded-3xl border border-slate-200 shadow-xl rotate-[5deg]" />

            {/* Main Resume */}

            <div className="absolute top-12 left-0 right-0 bg-white rounded-3xl border border-slate-200 shadow-[0_30px_80px_rgba(0,0,0,0.12)] p-8 hover:-translate-y-3 transition-all duration-500">

              {/* Profile */}

              <div className="flex items-center gap-5">

                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/Sujeet_Sharma.png"
                    alt="Sujeet Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Sujeet Sharma
                  </h2>

                  <p className="text-slate-500">
                    Full Stack Developer
                  </p>
                </div>

              </div>

              {/* Resume Content */}

              <div className="mt-8 space-y-4">

                <div className="h-3 bg-slate-200 rounded-full"></div>

                <div className="h-3 bg-slate-200 rounded-full"></div>

                <div className="h-3 bg-slate-200 rounded-full w-4/5"></div>

                <div className="pt-5">

                  <div className="w-32 h-4 rounded-full bg-indigo-100 mb-4"></div>

                  <div className="space-y-3">

                    <div className="h-2 bg-slate-200 rounded-full"></div>

                    <div className="h-2 bg-slate-200 rounded-full"></div>

                    <div className="h-2 bg-slate-200 rounded-full w-3/4"></div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= STATS ================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-24">

          <div className="bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-sm">
            <h3 className="text-4xl font-bold text-slate-900">
              50K+
            </h3>
            <p className="text-slate-500 mt-2">
              Resumes Created
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-sm">
            <h3 className="text-4xl font-bold text-slate-900">
              10K+
            </h3>
            <p className="text-slate-500 mt-2">
              Active Users
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-sm">
            <h3 className="text-4xl font-bold text-slate-900">
              96%
            </h3>
            <p className="text-slate-500 mt-2">
              ATS Optimized
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;