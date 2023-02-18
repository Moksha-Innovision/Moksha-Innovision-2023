import { Inter } from "@next/font/google";
import Navbar from "../components/ui/Navbar/Navbar";
import Model from "../components/ui/Model/model";
const inter = Inter({ subsets: ["latin"] });

import { Canvas } from "@react-three/fiber";
import {
  Stage,
  OrbitControls,
  Sky,
  Sparkles,
  Float,
  Grid,
  CameraShake,
} from "@react-three/drei";
import { useState } from "react";

export default function App() {
  const color = "black";
  return (
    <>
      <Navbar />
      <div className=" w-screen h-screen" style={{ background: color }}>
        <Canvas
          gl={{ physicallyCorrectLights: true }}
          shadows
          camera={{ position: [-15, 6, 12], fov: 35 }}
        >
          {/* <Sky  distance={30} sunPosition={[0, 1, 1]} inclination={2} azimuth={0.25} /> */}
          <Sparkles
            count={200}
            size={30}
            opacity={1}
            speed={0.3}
            color={"#fea123"}
            scale={25}
          />
          <Stage environment="night" shadows={true} adjustCamera={1}>
            {/* <Grid infiniteGrid cellSize={2} cellColor='red' sectionColor={'red'}/> */}
            <CameraShake maxYaw={0.01} intensity={1} yawFrequency={2} />
            <ambientLight />
            <Float speed={0} floatIntensity={5}>
              <Model />
            </Float>
          </Stage>
          <OrbitControls
            makeDefault
            minPolarAngle={-Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            enableZoom={false}
          />
        </Canvas>
      </div>
    </>
  );
}
