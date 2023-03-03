import { OrbitControls, Sparkles, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { Suspense, useState } from "react";
import LandingPageCardContainer from "../components/Cards/LandingPageCardContainer";
import useWindowDimensions from "../components/Hooks/useWindowDimensions";
import Footer from "../components/LandingPage/Footer";

import Model from "../components/ui/Model/model";
import Navbar from "../components/ui/Navbar/Navbar";

export default function App() {
  const [pop, setPop] = useState("");
  const { height, width } = useWindowDimensions();

  return (
    <div className=" bg-[#012347]">
      <Head>
        <title>Moksha Innovision&apos;23</title>
        <meta property="og:title" content="" key="title" />
      </Head>
      <Navbar />

      <div
        className={`${"font-koulen"} flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-opacity-5 bg-index-pattern   bg-pattern pt-[2vh] md:flex-row`}
      >
        <div
          // onClick={() => setPop("appear")}
          className={`${
            pop != "" ? "h-[40vh]" : "h-[60vh]"
          }  flex w-full md:h-screen md:w-2/3`}
        >
          <Canvas
            className={`${
              pop && "md:w-[60vw]"
            } sticky top-0 h-full w-full md:w-[40vw]`}
            gl={{ physicallyCorrectLights: true }}
            shadows
            camera={{
              fov: 35,
              position: [-8, 0, 4],
            }}
          >
            <Suspense fallback={null}>
              <Stage
                adjustCamera={1}
                environment={width && width > 680 ? "night" : "city"}
              >
                <Model setPop={setPop} />
              </Stage>
            </Suspense>
            {width && width > 680 ? (
              <Sparkles scale={20} size={30} color={"yellow"} />
            ) : (
              ""
            )}
            {width && width > 680 ? (
              <OrbitControls
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={Math.PI - Math.PI / 8}
                maxAzimuthAngle={2 * Math.PI + Math.PI / 8}
                enableZoom={false}
              />
            ) : (
              ""
            )}
          </Canvas>
          {/* <Loader
            containerStyles={{
              backgroundColor: "rgba(0,0,50.0.5)",
              backgroundImage: "url(bgPattern.svg)",
              backdropFilter: "blur(10px)",
            }}
            innerStyles={{ backgroundColor: "red" }}
            barStyles={{}}
          /> */}
          {/*<LandingPageCardContainer />*/}
        </div>

        {pop && <LandingPageCardContainer setPop={setPop} pop={pop} />}
      </div>
      <Footer />
    </div>
  );
}
