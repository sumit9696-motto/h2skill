import React from 'react';
import { Box, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    
    <Container maxWidth="sm">
      <h1> Choose one for your work..</h1>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Button onClick={()=>navigate("/ai-list/developer")} variant="contained" color="primary" style={{ margin: '0 10px' }}>
          Developer
        </Button>
        <Button onClick={()=>navigate("/ai-list/content")} variant="contained" color="secondary" style={{ margin: '0 10px' }}>
          Content
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
