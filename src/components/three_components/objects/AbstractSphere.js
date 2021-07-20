/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture, MeshDistortMaterial, Shadow } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const filePath = window.location.href + '/models/AbstractSphere.glb'

export default function AbstractSphere(props) {
  // const texture = useTexture(window.location.href + '/images/flakes.png')

  // const materialProps = {
  //   clearcoat: 1.0,
  //   clearcoatRoughness: 0,
  //   metalness: 0.65,
  //   roughness: 0.3,
  //   color: 'blue',
  //   normalMap: texture,
  //   normalScale: [0.3, 0.3],
  //   'normalMap-wrapS': THREE.RepeatWrapping,
  //   'normalMap-wrapT': THREE.RepeatWrapping,
  //   'normalMap-repeat': [30, 30],
  //   'normalMap-anisotropy': 16,
  //   transmission: 0.6,
  //   transparent: true
  // }

  // const material1 = new THREE.MeshPhysicalMaterial(materialProps)
  // console.log(material1)

  const group = useRef()
  const { nodes, materials } = useGLTF(filePath)
  // console.log(materials)
  console.log(nodes, materials)

  // console.log(materials.Mat1)

  useFrame(({ clock }) => {
    const t = (1 + Math.sin(clock.getElapsedTime() * 1.5)) / 2
    group.current.position.y = (t / 3) + 1.1
    // shadow.current.scale.y = shadow.current.scale.z = 1 + t
    // shadow.current.scale.x = (1 + t) * 1.25
    group.current.rotation.x = group.current.rotation.z += 0.005
    // group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.mouse[0] / 2, 0.05)
    // group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, state.mouse[1] / 4, 0.03)
  })

  return (
    <group ref={group} {...props} dispose={null} position={[0, 1.1, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere003.geometry}
        material={nodes.Icosphere003.material}
        scale={[1.06, 1.06, 1.06]}
      >
        <mesh geometry={nodes.Icosphere003.geometry} castShadow receiveShadow>
          <MeshDistortMaterial color="#ffffff" flatShading roughness={1} metalness={0.5} factor={15} speed={5} />
        </mesh>
        <mesh geometry={nodes.Icosphere003.geometry}>
          <meshBasicMaterial wireframe />
        </mesh>
      </mesh>
      {/* <group position={[0,.85, 0]}>
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

      </mesh> */}
    </group>
  )
}

useGLTF.preload(filePath)