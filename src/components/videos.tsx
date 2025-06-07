// import React from 'react';

// const videos = [
//   { title: "Opening Ceremony", url: "https://www.youtube.com/embed/oHg5SJYRHA0" },
//   { title: "Keynote: Global Energy Transition", url: "https://www.youtube.com/embed/5NV6Rdv1a3I" },
//   { title: "Panel: Renewable Technologies", url: "https://www.youtube.com/embed/L_jWHffIx5E" },
//   { title: "AI in Energy Management", url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
//   { title: "Future of Sustainable Fuels", url: "https://www.youtube.com/embed/fLexgOxsZu0" },
//   { title: "Closing Remarks", url: "https://www.youtube.com/embed/kJQP7kiw5Fk" },
// ];

// const Video: React.FC = () => {
//   return (
//     <div className="bg-white py-10 px-4 md:px-20">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold text-gray-800">World Energies Summit Videos</h2>
//         <p className="text-lg text-gray-600 mt-2">A collection of videos from the World Energies Summit.</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {videos.map((video, index) => (
//           <div key={index} className="w-full">
//             <div className="w-full h-64 overflow-hidden rounded-lg shadow-md">
//               <iframe
//                 src={video.url}
//                 title={video.title}
//                 className="w-full h-full"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <p className="text-center mt-2 text-gray-700 font-medium">{video.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Video;



"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

const videos = [
  { title: "Opening Ceremony", url: "https://www.youtube.com/embed/oHg5SJYRHA0" },
  { title: "Keynote: Global Energy Transition", url: "https://www.youtube.com/embed/5NV6Rdv1a3I" },
  { title: "Panel: Renewable Technologies", url: "https://www.youtube.com/embed/L_jWHffIx5E" },
  { title: "AI in Energy Management", url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { title: "Future of Sustainable Fuels", url: "https://www.youtube.com/embed/fLexgOxsZu0" },
  { title: "Closing Remarks", url: "https://www.youtube.com/embed/kJQP7kiw5Fk" },
];

const VideoCard: React.FC<{ title: string; url: string; index: number }> = ({ title, url, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`transform rounded-lg shadow-lg overflow-hidden bg-gray-50 transition duration-500 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="aspect-video w-full">
        {inView && (
          <iframe
            src={url}
            title={title}
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            frameBorder="0"
          ></iframe>
        )}
      </div>
      <p className="text-center mt-3 text-gray-800 font-semibold text-lg px-4 pb-4">{title}</p>
    </div>
  );
};

const Video: React.FC = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          World Energies Summit Videos
        </h2>
        <p className="text-lg text-gray-600 mt-3 max-w-xl mx-auto">
          A collection of videos from the World Energies Summit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {videos.map((video, index) => (
          <VideoCard key={index} title={video.title} url={video.url} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Video;

