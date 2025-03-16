import React, { useEffect } from "react";
import Partner1 from "../../assets/partner1.jpg";
import Partner2 from "../../assets/partner2.jpg";
import Partner3 from "../../assets/partner3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-4xl font-bold text-blue-900 dark:text-blue-400 dark:text-shadow-lg">
          Our Partners
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Partner1}
                alt="Partner 1"
                className="mx-auto h-[300px] w-full object-contain transition duration-700 hover:scale-105"
              />
            </div>
            <h1 className="pt-2 text-center text-xl font-bold text-blue-900">
              Mallikarjuna Bennur
            </h1>
          </div>

          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Partner2}
                alt="Partner 2"
                className="mx-auto h-[300px] w-full object-contain transition duration-700 hover:scale-105"
              />
            </div>
            <h1 className="pt-2 text-center text-xl font-bold text-blue-900">
              Veeranna Bennur
            </h1>
          </div>

          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Partner3}
                alt="Partner 3"
                className="mx-auto h-[300px] w-full object-contain transition duration-700 hover:scale-105"
              />
            </div>
            <h1 className="pt-2 text-center text-xl font-bold text-blue-900">
              Rudresh Bennur
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
