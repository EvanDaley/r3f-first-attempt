import React, { useRef, useMemo } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber"
const filePath = window.location.href + '/models/OxygenContainer.glb'

export default function OxygenContainer2(props) {
  const texture = useTexture(window.location.href + '/images/flakes.png')

  const materialProps = {
    clearcoat: 1.0,
    clearcoatRoughness: 0.2,
    metalness: 0.0,
    roughness: 0.1,
    color: 'teal',
    normalMap: texture,
    normalScale: [0.3, 0.3],
    'normalMap-wrapS': THREE.RepeatWrapping,
    'normalMap-wrapT': THREE.RepeatWrapping,
    'normalMap-repeat': [90, 90],
    'normalMap-anisotropy': 16,
    transmission: 0.93,
    transparent: true,
    opacity: 1
  }

  const group = useRef()

  const { nodes, materials } = useGLTF(filePath)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Container.geometry}
        material={materials['Material.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant.geometry}
        material={materials['Material.004']}
        position={[0.1, 2.21, -0.25]}
        rotation={[-0.38, -0.26, -0.11]}
        scale={[0.33, 0.33, 0.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GlassDome.geometry}
        material={materials.Glass}
      >
        <meshPhysicalMaterial {...materialProps}  />
      </mesh>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.GlassDome.geometry}
        material={materials.Glass}
      >
        <meshPhysicalMaterial {...materialProps} side={THREE.BackSide} />
      </mesh> */}

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Container001.geometry}
        material={materials['Material.002']}
        position={[0, 0.01, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Container002.geometry}
        material={nodes.Container002.material}
        position={[0, 0.01, 0]}
      />
    </group>
  )
}

useGLTF.preload(filePath)
