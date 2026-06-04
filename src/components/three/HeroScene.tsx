import { useRef, useMemo } from "react";
import { Canvas, useFrame, Group } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

interface ShapeConfig {
  pos: [number, number, number];
  scale: number;
  color: string;
}

const Shapes = () => {
  const group = useRef<Group>(null!);
  const time = useRef(0);

  const shapes: ShapeConfig[] = useMemo(
    () => [
      { pos: [-2.5, 0.5, 0], scale: 1.2, color: "#ea7c00" },
      { pos: [2.8, -0.8, -1], scale: 0.9, color: "#fac799" },
      { pos: [-1.5, -1.2, -2], scale: 0.7, color: "#f58f33" },
      { pos: [3.2, 1.0, -1.5], scale: 0.6, color: "#c76a00" },
    ],
    [],
  );

  useFrame(({ clock }) => {
    time.current = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.x = Math.sin(time.current * 0.12) * 0.1;
      group.current.rotation.y = Math.sin(time.current * 0.08) * 0.15;
    }
  });

  return (
    <group ref={group}>
      {shapes.map((s, i) => (
        <Float key={i} speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
          <mesh position={s.pos} scale={s.scale}>
            <icosahedronGeometry args={[1, 1]} />
            <MeshDistortMaterial
              color={s.color}
              transparent
              opacity={0.2}
              distort={0.2}
              speed={1.5}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const HeroScene = () => (
  <Canvas
    camera={{ position: [0, 0, 6], fov: 50 }}
    dpr={[1, 1.5]}
    gl={{ antialias: false }}
  >
    <ambientLight intensity={0.3} />
    <directionalLight position={[5, 5, 5]} intensity={0.5} />
    <Shapes />
  </Canvas>
);

export default HeroScene;
