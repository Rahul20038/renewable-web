// import React, { memo } from 'react';
// import { Globe } from './ui/globe';

// // Memoize Globe to avoid unnecessary re-renders
// const MemoizedGlobe = memo(Globe);

// const Hero: React.FC = () => {
//   return (
//     <section className="relative h-screen min-h-[600px] flex items-center justify-start overflow-hidden bg-black">
//       {/* Single black overlay with opacity */}
//       <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

//       {/* Content */}
//       <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div className="max-w-3xl">
//           <h1
//             className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 opacity-0 animate-fadeIn"
//             style={{ animationFillMode: 'forwards', animationDuration: '1s', animationTimingFunction: 'ease-out' }}
//           >
//             The World's Premier <br className="hidden md:block" />
//             Renewable Energy <br className="hidden md:block" />
//             Conference
//           </h1>
//           <h2 className="text-2xl md:text-3xl font-light text-amber-400 mb-8">
//             Boston, United States • June 12-15, 2026
//           </h2>
//           <div className="flex flex-wrap gap-4">
//             <a
//               href="#register"
//               className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-md text-lg transition-colors"
//             >
//               Register Now
//             </a>
//             <a
//               href="#learn-more"
//               className="bg-transparent hover:bg-white/10 text-white border border-white font-semibold px-8 py-3 rounded-md text-lg transition-colors"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>

//         {/* Globe section, hidden on small screens */}
//         <div className="relative hidden md:block h-[600px] will-change-transform">
//           <MemoizedGlobe className="scale-110" />
//           <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           to {
//             opacity: 1;
//           }
//         }
//         .animate-fadeIn {
//           animation-name: fadeIn;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

// import React, { memo } from 'react';
// import { Helmet } from 'react-helmet';
// import { Globe } from './ui/globe';

// const MemoizedGlobe = memo(Globe);

// const Hero: React.FC = () => {
//   return (
//     <>
//       <Helmet>
//         <title>World Renewable Energy Conference 2026 - Boston</title>
//       </Helmet>

//       <section className="relative h-screen min-h-[600px] flex items-center justify-start overflow-hidden bg-black ">
//         {/* Background overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

//         {/* Main Content */}
//         <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Left Text Section */}
//           <div className="max-w-3xl animate-fadeIn">
//             <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
//               The World's Premier <br className="hidden md:block" />
//               Renewable Energy <br className="hidden md:block" />
//               Conference
//             </h1>
//             <h2 className="text-2xl md:text-3xl font-light text-amber-400 mb-8">
//               Boston, United States • June 12–15, 2026
//             </h2>
//             <div className="flex flex-wrap gap-4">
//               <a
//                 href="#register"
//                 className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-md text-lg transition-colors"
//               >
//                 Register Now
//               </a>
//               <a
//                 href="#learn-more"
//                 className="bg-transparent hover:bg-white/10 text-white border border-white font-semibold px-8 py-3 rounded-md text-lg transition-colors"
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>

//           {/* Right Globe Section */}
//           <div className="relative hidden md:block h-[600px] will-change-transform">
//             <MemoizedGlobe className="scale-110" />
//             <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;




// import React, { memo, useEffect, useRef } from 'react';
// import { Helmet } from 'react-helmet';
// import createGlobe from 'cobe';

// // Globe component as you provided
// function Globe() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const pointerDownAt = useRef<number | null>(null);
//   const movement = useRef(0);
//   const rotation = useRef(0);
//   const widthRef = useRef(0);
//   let phi = 0;

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     widthRef.current = canvas.offsetWidth;

//     const globe = createGlobe(canvas, {
//       devicePixelRatio: Math.min(1.5, window.devicePixelRatio),
//       width: widthRef.current * 2,
//       height: widthRef.current * 2,
//       phi: 0,
//       theta: 0.3,
//       mapSamples: 8000, // lower for faster load
//       mapBrightness: 1.2,
//       baseColor: [1, 1, 1],
//       markerColor: [1, 0.4, 0.1],
//       glowColor: [1, 1, 1],
//       diffuse: 0.4,
//       markers: [
//         { location: [19.076, 72.8777], size: 0.1 },
//         { location: [40.7128, -74.006], size: 0.1 },
//         { location: [39.9042, 116.4074], size: 0.08 },
//       ],
//       onRender: (state) => {
//         if (!pointerDownAt.current) phi += 0.005;
//         state.phi = phi + rotation.current;
//         state.width = widthRef.current * 2;
//         state.height = widthRef.current * 2;
//       },
//     });

//     const resize = () => {
//       widthRef.current = canvas.offsetWidth;
//     };

//     window.addEventListener('resize', resize);
//     canvas.style.opacity = '1';

//     return () => {
//       globe.destroy();
//       window.removeEventListener('resize', resize);
//     };
//   }, []);

//   const updateRotation = (clientX: number) => {
//     if (pointerDownAt.current !== null) {
//       const delta = clientX - pointerDownAt.current;
//       movement.current = delta;
//       rotation.current = delta / 200;
//     }
//   };

