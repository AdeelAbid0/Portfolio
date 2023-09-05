import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="projects" id="Projects">
        <div className="project1" data-aos="zoom-in-right">
          <label>- Project 1</label>
          <h1>Portfolio</h1>
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
          <i
            class="fa-solid fa-arrow-right fa-beat fa-xl"
            style={{ color: "yellow", paddingLeft: "1rem" }}
          ></i>
          <Link
            href="/Project1"
            style={{
              color: "yellow",
              textDecoration: "none",
            }}
          >
            <button
              style={{
                border: "none",
                backgroundColor: "#0C040B",
                color: "yellow",
              }}
            >
              Read more
            </button>
          </Link>
        </div>
        <div className="project1image" data-aos="flip-right">
          <div className="proj1carousel" style={{ marginTop: "10rem" }}>
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
        </div>
        <div className="project2image" data-aos="flip-left">
          <div className="proj2carousel" style={{ marginTop: "12rem" }}>
            <Carousel showThumbs={false}>
              <div>
                <img src="/1.png" alt="Image 1" />
              </div>
              <div>
                <img src="/2.png" alt="Image 2" />
              </div>
              <div>
                <img src="/3.png" alt="Image 3" />
              </div>
              <div>
                <img src="/4.png" alt="Image 4" />
              </div>
              <div>
                <img src="/5.png" alt="Image 5" />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="project2" data-aos="zoom-in-right">
          <label>- Project 2</label>
          <h1>Online Car Service Station</h1>
          <p>
            This is our FYP Project. The Online Car Service Station project
            revolutionizes the way vehicle owners access maintenance and repair
            services. This platform offers a convenient and efficient solution
            for scheduling and managing car servicing appointments online,
            providing customers with a seamless experience from booking to
            completion.
          </p>
          <i
            class="fa-solid fa-arrow-right fa-beat fa-xl"
            style={{ color: "yellow" }}
          ></i>
          <Link
            href="/Project2"
            style={{ color: "yellow", textDecoration: "none" }}
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
