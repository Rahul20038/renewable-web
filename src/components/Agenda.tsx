import React from 'react';

interface AgendaItem {
  time: string;
  title: string;
  description: string;
  speaker?: string;
}

interface DaySchedule {
  date: string;
  day: string;
  items: AgendaItem[];
}

const Agenda: React.FC = () => {
  const schedule: DaySchedule[] = [
    {
      date: "June 12, 2026",
      day: "Day 1",
      items: [
        {
          time: "08:00 - 09:00",
          title: "Registration & Welcome Coffee",
          description: "Check-in and networking opportunity"
        },
        {
          time: "09:00 - 09:30",
          title: "Opening Remarks",
          description: "Welcome address and introduction to the conference themes",
          speaker: "Dr. Sarah Johnson, SolarTech Innovations"
        },
        {
          time: "09:30 - 10:30",
          title: "Keynote: The Future of Renewable Energy",
          description: "Exploring the latest trends and future outlook for renewable energy technologies",
          speaker: "Michael Chen, GreenEnergy Global"
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break",
          description: "Networking opportunity"
        },
        {
          time: "11:00 - 12:30",
          title: "Panel Discussion: Policy Frameworks for Accelerating Renewables",
          description: "Leading policymakers discuss effective regulatory approaches",
          speaker: "Moderated by Emma Rodriguez, EcoFuture Alliance"
        }
      ]
    },
    {
      date: "June 13, 2026",
      day: "Day 2",
      items: [
        {
          time: "09:00 - 10:00",
          title: "Breakthrough Technologies in Energy Storage",
          description: "Examining innovations in battery technology and grid-scale storage solutions",
          speaker: "Dr. James Wilson, HydroPower Innovations"
        },
        {
          time: "10:00 - 11:00",
          title: "Financing the Energy Transition",
          description: "Investment strategies and funding mechanisms for renewable projects",
          speaker: "Various industry experts"
        },
        {
          time: "11:00 - 11:30",
          title: "Coffee Break",
          description: "Networking opportunity"
        },
        {
          time: "11:30 - 12:30",
          title: "Renewable Integration: Challenges and Solutions",
          description: "Addressing technical and operational challenges of high renewable penetration",
          speaker: "Panel of technical experts"
        }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Conference Agenda
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-12">
              <div className="bg-amber-500 text-gray-900 rounded-t-lg py-4 px-6">
                <h3 className="text-xl font-bold">{day.day}: {day.date}</h3>
              </div>
              
              <div className="bg-white rounded-b-lg shadow-lg overflow-hidden">
                {day.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className={`p-6 ${
                      itemIndex !== day.items.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start">
                      <div className="md:w-1/4 font-medium text-amber-600 mb-2 md:mb-0">
                        {item.time}
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        {item.speaker && (
                          <p className="text-gray-700 italic">Speaker: {item.speaker}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 italic mb-6">
            * The agenda is subject to change. More sessions and speakers will be announced soon.
          </p>
          <a 
            href="#download-agenda" 
            className="inline-block bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-6 py-3 rounded transition-colors"
          >
            Download Full Agenda
          </a>
        </div>
      </div>
    </section>
  );
};

export default Agenda;