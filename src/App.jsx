import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { SnackbarProvider } from 'notistack';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Connected from './pages/connected';
import Disconnected from './pages/disconnected';
import LoadingPage from './pages/LoadingPage';

import { setLoading } from './redux/reducers/configs';

const themes = {
  light: createTheme({
    palette: {
      background: { default: '#eeeeee', paper: '#eeeeee' },
      mode: 'light',
      primary: { main: '#8c59fe' },
      secondary: { main: '#8c59fe' },
    },
  }),
  dark: createTheme({
    palette: {
      background: { default: '#15092e', paper: '#15092e' },
      mode: 'dark',
      primary: { main: '#8c59fe' },
      secondary: { main: '#ffffff' },
    },
  }),
};

function App() {
  const dispatch = useDispatch();
  const { theme, loading } = useSelector(state => state.configs);

  useEffect(() => {
    setTimeout(() => dispatch(setLoading(false)), 1000);
  }, [])

  return (
    <ThemeProvider theme={themes[theme]}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        preventDuplicate
      >
        <CssBaseline enableColorScheme />
        {loading ? <LoadingPage /> : (
          <Switch>
            <Route path="/login" component={Disconnected} />
            <Route path="/" component={Connected} />
          </Switch>
        )}
      </SnackbarProvider>
    </ThemeProvider >
  );
}

export default App;
