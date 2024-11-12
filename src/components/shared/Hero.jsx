import React from 'react'
import bgVid from "../../assets/bgVid.mp4"

export default function Hero() {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
      style={{ width: "100vw", height: "100vh" }}
    >
      <source src={bgVid} type="video/mp4" />
    </video>
  )
}
