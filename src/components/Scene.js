import React, { useRef, useState, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import {
  useTexture,
  MeshDistortMaterial,
  Text,
  useAspect,
} from "@react-three/drei";

function Image({ url }) {
  const imageRef = useRef();
  const [hovered, setHover] = useState(false);
  const [clicked, setClick] = useState(false);
  const texture = useTexture(url);

  useFrame((state, delta) => {
    easing.damp(
      imageRef.current.material,
      "distort",
      hovered ? 0.5 : 0,
      0.25,
      delta
    );
    easing.damp(
      imageRef.current.material,
      "speed",
      hovered ? 4 : 0,
      0.25,
      delta
    );

    easing.damp3(imageRef.current.scale, clicked ? 15 : 10, 0.25, delta);
    easing.dampC(
      imageRef.current.material.color,
      clicked ? "#00efeb" : "white",
      0.25,
      delta
    );
  });

  return (
    <mesh
      ref={imageRef}
      scale-x={10}
      scale-y={10}
      onClick={(e) => (e.stopPropagation(), setClick(!clicked))}
      onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
      onPointerOut={(e) => (e.stopPropagation(), setHover(false))}
    >
      <planeGeometry args={[1, 1, 64, 64]} />
      <MeshDistortMaterial
        distort={0.2}
        speed={4}
        map={texture}
        toneMapped={false}
      />
    </mesh>
  );
}

function Font({ fontUrl }) {
  return (
    <Text
      glyphGeometryDetail={32}
      fontSize={1.5}
      letterSpacing={-0.075}
      lineHeight={0.8}
      position={[0, 0, 5]}
    >
      {"deep"}
      <MeshDistortMaterial
        color="#00efeb"
        distort={0.2}
        speed={4}
        toneMapped={false}
      />
    </Text>
  );
}

function Shapes({ url }) {
  const [width, height] = useAspect("cover", 4168, 4168);
  return (
    <>
      <Image url={url} width={width} height={height} />
      <Font />
    </>
  );
}

const Scene = ({ url }) => {
  return (
    <>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Shapes url={url} />
      </Suspense>
    </>
  );
};

export default Scene;
