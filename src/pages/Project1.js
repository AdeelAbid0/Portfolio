import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Project1 = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="projdesc">
        <div className="projtitle">
          <h1>Portfolio Website</h1>
        </div>
        <div className="projimages" data-aos="flip-right">
          <Carousel showThumbs={false}>
            <div>
              <img src="/a.PNG" alt="Image 1" />
            </div>
            <div>
              <img src="/b.PNG" alt="Image 2" />
            </div>
            <div>
              <img src="/c.PNG" alt="Image 3" />
            </div>
            <div>
              <img src="/d.PNG" alt="Image 4" />
            </div>
            <div>
              <img src="/e.PNG" alt="Image 5" />
            </div>
          </Carousel>
        </div>
        <div className="projexp">
          <h1>Description :</h1>
          <p>
            This is a Freelancer Project. This is a Portfolio type website which
            contain all the information of a person named JESSY. It contain the
            info of JESSY, his Portfolio and the Contact Information. <br /> I
            have also hosted this project on
            <span
              style={{
                color: "green",
                fontSize: "2.4rem",
                paddingLeft: "0.4rem",
              }}
            >
              VERCEL
            </span>
            .
          </p>
          <h2>Tools and Technologies :</h2>
          <p>In this project i have used following Tools and technologies:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>React Js</li>
          </ul>
          <h3>Project Link :</h3>
          <Link href={"https://wordpress-theme.vercel.app/"}>
            https://wordpress-theme.vercel.app/
          </Link>
          <Link href={"/"}>
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Project1;
