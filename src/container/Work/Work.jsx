import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import passgen from "../../assets/passgen.png";
import port from "../../assets/port.png";
import apple from "../../assets/apple.png";
import lib from "../../assets/lib.png";
import idoc from "../../assets/idoc.jpg";
const Work = () => {


  const works = [
    {
      title: "Password Generator",
      description:
        "I was tired of having to sign up with new passwords n number of times and I was skeptical of third party password generators. So I came out with this personal solution of mine. No cookies, No Sign up to get Boss-level password.",
      imageUrl: passgen,
      projectLink: "https://muhammad-hassan31144.github.io/reactJS-Password-Generator/",
      codeLink: "https://github.com/Muhammad-Hassan31144/reactJS-Password-Generator",
      tags: "Hooks",
    },
    {
      title: "Portfolio Website",
      description:
        "This time the stakes were high as I had to build a portfolio showcasing photography skills of my client in a modern design using animation as well. I achieved this using reactJS, tailwindcss, and framer-motion.",
      imageUrl: port,
      projectLink: "https://muhammad-hassan31144.github.io/portfolio-project/",
      codeLink: "https://github.com/Muhammad-Hassan31144/portfolio-project",
      tags: "Framer motion",
    },
    {
      title: "Apple Vision Pro Clone",
      description:
        "This time I created Apple Vision Pro clone, I used GSAP to make it lively and animated. This projec showcases my attentino to detail in duplicating figma design for example.",
      imageUrl: apple,
      projectLink: "https://muhammad-hassan31144.github.io/Apple-vision-pro/",
      codeLink: "https://github.com/Muhammad-Hassan31144/Apple-vision-pro",
      tags: "GSAP",
    },
    {
      title: "My Library",
      description:
        "I made a claim about being a book reader, well here I am being true to my word and showcasing my collection of books with complex search filters and completely responsive design.",
      imageUrl: lib,
      projectLink: "https://muhammad-hassan31144.github.io/my-library/",
      codeLink: "https://github.com/Muhammad-Hassan31144/my-library",
      tags: "DaisyUI",
    },
    {
      title: "Idoc Clone",
      description:"I made a clone of Idoc, a website that provides medical services. I used html & css to make it responsive and used SwiperJS to make it lively and animated.",
      imageUrl: idoc,
      projectLink: "https://muhammad-hassan31144.github.io/eyeDoc-clone/",
      codeLink: "https://github.com/Muhammad-Hassan31144/eyeDoc-clone",
      tags: "SwiperJS",
    }

  ];

  
   
  
 
  return (
    <>
      <h2 className="head-text">
        Enough talking, right? This is <br /> <span>What I can do</span> in Business
      </h2>

      <motion.div
        
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work) => (
          <motion.div 
          whileHover={{ scale: [1, 0.9] }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
            staggerChildren: 0.5,
          }}
          className="app__work-item app__flex" key={work.tags}>
            <div className="app__work-img app__flex">
              <img src={work.imageUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}              
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
     
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
