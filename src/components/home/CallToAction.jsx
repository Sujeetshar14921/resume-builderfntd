import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Build Your Resume?
          </h2>

          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Create a professional ATS-friendly resume in minutes.
          </p>

          <button
            onClick={() => navigate("/app")}
            className="mt-6 inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-medium hover:scale-105 transition-all"
          >
            Get Started
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default CallToAction;