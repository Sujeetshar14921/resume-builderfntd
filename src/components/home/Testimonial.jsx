import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Developer",
    text: "This resume builder helped me create a professional ATS-friendly resume in less than 10 minutes. I received interview calls within a week.",
  },
  {
    name: "Priya Verma",
    role: "UI/UX Designer",
    text: "The AI suggestions were surprisingly accurate. It improved my resume content and presentation significantly.",
  },
  {
    name: "Aman Gupta",
    role: "Data Analyst",
    text: "Clean templates, easy customization, and instant PDF downloads. One of the best resume tools I've used.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium">
            TESTIMONIALS
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Loved by Job Seekers
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Thousands of professionals use our platform
            to build resumes and land better opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                border
                border-slate-200
                hover:shadow-xl
                transition-all
              "
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-600 leading-7">
                "{item.text}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white font-semibold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonial;