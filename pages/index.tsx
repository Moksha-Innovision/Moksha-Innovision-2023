import { Loader, OrbitControls, Sparkles, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import LandingPageCardContainer from "../components/Cards/LandingPageCardContainer";
import Footer from "../components/LandingPage/Footer";

import Model from "../components/ui/Model/model";
import Navbar from "../components/ui/Navbar/Navbar";

export default function App() {
  const [pop, setPop] = useState("");
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col bg-prussian-blue-1000  pt-[7vh] md:flex-row">
        <div
          // onClick={() => setPop("appear")}
          className="h-[50vh] w-screen     bg-black  md:h-screen md:w-2/3 "
        >
          <Canvas
            className="sticky top-0 h-full w-full"
            gl={{ physicallyCorrectLights: true }}
            shadows
            camera={{
              fov: 35,
              zoom: 0.6,
              near: 1,
              far: 1000,
              position: [-7, 2, 11],
            }}
          >
            <Stage adjustCamera={1} intensity={0} shadows environment={"night"}>
              <Model setPop={setPop} />
            </Stage>
            <Sparkles scale={20} size={30} color={"yellow"} />
            <OrbitControls
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2}
              minAzimuthAngle={Math.PI - Math.PI / 8}
              maxAzimuthAngle={2 * Math.PI + Math.PI / 8}
              enableZoom={false}
            />
          </Canvas>
          <Loader
            containerStyles={{
              backgroundColor: "rgba(0,0,50.0.5)",
              backgroundImage: "url(bgPattern.svg)",
              backdropFilter: "blur(10px)",
            }}
            innerStyles={{ backgroundColor: "red" }}
            barStyles={{}}
          />
          {/*<LandingPageCardContainer />*/}
        </div>

        {pop && <LandingPageCardContainer setPop={setPop} pop={pop} />}
      </div>
      <Footer />
    </>
  );
}
