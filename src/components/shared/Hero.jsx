import React from "react";
import bgVid from "../../assets/bgVid.mp4";

export default function Hero() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <source src={bgVid} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-end justify-center">
        <button
          className="mb-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold shadow-lg"
          type="button"
        >
          Discover!
        </button>
      </div>
    </div>
  );
}
 