import { Zoom } from "react-awesome-reveal";
import bannerImg from "../../../src/assets/banner2.png";
import { motion } from "framer-motion";

const About = () => {
  // const handleDownloadResume = () => {
  //   const downloadLink = document.createElement("a");
  //   downloadLink.href = "/Md_Atiqul_Islam_Rajib_resume.pdf";
  //   downloadLink.download = "MERN_stack_resume_of_md.atiqul_islam_rajib.pdf";
  //   document.body.appendChild(downloadLink);
  //   downloadLink.click();
  //   document.body.removeChild(downloadLink);
  // };

  const handleDownloadResume = () => {
    const fileID = "1SviuuGcS1W7-CoFI8E9uyQ8OMHfWzPk6";
    const downloadLink = `https://drive.google.com/uc?id=${fileID}`;
    window.open(downloadLink, "_blank");
  };

  return (
    <div className="p-2 md:py-10 " id="About">
      <div>
        <Zoom>
          <h1 className="text-5xl text-center pb-8">About Me</h1>
        </Zoom>

        <div>
          <div className="flex flex-col w-full lg:flex-row">
            <motion.div
              whileHover={{
                rotate: 10,
                transition: { duration: 1, ease: "easeInOut" },
              }}
              className="grid flex-grow  card  rounded-box place-items-center"
            >
              <div className="md:h-[500px] md:w-[500px] flex justify-center items-center">
                <Zoom>
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={bannerImg}
                    alt=""
                  />
                </Zoom>
              </div>
            </motion.div>

            <div className="grid flex-grow  card  rounded-box place-items-center">
              <div className=" flex justify-center items-center">
                <div className="lg:w-[600px]">
                  <Zoom>
                    <h1 className="text-xl md:text-3xl font-bold">
                      Hi, My Name Is{" "}
                      <span className="text-[#12ea1d]">
                        Md.Atiqul Islam Rajib
                      </span>
                    </h1>
                    <p className="">
                      I am Md. Atiqul Islam Rajib From Dhaka,Bangladesh. I have
                      completed my graduation in computer science and
                      engineering. I acquired a solid foundation in HTML, CSS,
                      and JavaScript, React, Tailwind,Daisy UI,Bootstrap,Nodejs,ExpressJs,Mongodb and am familiar with Material UI and Next js. As a Frontend developer, I love to code with enthusiasm using React and tailwind css.
                    </p>

                    <div className="space-y-4 mt-5">
                      <div>
                        <span className="md:text-xl font-medium mr-[88px] md:mr-[100px]">
                          Name
                        </span>
                        <span>: Md.Atiqul Islam Rajib</span>
                      </div>

                      <div>
                        <span className="md:text-xl font-medium mr-[68px] md:mr-[75px]">
                          Birthday
                        </span>
                        <span>: June 01, 1997</span>
                      </div>

                      <div>
                        <span className="md:text-xl font-medium mr-[70px] md:mr-[82px]">
                          Address
                        </span>
                        <span>: Dhaka,Bangladesh</span>
                      </div>

                      <div>
                        <span className="md:text-xl font-medium mr-5">
                          Phone Number
                        </span>
                        <span>: +880 1680988129</span>
                      </div>

                      <div>
                        <span className="md:text-xl font-medium mr-[35px] md:mr-[108px]">
                          Email
                        </span>
                        <span>: rajibahamed6060@gmail.com</span>
                      </div>
                      <button
                        onClick={handleDownloadResume}
                        className="btn btn-outline text-white hover:bg-[#1834ce]"
                      >
                        Download Resume
                      </button>
                    </div>
                  </Zoom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
