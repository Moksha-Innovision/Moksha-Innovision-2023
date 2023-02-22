import { Loader, OrbitControls, Sparkles, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import LandingPageCardContainer from "../components/Cards/LandingPageCardContainer";
import Footer from "../components/LandingPage/Footer";

import { Koulen } from "@next/font/google";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

import Model from "../components/ui/Model/model";
import Navbar from "../components/ui/Navbar/Navbar";

export default function App() {
  const [pop, setPop] = useState("");
  const [zoom, setZoom] = useState<any>(1.1);
  return (
    <div className="bg-prussian-blue-900">
      <Navbar />
      <div
        className={`${koulen.className} flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-opacity-5 bg-index-pattern  bg-contain pt-[2vh] md:flex-row`}
      >
        <div
          onClick={() => {
            setZoom(zoom == 2 ? 1 : 2);
            console.log(zoom);
          }}
          // onClick={() => setPop("appear")}
          className={`${
            pop != "" ? "h-[40vh]" : "h-[60vh]"
          }  flex w-full md:h-screen md:w-2/3`}
        >
          <Canvas
            className="sticky top-0 h-full w-full"
            gl={{ physicallyCorrectLights: true }}
            shadows
            camera={{
              fov: 35,
              zoom: 1.1,
              near: 10,
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
    </div>
  );
}
