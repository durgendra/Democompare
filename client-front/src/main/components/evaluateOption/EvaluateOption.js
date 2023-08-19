import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Step,
  StepButton,
  Stepper,
  Button,
  Stack,
  Typography,
  Grid,
} from '@mui/material';
import EvaluateOptionsDetails from './evaluateOptionsDetails/EvaluateOptionsDetails';
import { useValue } from '../../context/ContextProvider';
import { Send } from '@mui/icons-material';
import { createEvaluateOption } from '../../actions/evaluateOption';
import { alpha, useTheme } from '@mui/material/styles';

const EvaluateOption = ({ setSelectedLink, link }) => {
  const {
    state: { detailsEvaluateOptions, evaluateOption, currentUser },
    dispatch,
  } = useValue();
  const [activeStep, setActiveStep] = useState(0);
  const [submitStep, setSubmitStep] = useState(0);
  const [steps, setSteps] = useState([{ label: 'Details', completed: false }]);

  const [showSubmit, setShowSubmit] = useState(false);
  useEffect(() => {
    setSelectedLink(link);
  });
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((activeStep) => activeStep + 1);
    } else {
      const stepIndex = findUnfinished();
      setActiveStep(stepIndex);
    }
  };
  const checkDisabled = () => {
    if (activeStep < steps.length - 1) return false;
    const index = findUnfinished();
    if (index !== -1) return false;
    return true;
  };
  const findUnfinished = () => {
    return steps.findIndex((step) => !step.completed);
  };

  useEffect(() => {
    if (detailsEvaluateOptions.name.length > 3) {
      if (!steps[0].completed) setComplete(0, true);
    } else {
      if (steps[0].completed) setComplete(0, false);
    }
  }, [detailsEvaluateOptions]);

  const setComplete = (index, status) => {
    setSteps((steps) => {
      steps[index].completed = status;
      return [...steps];
    });
  };
  useEffect(() => {
    if (findUnfinished() === -1) {
      if (!showSubmit) setShowSubmit(true);
    } else {
      if (showSubmit) setShowSubmit(false);
    }
  }, [steps]);
  const handleSubmit = () => {
    const product = {
      paragraph: detailsEvaluateOptions.name,
      userOptions: [
        detailsEvaluateOptions.criteria1,
        detailsEvaluateOptions.criteria2,
        detailsEvaluateOptions.criteria3,
      ],
      category: 'text',
      evaluateAI: '',
    };
    console.log(product);
    createEvaluateOption(product, currentUser, dispatch, 0);
    // createOptions(product, currentUser, dispatch, 0);
    // setSubmitStep(1);
  };
  const theme = useTheme();
  return (
    <Container sx={{ my: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            width={1}
            height={1}
            minHeight={{ xs: 400, md: 800 }}
            borderRadius={2}
            border={`2px solid ${theme.palette.divider}`}
            sx={{
              borderStyle: 'dashed',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '5vh',
              }}
              p={1}
            >
              <Typography variant="h6" component="span">
                {'Create the post for evaluation '}
              </Typography>
            </Box>
            <Box sx={{ pb: 7, px: 1 }}>
              {
                {
                  0: <EvaluateOptionsDetails />,
                }[activeStep]
              }
              <Stack sx={{ alignItems: 'center' }}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                  marginTop={2}
                >
                  <Button
                    variant="contained"
                    sx={{ m: 4 }}
                    endIcon={<Send />}
                    disabled={!showSubmit}
                    onClick={handleSubmit}
                  >
                    Ask BNOAD AI
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{ m: 4 }}
                    endIcon={<Send />}
                    disabled={!showSubmit}
                    onClick={handleSubmit}
                  >
                    Ask BNOAD users
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            width={1}
            height={1}
            minHeight={{ xs: 400, md: 800 }}
            borderRadius={2}
            border={`2px solid ${theme.palette.divider}`}
            sx={{
              borderStyle: 'dashed',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '5vh',
              }}
            >
              <Typography variant="h6" component="span">
                {'Result'}
              </Typography>
            </Box>
            {evaluateOption && (
              <Box p={1}>
                <Typography component="span" style={{ whiteSpace: 'pre-wrap' }}>
                  {evaluateOption?.evaluateAI}
                </Typography>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EvaluateOption;
