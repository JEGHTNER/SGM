/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/House_2.glb -t -o src/components/content/canvas/maps/structures/ground/elements/House_2.tsx 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { ObjectSettingType } from '../../../../../../../types/GameType'

import { useBox } from '@react-three/cannon'


type GLTFResult = GLTF & {
  nodes: {
    House_2_Black_0: THREE.Mesh
    House_2_Brown__0: THREE.Mesh
    House_2_Dark_Blue__0: THREE.Mesh
    House_2_Gray_Blue__0: THREE.Mesh
    House_2_Gray_0: THREE.Mesh
    House_2_Light_Gray_0: THREE.Mesh
    House_2_Purple_2_0: THREE.Mesh
    House_2_Purple_3_0: THREE.Mesh
    House_2_Purple_4_0: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
    Dark_Blue: THREE.MeshStandardMaterial
    Gray_Blue_12: THREE.MeshStandardMaterial
    Gray: THREE.MeshStandardMaterial
    Light_Gray: THREE.MeshStandardMaterial
    Purple_2: THREE.MeshStandardMaterial
    Purple_3: THREE.MeshStandardMaterial
    Purple_4: THREE.MeshStandardMaterial
  }
}


export function House_2(props: ObjectSettingType) {
  const { nodes, materials } = useGLTF('/models/object/House_2.glb') as GLTFResult
  
  const [ref] = useBox<THREE.Mesh>(() => ({

    args: [1, 1, 1],

    mass: 0.1,

    position: props.position,

    rotation: props.rotation,

    linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한

    angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한

    }));
  return (
    <group position={[0, 0, 0]}  dispose={null}>
      <group >
        <mesh ref={ref} geometry={nodes.House_2_Black_0.geometry} material={materials.Black}  position={props.position} rotation={props.rotation}/>
        <mesh ref={ref} geometry={nodes.House_2_Brown__0.geometry} material={materials.Brown}  position={props.position} rotation={props.rotation}/>
        <mesh ref={ref} geometry={nodes.House_2_Dark_Blue__0.geometry} material={materials.Dark_Blue}  position={props.position} rotation={props.rotation}/>
        <mesh ref={ref} geometry={nodes.House_2_Gray_Blue__0.geometry} material={materials.Gray_Blue_12}  position={props.position} rotation={props.rotation}/>
        <mesh ref={ref} geometry={nodes.House_2_Gray_0.geometry} material={materials.Gray}  position={props.position} rotation={props.rotation}/>
        <mesh ref={ref} geometry={nodes.House_2_Light_Gray_0.geometry} material={materials.Light_Gray}  position={props.position} rotation={props.rotation}/>
        <mesh ref={ref} geometry={nodes.House_2_Purple_2_0.geometry} material={materials.Purple_2}  position={props.position} rotation={props.rotation}/>
        <mesh ref={ref} geometry={nodes.House_2_Purple_3_0.geometry} material={materials.Purple_3}  position={props.position} rotation={props.rotation}/>
        <mesh ref={ref} geometry={nodes.House_2_Purple_4_0.geometry} material={materials.Purple_4}  position={props.position} rotation={props.rotation}/>
      </group>
    </group>
  )
}

useGLTF.preload('/models/object/House_2.glb')