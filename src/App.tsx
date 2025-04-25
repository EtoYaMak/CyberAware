import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Demos from "./pages/Demos";
import Threats from "./pages/Threats";
import Quiz from "./pages/Quiz";
import Protection from "./pages/Protection";
import Foot from "./components/Foot";
import { useRef } from "react";

const App: React.FC = () => {
  const parallaxRef = useRef<any>(null);

  return (
    <div className="App bg-[#000] min-h-screen relative">
      <Parallax ref={parallaxRef} pages={9} style={{ top: "0", left: "0" }}>
        {/* Left side background */}
        <ParallaxLayer offset={0} speed={0.3} style={{ zIndex: 1 }} factor={10}>
          <div className="home">
            <img
              src="/assets/leftp.webp"
              alt="Left"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </ParallaxLayer>

        {/* Right side background */}
        <ParallaxLayer offset={0} speed={0.3} style={{ zIndex: 1 }} factor={10}>
          <div className="home">
            <img
              src="/assets/rightp.webp"
              alt="Right"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </ParallaxLayer>

        {/* Middle section - slower speed for 3D effect */}
        <ParallaxLayer offset={0} speed={0.1} style={{ zIndex: 2 }} factor={10}>
          <div className="home">
            <img
              src="/assets/middlep.webp"
              alt="Middle"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </ParallaxLayer>

        {/* Landing Content Layer */}
        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{ zIndex: 3 }}
          onClick={() => parallaxRef.current.scrollTo(1)}
        >
          <div className="home-content">
            <div className="flex flex-col items-center justify-start pt-20">
              <div className="bg-black/50 w-full backdrop-blur-sm py-6">
                <h1 className="text-2xl sm:text-5xl text-white font-Jost uppercase font-semibold text-center">
                  Become CyberAware
                </h1>
                <h2 className="text-xl text-white font-Jost font-medium text-center mt-4 px-4">
                  LEARN TO PROTECT YOURSELF AND YOUR BUSINESS
                </h2>
              </div>
            </div>
            <div className="flex justify-center items-end pb-20">
              <div className="bg-black/50 w-full backdrop-blur-sm py-8">
                <p className="text-white font-Jost text-lg sm:text-2xl font-medium max-w-3xl mx-auto px-4 text-center sm:text-justify">
                  Cybersecurity has become a serious issue for small businesses
                  and everyday users. The aim of the CyberAware website is to help
                  users with cybersecurity by informing them on the cyberthreats,
                  challenges, and protection methods to practice in a workplace
                  environment.
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Threats Section with full height and better spacing */}
        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{ zIndex: 3 }}
          factor={1}
          onClick={() => parallaxRef.current.scrollTo(4)}
        >
          <div className="section-wrapper">
            <div className="section-content">
              <Threats />
            </div>
          </div>
        </ParallaxLayer>

        {/* Protection Section with full height and better spacing */}
        <ParallaxLayer
          offset={3.5}
          speed={0.1}
          style={{ zIndex: 3 }}
          factor={2}
          onClick={() => parallaxRef.current.scrollTo(7)}
        >
          <div className="section-wrapper">
            <div className="section-content">
              <Protection />
            </div>
          </div>
        </ParallaxLayer>

        {/* Demos Section with full height and better spacing */}
        <ParallaxLayer
          offset={6}
          speed={0.1}
          style={{ zIndex: 3 }}
          factor={1.5}
          onClick={() => parallaxRef.current.scrollTo(8.5)}
        >
          <div className="section-wrapper">
            <div className="section-content">
              <Demos />
            </div>
          </div>
        </ParallaxLayer>

        {/* Quiz Section with full height and better spacing */}
        <ParallaxLayer
          offset={7.5}
          speed={0.1}
          style={{ zIndex: 3 }}
          factor={1.5}
        >
          <div className="section-wrapper">
            <div className="section-content">
              <Quiz />
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>

      <footer className="footer">
        <Foot />
      </footer>
    </div>
  );
};

export default App;
