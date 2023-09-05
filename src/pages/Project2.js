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
      <div className="proj2desc" id="Project1">
        <div className="proj2title">
          <h1>Online Car Service Station</h1>
        </div>
        <div className="proj2images" data-aos="flip-right">
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
        <div className="proj2exp">
          <h1>Description :</h1>
          <p>
            This is our FYP Project. The Online Car Service Station project
            revolutionizes the way vehicle owners access maintenance and repair
            services. This platform offers a convenient and efficient solution
            for scheduling and managing car servicing appointments online,
            providing customers with a seamless experience from booking to
            completion.
          </p>
          <h1>Key Features :</h1>
          <ul>
            <li>Appointment Booking</li>
            <li>Service Catalog</li>
            <li>User Profiles</li>
            <li>Payment Integration</li>
            <li>Feedback and Ratings</li>
            <li>Admin Dashboard</li>
          </ul>
          <h1>My Role :</h1>
          <p>
            As a Frontend Developer I have designed the User Interface of this
            Project.
          </p>
          <h2>Technologies used :</h2>
          <p>In this project i have used following Technologies:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>React Js</li>
          </ul>
          <Link href={"/"}>
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Project1;
