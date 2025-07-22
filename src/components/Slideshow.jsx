import { useEffect, useState } from "react";
import sample4 from "../assets/Gym-pic1.PNG";
import sample3 from "../assets/Gym-pic2.PNG";
import sample2 from "../assets/CTC-Gym4.jpg";

const slides = [
  { img: sample2, caption: "Hamilton Finals 2024" },
  { img: sample3, caption: "Toronto qualifiers 2025" },
  { img: sample4, caption: "Ottawa sectionals 2021" },
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            className={`mySlide fade ${index === currentSlide ? "active" : ""}`}
            key={index}
            style={{ display: index === currentSlide ? "block" : "none" }}
          >
            <div className="numbertext">{index + 1} / {slides.length}</div>
            <img src={slide.img} alt={`Slide ${index + 1}`} />
            <div className="text">{slide.caption}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </>
  );
}
