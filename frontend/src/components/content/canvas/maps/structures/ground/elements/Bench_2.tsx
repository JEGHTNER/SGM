/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Bench_2.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Bench_2.tsx 
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ObjectSettingType } from "../../../../../../../types/GameType";
import { useBox } from "@react-three/cannon";

type GLTFResult = GLTF & {
  nodes: {
    Bench_2_Brown_3_0: THREE.Mesh;
    Bench_2_Gray_0: THREE.Mesh;
  };
  materials: {
    Brown_3: THREE.MeshStandardMaterial;
    Gray: THREE.MeshStandardMaterial;
  };
};

export function Bench_2(props: ObjectSettingType) {
  const { nodes, materials } = useGLTF(
    "/models/object/Bench_2.glb"
  ) as GLTFResult;

  const [ref] = useBox<THREE.Mesh>(() => ({
    args: [1.3, 1.8, 1.5],
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
          geometry={nodes.Bench_2_Brown_3_0.geometry}
          material={materials.Brown_3}
          position={props.position}
          rotation={props.rotation}
        />
        <mesh
          ref={ref}
          geometry={nodes.Bench_2_Gray_0.geometry}
          material={materials.Gray}
          position={props.position}
          rotation={props.rotation}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/object/Bench_2.glb");