import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import GalleryImage1 from "../../assets/1.jpg";
import GalleryImage2 from "../../assets/2.jpg";
import GalleryImage3 from "../../assets/3.jpg";
import GalleryImage4 from "../../assets/4.jpg";
import GalleryImage5 from "../../assets/5.jpg";
import GalleryImage6 from "../../assets/6.jpg";
import GalleryImage7 from "../../assets/7.jpg";
import GalleryImage8 from "../../assets/8.jpg";
import GalleryImage9 from "../../assets/9.jpg";
import GalleryImage10 from "../../assets/10.jpg";
import GalleryImage11 from "../../assets/11.jpg";
import GalleryImage12 from "../../assets/12.jpg";
import Gallery from "./components/Gallery/Gallery";
import "./Gallery.css"; // Import custom CSS for styling

const Gallery = () => {
  const galleryImages = [
    {
      original: GalleryImage1,
      thumbnail: GalleryImage1,

    },
    {
      original: GalleryImage2,
      thumbnail: GalleryImage2,

    },
    {
      original: GalleryImage3,
      thumbnail: GalleryImage3,

    },
    {
        original: GalleryImage4,
        thumbnail: GalleryImage4,

      },
      {
        original: GalleryImage5,
        thumbnail: GalleryImage5,

      },
      {
        original: GalleryImage6,
        thumbnail: GalleryImage6,

      },
      {
        original: GalleryImage1,
        thumbnail: GalleryImage1,

      },
      {
        original: GalleryImage7,
        thumbnail: GalleryImage7,

      },
      {
        original: GalleryImage8,
        thumbnail: GalleryImage8,

      },
      {
        original: GalleryImage9,
        thumbnail: GalleryImage9,

      },
      {
        original: GalleryImage10,
        thumbnail: GalleryImage10,

      },
      {
        original: GalleryImage11,
        thumbnail: GalleryImage11,

      },
      {
        original: GalleryImage12,
        thumbnail: GalleryImage12,

      },
  ];

  return (
    <section
      className="container mx-auto mb-10 py-8"

      data-aos-duration="500"
    >
      <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-4xl font-bold text-blue-900 dark:text-blue-400 dark:text-shadow-lg">
        Raviteja Gallery
      </h1>
      <div className="mx-auto w-3/4">
        <ImageGallery
          items={galleryImages}
          showThumbnails={true} // Show thumbnails below the main image
          showPlayButton={true} // Show play button for autoplay
          showFullscreenButton={false} // Show fullscreen button
          showBullets={false} // Show bullets for navigation
          showIndex={true} // Show index of the current slide
          infinite={true} // Allow infinite sliding
          slideDuration={500} // Slide transition duration in ms
          slideInterval={3000} // Autoplay interval in ms
          thumbnailPosition="bottom" // Position of the thumbnail bar
          useTranslate3D={true} // Use 3D transforms for smooth animations
          additionalClass="custom-gallery" // Custom class for styling
        />
      </div>
    </section>
  );
};

export default Gallery;