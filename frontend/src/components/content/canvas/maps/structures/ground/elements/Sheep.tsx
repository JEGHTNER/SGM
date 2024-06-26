/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Sheep.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Sheep.tsx 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ObjectSettingType } from '../../../../../../../types/GameType';

import { useBox } from '@react-three/cannon';
import React from 'react';
type GLTFResult = GLTF & {
    nodes: {
        Sheep_Black_0: THREE.Mesh;
        Sheep_White_0: THREE.Mesh;
    };
    materials: {
        Black: THREE.MeshStandardMaterial;
        White: THREE.MeshStandardMaterial;
    };
};

function SheepComponent(props: ObjectSettingType) {
    const { nodes, materials } = useGLTF(
        '/models/object/Sheep.glb'
    ) as GLTFResult;

    const [ref] = useBox<THREE.Mesh>(() => ({
        args: [1, 1.3, 2],

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
                    geometry={nodes.Sheep_Black_0.geometry}
                    material={materials.Black}
                    position={props.position}
                    rotation={props.rotation}
                />
                <mesh
                    ref={ref}
                    geometry={nodes.Sheep_White_0.geometry}
                    material={materials.White}
                    position={props.position}
                    rotation={props.rotation}
                />
            </group>
        </group>
    );
}

useGLTF.preload('/models/object/Sheep.glb');

function areEqual(prevProps: ObjectSettingType, nextProps: ObjectSettingType) {
    return (
        prevProps.position[0] === nextProps.position[0] &&
        prevProps.position[1] === nextProps.position[1] &&
        prevProps.position[2] === nextProps.position[2]
    );
}

export const Sheep = React.memo(SheepComponent, areEqual);
