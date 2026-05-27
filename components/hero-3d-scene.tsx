"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, TorusKnot } from "@react-three/drei"
import * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={[2, 0, 0]}>
        <MeshDistortMaterial
          color="#4fd1c5"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <TorusKnot ref={meshRef} args={[0.6, 0.2, 128, 32]} position={[-2.5, 0.5, -1]}>
        <meshStandardMaterial
          color="#f687b3"
          roughness={0.3}
          metalness={0.9}
          emissive="#f687b3"
          emissiveIntensity={0.2}
        />
      </TorusKnot>
    </Float>
  )
}

function FloatingParticles() {
  const count = 50
  const meshRef = useRef<THREE.InstancedMesh>(null)
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ] as [number, number, number],
        scale: Math.random() * 0.05 + 0.02,
        speed: Math.random() * 0.5 + 0.5,
      })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    
    const dummy = new THREE.Object3D()
    particles.forEach((particle, i) => {
      const t = state.clock.elapsedTime * particle.speed
      dummy.position.set(
        particle.position[0] + Math.sin(t + i) * 0.3,
        particle.position[1] + Math.cos(t + i * 0.5) * 0.3,
        particle.position[2] + Math.sin(t * 0.5 + i) * 0.3
      )
      dummy.scale.setScalar(particle.scale)
      dummy.updateMatrix()
      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#4fd1c5" transparent opacity={0.6} />
    </instancedMesh>
  )
}

export function Hero3DScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#f687b3" />
        <AnimatedSphere />
        <AnimatedTorus />
        <FloatingParticles />
      </Canvas>
    </div>
  )
}
