/* eslint-disable react/jsx-no-target-blank */
import { FaEye, FaGithub } from "react-icons/fa";
import worldImg from "../../../src/assets/world.png"
import electroImg from "../../../src/assets/electro.png"
import homeImg from "../../../src/assets/home.png"
import socialImg from "../../../src/assets/social.png"
import { Zoom } from "react-awesome-reveal";
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div id="Projects" className="py-8">
      <div>
        <Zoom><h1 className="text-5xl text-center mb-8">Projects</h1></Zoom>

        <div className="flex flex-col md:flex-row gap-8">
          
          <motion.div whileHover={{ scale: 1.1, rotate: -0.3 }}
      whileTap={{ scale: 0.9 }} className="card   shadow-xl image-full group md:w-1/2 ">
            <figure>
              <img
                src={worldImg}
                alt="World news"
              />
            </figure>
            <div className="card-body flex justify-end ">
             <div className="card-content opacity-0 hover:opacity-100 transition">
             <h2 className="card-title">World NEWS</h2>
              <p  className="text-justify  font-semibold">World NEWS is a Newspaper fullstack website.Explore the latest news and breaking news with World News. Navigate through trending articles, discover diverse publishers, and gain insights with engaging statistics. World News offers a users experience, various functionality and visual appeal. Stay informed, stay connected.</p>
              <div className="flex justify-between pt-3">
              <a className="flex gap-3 items-center text-xl font-medium" href="https://world-news-30419.web.app/" target="_blank">Live Link <FaEye size={24} /></a>
                
                <a className="flex gap-3 items-center text-xl font-medium" href="https://github.com/Rajib-10/World-News-client" target="_blank">Github <FaGithub size={24} /></a>
                
              </div>
             </div>
            
            </div>
          </motion.div>
         

          <motion.div whileHover={{ scale: 1.1, rotate: -0.3 }}
      whileTap={{ scale: 0.9 }} className="card   shadow-xl image-full group md:w-1/2 ">
            <figure>
              <img
                src={homeImg}
                alt="home fix"
              />
            </figure>
            <div className="card-body flex justify-end ">
             <div className="card-content opacity-0 hover:opacity-100 transition">
             <h2 className="card-title">Home Fix</h2>
              <p className="text-justify  font-semibold">Home-Fix is Offline service sharing web application.Explore a variety of services, from home repairs to home sitting, all in one place. Book, manage, and enjoy convenient service experiences effortlessly.</p>
              <div className="flex justify-between pt-3">
              <a className="flex gap-3 items-center text-xl font-medium" href="https://home-fix-f067a.web.app/" target="_blank">Live Link <FaEye size={24} /></a>
                
                <a className="flex gap-3 items-center text-xl font-medium" href="https://github.com/Rajib-10/Home-Fix-Client" target="_blank">Github <FaGithub size={24} /></a>
                
              </div>
             </div>
            
            </div>
          </motion.div>
        </div>


        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <motion.div  whileHover={{ scale: 1.1, rotate: -0.3 }}
      whileTap={{ scale: 0.9 }} className="card   shadow-xl image-full group md:w-1/2 ">
            <figure>
              <img
                src={electroImg}
                alt="electro&techno"
              />
            </figure>
            <div className="card-body flex justify-end ">
             <div className="card-content opacity-0 hover:opacity-100 transition">
             <h2 className="card-title">Electro&Techno</h2>
              <p  className="text-justify  font-semibold">Electro & Techno is a modern MERN stack website highlighting top technology and electronics brands like Apple, Samsung, Sony, and Google. Offering a user-friendly platform for seamless product exploration and management.</p>
              <div className="flex justify-between pt-3">
              <a className="flex gap-3 items-center text-xl font-medium" href="https://electro-techno.web.app/" target="_blank">Live Link <FaEye size={24} /></a>
                
                <a className="flex gap-3 items-center text-xl font-medium" href="https://github.com/Rajib-10/Electro-Techno-Client" target="_blank">Github <FaGithub size={24} /></a>
                
              </div>
             </div>
            
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1, rotate: -0.3 }}
      whileTap={{ scale: 0.9 }} className="card   shadow-xl image-full group md:w-1/2">
            <figure>
              <img
                src={socialImg}
                alt="Social Event"
              />
            </figure>
            <div className="card-body flex justify-end ">
             <div className="card-content opacity-0 hover:opacity-100 transition">
             <h2 className="card-title">Social Event</h2>
              <p className="text-justify  font-semibold">Social Event is a event management website built with React, Firebase, and React Router. Focused on creating memorable social gatherings, it offers a unique and user-friendly experience</p>
              <div className="flex justify-between pt-3">
              <a className="flex gap-3 items-center text-xl font-medium" href="http://motionless-change.surge.sh/" target="_blank">Live Link <FaEye size={24} /></a>
                
                <a className="flex gap-3 items-center text-xl font-medium" href="https://github.com/Rajib-10/Social-Event" target="_blank">Github <FaGithub size={24} /></a>
                
              </div>
             </div>
            
            </div>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
