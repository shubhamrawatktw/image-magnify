import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useRef, useState } from "react";
import Rheostat from "rheostat";
import "rheostat/initialize";
import Scene from "./Scene";
import Shirt from "./components/Shirt";
import { Environment } from "@react-three/drei";
import { useSnapshot } from "valtio";
import state from "./store";

function App() {
  // const creatingCanvasHandler = (state) => {
  //   state.gl.setClearColor("cyan", 0.5);
  // };
 
  return (
    <div className="h-[100vh] ">
      <div className="flex space-x-3">

      <button onClick={()=>state.type = "translate"} className="border px-2 py-1 rounded text-center bg-slate-500 text-white">translate</button>
      <button onClick={()=>state.type = "rotate"} className="border px-2 py-1 rounded text-center bg-slate-500 text-white">rotate</button>
      <button onClick={()=>state.type = "scale"} className="border px-2 py-1 rounded text-center bg-slate-500 text-white">scale</button>
      </div>
      <Canvas
        shadows
        camera={{ position: [0, 2, 6], fov: 15 }}
        gl={{ preserveDrawingBuffer: true }}
        //  camera={{
        //   position:[2,2,6]
        //  }}
        //  onCreated={creatingCanvasHandler}
      >
        <ambientLight intensity={1} />
        {/* <Environment preset="city" /> */}
        <Shirt />
        {/* <Scene/> */}
      </Canvas>
    </div>
  );
}

export default App;
