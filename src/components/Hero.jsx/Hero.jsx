import React from "react";
import Logo from "../../assets/logo.png"; // Import your new logo file

const Hero = () => {
  return (
    <main className="bg-gradient-to-r from-blue-900 to-blue-800 pt-20 dark:bg-blue-900">
      <section className="container flex h-[850px] flex-col items-center justify-center md:h-[500px]">
        <div className="grid grid-cols-1 items-center gap-6 dark:text-white md:grid-cols-2">
          {/* Text Section */}
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left"
          >
            <h1 className="text-6xl font-extrabold text-white">
              Welcome to Raviteja Textiles
            </h1>
            <p>
              Located in the heart of Davanagere, known as the "Manchester City of Karnataka," Raviteja Textiles has become a trusted name in the textile industry.
              Established in 1996 by four visionary brothers, Raviteja Textiles began as a humble street-side store and has since grown into a prestigious brand with five successful showrooms in Davanagere.
            </p>
          </div>

          {/* Logo Section */}
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4 text-center"
          >
            <img
              src={Logo}
              alt="Company Logo"
              className="mt-2 max-w-full h-auto hover:drop-shadow-md mx-auto w-64 md:w-80" // Adjusted size for responsiveness
            />
            <p className="mt-1 text-5xl font-bold text-white"> {/* Reduced margin and font size */}
              ರವಿತೇಜ {/* Kannada text for "Raviteja Textiles" */}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;