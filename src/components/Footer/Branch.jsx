import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";
import branch1 from "../../assets/branch1.jpg";
import branch2 from "../../assets/branch2.jpg";
import branch3 from "../../assets/branch3.jpg";
import branch4 from "../../assets/branch4.jpg";
import branch5 from "../../assets/branch5.jpg";

const branches = [
  {
    name: "Raviteja Textiles Main Branch",
    location: "Chamarajapete Circle",
    image: branch1,
    mapLink: "https://maps.app.goo.gl/TBNvVwFpgtoS4Am3A",
  },
  {
    name: "Raviteja Men's",
    location: "Chamarajapete",
    image: branch2,
    mapLink: "https://maps.app.goo.gl/TBNvVwFpgtoS4Am3A",
  },
  {
    name: "Raviteja's",
    location: (
      <>
        First Bus Stop, <br /> Vidyanagar
      </>
    ),
    image: branch3,
    mapLink: "https://maps.app.goo.gl/h7HRiWD3VVULQ59d6",
  },
  {
    name: "Raviteja Silk and Sarees",
    location: "Vijayalakshmi Road, Near Old Clock Tower",
    image: branch4,
    mapLink: "https://maps.app.goo.gl/kMhbNYsL7S6YMWWK9",
  },
  {
    name: "Raviteja Kids",
    location: "Chamarajapete",
    image: branch5,
    mapLink: "https://maps.app.goo.gl/tWVxbJzQpWbrLgS1A",
  },
];

const Footer = () => {
  return (
    <div className="rounded-t-3xl bg-gradient-to-r from-blue-950 to-blue-900 py-4">
      <section className="mx-auto max-w-[1200px] text-white">
        {/*<div className="grid md:grid-cols-2 py-3">
          {/* Company Info Section 
          <div className="px-4">
            <h1 className="mb-2 text-justify text-2xl font-extrabold text-white sm:text-left sm:text-4xl">
              <a href="/#home">
                <strong>RAVITEJA TEXTILES</strong>
              </a>
            </h1>
            <div className="flex items-center gap-2">
              <FaLocationArrow className="text-xl" />
              <p>Davanagere, Karnataka, India</p>
            </div>
          </div>
        </div>*/}


{/* Branches Information Section */}
<div className="px-4 py-4 text-center">
  <h1 className="mb-4 text-2xl font-bold">Our Branches</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
    {branches.map((branch, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl p-4 shadow-lg border-2 border-blue-600 flex flex-col justify-between"
        style={{ minHeight: "300px" }} // Ensures consistent height for all cards
      >
        <div>
          <img
            src={branch.image}
            alt={branch.name}
            className="w-full h-32 object-cover rounded-t-2xl shadow-md mb-4"
            onError={(e) => (e.target.style.display = "none")}
          />
          <h2 className="text-lg font-semibold text-blue-900 mb-1">{branch.name}</h2>
          <p className="text-sm text-gray-600 mb-2">{branch.location}</p>
        </div>
        <a
          href={branch.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-white bg-blue-800 hover:bg-blue-700 px-4 py-1 rounded-md shadow-md text-xs inline-block mt-2"
        >
          <FaLocationArrow className="mr-2" />
          View on Map
        </a>
      </div>
    ))}
  </div>
</div>






      </section>



    </div>
  );
};

export default Footer;
