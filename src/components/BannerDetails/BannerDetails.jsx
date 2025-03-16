import React from "react";

const BannerDetails = ({ img, title, description, reverse }) => {
  return (
    <section className="bg-slate-100 dark:bg-slate-900 dark:text-white py-10">
      <div
        className={`container grid grid-cols-1 md:grid-cols-2 items-center gap-8 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image Section */}
        <div
          data-aos={reverse ? "fade-left" : "fade-right"}
          data-aos-duration="400"
          data-aos-once="true"
        >
          <img
            src={img}
            alt={title}
            className="w-full max-w-md mx-auto rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-4 border-blue-200 dark:border-blue-800"
          />
        </div>

        {/* Text Section */}
        <div
          data-aos={reverse ? "fade-right" : "fade-left"}
          data-aos-duration="400"
          data-aos-once="true"
          className="flex flex-col gap-4 p-4"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-blue-700 dark:text-blue-300">
            {title}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {description}
          </p>

          {/* Conditional Rendering for "Why Choose Raviteja" Section */}
          {title === "Why Choose Raviteja Textiles?" && (
            <ul className="list-disc list-inside space-y-2">
              <li className="font-medium">
                Premium Quality: Exceptional fabrics and clothing for every occasion.
              </li>
              <li className="font-medium">
                Customer Satisfaction: We prioritize your happiness with every purchase.
              </li>
              <li className="font-medium">
                Wide Selection: A diverse range of clothing for men, women, children, and seniors.
              </li>
              <li className="font-medium">
                Modern & Traditional Designs: Tailored to suit festivals, celebrations, and daily wear.
              </li>
              <li className="font-medium">
                Trusted Brand: A household name in Davanagere, expanding to new horizons.
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default BannerDetails;
