import { Decal, Sparkles, useGLTF, useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import tshirtImage from "../assests/img/shirt_baked.glb";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import logo from "../assests/img/threejs.png";
import { useControls } from 'leva'
const Shirt = () => {
  const model = useGLTF(tshirtImage);
  const controls = useControls({ name: 'Texture', aNumber: 0,position:[0, 0.04, 0.15] ,scale:0.15,rotation:[0, 0, 0] })
  const decalRef = useRef();
  console.log(controls, "controls");
  const logoTexture = useTexture(logo);
  useFrame((state, delta) => {
    easing.dampC(model.materials.lambert1.color, "red", 0.25, delta);
    // decalRef.current.rotation.y +=-10
  });
  return (
    <>
      {/* <OrbitControls /> */}
      {/* <primitive args={[4, 4,4]} color="red"  object={model.scene}/> */}
      {/* <Sparkles/> */}
      <mesh  castShadow  geometry={model.nodes.T_Shirt_male.geometry} material={model.materials.lambert1} material-roughness={1} dispose={null}>
        {/* <Decal 
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={logoTexture}
          /> */}

        <Decal  ref={decalRef} position={controls.position} rotation={controls.rotation} scale={controls.scale} map={logoTexture} mapAnisotropy={16} depthTest={false} depthWrite={true} />
      </mesh>
    </>
  );
};

export default Shirt;
