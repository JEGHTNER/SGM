/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Barn.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Barn.tsx 
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ObjectSettingType } from "../../../../../../../types/GameType";

import { useBox } from "@react-three/cannon";

type GLTFResult = GLTF & {
  nodes: {
    Barn_Dark_Gray_0: THREE.Mesh;
    Barn_Light_Gray_0: THREE.Mesh;
    Barn_Red_0: THREE.Mesh;
  };
  materials: {
    Dark_Gray: THREE.MeshStandardMaterial;
    Light_Gray: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
  };
};

export function Barn(props: ObjectSettingType) {
  const { nodes, materials } = useGLTF("/models/object/Barn.glb") as GLTFResult;
  const [ref] = useBox<THREE.Mesh>(() => ({
    args: [6, 10, 11],
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
          geometry={nodes.Barn_Dark_Gray_0.geometry}
          material={materials.Dark_Gray}
          position={props.position}
          rotation={props.rotation}
        />
        <mesh
          ref={ref}
          geometry={nodes.Barn_Light_Gray_0.geometry}
          material={materials.Light_Gray}
          position={props.position}
          rotation={props.rotation}
        />
        <mesh
          ref={ref}
          geometry={nodes.Barn_Red_0.geometry}
          material={materials.material}
          position={props.position}
          rotation={props.rotation}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/object/Barn.glb");
