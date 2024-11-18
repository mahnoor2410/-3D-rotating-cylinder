// App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import './style.css';
import { OrbitControls } from '@react-three/drei';
import Scene from './Scene'; 
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

const App = () => {
  return (
    <>
    <Canvas flat camera={{ fov: 30 }}>
      <OrbitControls /> 
      <ambientLight />
      <Scene /> 
<EffectComposer>
<Bloom
    mipmapBlur
    intensity={3} 
    luminanceThreshold={0}
    luminanceSmoothing={0} 
  />
  <ToneMapping adaptive/>
</EffectComposer>
    </Canvas>
    </>
  );
};

export default App;
