import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

function LoadingPage() {
  return (
    <>
      <img
        alt="logo"
        src={require('../images/logo.png')}
        width={70}
        style={{
          left: '50%',
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <CircularProgress
        color="secondary"
        size={110}
        sx={{
          left: 'calc(50% - 55px)',
          position: 'absolute',
          top: 'calc(50% - 55px)',
        }}
      />
      <Typography
        color="secondary"
        variant="h3"
        sx={{
          display: 'inline-block',
          left: '50%',
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%, 100%)',
        }}
      >
        Botfy
      </Typography>
    </>
  );
}

export default LoadingPage;
