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

import React, { memo, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import createGlobe from "cobe";

// Globe component
function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerDownAt = useRef<number | null>(null);
  const movement = useRef(0);
  const rotation = useRef(0);
  const widthRef = useRef(0);
  let phi = 0;

  useEffect(() => {
    const canvas = canvasRef.current!;
    widthRef.current = canvas.offsetWidth;

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(1.5, window.devicePixelRatio),
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      phi: 0,
      theta: 0.3,
      mapSamples: 8000,
      mapBrightness: 10,
      baseColor: [1, 1, 1],        // White globe
      markerColor: [1, 0.4, 0.1],  // Orange markers
      glowColor: [1, 1, 1],        // White glow
      diffuse: 0,                  // No shadows
      markers: [
        { location: [19.076, 72.8777], size: 0.1 },    // Mumbai
        { location: [40.7128, -74.006], size: 0.1 },   // New York
        { location: [39.9042, 116.4074], size: 0.08 }, // Beijing
      ],
      onRender: (state) => {
        if (!pointerDownAt.current) phi += 0.005;
        state.phi = phi + rotation.current;
        state.theta = 0.3;
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
      },
    });

    const resize = () => {
      widthRef.current = canvas.offsetWidth;
    };

    window.addEventListener("resize", resize);
    canvas.style.opacity = "1";

    return () => {
      globe.destroy();
      window.removeEventListener("resize", resize);
    };
  }, []);

  const updateRotation = (clientX: number) => {
    if (pointerDownAt.current !== null) {
      const delta = clientX - pointerDownAt.current;
      movement.current = delta;
      rotation.current = delta / 200;
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        aspectRatio: "1 / 1",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          opacity: 0,
          transition: "opacity 0.5s ease",
          willChange: "transform, opacity",
          display: "block",
        }}
        onPointerDown={(e) => (pointerDownAt.current = e.clientX - movement.current)}
        onPointerUp={() => (pointerDownAt.current = null)}
        onPointerOut={() => (pointerDownAt.current = null)}
        onMouseMove={(e) => updateRotation(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateRotation(e.touches[0].clientX)}
      />
    </div>
  );
}

const MemoizedGlobe = memo(Globe);

// Hero component
const Hero: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>World Renewable Energy Conference 2026 - Boston</title>
      </Helmet>

      <section className="relative h-screen min-h-[600px] flex items-center justify-start overflow-hidden bg-black">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

        {/* Content container */}
        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left text content */}
          <div
            className="max-w-3xl animate-fadeIn will-change-opacity will-change-transform"
            style={{ backfaceVisibility: "hidden" }}
          >
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

          {/* Right globe display */}
          <div
            className="relative flex justify-center items-center w-full max-w-[700px] h-[600px] mx-auto"
            style={{ aspectRatio: "1 / 1" }}
          >
            <MemoizedGlobe />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
