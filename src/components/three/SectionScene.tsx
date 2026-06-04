import { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { Group } from "three";
import WebGLErrorBoundary from "./WebGLErrorBoundary";

export interface Shape {
  pos: readonly [number, number, number];
  scale: number;
  color: string;
  type: "distort" | "wobble";
  geometry: "box" | "cone" | "cylinder" | "torus" | "tetrahedron" | "capsule";
  speed: number;
}

interface SectionSceneProps {
  shapes?: Shape[];
  className?: string;
  inView?: boolean;
}

const Shapes = ({ s }: { s: Shape[] }) => {
  const group = useRef<Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.x = Math.sin(t * 0.08) * 0.06;
      group.current.rotation.y = Math.sin(t * 0.05) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {s.map((shape, i) => {
        const geom =
          shape.geometry === "box" ? (
            <boxGeometry args={[1, 1, 1]} />
          ) : shape.geometry === "cone" ? (
            <coneGeometry args={[0.7, 1.2, 24]} />
          ) : shape.geometry === "cylinder" ? (
            <cylinderGeometry args={[0.6, 0.6, 1, 24]} />
          ) : shape.geometry === "torus" ? (
            <torusGeometry args={[0.7, 0.25, 20, 32]} />
          ) : shape.geometry === "tetrahedron" ? (
            <tetrahedronGeometry args={[1, 0]} />
          ) : (
            <capsuleGeometry args={[0.4, 0.8, 8, 16]} />
          );

        const mat =
          shape.type === "distort" ? (
            <MeshDistortMaterial
              color={shape.color}
              transparent
              opacity={0.55}
              distort={0.3}
              speed={shape.speed}
              metalness={0.15}
              roughness={0.5}
            />
          ) : (
            <MeshWobbleMaterial
              color={shape.color}
              transparent
              opacity={0.45}
              factor={0.15}
              speed={shape.speed}
              metalness={0.2}
              roughness={0.4}
            />
          );

        return (
          <Float
            key={i}
            speed={0.6 + shape.speed * 0.3}
            rotationIntensity={0.25}
            floatIntensity={0.5}
          >
            <mesh position={shape.pos} scale={shape.scale}>
              {geom}
              {mat}
            </mesh>
          </Float>
        );
      })}
    </group>
  );
};

const SectionScene = ({ shapes, className = "", inView = true }: SectionSceneProps) => {
  const items = useMemo(() => shapes ?? [], [shapes]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {inView ? (
        <WebGLErrorBoundary>
          <Suspense fallback={null}>
            <Canvas
              camera={{ position: [0, 0, 7], fov: 50 }}
              dpr={[1, 1.2]}
              gl={{ antialias: false }}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[4, 4, 4]} intensity={0.5} />
              <pointLight position={[-2, 1, 2]} intensity={0.3} color="#ea7c00" />
              <Shapes s={items} />
            </Canvas>
          </Suspense>
        </WebGLErrorBoundary>
      ) : (
        <div className="h-full w-full" />
      )}
    </div>
  );
};

export default SectionScene;
