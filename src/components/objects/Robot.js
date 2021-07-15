/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

const filePath = window.location.href + '/models/Robot.glb'

export default function Robot(props) {
  const texture = useTexture(window.location.href + '/images/flakes.png')

  const materialProps = {
    clearcoat: 1.0,
    clearcoatRoughness: 0,
    metalness: 0.65,
    roughness: 0.3,
    color: 'blue',
    normalMap: texture,
    normalScale: [0.3, 0.3],
    'normalMap-wrapS': THREE.RepeatWrapping,
    'normalMap-wrapT': THREE.RepeatWrapping,
    'normalMap-repeat': [30, 30],
    'normalMap-anisotropy': 16,
    transmission: 0.6,
    transparent: true
  }

  const group = useRef()
  const { nodes, materials } = useGLTF(filePath)
  console.log(materials)

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0,.85, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.Mat1}
        >

        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.Mat2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials.Mat3}
        >
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials.Mat3}
        >
         <meshPhysicalMaterial {...materialProps} side={THREE.BackSide} /> 
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_4.geometry}
          material={materials.Mat4}
        >
          
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.001']}
        position={[0, .85, 0.03]}
      >
        <meshPhysicalMaterial {...materialProps} side={THREE.BackSide} transmission={.9}/>

      </mesh>
    </group>
  )
}

useGLTF.preload(filePath)
