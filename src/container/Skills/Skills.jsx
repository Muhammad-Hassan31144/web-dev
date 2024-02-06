import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import geethub from "../../assets/geethub.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";
import node from "../../assets/node.png";
import express from "../../assets/express.png";
import mongo from "../../assets/mongo.png";
const Skills = () => {
  const skills = [
    {
      name: "Github",
      bgColor: "#7531ac",
      icon: geethub,
    },
    {
      name: "ReactJS",
      bgColor: "#7531ac",
      icon: react,
    },
    {
      name: "TailwindCss",
      bgColor: "#7531ac",
      icon: tailwind,
    },
    {
      name: "NodeJS",
      bgColor: "#7531ac",
      icon: node,
    },
    {
      name: "Express",
      bgColor: "#7531ac",
      icon: express,
    },
    {
      name: "MongoDB",
      bgColor: "#7531ac",
      icon: mongo,
    },
  ];
  const experiences = [
    {
      id: 1,
      year: 2023,
      experience: [
        {
          name: "Frontend Lead",
          company: "HTML, CSS, SwiperJS",
          desc: "I had the privilege to be frontend lead in my first professional project. I was hired by an agency to create a website about medical technology business based in UAE. I delivered the project in due time despite strict deadlines and 3 redesigns.",
        },
      ],
    },
    {
      id: 2,
      year: 2024,
      experience: [
        {
          name: "Wordpress Developer",
          company: "Elementor, Woocommerce",
          desc: "I delivered an ecommerce store built entirely in Wordpress. I had to find the design, create logo, write content, add products all by myself. I was the whole team for this project.",
        },
      ],
    },
    {
      id: 3,
      year: 2024,
      experience: [
        {
          name: "Frontend Developer",
          company: "ReactJS, DaisyUI, RESTApi",
          desc: "I build a frontend Dashboard for backend coded in SpringBoot and MySQL. This was an inventory management system of industry standard. I dealt with a lot of REST apis (no SURPRISE!).",
        },
      ],
    },
    {
      id: 4,
      year: 2024,
      experience: [
        {
          name: "Project Lead",
          company: "ReactJS, Tailwind, Framer Motion",
          desc: "I was challenged in creating a modern day photograhy portfolio for my client. I had to create the wireframe, design, color pallete, and everything in between to deliver a solution.",
        },
      ],
    },
  ];

  //   <motion.div className="app__skills-exp-works">
  //   {experience.map((work) => (
  //     <>
  //       <motion.div
  //         whileInView={{ opacity: [0, 1] }}
  //         transition={{ duration: 0.5 }}
  //         className="app__skills-exp-work"
  //         data-tip
  //         data-for={work.name}
  //         key={work.name}
  //       >
  //         <h4 className="bold-text">{work.name}</h4>
  //         <p className="p-text">{work.company}</p>
  //       </motion.div>
  //        <Tooltip
  //         id={work.name}
  //         effect="solid"
  //         arrowColor="#fff"
  //         className="skills-tooltip"
  //       >
  //         {work.desc}
  //       </Tooltip>
  //     </>
  //   ))}
  // </motion.div>

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.id}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              {experience.experience.map((work) => (
                <motion.div className="app__skills-exp-works" key={work.name}>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-tooltip-id={work.name}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                  </motion.div>
                  <Tooltip
                    id={work.name}
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                    content={work.desc}
                    place="bottom"
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
