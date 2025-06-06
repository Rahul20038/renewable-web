import React, { memo } from 'react';
import { Globe } from './ui/globe';

// Memoize Globe to avoid unnecessary re-renders
const MemoizedGlobe = memo(Globe);

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-start overflow-hidden bg-black">
      {/* Single black overlay with opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 opacity-0 animate-fadeIn"
            style={{ animationFillMode: 'forwards', animationDuration: '1s', animationTimingFunction: 'ease-out' }}
          >
            The World's Premier <br className="hidden md:block" />
            Renewable Energy <br className="hidden md:block" />
            Conference
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-amber-400 mb-8">
            Boston, United States • June 12-15, 2026
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="#register"
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-md text-lg transition-colors"
            >
              Register Now
            </a>
            <a
              href="#learn-more"
              className="bg-transparent hover:bg-white/10 text-white border border-white font-semibold px-8 py-3 rounded-md text-lg transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Globe section, hidden on small screens */}
        <div className="relative hidden md:block h-[600px] will-change-transform">
          <MemoizedGlobe className="scale-110" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation-name: fadeIn;
        }
      `}</style>
    </section>
  );
};

export default Hero;
