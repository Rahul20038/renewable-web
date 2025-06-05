import React from 'react';

const videos = [
  { title: "Opening Ceremony", url: "https://www.youtube.com/embed/oHg5SJYRHA0" },
  { title: "Keynote: Global Energy Transition", url: "https://www.youtube.com/embed/5NV6Rdv1a3I" },
  { title: "Panel: Renewable Technologies", url: "https://www.youtube.com/embed/L_jWHffIx5E" },
  { title: "AI in Energy Management", url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { title: "Future of Sustainable Fuels", url: "https://www.youtube.com/embed/fLexgOxsZu0" },
  { title: "Closing Remarks", url: "https://www.youtube.com/embed/kJQP7kiw5Fk" },
];

const Video: React.FC = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">World Energies Summit Videos</h2>
        <p className="text-lg text-gray-600 mt-2">A collection of videos from the World Energies Summit.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="w-full">
            <div className="w-full h-64 overflow-hidden rounded-lg shadow-md">
              <iframe
                src={video.url}
                title={video.title}
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center mt-2 text-gray-700 font-medium">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
