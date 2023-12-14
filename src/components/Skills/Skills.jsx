import { Fade, Zoom } from "react-awesome-reveal";
import { motion } from 'framer-motion';


const Skills = () => {
  const skillsData = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 75 },
    { name: 'Node Js', level: 60 },
    { name: 'Express Js', level: 60 },
    { name: 'Mongodb', level: 60}
    
  ];

  return (
    <div id="Skills" className="p-2  md:pt-10">
    <Fade> <h1 className="text-5xl text-center mb-6 md:mb-0">Skills & Experience</h1></Fade>
      

<div className="flex flex-col md:flex-row w-full">
  <div className="grid   flex-grow card  rounded-box place-items-center md:w-1/2 ">
    <div>
        <div className="space-y-6">
           <Zoom>
             <h1 className="text-xl md:text-2xl font-medium">All the skills that I have in that field of work are mentioned.</h1>
            <p className="text-justify">Discover the full spectrum of skills I bring to the table as a frontend developer. I am adept at utilizing HTML, CSS, and JavaScript to create compelling and responsive web interfaces.</p>


            <p className="text-justify">With a strong foundation in modern frontend frameworks, especially React.js, I specialize in building interactive components that enhance the user experience of web applications.</p>
           </Zoom>

        </div>
    </div>
  </div>
 
  <div className="grid  flex-grow card   rounded-box place-items-center md:w-1/2">
    <div>
    <Zoom>
    {skillsData.map((skill, index) => (
        <motion.div whileHover={{ scale: 1.1 }} key={index} className="mb-4">
          <span className="inline-block w-20">{skill.name}</span>
          <div className="flex items-center">
            <div className="bg-gray-300 h-5 w-60 rounded-md overflow-hidden relative">
              <div
                className="bg-green-500 h-full absolute top-0 left-0"
                style={{ width: `${skill.level}%` }}
              ></div>
              <div className="text-white absolute inset-0 flex items-center justify-center">
                {skill.level}%
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </Zoom>
    </div>
  </div>
</div>


    </div>
  );
};

export default Skills;
