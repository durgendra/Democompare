import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { useValue } from '../../../../../../main/context/ContextProvider';
import UserIcons from '../../../../../../main/components/user/UserIcons';

import NavItem from './components/NavItem';
import Link from '@mui/material/Link';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    state: { currentUser },
    // dispatch,
  } = useValue();

  const {
    Home: landingPages,
    // secondary: secondaryPages,
    // List: companyPages,
    // account: accountPages,
    // portfolio: portfolioPages,
    // blog: blogPages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theProduct"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? '/assets/democompare.svg'
                : '/assets/democompare_dark.svg'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        {/* <Box>
          <NavItem title={'Home'} items={landingPages} />
        </Box> */}
        {/* <Box>
          <NavItem title={'List'} items={companyPages} />
        </Box> */}
        {/* <Box>
          <NavItem title={'Pages'} items={secondaryPages} />
        </Box>
        <Box>
          <NavItem title={'Account'} items={accountPages} />
        </Box>
        <Box>
          <NavItem title={'Blog'} items={blogPages} />
        </Box>
        <Box>
          <NavItem title={'Portfolio'} items={portfolioPages} />
        </Box> */}
        {/* <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href="/docs/introduction"
          >
            Documentation
          </Button>
        </Box> */}
        {/* <Box>
          <Link
            underline="none"
            component="a"
            href="/blocks"
            // color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Components
          </Link>
        </Box> */}

        <Box marginTop={2}>
          {!currentUser ? (
            <Button
              size={'large'}
              variant="contained"
              color="primary"
              fullWidth
              component="a"
              target="blank"
              href="/option"
            >
              Login
            </Button>
          ) : (
            // <Button
            //   variant="contained"
            //   color="primary"
            //   component="a"
            //   // target="blank"
            //   size="large"
            //   onClick={() => dispatch({ type: 'OPEN_LOGIN' })}
            // >
            //   Login
            // </Button>
            <Box marginTop={1}>
              <Link
                underline="none"
                component="a"
                href="/option"
                color={'common.white'}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                DASHBOARD
              </Link>
            </Box>
            // <UserIcons />
          )}
        </Box>

        {/* <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
          >
            Login
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
