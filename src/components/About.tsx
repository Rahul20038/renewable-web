"use client";

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
  Flask,
  Factory,
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
  { icon: <Flask size={40} color="#70a1ff" />, label: "Biotech" },
  { icon: <Factory size={40} color="#576574" />, label: "Manufacturing" },
];

const About: React.FC = () => {
  const root = useLucideDrawerAnimation();

  return (
    <>
      <section className="pt-2 md:pt-3 pb-10 md:pb-14 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Join Global Renewable Energy Leaders in Seoul
          </h2>

          {/* Main Description */}
          <div className="max-w-4xl mx-auto text-center mb-10">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              The <span className="font-semibold">RENEWABLE-2026 International Conference</span> is the 8th Edition of the world’s largest Global Conference & Exhibition on Renewable and Sustainable Energy, held in person in Seoul, South Korea, from April 24-26, 2026. Over the years, it has solidified its position as the leading in-person meeting point for the global renewable energy community. The conference will bring together <span className="font-semibold">world leaders, prominent researchers, and industry visionaries</span> to explore and unlock the boundless potential of renewable and sustainable energy. A key focus will be the integration of electric vehicles (EVs) with renewable energy, examining how this synergy can support the transition to a more sustainable future. Additionally, we will explore the synergy between solar energy, wind energy, and EVs in reducing reliance on fossil fuels.
            </p>
          </div>

          {/* Table Section */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: Conference Details Table */}
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Conference Details</h3>
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 font-medium text-gray-700">Conference Date</td>
                      <td className="py-1 text-gray-600">April 24-26, 2026</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-1 font-medium text-gray-700">Conference Venue</td>
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

              {/* Right Column: Highlights */}
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Highlights</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>76 Plenary, Keynote & Invited Speakers Confirmed</li>
                  <li>Tentative Program Available!</li>
                  <li>Meet Our 24 Exhibitors</li>
                  <li>Meet Our Sponsors</li>
                  <li>Sponsor & Exhibitor Prospectus</li>
                  <li className="font-semibold text-gray-700">RENEWABLE-2026 Announced in Seoul, South Korea</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend Section with industries icons + animation */}
      <section ref={root} className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Who Should Attend
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-black rounded-xl shadow hover:shadow-lg transition transform hover:scale-105"
              >
                <div className="p-4 rounded-full shadow-lg">
                  {industry.icon}
                </div>
                <p className="text-sm font-medium text-white mt-2">{industry.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
