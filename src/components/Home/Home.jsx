/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unknown-property */
import { Cursor, useTypewriter } from "react-simple-typewriter";
import bannerImg from "../../../src/assets/banner.png";
import { Link } from "react-scroll";

import { motion } from 'framer-motion';
import { Zoom } from "react-awesome-reveal";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      " Web Developer",
      " Javascript Developer",
      " React Developer",
      " Frontend Developer",
      " Fullstack Developer",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 40,
  });

  const handleMailto = () => {
    const mailtoLink = `mailto:rajibahamed6060@gmail.com`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="Home" className="md:pt-20 p-2">
      <div className="flex flex-col w-full md:flex-row gap-6">
        <div className="grid flex-grow  card  rounded-box place-items-center">
          <div className="flex justify-center items-center">
            <div className="space-y-6">
             <Zoom>
             <h1 className="text-5xl font-bold">Hello,</h1>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                I Am{" "}
                <span className="text-xl md:text-3xl lg:text-4xl text-[#12ea1d] font-bold">
                  {text} <Cursor cursorStyle="<" />
                </span>
              </h1>
              <p>
                I am Frontend developer.I love to code with enthusiasm using
                React. I am committed to continuous growth and after 1 year I
                want to become senior web developer
              </p>
              <div  className="flex gap-6">
                <Link to="Projects">
                <button className="btn btn-outline text-white hover:bg-[#1834ce]">
                  See Projects
                </button>
                </Link>
                <a href="https://www.linkedin.com/in/md-atiqul-islam-rajib-013a92298/" target="_blank">
                <button className="btn btn-outline text-white hover:bg-[#1834ce]">
                  Get In Touch
                </button>
                </a>
              </div>
             </Zoom>
            </div>
          </div>
        </div>

        <div className="grid flex-grow  card  rounded-box place-items-center">
          <motion.div  whileHover={{ rotate: 5, transition: { duration: 1, ease: 'easeInOut' } }}    className="flex justify-center items-center lg:h-[500px] md:w-[300px] lg:w-[500px]">
           <Zoom>
           <img
              className="h-full object-cover w-full rounded-[50%]"
              src={bannerImg}
              alt="banner photo"
            />
           </Zoom>
          </motion.div>
          <div className="flex gap-6 mt-8">
          <a href="https://github.com/Rajib-10" target="_blank">
           <motion.button whileHover={{scale: 1.2, rotate: 15}} className="btn btn-circle btn-outline hover:bg-[#1834ce]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.button>
           </a>

           <a href="https://www.linkedin.com/in/md-atiqul-islam-rajib-013a92298/" target="_blank">
            <motion.button whileHover={{scale: 1.2, rotate: 15}} className="btn btn-circle btn-outline hover:bg-[#1834ce]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
              </svg>
            </motion.button>
            </a>

           

            <motion.button whileHover={{scale: 1.2, rotate: 15}}   onClick={handleMailto} className="btn btn-circle btn-outline hover:bg-[#1834ce]">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
