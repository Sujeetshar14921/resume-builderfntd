<<<<<<< HEAD
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
=======
import React from 'react'

const Title = ({ title, description }) => {
  return (
    <div className='text-center mt-6 text-slate-700'>
        <h2 className='text-3xl sm:text-4xl font-medium'>{title}</h2>
        <p className='max-sm max-w-2xl mt-4 text-slate-500'>{description}</p>
    </div>
  )
}

export default Title
>>>>>>> 1200b9124667ff97b1ee242db0a797198649b165