//   return (
//     <div
//       style={{
//         width: '100%',
//         maxWidth: 500,
//         aspectRatio: '1 / 1',
//         margin: '0 auto',
//         position: 'relative',
//       }}
//     >
//       <canvas
//         ref={canvasRef}
//         style={{
//           width: '100%',
//           height: '100%',
//           opacity: 0,
//           transition: 'opacity 0.5s ease',
//           willChange: 'transform, opacity',
//         }}
//         onPointerDown={(e) => (pointerDownAt.current = e.clientX - movement.current)}
//         onPointerUp={() => (pointerDownAt.current = null)}
//         onPointerOut={() => (pointerDownAt.current = null)}
//         onMouseMove={(e) => updateRotation(e.clientX)}
//         onTouchMove={(e) => e.touches[0] && updateRotation(e.touches[0].clientX)}
//       />
//     </div>
//   );
// }

// // Memoize Globe for performance
// const MemoizedGlobe = memo(Globe);

// const Hero: React.FC = () => {
//   return (
//     <>
//       <Helmet>
//         <title>World Renewable Energy Conference 2026 - Boston</title>
//       </Helmet>

//       <section className="relative h-screen min-h-[600px] flex items-center justify-start overflow-hidden bg-black">
//         {/* Background overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

//         {/* Content container */}
//         <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Left Text Section */}
//           <div
//             className="max-w-3xl animate-fadeIn will-change-opacity will-change-transform"
//             style={{ backfaceVisibility: 'hidden' }}
//           >
//             <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
//               The World's Premier <br className="hidden md:block" />
//               Renewable Energy <br className="hidden md:block" />
//               Conference
//             </h1>
//             <h2 className="text-2xl md:text-3xl font-light text-amber-400 mb-8">
//               Boston, United States • June 12–15, 2026
//             </h2>
//             <div className="flex flex-wrap gap-4">
//               <a
//                 href="#register"
//                 className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-md text-lg transition-colors duration-300 ease-in-out"
//               >
//                 Register Now
//               </a>
//               <a
//                 href="#learn-more"
//                 className="bg-transparent hover:bg-white/10 text-white border border-white font-semibold px-8 py-3 rounded-md text-lg transition-colors duration-300 ease-in-out"
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>

//           {/* Right Globe Section */}
//           <div className="relative hidden md:block h-[600px] will-change-transform">
//             <MemoizedGlobe />
//             <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;


"use client";

import { useEffect, useRef, useCallback, memo, useState } from "react";
import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { Helmet } from "react-helmet";

const MOVEMENT_DAMPING = 2000;

const GLOBE_CONFIG: Partial<COBEOptions> = {
  devicePixelRatio: typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 1.5) : 1,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.3,
  mapSamples: 1000,
  mapBrightness: 1,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

const Globe = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerMovement = useRef(0);
  const r = useMotionValue(0);
  const rs = useSpring(r, { mass: 1, damping: 40, stiffness: 90 });
  const [globeReady, setGlobeReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePointer = useCallback((val: number | null) => {
    pointerInteracting.current = val;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = val !== null ? "grabbing" : "grab";
    }
  }, []);

  const handleMovement = useCallback(
    (clientX: number) => {
      if (pointerInteracting.current !== null) {
        const delta = clientX - pointerInteracting.current;
        pointerMovement.current = delta;
        r.set(r.get() + delta / MOVEMENT_DAMPING);
      }
    },
    [r]
  );

  useEffect(() => {
    if (!globeReady) return;

    let phi = 0;
    let width = 0;

    const updateSize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };
    updateSize();

    const globe = createGlobe(canvasRef.current!, {
      ...GLOBE_CONFIG,
      width,
      height: width,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.0015;
        state.phi = phi + rs.get();
        state.width = width;
        state.height = width;
      },
    });

    if (canvasRef.current) {
      canvasRef.current.style.opacity = "1";
    }

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });

    if (canvasRef.current) resizeObserver.observe(canvasRef.current);

    return () => {
      globe.destroy();
      resizeObserver.disconnect();
    };
  }, [globeReady, rs]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setGlobeReady(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-square w-[300px] md:w-[400px] lg:w-[500px]"
    >
      {globeReady && (
        <canvas
          className="size-full opacity-0 transition-opacity duration-700 [contain:layout_paint_size]"
          ref={canvasRef}
          onPointerDown={(e) => updatePointer(e.clientX)}
          onPointerUp={() => updatePointer(null)}
          onPointerOut={() => updatePointer(null)}
          onMouseMove={(e) => handleMovement(e.clientX)}
          onTouchMove={(e) =>
            e.touches[0] && handleMovement(e.touches[0].clientX)
          }
        />
      )}
    </div>
  );
});

const Hero: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>World Renewable Energy Conference 2026 - Boston</title>
      </Helmet>

      <section className="relative h-screen min-h-[600px] flex items-center justify-start overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

        <div className="container mx-auto px-4 relative z-10 h-full w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
            <div className="max-w-3xl animate-fadeIn will-change-opacity will-change-transform z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                The World's Premier <br className="hidden md:block" />
                Renewable Energy <br className="hidden md:block" />
                Conference
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-amber-400 mb-8">
                Boston, United States • June 12–15, 2026
              </h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#register"
                  className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-md text-lg transition-colors duration-300 ease-in-out"
                >
                  Register Now
                </a>
                <a
                  href="#learn-more"
                  className="bg-transparent hover:bg-white/10 text-white border border-white font-semibold px-8 py-3 rounded-md text-lg transition-colors duration-300 ease-in-out"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Globe Positioned Bottom Right */}
            <div className="relative h-full w-full">
              <div className="absolute bottom-[150px] right-0 flex justify-end pr-4">
                <Globe />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;  





