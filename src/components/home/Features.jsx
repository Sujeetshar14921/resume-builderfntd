import React from "react";
import {
  Sparkles,
  Upload,
  FileText,
  Download,
  BarChart3,
} from "lucide-react";

const Features = () => {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="text-indigo-600 font-semibold">
            POWERFUL FEATURES
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Everything You Need
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Powerful tools designed to help you build
            job-winning resumes faster.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 auto-rows-[260px]">

          {/* Big Card */}

          <div className="lg:col-span-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">

            <Sparkles size={50} />

            <h3 className="text-3xl font-bold mt-6">
              AI Resume Builder
            </h3>

            <p className="mt-4 text-indigo-100">
              Generate professional resume content with
              intelligent AI assistance.
            </p>

            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full" />

          </div>

          {/* ATS */}

          <div className="bg-white rounded-3xl border p-8 hover:shadow-xl transition">
            <FileText className="text-green-500" size={40} />

            <h3 className="font-bold text-xl mt-5">
              ATS Friendly
            </h3>

            <p className="text-slate-500 mt-3">
              Optimized for modern applicant tracking systems.
            </p>

            <div className="mt-6 text-4xl font-bold text-green-500">
              96%
            </div>
          </div>

          {/* Upload */}

          <div className="bg-white rounded-3xl border p-8 hover:shadow-xl transition">
            <Upload className="text-indigo-600" size={40} />

            <h3 className="font-bold text-xl mt-5">
              Upload Resume
            </h3>

            <p className="text-slate-500 mt-3">
              Improve your existing resume instantly.
            </p>
          </div>

          {/* Analytics */}

          <div className="lg:col-span-2 bg-white rounded-3xl border p-8 hover:shadow-xl transition">

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">
                  Resume Analytics
                </h3>

                <p className="text-slate-500 mt-2">
                  Track score and improvements.
                </p>
              </div>

              <BarChart3
                className="text-indigo-600"
                size={50}
              />
            </div>

            <div className="mt-10 flex gap-4">

              <div className="h-24 w-8 bg-indigo-200 rounded-full"></div>
              <div className="h-32 w-8 bg-indigo-300 rounded-full"></div>
              <div className="h-20 w-8 bg-indigo-400 rounded-full"></div>
              <div className="h-40 w-8 bg-indigo-500 rounded-full"></div>
              <div className="h-28 w-8 bg-indigo-600 rounded-full"></div>

            </div>

          </div>

          {/* Download */}

          <div className="lg:col-span-2 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white">

            <Download size={45} />

            <h3 className="text-2xl font-bold mt-6">
              One Click Download
            </h3>

            <p className="text-slate-300 mt-3">
              Export resumes instantly in professional PDF format.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;