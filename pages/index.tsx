import { Inter } from "@next/font/google";
import { Loader, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Model from "../components/ui/Model/model";
import Navbar from "../components/ui/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function App() {
  const [popup, setPopup] = useState("none");
  // const [interactive,setInteractive]=useState(false)

  const color = "#05055e";
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="h-screen  w-2/3 bg-prussian-blue-1000 ">
          <Canvas
            gl={{ physicallyCorrectLights: true }}
            shadows
            camera={{ position: [-15, 6, 12], fov: 35 }}
          >
            {/* <Sky  distance={30} sunPosition={[0, 1, 1]} inclination={2} azimuth={0.25} /> */}
            {/* <Sparkles count={200} size={30} opacity={1} speed={0.3} color={'#fea123'} scale={25} /> */}
            <Stage shadows={true} adjustCamera={1}>
              {/* <Grid infiniteGrid cellSize={2} cellColor='red' sectionColor={'red'}/> */}
              {/* <CameraShake maxYaw={0.01} intensity={1} yawFrequency={2} /> */}
              {/* <ambientLight /> */}
              <Model setPopup={setPopup} />
            </Stage>
            <OrbitControls
              makeDefault
              minPolarAngle={-Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              enableZoom={false}
            />
          </Canvas>
          <Loader />
        </div>

        {popup === "something" ? (
          <div className="ml-auto h-[200vh]  w-1/3 bg-red-500 bg-event-pattern"></div>
        ) : (
          <div className="h-screen w-1/3 bg-red-500 "> </div>
        )}
      </div>
    </>
  );
}
