/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Seesaw.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Seesaw.tsx 
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ObjectSettingType } from "../../../../../../../types/GameType";

import { useBox } from "@react-three/cannon";

type GLTFResult = GLTF & {
  nodes: {
    Seesaw_Brown_2_0: THREE.Mesh;
    Seesaw_Dark_Gray_0: THREE.Mesh;
    Seesaw_Gray_Blue_0: THREE.Mesh;
    Seesaw_Yellow_2_0: THREE.Mesh;
  };
  materials: {
    Brown_2: THREE.MeshStandardMaterial;
    Dark_Gray: THREE.MeshStandardMaterial;
    Gray_Blue: THREE.MeshStandardMaterial;
    Yellow_2: THREE.MeshStandardMaterial;
  };
};

export function Seesaw(props: ObjectSettingType) {
  const { nodes, materials } = useGLTF(
    "/models/object/Seesaw.glb"
  ) as GLTFResult;
  const [ref] = useBox<THREE.Mesh>(() => ({
    args: [4, 3.5, 1.5],

    mass: 0.1,

    position: props.position,

    rotation: props.rotation,

    linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한

    angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한
  }));
  return (
    <group position={[0, 0, 0]} dispose={null}>
      <group>
        <mesh
          ref={ref}
          geometry={nodes.Seesaw_Brown_2_0.geometry}
          material={materials.Brown_2}
          position={props.position}
          rotation={props.rotation}
        />
        <mesh
          ref={ref}
          geometry={nodes.Seesaw_Dark_Gray_0.geometry}
          material={materials.Dark_Gray}
          position={props.position}
          rotation={props.rotation}
        />
        <mesh
          ref={ref}
          geometry={nodes.Seesaw_Gray_Blue_0.geometry}
          material={materials.Gray_Blue}
          position={props.position}
          rotation={props.rotation}
        />
        <mesh
          ref={ref}
          geometry={nodes.Seesaw_Yellow_2_0.geometry}
          material={materials.Yellow_2}
          position={props.position}
          rotation={props.rotation}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/object/Seesaw.glb");
