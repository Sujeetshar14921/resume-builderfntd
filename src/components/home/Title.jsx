import React from "react";

const Title = ({ title, description }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4">
        ✨ Why Choose Us
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
        {title}
      </h2>

      <p className="mt-5 text-lg text-slate-500 leading-8">
        {description}
      </p>

    </div>
  );
};

export default Title;