import React, { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';

import Container from 'components/Container';
import { Topbar, Sidebar, Footer } from './components';
import AddFAQ from '../../components/evaluateOption/EvaluateOption';
import { useNavigate, Routes, Route } from 'react-router-dom';
import OptionsPage from 'main/components/optionsPage/OptionsPage';

import AddOption from 'main/components/findOptions/FindOptions';

const ChildMock = () => {
  const theme = useTheme();
  return (
    <Box
      width={1}
      height={1}
      minHeight={{ xs: 400, md: 800 }}
      borderRadius={2}
      border={`2px solid ${theme.palette.divider}`}
      sx={{
        borderStyle: 'dashed',
      }}
    />
  );
};

const WithThreeColumns = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;
  const mock = [
    {
      title: 'Use Text',
      href: '#',
      link: '',
      component: <AddFAQ {...{ setSelectedLink, link: '' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },

    {
      title: 'Find options',
      href: '#',
      link: 'find',
      component: <AddOption {...{ setSelectedLink, link: 'find' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Find options',
      href: '#',
      link: 'find',
      component: <AddOption {...{ setSelectedLink, link: 'find' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Get options',
      href: '#',
      link: 'explore',
      component: <OptionsPage {...{ setSelectedLink, link: 'explore' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <Box>
      <AppBar
        position={'fixed'}
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
        elevation={0}
      >
        <Container maxWidth={1} paddingY={{ xs: 1, sm: 1.5 }}>
          <Topbar onSidebarOpen={handleSidebarOpen} />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant={isMd ? 'permanent' : 'temporary'}
      />
      <main>
        <Box height={{ xs: 58, sm: 66, md: 71 }} />
        <Box
          display="flex"
          flex="1 1 auto"
          overflow="hidden"
          paddingLeft={{ md: '256px' }}
        >
          <Box display="flex" flex="1 1 auto" overflow="hidden">
            <Box flex="1 1 auto" height="100%" overflow="auto">
              <Box p={4}>
                <Routes>
                  {mock.map((item) => (
                    <Route
                      key={item.title}
                      path={item.link}
                      element={item.component}
                    />
                  ))}
                </Routes>
                {/* <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <ChildMock />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ChildMock />
                  </Grid>
                </Grid> */}
              </Box>
              <Divider />
              <Container paddingY={4}>
                <Footer />
              </Container>
            </Box>
          </Box>
        </Box>
      </main>
    </Box>
  );
};

export default WithThreeColumns;
