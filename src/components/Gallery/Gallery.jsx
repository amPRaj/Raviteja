import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallery.css"; // Import custom CSS for styling

const galleryImages = [
  { original: "/src/assets/1.jpg", thumbnail: "/src/assets/1.jpg" },
  { original: "/src/assets/2.jpg", thumbnail: "/src/assets/2.jpg" },
  { original: "/src/assets/3.jpg", thumbnail: "/src/assets/3.jpg" },
  { original: "/src/assets/4.jpg", thumbnail: "/src/assets/4.jpg" },
  { original: "/src/assets/5.jpg", thumbnail: "/src/assets/5.jpg" },
  { original: "/src/assets/6.jpg", thumbnail: "/src/assets/6.jpg" },
  { original: "/src/assets/7.jpg", thumbnail: "/src/assets/7.jpg" },
  { original: "/src/assets/8.jpg", thumbnail: "/src/assets/8.jpg" },
  { original: "/src/assets/9.jpg", thumbnail: "/src/assets/9.jpg" },
  { original: "/src/assets/10.jpg", thumbnail: "/src/assets/10.jpg" },
  { original: "/src/assets/11.jpg", thumbnail: "/src/assets/11.jpg" },
  { original: "/src/assets/12.jpg", thumbnail: "/src/assets/12.jpg" },
];

const Gallery = () => {
  return (
    <section className="container mx-auto mb-10 py-8" data-aos-duration="500">
      <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-4xl font-bold text-blue-900 dark:text-blue-400 dark:text-shadow-lg">
        Raviteja Gallery
      </h1>
      <div className="mx-auto w-3/4">
        <ImageGallery
          items={galleryImages}
          showThumbnails={true}
          showPlayButton={true}
          showFullscreenButton={false}
          showBullets={false}
          showIndex={true}
          infinite={true}
          slideDuration={500}
          slideInterval={3000}
          thumbnailPosition="bottom"
          useTranslate3D={true}
          additionalClass="custom-gallery"
        />
      </div>
    </section>
  );
};

export default Gallery;
