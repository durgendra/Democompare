import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Send } from '@mui/icons-material';

const mock = [
  {
    name: 'Abhishek Singh',
    collegeName: 'RIMS, Ranchi',
    avatar: '/assets/abhishek.jpg',
    yearTag: 'Year: 2022-2027, 2nd Year Student',
    degree: 'MBBS',
    instituteAvatar: '/assets/RIMS.png',
    appointmentLink: 'https://topmate.io/abhishek_singh54',
  },
  {
    name: 'Durgendra Singh',
    collegeName: 'Kellogg school of management',
    avatar: '/assets/durgendra.jpg',
    yearTag: 'Year: 2014-2016 , Alumni',
    degree: 'MBA',
    instituteAvatar: '/assets/kellogg_3.png',
    appointmentLink: 'https://topmate.io/durgendra_singh',
  },

  {
    name: 'Gautam Kumar',
    collegeName: 'Jindal Steel and Power',
    avatar: '/assets/gautam.jpg',
    yearTag: 'Year: 2014-2016, Alumni',
    degree: 'Assistant Manager',
    instituteAvatar: '/assets/Jindal_Steel_Power.png',
    appointmentLink: 'https://topmate.io/durgendra_singh',
  },
  {
    name: 'Durgesh Kumar',
    collegeName: 'Hindalco Industries',
    avatar: '/assets/durgesh.jpg',
    yearTag: 'Year: 2017-2019, Alumni',
    degree: 'Assistant Manager',
    instituteAvatar: '/assets/hindaloco.png',
    appointmentLink: 'https://topmate.io/durgendra_singh',
  },
];

const Team = () => {
  const theme = useTheme();
  const handleSubmit = () => {};
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'text.secondary'}
          align={'center'}
        >
          Get Help
        </Typography>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Talk to professionals for real conversations
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box
              component={Card}
              boxShadow={2}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Box
                    component={Avatar}
                    src={item.avatar}
                    height={80}
                    width={80}
                  />

                  <Box
                    component={Avatar}
                    src={item.instituteAvatar}
                    height={80}
                    width={80}
                  />
                </Stack>
                <Box marginTop={4}>
                  <ListItemText
                    primary={item.name}
                    secondary={item.collegeName}
                  />
                  <Typography variant={'subtitle2'} color={'text.secondary'}>
                    {item.degree}
                  </Typography>
                  <Typography variant={'subtitle2'} color={'text.secondary'}>
                    {item.yearTag}
                  </Typography>
                  <Box marginTop={4}>
                    <Button
                      variant="outlined"
                      sx={{ m: 4 }}
                      // endIcon={<Send />}
                      style={{ display: 'table-cell' }}
                      target="_blank"
                      rel="noopener noreferrer"
                      // disabled={!showSubmit}
                      href={item.appointmentLink}
                      // onClick={handleSubmit}
                    >
                      Book appointment
                    </Button>
                    {/* <IconButton size={'small'} color={'primary'}>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton size={'small'} color={'primary'}>
                      <GitHubIcon />
                    </IconButton>
                    <IconButton size={'small'} color={'primary'}>
                      <TwitterIcon />
                    </IconButton> */}
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
