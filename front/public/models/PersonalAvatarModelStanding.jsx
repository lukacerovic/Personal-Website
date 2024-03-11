import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/personalAvatarModel.gltf");
  
  const groupRef = useRef();
  
  // Postavljanje stanja za smjer rotacije
  const rotationDirectionRef = useRef(1); // 1 za rotaciju u pozitivnom smjeru, -1 za rotaciju u negativnom smjeru

  // Funkcija za rotaciju i translaciju
  useFrame(() => {
    groupRef.current.rotation.x = 0.5
    groupRef.current.rotation.y += 0.05;

  });

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <mesh geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} />
      <mesh
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
      />
      <mesh
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
      />
      <mesh
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
      />
      <mesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
      />
      <mesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
      />
      <mesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
      />
      <mesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
      />
      <mesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
      />
    </group>
  );
}

useGLTF.preload("/models/personalAvatarModel.gltf");
