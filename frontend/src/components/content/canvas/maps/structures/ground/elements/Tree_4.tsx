/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Tree_4.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Tree_4.tsx 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ObjectSettingType } from '../../../../../../../types/GameType';

import { useBox } from '@react-three/cannon';
type GLTFResult = GLTF & {
    nodes: {
        Tree_4_Brown_2_0: THREE.Mesh;
        Tree_4_Grass_Green_0: THREE.Mesh;
    };
    materials: {
        Brown_2: THREE.MeshStandardMaterial;
        Grass_Green: THREE.MeshStandardMaterial;
    };
};

export function Tree_4(props: ObjectSettingType) {
    const { nodes, materials } = useGLTF(
        '/models/object/Tree_4.glb'
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
                <mesh
                    ref={ref}
                    geometry={nodes.Tree_4_Brown_2_0.geometry}
                    material={materials.Brown_2}
                    position={props.position}
                    rotation={props.rotation}
                />
                <mesh
                    ref={ref}
                    geometry={nodes.Tree_4_Grass_Green_0.geometry}
                    material={materials.Grass_Green}
                    position={props.position}
                    rotation={props.rotation}
                />
            </group>
        </group>
    );
}

useGLTF.preload('/models/object/Tree_4.glb');
