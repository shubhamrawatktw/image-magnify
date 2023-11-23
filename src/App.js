import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useRef, useState } from "react";
import Rheostat from "rheostat";
import "rheostat/initialize";
import Scene from "./Scene";


function App() {
// const creatingCanvasHandler = (state) => {
//   state.gl.setClearColor("cyan", 0.5);
// };

  return (
    <div className="h-[100vh]">
      
   <Canvas camera={{
    position:[2,2,6]
   }}
  //  onCreated={creatingCanvasHandler}
   >
  
     <Scene/>
   </Canvas>
     </div>
  );
}

export default App;
