import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import Design from "./components/Design";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="bg-[#032B8A]">
    <Design />
      <div className=" text-white">
        
        <div id="top" className="fixed top-0 left-0 right-0 z-10 ">
          <Navbar />
        </div>
       <div className="max-w-6xl mx-auto">
       <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
       </div>
      </div>
    </div>
  );
}

export default App;
