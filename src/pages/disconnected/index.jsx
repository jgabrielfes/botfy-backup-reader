import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import LoginForm from '../../components/disconnected/LoginForm';

import { doChangeTheme } from '../../redux/reducers/configs';

function Disconnected() {
  const horizontal = useMediaQuery('(min-width: 600px)');
  const vertical = useMediaQuery('(min-height: 700px)');
  const { theme } = useSelector(state => state.configs);
  const dispatch = useDispatch();

  return (

    <Box
      display="flex"
      minHeight="100vh"
      px={{ xs: 1, sm: 2 }}
      py={{ xs: 1, sm: 5 }}
      sx={{
        backgroundImage: `url(${require('../../images/login_bg.jpg')})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Slide in timeout={1000}>
        <Grid
          component="section"
          container
          m={{ sm: 'auto' }}
          maxWidth="md"
          mb="auto"
          mt={!vertical ? 'auto' : 0}
          justifyContent="center"
        >
          {(horizontal || vertical) && (
            <Grid
              component={Paper}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              item
              mb={{ xs: 4, sm: 0 }}
              sm={6}
              md={4}
              sx={{
                backdropFilter: 'blur(10px)',
                bgcolor: ({ palette }) => `${palette.primary.main}da`,
                borderRadius: { xs: 10, sm: '4px 0 0 40px' },
                color: 'primary.contrastText',
                p: 5,
              }}
            >
              <img
                alt="logo"
                src={require('../../images/logo.png')}
                style={{
                  maxWidth: 150,
                  pointerEvents: 'none',
                  userSelect: 'none',
                  width: horizontal ? '50%' : 100,
                }}
              />
              {horizontal && <Typography variant="h4" mt={3}>Botfy</Typography>}
            </Grid>
          )}

          <Grid
            component={Paper}
            item
            xs={12}
            sm={6}
            md={8}
            sx={{
              backdropFilter: 'blur(20px)',
              bgcolor: ({ palette }) => `${palette.background.paper}da`,
              borderRadius: { xs: 10, sm: '0 40px 4px 0' },
              p: { xs: 4, sm: 3 },
              position: 'relative',
            }}
          >
            {!horizontal && !vertical && (
              <img
                alt="logo"
                src={require('../../images/logo.png')}
                style={{
                  display: 'block',
                  maxWidth: 150,
                  margin: '0 auto 12px',
                  pointerEvents: 'none',
                  userSelect: 'none',
                  width: horizontal ? '50%' : 100,
                }}
              />
            )}
            <Typography variant="h4" mr={4}>Bem-vindo!</Typography>
            <Typography color="text.secondary" mb={6}>Faça login para continuar</Typography>
            <LoginForm />
            <IconButton
              color="secondary"
              onClick={() => dispatch(doChangeTheme())}
              sx={{
                right: 20,
                top: 20,
                position: 'absolute',
              }}
            >
              {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Grid>
        </Grid>
      </Slide>
    </Box >
  );
}

export default Disconnected;
