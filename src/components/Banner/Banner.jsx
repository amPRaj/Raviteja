import React from "react";
import ravitejaVideo from "../../assets/ravitejaVideo.mp4"; // Import the local video file

const Banner = () => {
  return (
    <main className="bg-blue-900">
      <section
        className="container mx-auto py-8 md:py-12 flex flex-col items-center"
      >
        {/* Video Section */}
        <div
          className="w-full md:w-3/4 lg:w-2/3"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <video
            className="aspect-video w-full rounded-lg shadow-lg"
            src={ravitejaVideo}
            controls
            muted
            autoPlay
            loop
            title="Raviteja Textiles Video"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Section */}
        <div
          className="mt-8 text-center text-white"

          data-aos-duration="1000"
        >
          <h1 className="text-3xl font-bold mb-4">Raviteja Textiles Legacy</h1>
          <p className="text-lg leading-relaxed">
            Raviteja Textiles has been at the forefront of the textile industry
            in Davanagere, earning the trust of customers across Karnataka. From
            casual wear to designer collections, we aim to deliver the best
            shopping experience.
            <br />
            Our mission is to continuously innovate, offering the latest trends
            while maintaining the charm of traditional craftsmanship. Thanks to
            the unwavering support of our customers, we are on a journey to
            expand beyond Davanagere, bringing Raviteja's excellence to new
            locations.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Banner;