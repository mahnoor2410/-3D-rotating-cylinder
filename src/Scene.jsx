
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, {useRef } from 'react';
import * as THREE from 'three';

const Scene = () => {

    const tex = useTexture('tech.jpg');
    let cylinder = useRef(null);
 
  useFrame((state , delta) => {
    cylinder.current.rotation.y += delta;
   })

  return (
    // group rotate entire obj in x , y , z direction
    <group rotation={[0 , 1.4 , 0.5]}> 
    <mesh ref={cylinder}>

      {/* as a arguments sb pass krna he radiusTop, radiusBottom , height, radialSegments, heightSegments, openEnded */}
      <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
      <meshStandardMaterial map={tex} side={THREE.DoubleSide} />

    </mesh>
    </group>
  );
};

export default Scene;
