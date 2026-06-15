import React from "react";
import { ArrowRight, CheckCircle2, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-[40px] bg-slate-950 p-10 md:p-16">

          {/* Background Glow */}

          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[120px]" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}

            <div>

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-indigo-300 text-sm">
                🚀 Get More Interviews
              </span>

              <h2 className="mt-6 text-5xl md:text-6xl font-bold text-white leading-tight">
                Your Next Job
                <br />
                Starts With a
                <span className="text-indigo-400">
                  {" "}Better Resume
                </span>
              </h2>

              <p className="mt-6 text-slate-400 text-lg leading-8 max-w-xl">
                Build a professional ATS-friendly resume and
                increase your chances of getting shortlisted
                by recruiters.
              </p>

              <button
                onClick={() => navigate("/app")}
                className="mt-10 bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                Start Building
                <ArrowRight size={18} />
              </button>

            </div>

            {/* Right Side */}

            <div className="relative flex justify-center">

              {/* Resume Approved Card */}

              <div className="bg-white rounded-3xl p-8 w-[340px] shadow-2xl rotate-[-5deg]">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2
                      size={28}
                      className="text-green-600"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Resume Approved
                    </h3>

                    <p className="text-sm text-slate-500">
                      ATS Score: 96%
                    </p>
                  </div>

                </div>

                <div className="mt-8 space-y-3">

                  <div className="h-3 bg-slate-200 rounded-full"></div>

                  <div className="h-3 bg-slate-200 rounded-full"></div>

                  <div className="h-3 bg-slate-200 rounded-full w-3/4"></div>

                </div>

              </div>

              {/* Recruiter Notification */}

              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-5 rounded-2xl shadow-xl">

                <div className="flex items-center gap-3">

                  <Briefcase size={20} />

                  <div>
                    <p className="text-sm font-semibold">
                      Recruiter Viewed
                    </p>

                    <p className="text-xs text-indigo-100">
                      3 New Opportunities
                    </p>
                  </div>

                </div>

              </div>

              {/* Floating Badge */}

              <div className="absolute -top-5 -left-5 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium">
                +80% Better Visibility
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CallToAction;