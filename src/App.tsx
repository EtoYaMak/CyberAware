import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Demos from "./pages/Demos";
import Threats from "./pages/Threats";
import Quiz from "./pages/Quiz";
import Protection from "./pages/Protection";
import Foot from "./components/Foot";

const App: React.FC = () => {
  return (
    <div className="App bg-[#000] min-h-screen">
      <Parallax pages={5} style={{ top: "0", left: "0", gap: "5%" }}>
        {/* IMAGE LEFT */}
        <ParallaxLayer offset={0} speed={0.05} style={{ zIndex: 5 }}>
          <div className="home">
            {/* LEFT SECTION */}
            <img
              src="/assets/leftp.png"
              alt="Left"
              className="absolute top-0 left-0 w-full h-full z-10"
            />
          </div>
        </ParallaxLayer>
        {/* IMAGE RIGHT */}
        <ParallaxLayer offset={0} speed={0.05} style={{ zIndex: 5 }}>
          <div className="home">
            {/* RIGHT SECTION */}
            <img
              src="/assets/rightp.png"
              alt="Right"
              className="absolute top-0 left-0 w-full h-full z-10"
            />
          </div>
        </ParallaxLayer>
        {/* IMAGE MIDDLE */}
        <ParallaxLayer offset={0} speed={0.02} style={{ zIndex: 1 }}>
          <div className="home ">
            {/* MIDDLE SECTION */}
            <img
              src="/assets/middlep.png"
              alt="Middle"
              className="absolute top-0 left-0 w-full h-full z-20"
            />
          </div>
        </ParallaxLayer>
        {/* LANDING TEXT Heading */}
        <ParallaxLayer offset={0} speed={0.15} style={{ zIndex: 5 }}>
          {/* TEXT CENTER OF IMAGE */}
          <div className="home h-screen w-full flex justify-center items-start pt-60 z-30">
            <span className="bg-black/5 w-full flex  flex-col justify-center items-center  rounded-xl backdrop-blur-[1px]">
              <h1 className="text-2xl sm:text-5xl text-white font-Jost uppercase font-semibold bg-black/50 w-full text-center backdrop-blur-[2px] py-2">
                Become CyberAware
              </h1>
              <h2 className="text-xl text-white font-Jost font-medium bg-black/50 w-full text-center backdrop-blur-[2px] py-2 mt-4 px-2 sm:px-0">
                LEARN TO PROTECT YOURSELF AND YOUR BUSINESS
              </h2>
            </span>
          </div>
        </ParallaxLayer>
        {/* LANDING TEXT PARA */}
        <ParallaxLayer offset={0} speed={0.2} style={{ zIndex: 6 }}>
          {/* TEXT CENTER OF IMAGE */}
          <div className="home h-screen w-full flex justify-center items-end z-30 pb-60 ">
            <span className=" w-full flex  flex-col justify-center items-center rounded-xl  ">
              <span className="w-[100vw]  py-5 sm:py-10 text-ellipsis sm:text-justify flex items-center justify-center bg-black/50 backdrop-blur-[2px] ">
                <p className="sm:max-w-3xl max-w-[96vw] sm:px-9 px-4 text-white font-Jost text-lg sm:text-2xl font-medium">
                  Cybersecurity has become a serious issue for small businesses
                  and everyday users. The aim of the CyberAware website is to
                  help users with cybersecurity by informing them on the
                  cyberthreats, challenges, and protection methods to practice
                  in a workplace environment.
                </p>
              </span>
            </span>
          </div>
        </ParallaxLayer>
        {/* THREATS */}
        <ParallaxLayer
          offset={1}
          speed={0.15}
          style={{ zIndex: 7 }}
          id="threats"
        >
          <Threats />
        </ParallaxLayer>
        {/* PROTECTION */}
        <ParallaxLayer
          offset={2}
          speed={0.15}
          style={{ zIndex: 7 }}
          id="protection"
        >
          <Protection />
        </ParallaxLayer>
        {/* DEMOS */}
        <ParallaxLayer offset={3} speed={0.15} style={{ zIndex: 7 }} id="demos">
          <Demos />
        </ParallaxLayer>
        {/* QUIZ */}
        <ParallaxLayer offset={4} speed={0.15} style={{ zIndex: 7 }} id="quiz">
          <Quiz />
        </ParallaxLayer>
      </Parallax>
      <footer className="absolute bottom-0 w-full text-center">
        <Foot />
      </footer>
    </div>
  );
};

export default App;
