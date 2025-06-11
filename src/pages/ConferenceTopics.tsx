import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ConferenceTopics: React.FC = () => {
  const topics = [
    'Solar Energy',
    'Wind Energy',
    'Hydropower',
    'Geothermal Energy',
    'Biomass and Bioenergy',
    'Energy Storage',
    'Smart Grids',
    'Hydrogen Energy',
    'Renewable Energy & Resources',
    'Power and Energy Engineering',
    'Sustainable Engineering',
    'Waste-to-Energy',
    'Ocean Energy',
    'Energy Harvesting',
    'Green Technology',
    'Hydroelectric Power',
    'Energy Materials',
    'Climate Change & Recycling',
    'Global Warming',
    'Tidal Energy',
    'EVs and Renewable Energy Integration: Building a Sustainable Future',
    'Electric Vehicles as a Distributed Energy Resource',
    'Integrating EVs into Smart Cities for the Sustainable of Urban Mobility',
    'EVs, the Role of Batteries in the Energy Transition',
    'Electric Vehicle Fleets and Corporate Sustainability',
    'EV and Renewable Energy Synergies in Action',
  ];

  const chartData = {
    labels: ["Solar", "Wind", "Hydropower", "Biomass", "Geothermal"],
    datasets: [
      {
        label: "Adoption Rate (%)",
        data: [35, 25, 20, 15, 5],
        backgroundColor: ["#0a9396", "#94d2bd", "#e9d8a6", "#ee9b00", "#ca6702"],
        borderColor: ["#0a9396", "#94d2bd", "#e9d8a6", "#ee9b00", "#ca6702"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Renewable Energy Adoption Trends',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Adoption Rate (%)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Energy Type',
        },
      },
    },
  };

  return (
    <>
      {/* Full-width image banner */}
      <Box sx={{ width: '100%', height: { xs: 180, sm: 250, md: 300 }, overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=400&q=80"
          alt="Conference on Renewable Energy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      <Container sx={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h4" sx={{ marginBottom: '20px', color: '#005f73' }}>
          Topics
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <List sx={{ width: { xs: '100%', md: '48%' } }}>
            {topics.slice(0, 13).map((topic, index) => (
              <ListItem key={index}>
                <ListItemText primary={`• ${topic}`} />
              </ListItem>
            ))}
          </List>
          <List sx={{ width: { xs: '100%', md: '48%' } }}>
            {topics.slice(13).map((topic, index) => (
              <ListItem key={index}>
                <ListItemText primary={`• ${topic}`} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Typography variant="h5" sx={{ margin: '30px 0 20px 0', color: '#005f73' }}>
          Renewable Energy Adoption Trends
        </Typography>
        <Box sx={{ height: '400px', marginBottom: '20px' }}>
          <Bar data={chartData} options={chartOptions} />
        </Box>
      </Container>
    </>
  );
};

export default ConferenceTopics;
