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
      {/* Full-width image banner with overlay and title */}
      <Box sx={{ position: 'relative', width: '100%', height: { xs: 200, sm: 280, md: 340 }, overflow: 'hidden', mb: 4 }}>
        <img
          src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=400&q=80"
          alt="Conference on Renewable Energy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.7)',
          }}
        />
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
          zIndex: 2,
          background: 'linear-gradient(90deg, rgba(0,95,115,0.7) 0%, rgba(0,95,115,0.2) 100%)',
        }}>
          <Typography variant="h3" sx={{ fontWeight: 700, letterSpacing: 1, mb: 1, textShadow: '0 2px 8px #0008' }}>
            Conference Topics
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, textShadow: '0 1px 4px #0007' }}>
            Explore the forefront of renewable energy research
          </Typography>
        </Box>
      </Box>

      <Container sx={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', background: '#f8fafc', borderRadius: 3, boxShadow: 2 }}>
        <Typography variant="h4" sx={{ marginBottom: '24px', color: '#005f73', fontWeight: 700, letterSpacing: 1 }}>
          Topics Covered
        </Typography>

        {/* Responsive grid for topics with icons */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'space-between', mb: 4 }}>
          <Box sx={{ width: { xs: '100%', md: '48%' } }}>
            <List>
              {topics.slice(0, 13).map((topic, index) => (
                <ListItem key={index} sx={{ py: 1, px: 0, borderRadius: 2, '&:hover': { background: '#e0f2f1' } }}>
                  <Box sx={{
                    width: 32,
                    height: 32,
                    background: 'linear-gradient(135deg, #0a9396 60%, #94d2bd 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                  }}>
                    <span style={{ color: 'white', fontWeight: 700, fontSize: 18 }}>•</span>
                  </Box>
                  <ListItemText primary={topic} primaryTypographyProps={{ fontSize: 17, fontWeight: 500, color: '#005f73' }} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ width: { xs: '100%', md: '48%' } }}>
            <List>
              {topics.slice(13).map((topic, index) => (
                <ListItem key={index} sx={{ py: 1, px: 0, borderRadius: 2, '&:hover': { background: '#e0f2f1' } }}>
                  <Box sx={{
                    width: 32,
                    height: 32,
                    background: 'linear-gradient(135deg, #ee9b00 60%, #ca6702 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                  }}>
                    <span style={{ color: 'white', fontWeight: 700, fontSize: 18 }}>•</span>
                  </Box>
                  <ListItemText primary={topic} primaryTypographyProps={{ fontSize: 17, fontWeight: 500, color: '#005f73' }} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        <Typography variant="h5" sx={{ margin: '36px 0 20px 0', color: '#005f73', fontWeight: 600 }}>
          Renewable Energy Adoption Trends
        </Typography>
        <Box sx={{ height: { xs: 260, sm: 340, md: 400 }, background: 'white', borderRadius: 2, boxShadow: 1, p: 2, mb: 2 }}>
          <Bar data={chartData} options={chartOptions} />
        </Box>
        <Typography variant="body1" sx={{ color: '#333', mt: 2, mb: 1, fontSize: 16, textAlign: 'center' }}>
          The above chart highlights the current adoption rates of key renewable energy sources worldwide. Join us to discuss the latest breakthroughs and future directions!
        </Typography>
      </Container>
    </>
  );
};

export default ConferenceTopics;
