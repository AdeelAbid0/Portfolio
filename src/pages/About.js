import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="about" id="About">
        <div
          className="aboutchild1"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>
            Know Who{" "}
            <span style={{ color: "violet", fontWeight: "bold" }}>I'm</span>
          </h1>
          <br />
          <p>
            Hi Everyone, I am
            <span style={{ color: "violet", fontWeight: "bold" }}>
              {" "}
              Adeel Abid
            </span>{" "}
            from
            <span style={{ color: "violet", fontWeight: "bold" }}>
              {" "}
              Rawalpindi, Pakistan
            </span>
            . I have recently done my bachelors degree in
            <span style={{ color: "violet", fontWeight: "bold" }}>
              {" "}
              Computer Science
            </span>{" "}
            from Institute of Space and technology Islamabad. I am
            <span style={{ color: "violet" }}> Frontend </span>
            Web Developer.
          </p>
          <br />
          <h3>Some of my Hobbies are</h3>
          <br />
          <label>
            <i
              class="fa-solid fa-hand-point-right fa-beat"
              style={{ color: "yellow" }}
            ></i>
            <span style={{ paddingLeft: "1rem" }}>Cooking</span>
          </label>
          <br />
          <label>
            <i
              class="fa-solid fa-hand-point-right fa-beat"
              style={{ color: "yellow" }}
            ></i>
            <span style={{ paddingLeft: "1rem" }}>Playing Football</span>
          </label>
          <br />
          <label>
            <i
              class="fa-solid fa-hand-point-right fa-beat"
              style={{ color: "yellow" }}
            ></i>
            <span style={{ paddingLeft: "1rem" }}>Playing Games</span>
          </label>
          <br />
          <button className="btncv">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={
                "https://drive.google.com/file/d/16fu8ukL8i6zE6dxmlgmPPxFfXSbs_hcZ/view?usp=sharing"
              }
            >
              Download Resume
            </Link>
          </button>
        </div>
        <div
          className="aboutchild2"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Image
            className="img"
            src="/adeel4.jpeg"
            width="450"
            height="450"
            alt="adeelpic"
            style={{
              borderRadius: "50%",
              border: "0.2rem solid black",
            }}
          />
        </div>
      </div>
      <div className="skill">
        <h1>Skills</h1>
        <div
          className="skill1"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Link href="https://www.w3schools.com/html/">
            <Image
              className="image"
              src="/html-5-svgrepo-com.svg"
              width={100}
              height={100}
              alt="html"
            />
          </Link>
          <div className="overlay">HTML</div>
        </div>

        <div
          className="skill2"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Link href="https://www.w3schools.com/css/">
            <Image
              className="image"
              src="/css-3-svgrepo-com.svg"
              width={100}
              height={100}
              alt="css"
            />
          </Link>
          <div className="overlay">CSS</div>
        </div>
        <div
          className="skill3"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Link href="https://www.w3schools.com/bootstrap/">
            <Image
              className="image"
              src="/bootstrap-svgrepo-com.svg"
              width={100}
              height={100}
              alt="css"
            />
          </Link>
          <div className="overlay">Bootstrap</div>
        </div>
        <div
          className="skill4"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Link href="https://www.w3schools.com/js/">
            <Image
              className="image"
              src="/js-official-svgrepo-com.svg"
              width={100}
              height={100}
              alt="css"
            />
          </Link>
          <div className="overlay">JavaScript</div>
        </div>
        <div
          className="skill5"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Link href="https://react.dev/">
            <Image
              className="image"
              src="/react-svgrepo-com.svg"
              width={100}
              height={100}
              alt="css"
            />
          </Link>
          <div className="overlay">React Js</div>
        </div>
        <div
          className="skill6"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Link href="https://www.w3schools.io/learn/nextjs-tutorial/">
            <Image
              className="image"
              src="/nextjs-svgrepo-com.svg"
              width={100}
              height={100}
              alt="css"
            />
          </Link>
          <div className="overlay">Next Js</div>
        </div>
      </div>
    </>
  );
};

export default About;
