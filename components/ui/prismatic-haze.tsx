import React, { JSX, useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface IridescentShaderMaterial extends THREE.ShaderMaterial {
  uTime: number;
}

const IridescentShaderMaterial = shaderMaterial(
  { uTime: 0 },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      // Standard vertex transformation
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    precision mediump float;
    
    varying vec2 vUv;
    uniform float uTime;

    // Pseudo-random function based on a 2D input
    float random (in vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    // Simple 2D noise function using smooth interpolation
    float noise (in vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    // Function for generating an iridescent color effect with noise.
    vec3 iridescentColor(vec2 uv, float time) {
      // Offset the UV coordinates over time for movement.
      uv.x += 0.1 * sin(time * 0.5);
      uv.y += 0.1 * cos(time * 0.5);

      // Blend sinusoidal waves in different color channels.
      float r = 0.5 + 0.5 * sin(uv.x * 6.0 + time);
      float g = 0.5 + 0.5 * sin(uv.y * 6.0 + time + 2.0);
      float b = 0.5 + 0.5 * sin((uv.x + uv.y) * 6.0 + time + 4.0);  
      
      // Generate a noise value for organic variation.
      float n = noise(uv * 10.0 + time);
      
      // Add a subtle noise offset to each channel.
      r += 0.1 * n;
      g += 0.1 * n;
      b += 0.1 * n;
      
      return vec3(r, g, b);
    }

    void main() {
      // Center the UV coordinates for symmetrical effects.
      vec2 centeredUV = vUv * 2.0 - 1.0;
      float time = uTime * 0.5; // Slow down the time factor.
      
      // Get the fluid iridescent color.
      vec3 color = iridescentColor(centeredUV, time);

      // Add a grain effect based on the fragment coordinates.
      float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      // Center and scale the grain: adjust 0.2 to increase/decrease intensity.
      grain = (grain - 0.5) * 0.2;
      
      // Add the grain to the final color.
      color += vec3(grain);

      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ IridescentShaderMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    iridescentShaderMaterial: JSX.IntrinsicElements['shaderMaterial'];
  }
}

function PrismaticHazePlane() {
  const materialRef = useRef<IridescentShaderMaterial | null>(null);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime();
    }
  });

  return (
    <mesh scale={[2, 2, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <iridescentShaderMaterial ref={materialRef} />
    </mesh>
  );
}

type PrismaticHazeBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
};

const PrismaticHazeBackground = ({ children, className }: PrismaticHazeBackgroundProps) => {
  return (
    <div className="relative w-full h-full">
      <Canvas className="w-full h-full" camera={{ position: [0, 0, 1], fov: 40 }}>
        <PrismaticHazePlane />
      </Canvas>

      <div className={`absolute inset-0 ${className}`}>{children}</div>
    </div>
  );
};

export default PrismaticHazeBackground;
