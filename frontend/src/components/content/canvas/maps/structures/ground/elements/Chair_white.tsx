/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Chair_white.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Chair_white.tsx 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Chair_4: THREE.Mesh;
    };
    materials: {
        ['Cartoon_Room_Mat.002']: THREE.MeshStandardMaterial;
    };
};

export function Chair_white(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(
        '/models/object/Chair_white.glb'
    ) as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Chair_4.geometry}
                material={materials['Cartoon_Room_Mat.002']}
                position={[0, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.025}
            />
        </group>
    );
}

useGLTF.preload('/models/object/Chair_white.glb');