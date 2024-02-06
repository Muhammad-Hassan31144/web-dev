import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Cube } from "../../constants/Cube";
import { Cyber } from "../../constants/Cyber";
import { Laptop } from "../../constants/Laptop";
import { Books } from "../../constants/Books";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
const About = () => {

  const abouts = [
    {
      title: "Reader",
      description:
        "I don't just read the books when I'm bored, but I do it for socializing because Books are your friends. And am glad to have hundreds of friends.",
      model: <Books fov={22} scale={1} />
      ,
    },
    {
      title: "CyberSecurity",
      description:
        "Well, I'm a cybersecurity student, which essentially means secure coding design and development comes naturally to me. And when it comes to business I'm one of the best.",
      model: <Cyber position={[0, 0, 1]} />,
    },
    {
      title: "Puzzle Solver",
      description:
        "That's an overstatement because I only solve rubik's cube upto 5x5. I may not be the speedy guy whilst solving them but hey! atleast I can solve'em",
      model: <Cube position={[0, 0, 1]} />,
    },
    {
      title: "Web Developer",
      description:
        "I can kill frontend development in react and tailwind. And I'm also hardeing my grip on backend coding as well. I am comfortable with MERN stack at the moment.",
      model: <Laptop position={[0, 0, 1]} />
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
            <Canvas>
              <ambientLight intensity={1} />
              <OrbitControls />
              {about.model}
            </Canvas>
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
