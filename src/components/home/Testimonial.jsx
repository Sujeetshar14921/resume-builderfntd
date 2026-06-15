import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Developer",
    text: "This resume builder helped me create a professional ATS-friendly resume in less than 10 minutes.",
  },
  {
    name: "Priya Verma",
    role: "UI/UX Designer",
    text: "The AI suggestions were surprisingly accurate and improved my resume significantly.",
  },
  {
    name: "Aman Gupta",
    role: "Data Analyst",
    text: "Clean templates, ATS optimization and PDF export made job applications much easier.",
  },
  {
    name: "Neha Singh",
    role: "Frontend Developer",
    text: "I received more interview calls after updating my resume through this platform.",
  },
];

const Testimonial = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-50" />

        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-50" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium">
            Testimonials
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-6 text-slate-900">
            Trusted By
            <span className="text-indigo-600">
              {" "}Thousands
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-slate-500 text-lg">
            Professionals and students use our platform
            to create resumes that stand out.
          </p>

        </div>

        {/* Floating Layout */}

        <div className="grid lg:grid-cols-2 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className={`bg-white border border-slate-200 rounded-[32px] p-8 shadow-lg hover:shadow-2xl transition-all ${
                index % 2 === 0
                  ? "lg:translate-y-0"
                  : "lg:translate-y-12"
              }`}
            >
              <Quote
                size={40}
                className="text-indigo-200 mb-5"
              />

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-600 leading-8 text-lg">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4 mt-8">

                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold">
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
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonial;