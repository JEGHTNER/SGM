/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Dumpster.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Dumpster.tsx 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ObjectSettingType } from '../../../../../../../types/GameType';
import { useBox } from '@react-three/cannon';

type GLTFResult = GLTF & {
    nodes: {
        Dumpster_Dark_Gray_0: THREE.Mesh;
        Dumpster_Forest_Green_0: THREE.Mesh;
    };
    materials: {
        Dark_Gray: THREE.MeshStandardMaterial;
        Forest_Green: THREE.MeshStandardMaterial;
    };
};

export function Dumpster(props: ObjectSettingType) {
    const { nodes, materials } = useGLTF(
        '/models/object/Dumpster.glb'
    ) as GLTFResult;
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
            <group>
                position={props.position} rotation={props.rotation}
                <mesh
                    ref={ref}
                    geometry={nodes.Dumpster_Dark_Gray_0.geometry}
                    material={materials.Dark_Gray}
                    position={props.position}
                    rotation={props.rotation}
                />
                <mesh
                    ref={ref}
                    geometry={nodes.Dumpster_Forest_Green_0.geometry}
                    material={materials.Forest_Green}
                    position={props.position}
                    rotation={props.rotation}
                />
            </group>
        </group>
    );
}

useGLTF.preload('/models/object/Dumpster.glb');
