
import { CameraControls, Loader, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LandingPageCardContainer from "../components/Cards/LandingPageCardContainer";
import Footer from "../components/LandingPage/Footer";

import Model from "../components/ui/Model/model";
import Navbar from "../components/ui/Navbar/Navbar";


export default function App() {

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
              zoom: 0.6,
              near: 1,
              far: 1000,
              position: [-7, 2, 11],
            }}
          >
            <Stage adjustCamera={1} intensity={0} shadows environment={"night"}>
              <Model />
            </Stage>
            <CameraControls


              minPolarAngle={-Math.PI / 2}
              maxPolarAngle={Math.PI / 2}


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
