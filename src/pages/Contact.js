import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const Toast = (message, type = "default") => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      default:
        toast(message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Toast("Please fill in all fields.", "error");
      return;
    }

    Toast("Form submitted Successfully !!!🙂", "success");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  useEffect(() => {
    Aos.init();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="container2" id="Contact">
        <div
          className="c2child1"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <label> - Contact Me</label>
          <br />
          <h1>Get In Touch With Me</h1>
          <p>
            If you have any question or would like to collaborate, please don't
            hesitate to contact me.
          </p>
          <button className="icon-btn">
            <i className="fa-solid fa-phone-volume fa-2xl"></i>
          </button>
          <h2>Phone</h2>
          <p className="para">+923185499735</p>
          <p className="para">+923433032064</p>
          <button className="icon-btn1">
            <i className="fa-regular fa-envelope fa-2xl"></i>
          </button>
          <h3>Email</h3>
          <p className="para1">adeelabid0855@gmail.com</p>
        </div>
        <div
          className="c2child2"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <input
            className="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            style={{ color: "white" }}
          />
          <input
            className="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message *"
          ></textarea>
          <button className="btn1" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{
          width: "40rem",
          fontWeight: "300",
          fontSize: "2rem",
        }}
      />
    </>
  );
};

export default Contact;
