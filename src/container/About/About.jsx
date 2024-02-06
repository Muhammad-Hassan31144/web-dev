import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {images} from "../../constants/index"

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);

  const abouts = [
    {
      title: "Reader",
      description:
        "I don't just read the books when I'm bored, but I do it for socializing because Books are your friends. And am glad to have hundreds of friends.",
      imgUrl: images.read
      ,
    },
    {
      title: "CyberSecurity",
      description:
        "Well, I'm a cybersecurity student, which essentially means secure coding design and development comes naturally to me. And when it comes to business I'm one of the best.",
      imgUrl: images.cyber,
    },
    {
      title: "Puzzle Solver",
      description:
        "That's an overstatement because I only solve rubik's cube upto 5x5. I may not be the speedy guy whilst solving them but hey! atleast I can solve'em",
      imgUrl: images.puzzle,
    },
    {
      title: "Web Developer",
      description:
        "I can kill frontend development in react and tailwind. And I'm also hardeing my grip on backend coding as well. I am comfortable with MERN stack at the moment.",
      imgUrl: images.web
      ,
    },
  ];
  return (
    <>
      <h2 className="head-text">
        I am a <span>Reader</span> <br />
        and a <span>Cybersecurity Student.</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title}
          >
            <img src={about.imgUrl} alt={about.title} />
           
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
     
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
