import { Inter } from "@next/font/google";

import ContactUs from "../components/ui/ContactUs/ContactUs";

import Navbar from "../components/ui/Navbar/Navbar";
import { Suspense, useState } from "react";
import { Canvas, context } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "../components/ui/Model/model";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [night, setNight] = useState(true);

  return (
    <>
      <Navbar />

      <div
        id="canvas-container"
        className="h-screen w-full ml-auto bg-black absolute top-0  -z-10"
      >
        <Canvas
          gl={{ logarithmicDepthBuffer: true, physicallyCorrectLights: true }}
        >
          <Suspense fallback={null}>
            <Model castShadow={false} position={[-5, -2, -5]} />
            {/* <ambientLight /> */}
            {/* <pointLight position={[1, 1, 1]} color="white" intensity={10} /> */}
            {/* <pointLight position={[-10, 10, 0]} color="white" intensity={10} /> */}
            {night ? (
              <Environment preset="night" background />
            ) : (
              <Environment preset="sunset" background />
            )}
            {/* <directionalLight position={[0,0,50]} /> */}
            <OrbitControls
              autoRotate
              autoRotateSpeed={0.2}
              maxDistance={10}
              minDistance={10}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 2.2}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className="hello" onClick={() => setNight(!night)}>
        Hello
      </div>


      


    </>
  );
}
