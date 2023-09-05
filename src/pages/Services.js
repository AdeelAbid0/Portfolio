import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="services" id="Services">
        <h1>Services </h1>
        <div
          className="service1"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h2>Web Design</h2>
          <hr style={{ marginTop: "2rem", color: "green" }} />
          <p>
            I specialize in creating modern <br />
            and visually appealing website <br />
            designs that enhance
            <br /> user-experience.
          </p>
        </div>
        <div
          className="service2"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h2>Responsive Development</h2>
          <hr style={{ marginTop: "2rem", color: "green" }} />
          <p>
            I develop responsive websites <br />
            that work seamlessly across
            <br /> various devices and screen sizes.
          </p>
        </div>
        <div
          className="service3"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h2>Frontend Frameworks</h2>
          <hr
            style={{
              marginTop: "2rem",
              color: "green",
            }}
          />
          <p>
            I have expertise in using
            <br /> popular frontend frameworks <br />
            like <span style={{ color: "lightblue" }}> React</span> and{" "}
            <span style={{ color: "lightblue" }}>Next js</span> <br />
            to build dynamic web <br />
            applications.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
