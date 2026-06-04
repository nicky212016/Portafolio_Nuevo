import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Group } from "three";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Sparkles,
} from "@react-three/drei";

interface ShapeConfig {
  pos: [number, number, number];
  scale: number;
  color: string;
  type: "distort" | "wobble";
  geometry: "icosahedron" | "torusKnot" | "dodecahedron" | "octahedron";
  speed: number;
  floatSpeed: number;
}

const Shapes = () => {
  const group = useRef<Group>(null!);

  const shapes: ShapeConfig[] = useMemo(
    () => [
      {
        pos: [-2.8, 0.6, 0],
        scale: 1.3,
        color: "#ea7c00",
        type: "distort",
        geometry: "icosahedron",
        speed: 1.2,
        floatSpeed: 1.5,
      },
      {
        pos: [3.0, -1.0, -1.5],
        scale: 0.8,
        color: "#f58f33",
        type: "wobble",
        geometry: "torusKnot",
        speed: 0.8,
        floatSpeed: 1.0,
      },
      {
        pos: [-1.8, -1.4, -2.5],
        scale: 0.6,
        color: "#fac799",
        type: "distort",
        geometry: "dodecahedron",
        speed: 1.8,
        floatSpeed: 0.7,
      },
      {
        pos: [3.5, 1.2, -2],
        scale: 0.55,
        color: "#c76a00",
        type: "wobble",
        geometry: "octahedron",
        speed: 1.0,
        floatSpeed: 1.3,
      },
      {
        pos: [-0.5, -0.3, -3.5],
        scale: 0.4,
        color: "#faebd7",
        type: "distort",
        geometry: "icosahedron",
        speed: 2.0,
        floatSpeed: 0.5,
      },
    ],
    [],
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.x = Math.sin(t * 0.1) * 0.08;
      group.current.rotation.y = Math.sin(t * 0.06) * 0.12;
    }
  });

  return (
    <group ref={group}>
      {shapes.map((s, i) => {
        const geom =
          s.geometry === "icosahedron" ? (
            <icosahedronGeometry args={[1, 1]} />
          ) : s.geometry === "torusKnot" ? (
            <torusKnotGeometry args={[0.8, 0.3, 64, 8]} />
          ) : s.geometry === "dodecahedron" ? (
            <dodecahedronGeometry args={[1, 0]} />
          ) : (
            <octahedronGeometry args={[1, 0]} />
          );

        const mat =
          s.type === "distort" ? (
            <MeshDistortMaterial
              color={s.color}
              transparent
              opacity={0.35}
              distort={0.3}
              speed={s.speed}
              metalness={0.1}
              roughness={0.6}
            />
          ) : (
            <MeshWobbleMaterial
              color={s.color}
              transparent
              opacity={0.3}
              factor={0.15}
              speed={s.speed}
              metalness={0.2}
              roughness={0.5}
            />
          );

        return (
          <Float
            key={i}
            speed={s.floatSpeed}
            rotationIntensity={0.3}
            floatIntensity={0.6}
          >
            <mesh position={s.pos} scale={s.scale}>
              {geom}
              {mat}
            </mesh>
          </Float>
        );
      })}

      <Sparkles
        count={30}
        scale={8}
        size={0.8}
        speed={0.4}
        opacity={0.15}
        color="#ea7c00"
      />
    </group>
  );
};

const HeroScene = () => (
  <Canvas
    camera={{ position: [0, 0, 6], fov: 50 }}
    dpr={[1, 1.5]}
    gl={{ antialias: true }}
  >
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={0.6} />
    <pointLight position={[-3, 2, 3]} intensity={0.4} color="#ea7c00" />
    <pointLight position={[3, -2, 3]} intensity={0.3} color="#f58f33" />
    <Shapes />
  </Canvas>
);

export default HeroScene;
