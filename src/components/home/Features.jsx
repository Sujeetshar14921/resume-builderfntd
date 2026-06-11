import React from "react";
import {
  Sparkles,
  Upload,
  FileText,
  Download,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Resume Builder",
    description:
      "Generate professional resume content with AI assistance.",
  },
  {
    icon: Upload,
    title: "Upload Existing Resume",
    description:
      "Upload your resume and improve it instantly.",
  },
  {
    icon: FileText,
    title: "ATS Optimized",
    description:
      "Designed to pass modern Applicant Tracking Systems.",
  },
  {
    icon: Download,
    title: "Export & Download",
    description:
      "Download your resume in a clean professional format.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium">
            FEATURES
          </span>

          <h2 className="text-4xl font-bold mt-3 text-slate-900">
            Everything You Need
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Create, optimize and manage resumes with powerful
            AI tools designed for job seekers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-3xl
                  p-8
                  hover:shadow-xl
                  transition-all
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center">
                  <Icon className="text-indigo-600" size={28} />
                </div>

                <h3 className="text-xl font-semibold mt-6">
                  {feature.title}
                </h3>

                <p className="text-slate-500 mt-3 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Features;