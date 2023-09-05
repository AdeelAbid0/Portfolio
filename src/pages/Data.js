import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Data = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const headings = ["Frontend Developer", "React Developer", "Web Developer"];
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="maindata">
        <div
          className="data1"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="data1info">
            <p>Hey ! 👋 I'm</p>
            <h1>
              ADEEL ABID <br />
              <span className="animated-heading">
                {headings[currentHeadingIndex]}
              </span>
            </h1>
            <hr style={{ border: ".1rem solid white" }} />
          </div>
          <div className="data1icons">
            <Link
              href={
                "https://www.facebook.com/profile.php?id=100007783546775&mibextid=ZbWKwL"
              }
            >
              <button className="iconbtn" style={{ color: "#38529A" }}>
                <i class="fa-brands fa-square-facebook fa-beat fa-2xl"></i>
              </button>
            </Link>
            <Link href={"https://whatsapp.com/dl/"}>
              <button className="iconbtn" style={{ color: "#00920F" }}>
                <i class="fa-brands fa-square-whatsapp fa-beat fa-2xl"></i>
              </button>
            </Link>
            <Link
              href={
                "https://instagram.com/adeelabid84?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
              }
            >
              <button className="iconbtn" style={{ color: "#AC3282" }}>
                <i class="fa-brands fa-square-instagram fa-beat fa-2xl"></i>
              </button>
            </Link>
            <Link href={"https://www.linkedin.com/in/adeel-abid-730834280"}>
              <button className="iconbtn" style={{ color: "#0073B1" }}>
                <i class="fa-brands fa-linkedin fa-beat fa-2xl"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;
