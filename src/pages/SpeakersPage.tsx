// import React from 'react';
// import Speakers from '../components/Speakers';

// const SpeakersPage: React.FC = () => {
//   return (
//     <div className="pt-20">
//       <div className="bg-gray-900 py-16">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
//             Conference Speakers
//           </h1>
//           <p className="text-xl text-gray-300 text-center mt-4">
//             Meet our distinguished lineup of industry experts and thought leaders
//           </p>
//         </div>
//       </div>
//       <Speakers />
//     </div>
//   );
// };

// export default SpeakersPage;



import React, { lazy, Suspense } from 'react';

const Speakers = lazy(() => import('../components/Speakers'));

const SpeakersPage: React.FC = () => {
  return (
    <div className="pt-20 scroll-smooth">
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center animate-fadeIn">
            Conference Speakers
          </h1>
          <p
            className="text-xl text-gray-300 text-center mt-4 animate-fadeIn"
            style={{ animationDelay: '0.3s' }}
          >
            Meet our distinguished lineup of industry experts and thought leaders
          </p>
        </div>
      </div>
      <div className="mt-12">
        <Suspense fallback={<div className="text-center mt-10">Loading speakers...</div>}>
          <Speakers />
        </Suspense>
      </div>
    </div>
  );
};

export default SpeakersPage;
