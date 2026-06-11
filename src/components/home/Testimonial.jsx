<<<<<<< HEAD
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
=======
import React from 'react'
import Title from './Title'
import { BookUserIcon } from 'lucide-react'

const Testimonial = () => {

    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Briar Martin',
            handle: '@neilstellar',
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Avery Johnson',
            handle: '@averywrites',
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Jordan Lee',
            handle: '@jordantalks',
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Avery Johnson',
            handle: '@averywrites',
        },
    ];

    const CreateCard = ({ card }) => (
        <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0">
            <div className="flex gap-2">
                <img className="size-11 rounded-full" src={card.image} alt="User Image" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p>{card.name}</p>
                        <svg className="mt-0.5 fill-green-500" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
                        </svg>
                    </div>
                    <span className="text-xs text-slate-500">{card.handle}</span>
                </div>
            </div>
            <p className="text-sm py-4 text-gray-800">Radiant made undercutting all of our competitors an absolute breeze.</p>
        </div>
    );


  return (
    <>
    <div id='testimonials' className='flex flex-col items-center my-10 scroll-mt-12'>
    <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-6 py-1.5">
        <BookUserIcon className="size-4.5 stroke-green-600"/>
        <span>Testimonials</span>
    </div>
    <Title title="Don't just take our words" description="Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review."/>
    </div>
    <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
            {[...cardsData, ...cardsData].map((card, index) => (
                <CreateCard key={index} card={card} />
            ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
    </div>

    <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
            {[...cardsData, ...cardsData].map((card, index) => (
                <CreateCard key={index} card={card} />
            ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
    </div>
    <style>{`
    @keyframes marqueeScroll {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
    }

    .marquee-inner {
        animation: marqueeScroll 25s linear infinite;
    }

    .marquee-reverse {
        animation-direction: reverse;
    }
`}</style>

 </>
  )
}

export default Testimonial
>>>>>>> 1200b9124667ff97b1ee242db0a797198649b165
