/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Chair_brown.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Chair_brown.tsx 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Chair_11: THREE.Mesh;
    };
    materials: {
        ['Cartoon_Room_Mat.002']: THREE.MeshStandardMaterial;
    };
};

export function Chair_brown(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(
        '/models/object/Chair_brown.glb'
    ) as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Chair_11.geometry}
                material={materials['Cartoon_Room_Mat.002']}
                position={[0, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.025}
            />
        </group>
    );
}

useGLTF.preload('/models/object/Chair_brown.glb');