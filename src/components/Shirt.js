import { Decal, Html, Sparkles, TransformControls, useGLTF, useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import tshirtImage from "../assests/img/shirt_baked.glb";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import logo from "../assests/img/threejs.png";
import { useControls } from "leva";
import { useDrag } from "@use-gesture/react";
import { useSnapshot } from "valtio";
import state from "../store";

const Shirt = () => {
  const model = useGLTF(tshirtImage);
 const controlsRef = useRef()
  const controls = useControls({ name: "Texture", color: "red", position: [0, 0.04, 0.15], scale: 0.15, rotation: [0, 0, 0] });
  const decalRef = useRef();
  console.log(controls, "controls");
  const logoTexture = useTexture(logo);

  useFrame((state, delta) => {
    easing.dampC(model.materials.lambert1.color, controls.color, 0.25, delta);
    // decalRef.current.rotation.y +=-10
  });
  const snap = useSnapshot(state);
  return (
    <group>
      {/* <OrbitControls makeDefault /> */}
      {/* <primitive args={[4, 4,4]} color="red"  object={model.scene}/> */}
      {/* <Sparkles/> */}
      <mesh castShadow geometry={model.nodes.T_Shirt_male.geometry} material={model.materials.lambert1} material-roughness={1} dispose={null}>
        <TransformControls mode={snap.type} ref={controlsRef} >
        {/* showX={false} showY={true} showZ={true} // props for transformation */}
          {/* <Decal {...bind()} ref={decalRef} position={controls.position} rotation={controls.rotation} scale={controls.scale} map={logoTexture} mapAnisotropy={16} depthTest={false} depthWrite={true} /> */}
          <ambientLight />
          <mesh ref={decalRef} position={controls.position} rotation={controls.rotation} scale={controls.scale}>
            <planeGeometry />
            <meshStandardMaterial map={logoTexture} transparent depthTest={false} depthWrite={true} />
          </mesh>
        </TransformControls>
      </mesh>
    </group>
  );
};

export default Shirt;
