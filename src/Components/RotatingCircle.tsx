// src/components/RotatingCircle.js
import { useEffect, useState } from "react";
import "./RotatingCircle.css";

const RotatingCircle = () => {
  const [rotation, setRotation] = useState({ wheel1: 0, wheel2: 0, wheel3: 0 });

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Adjust the rotation speed as needed

    setRotation({
      wheel1: scrollY / 4,
      wheel2: scrollY / 8,
      wheel3: scrollY / 4,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative bg-black w-full h-screen flex justify-center items-center overflow-hidden">
        <div className="z-50 absolute top-0 w-full h-20 bg-gradient-to-b from-black to-transparent" />
        <div
          className={`ring-bg wheel-1`}
          style={{ rotate: `${rotation.wheel1}deg` }}
        ></div>
        <div
          className="ring-bg wheel-2"
          style={{ rotate: `${rotation.wheel2}deg` }}
        ></div>
        <div
          className="ring-bg wheel-3"
          style={{ rotate: `${rotation.wheel3}deg` }}
        ></div>

        <div className="center-content">
          <h4 className="title">
            Feels like a <br /> good fit?
          </h4>
          <div className="sub-title">Let's kick some ass together</div>
          <div className="btn">View all openings</div>
        </div>
        <div className="z-50 absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent rounded-full" />
      </div>
    </>
  );
};

export default RotatingCircle;
{
  /* <div className="rotating-circle" style={{ transform: `rotate(${rotation}deg)` }} /> */
}
