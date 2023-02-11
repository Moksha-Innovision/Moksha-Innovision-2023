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
  const [threed, setthreed] = useState(true);

  return (
    <div className="bg-blue-900 min-h-screen">
      <Navbar />

      <div
        id="canvas-container"
        className="h-[600px] w-[600px] m-auto rounded-full  -z-10 pt-[7vh] bg-blue-900 shadow-2xl  shadow-saffron-500 "
      >
        <Canvas
          gl={{ logarithmicDepthBuffer: true, physicallyCorrectLights: true }}
          camera={{
            position: [
              -Math.random() * 10,
              Math.random() * 5,
              3 + Math.random() * 3,
            ],
          }}
          className="rounded-full"
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
            {threed && (
              <OrbitControls
                autoRotate
                autoRotateSpeed={-0.4}
                maxDistance={10}
                minDistance={10}
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2.2}
              />
            )}
          </Suspense>
        </Canvas>
      </div>

      <h1 className="text-7xl text-center font-bold bg-gradient-to-b from-yellow-300 to-razzmatazz-600 text-transparent bg-clip-text drop-shadow-[4.58px_4.58px_1.53px_rgba(231,7,41,1)]">
        Moksha Innovision
      </h1>
      <button
        onClick={() => setthreed(!threed)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-[calc(_7vh_+_10px_)] cursor-pointer z-50"
      >
        {threed ? "pause interactive" : "make interactive"}
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute top-[calc(_7vh_+_10px_)] right-3 cursor-pointer z-50"
        onClick={() => {
          console.log("clicked");
          setNight(!night);
        }}
      >
        Change Scene
      </button>
    </div>
  );
}
