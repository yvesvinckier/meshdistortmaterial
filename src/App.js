import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./components/Scene";
import Footer from "./components/Footer";
import Twitter from "./components/Twitter";

import img1 from "./assets/1.jpg";

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 12] }}>
        <Scene url={img1} />
      </Canvas>
      <a
        href="https://twitter.com/NowMoDesign/"
        style={{ position: "absolute", bottom: 40, left: "4vw", width: 50 }}
      >
        <Twitter />
      </a>
      <Footer />
    </>
  );
}
