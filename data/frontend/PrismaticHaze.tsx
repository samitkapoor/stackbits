import PrismaticHazeBackground from '@/components/ui/prismatic-haze';
import { Document } from '../main';

export const prismaticHazePreview = (
  <div className="h-full w-full flex flex-col items-center justify-center gap-2">
    <PrismaticHazeBackground className="flex items-center justify-center">
      <p className="text-black font-extrabold text-xl">Prismatic Haze Background</p>
    </PrismaticHazeBackground>
  </div>
);

export const prismaticHaze: Document = {
  sideBar: {
    group: 'Components',
    name: 'Prismatic Haze Background',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Prismatic Haze Background',
        content:
          "Prismatic Haze is like a dreamy swirl of cosmic magic, where colors melt and shift in a hypnotic dance of iridescence. Soft noise and subtle grain add a touch of texture, making it feel alive—almost like a misty nebula shimmering under neon lights. Whether you're crafting a futuristic UI, designing an eye-catching website, or setting the mood for a music visualizer, Prismatic Haze brings that perfect mix of dreamy, trippy, and effortlessly cool.",
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <PrismaticHazeBackground className="flex items-center justify-center">
              <p className="text-black font-extrabold text-5xl">Prismatic Haze Background</p>
            </PrismaticHazeBackground>
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'component',
        code: `npm i @react-three/fiber @react-three/drei three`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file prismatic-haze.tsx in your components folder and paste this code',
        code: `import React, { JSX, useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

const IridescentShaderMaterial = shaderMaterial(
  { uTime: 0 },
  \`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      // Standard vertex transformation
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  \`,
  \`
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
  \`
);

extend({ IridescentShaderMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    iridescentShaderMaterial: JSX.IntrinsicElements['shaderMaterial'];
  }
}

function PrismaticHazePlane() {
  const materialRef = useRef<any>(null);

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

      <div className={\`absolute inset-0 \${className}\`}>{children}</div>
    </div>
  );
};

export default PrismaticHazeBackground;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<PrismaticHazeBackground className="flex items-center justify-center">
  <p className="text-black font-extrabold text-5xl">Prismatic Haze Background</p>
</PrismaticHazeBackground>`
      }
    ]
  }
};
