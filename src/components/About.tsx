import React from "react";
import {
  AirplaneTilt,
  Car,
  Brain,
  TestTube,
  Briefcase,
  Heart,
  ShieldCheck,
  BookOpen,
  Code,
  UserCircle,
  Coins,
  UsersThree,
  CurrencyCircleDollar,
  Stamp,
} from "phosphor-react";
import { useLucideDrawerAnimation } from "@/components/ui/lucide-icon-drawer";

const industries = [
  { icon: <AirplaneTilt size={40} color="#00a3ff" />, label: "Aerospace" },
  { icon: <Car size={40} color="#fc5c65" />, label: "Automotive" },
  { icon: <Brain size={40} color="#ff7f50" />, label: "AI & Robotics" },
  { icon: <TestTube size={40} color="#fc5c65" />, label: "R&D" },
  { icon: <Briefcase size={40} color="#1e90ff" />, label: "Business & Consulting" },
  { icon: <Heart size={40} color="#ff4757" />, label: "Healthcare" },
  { icon: <ShieldCheck size={40} color="#1abc9c" />, label: "Cybersecurity" },
  { icon: <BookOpen size={40} color="#576574" />, label: "Academia & Research" },
  { icon: <Code size={40} color="#ffa502" />, label: "Software Development" },
  { icon: <UserCircle size={40} color="#747d8c" />, label: "Human Resources" },
  { icon: <Coins size={40} color="#f1c40f" />, label: "Finance" },
  { icon: <UsersThree size={40} color="#3742fa" />, label: "Public Sector" },
  { icon: <CurrencyCircleDollar size={40} color="#2ed573" />, label: "Investment" },
  { icon: <Stamp size={40} color="#ff6b81" />, label: "Legal & IP" },
];

const About: React.FC = () => {
  const root = useLucideDrawerAnimation();

  return (
    <>
      {/* Description Section */}
      <section className="pt-10 pb-14 bg-white">
        <div className="px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Join Global Renewable Energy Leaders in Seoul
          </h2>

          <div className="max-w-4xl mx-auto text-center mb-10">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              The <span className="font-semibold">RENEWABLE-2026 International Conference</span> is the 8th Edition of the world’s largest Global Conference & Exhibition on Renewable and Sustainable Energy, held in person in Seoul, South Korea, from April 24–26, 2026. The conference will bring together <span className="font-semibold">world leaders, researchers, and industry experts</span> to explore how solar, wind, and electric vehicles (EVs) can support a sustainable future.
            </p>
          </div>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Conference Details</h3>
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 font-medium text-gray-700">Conference Date</td>
                    <td className="py-1 text-gray-600">April 24–26, 2026</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 font-medium text-gray-700">Venue</td>
                    <td className="py-1 text-gray-600">Seoul, South Korea</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 font-medium text-gray-700">Earlybird Registration</td>
                    <td className="py-1 text-gray-600">July 28, 2025</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-1 font-medium text-gray-700">Submission Deadline</td>
                    <td className="py-1 text-gray-600">September 15, 2025</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-medium text-gray-700">Workshops</td>
                    <td className="py-1 text-gray-600">10 Workshops</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Highlights</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>76 Plenary, Keynote & Invited Speakers</li>
                <li>Tentative Program Released</li>
                <li>24 Exhibitors Participating</li>
                <li>Multiple Sponsor Opportunities</li>
                <li>Global Media Coverage</li>
                <li className="font-semibold text-gray-700">Seoul 2026 Edition Announced</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend Section */}
      <section ref={root} className="bg-gray-100 py-12">
        <div className="w-full px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Who Should Attend
          </h2>
          <div className="mx-auto px-4 max-w-6xl grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-2 bg-black rounded-md shadow hover:shadow-md transition transform hover:scale-105"
              >
                <div className="p-2 rounded-full shadow">{industry.icon}</div>
                <p className="text-xs font-medium text-white mt-1 text-center">
                  {industry.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;