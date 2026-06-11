<<<<<<< HEAD
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
=======
import React from 'react'

const CallToAction = () => {
  return (
    <div id='cta' className='border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto px-10 sm:px-16 mt-28'>
            <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-slate-200 py-16 sm:py-20 -mt-10 -mb-10 w-full">
                <p className="text-xl font-medium max-w-md text-slate-800">Build a Professional Resume That Helps You Stand Out and Get Hired</p>
                <a href="https://prebuiltui.com" className="flex items-center gap-2 rounded py-3 px-8 bg-green-600 hover:bg-green-700 transition text-white">
                    <span>Get Started</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
            </div>
        </div>
  )
}

export default CallToAction
>>>>>>> 1200b9124667ff97b1ee242db0a797198649b165
