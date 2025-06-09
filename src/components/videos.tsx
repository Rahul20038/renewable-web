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
//     <div className="bg-white py-12 px-6 md:px-20">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
//           World Energies Summit Videos
//         </h2>
//         <p className="text-lg text-gray-600 mt-3 max-w-xl mx-auto">
//           A collection of videos from the World Energies Summit.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {videos.map((video, index) => (
//           <div
//             key={index}
//             className="transform rounded-lg shadow-lg overflow-hidden bg-gray-50 transition duration-300 ease-in-out hover:scale-[1.03] animate-fadeIn"
//             style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards', opacity: 0 }}
//           >
//             <div className="aspect-video w-full">
//               <iframe
//                 src={video.url}
//                 title={video.title}
//                 className="w-full h-full"
//                 allowFullScreen
//                 loading="lazy"
//                 frameBorder="0"
//               ></iframe>
//             </div>
//             <p className="text-center mt-3 text-gray-800 font-semibold text-lg px-4 pb-4">
//               {video.title}
//             </p>
//           </div>
//         ))}
//       </div>

//       <style>
//         {`
//           @keyframes fadeIn {
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//             from {
//               opacity: 0;
//               transform: translateY(15px);
//             }
//           }
//           .animate-fadeIn {
//             animation-name: fadeIn;
//             animation-duration: 0.6s;
//             animation-timing-function: ease-out;
//             animation-fill-mode: forwards;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Video;



import React, { useState } from 'react';

const videos = [
  { title: "Opening Ceremony", id: "oHg5SJYRHA0" },
  { title: "Keynote: Global Energy Transition", id: "5NV6Rdv1a3I" },
  { title: "Panel: Renewable Technologies", id: "L_jWHffIx5E" },
  { title: "AI in Energy Management", id: "tgbNymZ7vqY" },
  { title: "Future of Sustainable Fuels", id: "fLexgOxsZu0" },
  { title: "Closing Remarks", id: "kJQP7kiw5Fk" },
];

const VideoCard: React.FC<{ id: string; title: string }> = ({ id, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="transform rounded-md shadow-md overflow-hidden bg-gray-50 transition duration-300 ease-in-out hover:scale-[1.02] animate-fadeIn">
      <div className="relative aspect-[16/10] w-full bg-black max-h-[200px]">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={title}
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
          />
        ) : (
          <button
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/70 text-white text-2xl font-bold"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${title}`}
          >
            ▶
          </button>
        )}
      </div>
      <p className="text-center mt-2 text-gray-800 font-medium text-sm px-3 pb-3">
        {title}
      </p>
    </div>
  );
};

const Video: React.FC = () => {
  return (
    <div className="bg-white py-8 px-4 md:px-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900">World Energies Summit Videos</h2>
        <p className="text-base text-gray-600 mt-2">Highlights from the Summit.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard key={index} id={video.id} title={video.title} />
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Video;
