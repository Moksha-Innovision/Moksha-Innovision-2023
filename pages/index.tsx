import { Koulen } from "@next/font/google";
import * as THREE from "three";
import { Loader, OrbitControls, Stage } from "@react-three/drei";
import LandingPageCardContainer from "../components/Cards/LandingPageCardContainer";
import Footer from "../components/LandingPage/Footer";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

import Model from "../components/ui/Model/model";
import Navbar from "../components/ui/Navbar/Navbar";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export default function App() {
  const [popup, setPopup] = useState("none");
  // const [interactive,setInteractive]=useState(false)

  const lookAtPos = new THREE.Vector3(0, 0, 0);
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col bg-prussian-blue-1000  pt-[7vh] md:flex-row">
        <div className="h-[50vh] w-screen  bg-prussian-blue-1000  md:h-screen md:w-2/3 ">
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
            <Stage adjustCamera={1} intensity={0} shadows environment={"night"}>
              <Model />
            </Stage>
            <OrbitControls
              makeDefault
              autoRotate
              autoRotateSpeed={0.5}
              minPolarAngle={-Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              enableZoom={false}
            />
          </Canvas>
          <Loader />
        </div>

        <LandingPageCardContainer />
      </div>
      <Footer />
    </>
  );
}
