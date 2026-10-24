import { useEffect, useRef } from "react";
import * as THREE from "three";

type HeroTechVisualProps = {
  reduceMotion: boolean;
};

const technologies = [
  { label: "Java", position: "hero-tech-label-java" },
  { label: "Spring Boot", position: "hero-tech-label-spring" },
  { label: "React", position: "hero-tech-label-react" },
  { label: "Angular", position: "hero-tech-label-angular" },
  { label: "Django", position: "hero-tech-label-django" },
];

export function HeroTechVisual({ reduceMotion }: HeroTechVisualProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0.1, 5.4);

    const group = new THREE.Group();
    group.scale.setScalar(0.82);
    group.position.set(0, 0.05, 0);
    scene.add(group);

    const knotMaterial = new THREE.MeshBasicMaterial({
      color: "#0b795b",
      wireframe: true,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
    });
    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.95, 0.24, 128, 16),
      knotMaterial,
    );
    group.add(knot);

    const innerMaterial = new THREE.MeshBasicMaterial({
      color: "#188a68",
      wireframe: true,
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
    });
    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.48, 1),
      innerMaterial,
    );
    group.add(inner);

    const orbit = new THREE.Mesh(
      new THREE.TorusGeometry(1.35, 0.01, 8, 64),
      new THREE.MeshBasicMaterial({
        color: "#4a9e7c",
        transparent: true,
        opacity: 0.22,
      }),
    );
    orbit.rotation.x = Math.PI / 2;
    group.add(orbit);

    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = canvas.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    });
    resizeObserver.observe(canvas);

    const clock = new THREE.Clock();
    let frameId = 0;

    if (reduceMotion) {
      renderer.render(scene, camera);
    } else {
      const animate = () => {
        frameId = window.requestAnimationFrame(animate);
        const time = clock.getElapsedTime();
        group.rotation.y = time * 0.18;
        group.rotation.x = Math.sin(time * 0.3) * 0.08;
        group.position.x = Math.sin((time * Math.PI) / 30) * 0.14;
        knot.rotation.z = time * 0.12;
        inner.rotation.y = -time * 0.35;
        renderer.render(scene, camera);
      };

      animate();
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      knot.geometry.dispose();
      knotMaterial.dispose();
      inner.geometry.dispose();
      innerMaterial.dispose();
      orbit.geometry.dispose();
      orbit.material.dispose();
      renderer.dispose();
    };
  }, [reduceMotion]);

  return (
    <div
      aria-label="Three-dimensional wireframe torus knot with a rotating icosahedron, surrounded by Abdul Rahim's technology stack"
      role="img"
      data-reduced-motion={reduceMotion}
      className="hero-tech-visual relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden rounded-[1.75rem] border border-red-950/60"
    >
      <div aria-hidden="true" className="hero-tech-grid absolute inset-0" />
      <div aria-hidden="true" className="hero-tech-orbit hero-tech-orbit-outer absolute inset-[6%] rounded-full border border-dashed" />
      <div aria-hidden="true" className="hero-tech-orbit hero-tech-orbit-inner absolute inset-[14%] rounded-full border" />

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="hero-tech-knot absolute left-1/2 top-[45%] aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2"
      />

      <div
        aria-hidden="true"
        className="hero-tech-orbit hero-tech-orbit-dots absolute inset-[10%]"
      >
        <span className="absolute left-1/2 top-0 size-2 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.45)]" />
      </div>

      <span aria-hidden="true" className="hero-tech-label hero-tech-label-rest absolute">
        REST APIs
      </span>
      <span aria-hidden="true" className="hero-tech-label hero-tech-label-full-stack absolute">
        FULL STACK
      </span>
      {technologies.map((technology) => (
        <span
          key={technology.label}
          className={`hero-tech-label absolute ${technology.position}`}
        >
          {technology.label}
        </span>
      ))}

      <div aria-hidden="true" className="hero-tech-footer absolute">
        <span className="hero-tech-footer-title">BUILDING WITH</span>
        <div className="flex flex-wrap gap-2">
          <span>Python</span>
          <span>MongoDB</span>
          <span>Oracle</span>
          <span>Docker</span>
        </div>
      </div>
    </div>
  );
}
