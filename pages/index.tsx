import { Koulen } from "@next/font/google";
import { Loader, OrbitControls, Stage } from "@react-three/drei";
import LandingPageCardContainer from "../components/Cards/LandingPageCardContainer";
import Tilt from "react-parallax-tilt";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { Grid } from "@react-three/drei";
import Model from "../components/ui/Model/model";
import Navbar from "../components/ui/Navbar/Navbar";
import LandingPageCards from "../components/Cards/LandingPageCards";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export default function App() {
  const [popup, setPopup] = useState("none");
  // const [interactive,setInteractive]=useState(false)

  const color = "#05055e";
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col bg-prussian-blue-1000 pt-[7vh] md:flex-row">
        <div className="h-[50vh] w-screen  bg-prussian-blue-1000 bg-legacy bg-cover bg-center md:h-screen md:w-2/3">
          <div className="ovelay absolute h-full w-full bg-[rgba(0,0,20,0.5)]"></div>
          <Canvas
            gl={{ physicallyCorrectLights: true }}
            shadows
            camera={{
              fov: 35,
              zoom: 1,
              near: 1,
              far: 1000,
              position: [-7, 2, 11],
            }}
          >
            <Stage
              adjustCamera={1}
              intensity={0}
              shadows
              preset={"soft"}
              environment={"night"}
            >
              <Model shadows castShadow />
            </Stage>
            <OrbitControls
              makeDefault
              autoRotate
              autoRotateSpeed={0.5}
              minPolarAngle={-Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              minAzimuthAngle={-1.2 * Math.PI}
              maxAzimuthAngle={0.5}
              enableZoom={false}
            />
          </Canvas>
        </div>
        <LandingPageCardContainer />
      </div>
    </>
  );
}
