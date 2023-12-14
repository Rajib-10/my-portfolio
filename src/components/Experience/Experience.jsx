import { MdCalendarMonth } from "react-icons/md";
import {IoCheckmarkDoneSharp} from 'react-icons/io5'
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import { motion } from 'framer-motion';



const Experience = () => {
    return (
        <div className='py-8 text-white'>
           
            <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} className='flex flex-col md:flex-row  justify-between items-center lg:w-[90%] mx-auto  rounded-lg  p-8 gap-8'>
            
            <div className='flex items-center gap-7'>
                <div>
                    <MdCalendarMonth className='text-6xl' />
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>6+</h1>
                    <h1 className='text-xl font-bold'>Month Learning</h1>
                </div>
            </div>

            <div className='flex items-center gap-7'>
                <div>
                    <AiOutlineFundProjectionScreen className='text-6xl' />
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>12+</h1>
                    <h1 className='text-xl font-bold'>Unique Projects</h1>
                </div>
            </div>

            <div className='flex items-center gap-7'>
                <div>
                    <IoCheckmarkDoneSharp className='text-6xl' />
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>70+</h1>
                    <h1 className='text-xl font-bold'>Total Contributions</h1>
                </div>
            </div>
            

            
        </motion.div>
        
        </div>
    );
};

export default Experience;