import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from "three"
import { OrbitControls } from '@react-three/drei'
import img from "./assests/img/t-shirt.png"
// import img2 from "../public/shirt_baked.glb"
const Scene = () => {
  // console.log(img2);
    const meshRef = useRef()
    const cubeRef = useRef();
    const texture = useLoader(THREE.TextureLoader,img)
    useFrame((state,delta)=>{
      // console.log();
        // meshRef.current.rotation.y += delta
        // cubeRef.current.rotation.z += delta
        // cubeRef.current.rotation.x += delta
    })
  return (
    <group>
    <OrbitControls/>
    <axesHelper args={[3]}/>
    {/* <mesh ref={meshRef}>
      <torusGeometry args={[1]}/>
      <meshBasicMaterial color="red" side={THREE.DoubleSide} />
     </mesh>
     <mesh ref={cubeRef} position-x={2}>
      <boxGeometry />
      <meshLambertMaterial color="purple" side={THREE.DoubleSide}  />
     </mesh> */}
     <mesh ref={cubeRef}>
        <planeGeometry args={[4, 4,4]} />
        <meshBasicMaterial map={texture}   transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

export default Scene