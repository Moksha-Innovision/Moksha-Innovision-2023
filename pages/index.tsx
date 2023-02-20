import { Inter } from "@next/font/google";

import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Model from "../components/ui/Model/model";
import Navbar from "../components/ui/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

import { Koulen } from "@next/font/google";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [night, setNight] = useState(true);
  const [threed, setthreed] = useState(true);

  return (
    <div
      className={`${koulen.className} min-h-[100vh] bg-prussian-blue-900 bg-event-pattern bg-contain bg-repeat`}
    >
      <Navbar />

      <div
        id="canvas-container"
        className="-z-10 m-auto h-[600px] w-[600px]  rounded-full bg-black pt-[7vh]  shadow-2xl  shadow-saffron-500 "
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
            <ambientLight />
            <pointLight position={[1, 1, 1]} color="white" intensity={10} />
            <pointLight position={[-10, 10, 0]} color="white" intensity={10} />
            {night ? <Stars /> : <></>}
            <directionalLight position={[0, 0, 50]} />
            {threed && (
              <OrbitControls
                autoRotate
                enableZoom
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

      <h1 className="bg-gradient-to-b from-yellow-300 to-razzmatazz-600 bg-clip-text text-center text-7xl font-bold text-transparent drop-shadow-[4.58px_4.58px_1.53px_rgba(231,7,41,1)]">
        Moksha Innovision
      </h1>
      <button
        onClick={() => setthreed(!threed)}
        className="absolute top-[calc(_7vh_+_10px_)] z-50 cursor-pointer rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      >
        {threed ? "pause interactive" : "make interactive"}
      </button>
      <button
        className="absolute top-[calc(_7vh_+_10px_)] right-3 z-50 cursor-pointer rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700"
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
