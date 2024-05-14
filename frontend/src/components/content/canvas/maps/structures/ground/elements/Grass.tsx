/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Grass.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Grass.tsx 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

import { ObjectSettingType } from '../../../../../../../types/GameType';

import { useBox } from '@react-three/cannon';

type GLTFResult = GLTF & {
    nodes: {
        Grass_Grass_Green_0: THREE.Mesh;
    };
    materials: {
        Grass_Green: THREE.MeshStandardMaterial;
    };
};

export function Grass(props: ObjectSettingType) {
    const { nodes, materials } = useGLTF('/Grass.glb') as GLTFResult;
    const [ref] = useBox<THREE.Mesh>(() => ({
        args: [1, 1, 1],
        mass: 0.1,
        position: props.position,
        rotation: props.rotation,
        linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한
        angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한
    }));
    return (
        <group position={[0, 0, 0]} dispose={null}>
            <mesh
                ref={ref}
                geometry={nodes.Grass_Grass_Green_0.geometry}
                material={materials.Grass_Green}
                position={props.position}
                rotation={props.rotation}
            />
        </group>
    );
}

useGLTF.preload('/models/object/Grass.glb');
