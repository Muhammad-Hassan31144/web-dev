import  { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonial.scss";
import mongouni from "../../assets/mongodb.png"
import coursera from "../../assets/coursera.png"
import cisco from "../../assets/cisco.png"
import meta from "../../assets/meta.webp"
import infosec from "../../assets/infosec.webp"
import ibm from "../../assets/ibm.webp"




import certs from "../../certs/index";
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const testimonials = [
    {
      imgurl: coursera,
      name: "Multipage Website Project",
      feedback:
        "This was one of the early project-based courses that I did from coursera. It was wonderful hands-on project. I really enjoyed this one.",
      company: "Html, Css, Flexbox",
    },
    {
      imgurl: meta,
      name: "HTML CSS in Depth",
      feedback: "In this course I learned to utilize the basic knowledge and push the limits of both my learning capacity and quality of projects I was able to build at that time.",
      company: "Html Semantics, Css Responsive",
    },
    
    {
      imgurl: meta,
      name: "JavaScript",
      feedback: "After learning static websites, I switched gears and leverage programming skills from college and be a master DOM manipulator",
      company: "Javascript, DOM manipulation",
    },
    {
      imgurl: cisco,
      name: "Javascript Essentials",
      feedback:
        "This one was really special because it really unleashed my Javascript skills and made me confident enough to commit learning ReactJS",
      company: "Arrow Functions, Async/Await, ES6",
    },
    {
      imgurl: infosec,
      name: "Javascript Security Refresher",
      feedback:
        "After spending some time doing Javscript I quickly realized the need to look for security in JS which is very important in modern day world. This course helped me clear my concepts.",
      company: "Cookies, JWT Auth, Session",
    },
    
    {
      imgurl: meta,
      name: "React Advanced",
      feedback:
        "Now was the perfect time to engage in React mastery which lead me to this masterpiece of a course. It covered all the advanced concepts like custom hooks, advance state management, and challenged me with a project as well. ",
      company: "Hooks, State management",
    },
    {
      imgurl: ibm,
      name: "Hands-on Linux Commands",
      feedback:
        "This course helped me get familiar with command line interface and how powerful it can be if we leverage shell scripting. This proved to be basis for picking git really quickly.",
      company: "Bash Scripting, pwd, chown",
    },
    {
      imgurl: meta,
      name: "Version Control",
      feedback:
        "Building websites is not just about developing solutions alone, you gotta be a team player. This is where version control comes in, and I learned from the best in business",
      company: "Version Control, Git, Github",
    },
    {
      imgurl: mongouni,
      name: "MongoDb with NodeJS",
      feedback:
        "I learned the essentials of mongodb as well as how to harness its power using my favorite backend technology aka Js runtime aka NodeJs. This elevated my learning journey and paved way for my backend coding journey.",
      company: "MongoDB, Collections, NodeJs",
    },
  ];
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleClosePopup = () => {
    setSelectedCertificate(null);
  };
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonials[currentIndex].imgurl}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {certs.map((cert, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, type: "tween" }}
            key={index}
            onClick={() => handleCertificateClick(cert)}
          >
            <motion.img whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            src={cert} alt={`Certificate ${index}`} />
          </motion.div>
        ))}
      </div>
      {selectedCertificate && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <img
              src={selectedCertificate}
              alt="Certificate"
              className="imgimg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
