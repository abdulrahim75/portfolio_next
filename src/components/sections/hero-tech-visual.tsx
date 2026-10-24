type HeroTechVisualProps = {
  reduceMotion: boolean;
};

type Point3D = {
  x: number;
  y: number;
  z: number;
};

const curveSteps = 160;
const tubeSteps = 20;
const tubeRadius = 0.48;

function subtract(a: Point3D, b: Point3D): Point3D {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

function dot(a: Point3D, b: Point3D): number {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

function normalize(point: Point3D): Point3D {
  const length = Math.hypot(point.x, point.y, point.z);
  return { x: point.x / length, y: point.y / length, z: point.z / length };
}

function cross(a: Point3D, b: Point3D): Point3D {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  };
}

function knotCenter(t: number): Point3D {
  const radius = 2 + Math.cos(3 * t);
  return {
    x: radius * Math.cos(2 * t),
    y: radius * Math.sin(2 * t),
    z: 1.25 * Math.sin(3 * t),
  };
}

function project(point: Point3D): Point3D {
  const yaw = 0.25;
  const pitch = 0.7;
  const x = point.x * Math.cos(yaw) + point.z * Math.sin(yaw);
  const yawDepth = -point.x * Math.sin(yaw) + point.z * Math.cos(yaw);
  const y = point.y * Math.cos(pitch) - yawDepth * Math.sin(pitch);
  const depth = point.y * Math.sin(pitch) + yawDepth * Math.cos(pitch);
  const perspective = 5 / (5 + depth * 0.12);
  return {
    x: 200 + x * 39 * perspective,
    y: 200 - y * 39 * perspective,
    z: depth,
  };
}

function makeTubePoint(t: number, angle: number): Point3D {
  const center = knotCenter(t);
  const before = knotCenter(t - 0.001);
  const after = knotCenter(t + 0.001);
  const tangent = normalize(subtract(after, before));
  const acceleration = subtract(subtract(after, center), subtract(center, before));
  const normal = normalize(
    subtract(acceleration, {
      x: tangent.x * dot(acceleration, tangent),
      y: tangent.y * dot(acceleration, tangent),
      z: tangent.z * dot(acceleration, tangent),
    }),
  );
  const binormal = cross(tangent, normal);
  return project({
    x: center.x + tubeRadius * (normal.x * Math.cos(angle) + binormal.x * Math.sin(angle)),
    y: center.y + tubeRadius * (normal.y * Math.cos(angle) + binormal.y * Math.sin(angle)),
    z: center.z + tubeRadius * (normal.z * Math.cos(angle) + binormal.z * Math.sin(angle)),
  });
}

function formatPoint(point: Point3D): string {
  return `${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
}

function makeLongitudinalPath(tubeIndex: number): string {
  const angle = (tubeIndex / tubeSteps) * Math.PI * 2;
  return Array.from({ length: curveSteps + 1 }, (_, step) => {
    const point = makeTubePoint((step / curveSteps) * Math.PI * 2, angle);
    return `${step === 0 ? "M" : "L"}${formatPoint(point)}`;
  }).join(" ");
}

function makeRingPath(curveIndex: number): string {
  const t = (curveIndex / curveSteps) * Math.PI * 2;
  return Array.from({ length: tubeSteps + 1 }, (_, step) => {
    const point = makeTubePoint(t, (step / tubeSteps) * Math.PI * 2);
    return `${step === 0 ? "M" : "L"}${formatPoint(point)}`;
  }).join(" ") + " Z";
}

function makeDiagonalPath(): string {
  const paths: string[] = [];

  for (let curveIndex = 0; curveIndex < curveSteps; curveIndex += 4) {
    for (let tubeIndex = 0; tubeIndex < tubeSteps; tubeIndex += 2) {
      const start = makeTubePoint(
        (curveIndex / curveSteps) * Math.PI * 2,
        (tubeIndex / tubeSteps) * Math.PI * 2,
      );
      const end = makeTubePoint(
        ((curveIndex + 4) / curveSteps) * Math.PI * 2,
        (((tubeIndex + 1) % tubeSteps) / tubeSteps) * Math.PI * 2,
      );
      paths.push(`M${formatPoint(start)} L${formatPoint(end)}`);
    }
  }

  return paths.join(" ");
}

const longitudinalPaths = Array.from({ length: tubeSteps }, (_, index) =>
  makeLongitudinalPath(index),
);
const ringPaths = Array.from({ length: curveSteps / 5 }, (_, index) =>
  makeRingPath(index * 5),
);
const diagonalPath = makeDiagonalPath();

const technologies = [
  { label: "Java", position: "hero-tech-label-java" },
  { label: "Spring Boot", position: "hero-tech-label-spring" },
  { label: "React", position: "hero-tech-label-react" },
  { label: "Angular", position: "hero-tech-label-angular" },
  { label: "Django", position: "hero-tech-label-django" },
];

export function HeroTechVisual({ reduceMotion }: HeroTechVisualProps) {
  return (
    <div
      aria-label="Wireframe illustration surrounded by Abdul Rahim's technology stack"
      role="img"
      data-reduced-motion={reduceMotion}
      className="hero-tech-visual relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden rounded-[1.75rem] border border-red-950/60"
    >
      <div aria-hidden="true" className="hero-tech-grid absolute inset-0" />
      <div aria-hidden="true" className="hero-tech-orbit hero-tech-orbit-outer absolute inset-[6%] rounded-full border border-dashed" />
      <div aria-hidden="true" className="hero-tech-orbit hero-tech-orbit-inner absolute inset-[14%] rounded-full border" />

      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="hero-tech-knot absolute left-1/2 top-[47%] w-[72%] -translate-x-1/2 -translate-y-1/2 overflow-visible"
        fill="none"
      >
        <g className="hero-tech-knot-lines">
          {longitudinalPaths.map((path, index) => (
            <path key={`longitudinal-${index}`} d={path} />
          ))}
          {ringPaths.map((path, index) => (
            <path key={`ring-${index}`} d={path} />
          ))}
          <path className="hero-tech-knot-diagonals" d={diagonalPath} />
        </g>
      </svg>

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
