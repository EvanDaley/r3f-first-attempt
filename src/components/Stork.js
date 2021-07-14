/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations, useTexture } from '@react-three/drei'
// import { RepeatWrapping } from '@three'

const filePath = window.location.href + '/Monkey.glb'

export default function Model(props) {
  const texture = useTexture(window.location.href + '/flakes.png')

  const materialProps = {
    clearcoat: 1.0,
    clearcoatRoughness: 0,
    metalness: 1,
    roughness: 0.3,
    color: 'red',
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
  const { nodes, animations } = useGLTF(filePath)
  const { actions } = useAnimations(animations, group)
  console.log(actions)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Suzanne.geometry}
        morphTargetDictionary={nodes.Suzanne.morphTargetDictionary}
        morphTargetInfluences={nodes.Suzanne.morphTargetInfluences}
      >
        <meshPhysicalMaterial {...materialProps} />

      </mesh>
      <mesh geometry={nodes.Suzanne.geometry} renderOrder={100}
        morphTargetDictionary={nodes.Suzanne.morphTargetDictionary}
        morphTargetInfluences={nodes.Suzanne.morphTargetInfluences}
      >
        <meshPhysicalMaterial {...materialProps} transmission={0.95} color="black" />
      </mesh>
    </group>
  )
}

useGLTF.preload(filePath)
