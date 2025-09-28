import React, { useState, useEffect } from "react";

function Slideshow() {
  const slides = [
    "Welcome to EduTech Era!",
    "Learning made simple for rural students.",
    "Offline + Online education platform.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        background: "#f0f0f0",
        borderRadius: "8px",
        textAlign: "center",
        fontSize: "20px",
      }}
    >
      {slides[index]}
    </div>
  );
}

export default Slideshow;
