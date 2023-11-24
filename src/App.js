import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useRef, useState } from "react";
import Rheostat from "rheostat";
import "rheostat/initialize";
import Scene from "./Scene";
import Shirt from "./components/Shirt";
import { Environment } from "@react-three/drei";

function App() {
  // const creatingCanvasHandler = (state) => {
  //   state.gl.setClearColor("cyan", 0.5);
  // };

  return (
    <div className="h-[100vh]">
      <Canvas
        shadows
        camera={{ position: [2, 2, 6], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        //  camera={{
        //   position:[2,2,6]
        //  }}
        //  onCreated={creatingCanvasHandler}
      >
        {/* <ambientLight intensity={1} /> */}
        {/* <Environment preset="city" /> */}
        <Shirt />
        {/* <Scene/> */}
      </Canvas>
    </div>
  );
}

export default App;
