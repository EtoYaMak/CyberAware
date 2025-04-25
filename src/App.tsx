import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Demos from "./pages/Demos";
import Threats from "./pages/Threats";
import Quiz from "./pages/Quiz";
import Protection from "./pages/Protection";
import Foot from "./components/Foot";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import ThumbnailGeneratorPage from "./pages/ThumbnailGenerator";

const App: React.FC = () => {
  const parallaxRef = useRef<any>(null);
  const location = useLocation();

  // If we're on the thumbnail generator route, render that directly
  if (location.pathname === "/thumbnailer") {
    return <ThumbnailGeneratorPage />;
  }

  // Navigation function - prevent automatic scrolling
  const scrollTo = (page: number) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(page);
    }
  };

  // Otherwise render the normal app
  return (
    <div className="App bg-[#000] min-h-screen relative">
      {/* Fixed navigation buttons - improved to be more noticeable */}
      <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50  flex-col gap-4 bg-black/60 backdrop-blur-sm p-3 rounded-full shadow-lg sidenav hidden sm:flex">
        <button
          onClick={() => scrollTo(0)}
          className="w-5 h-5 bg-white/70 hover:bg-white hover:scale-125 rounded-full transition-all group relative"
          title="Home"
        >
          <span className="absolute right-8 whitespace-nowrap bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-sm pointer-events-none">Home</span>
        </button>
        <button
          onClick={() => scrollTo(1)}
          className="w-5 h-5 bg-white/70 hover:bg-white hover:scale-125 rounded-full transition-all group relative"
          title="Threats"
        >
          <span className="absolute right-8 whitespace-nowrap bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-sm pointer-events-none">Threats</span>
        </button>
        <button
          onClick={() => scrollTo(3.3)}
          className="w-5 h-5 bg-white/70 hover:bg-white hover:scale-125 rounded-full transition-all group relative"
          title="Protection"
        >
          <span className="absolute right-8 whitespace-nowrap bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-sm pointer-events-none">Protection</span>
        </button>
        <button
          onClick={() => scrollTo(6)}
          className="w-5 h-5 bg-white/70 hover:bg-white hover:scale-125 rounded-full transition-all group relative"
          title="Demos"
        >
          <span className="absolute right-8 whitespace-nowrap bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-sm pointer-events-none">Demos</span>
        </button>
        <button
          onClick={() => scrollTo(8)}
          className="w-5 h-5 bg-white/70 hover:bg-white hover:scale-125 rounded-full transition-all group relative"
          title="Quiz"
        >
          <span className="absolute right-8 whitespace-nowrap bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-sm pointer-events-none">Quiz</span>
        </button>
      </div>

      <Parallax ref={parallaxRef} pages={9.5} style={{ top: "0", left: "0" }}>
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
        <ParallaxLayer offset={0} speed={0.25} style={{ zIndex: 2 }} factor={10}>
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
        >
          <div className="section-wrapper">
            <div className="section-content">
              <Threats />
            </div>
          </div>
        </ParallaxLayer>

        {/* Protection Section with full height and better spacing */}
        <ParallaxLayer
          offset={3.3}
          speed={0.1}
          style={{ zIndex: 3 }}
          factor={2}
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
        >
          <div className="section-wrapper">
            <div className="section-content interactive-content">
              <Demos />
            </div>
          </div>
        </ParallaxLayer>

        {/* Quiz Section with full height and better spacing */}
        <ParallaxLayer
          offset={8}
          speed={0.1}
          style={{ zIndex: 3 }}
          factor={1.5}
        >
          <div className="section-wrapper">
            <div className="section-content interactive-content">
              <Quiz />
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>

      <footer className="footer">
        <Foot />
      </footer>
    </div >
  );
};

export default App;
