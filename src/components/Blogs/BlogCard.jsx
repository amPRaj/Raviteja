import React from "react";

const BlogCard = ({ Img1 }) => {
  return (
    <div>
      <div
        id="card"
        className="mx-2 mb-7 rounded-lg p-4 shadow-lg transition-all duration-500 hover:scale-[1.01] hover:shadow-xl "
      >
        <div className="overflow-hidden rounded-lg ">
          <img
            src={Img1}
            alt="Raviteja Textiles"
            className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
        <div className="space-y-3 py-3">
          <h1 className="line-clamp-1 text-xl font-bold">
            Raviteja Textiles - Quality Fabrics
          </h1>
          <p className="line-clamp-2">
            Discover premium textiles at Raviteja Textiles in Davanagere. We offer a wide variety of fabrics for all your clothing and home decor needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
