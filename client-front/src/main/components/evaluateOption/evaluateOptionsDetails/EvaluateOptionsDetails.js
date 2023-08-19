import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Box,
  Typography,
} from '@mui/material';
import { useValue } from '../../../context/ContextProvider';
import InfoField from './InfoField';
import InfoFieldLite from './InfoFieldLite';

const EvaluateOptionsDetails = () => {
  const {
    state: {
      detailsEvaluateOptions: {
        name,
        category,
        criteria1,
        criteria2,
        criteria3,
      },
    },
    dispatch,
  } = useValue();
  const [categoryType, setCategoryType] = useState(category ? 1 : 0);

  // const handleCategoryTypeChange = (e) => {
  //   const categoryType = Number(e.target.value);
  //   setCategoryType(categoryType);
  //   if (categoryType === 0) {
  //     dispatch({
  //       type: 'UPDATE_PRODUCTDETAILS',
  //       payload: { category: 'product' },
  //     });
  //   } else {
  //     dispatch({
  //       type: 'UPDATE_PRODUCTDETAILS',
  //       payload: { category: 'career' },
  //     });
  //   }
  // };
  return (
    <Stack
      sx={{
        alignItems: 'center',
        '& .MuiTextField-root': { width: '100%', maxWidth: 500, m: 1 },
      }}
    >
      {/* <FormControl>
        {' '}
        <RadioGroup
          name="costType"
          value={categoryType}
          row
          onChange={handleCategoryTypeChange}
        >
          <FormControlLabel value={0} control={<Radio />} label="Product" />
          <FormControlLabel value={1} control={<Radio />} label="Career" />
        </RadioGroup>
      </FormControl> */}
      <InfoField
        mainProps={{
          name: 'name',
          label: 'Write your question or provide details on your situation',
          value: name,
        }}
        minLength={3}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '5vh',
        }}
        p={1}
      >
        <Typography variant="h8" component="span">
          {'Enter your current options '}
        </Typography>
      </Box>
      <InfoFieldLite
        mainProps={{
          name: 'criteria1',
          label: 'Enter your first option',
          value: criteria1,
        }}
        minLength={2}
        optionalProps={{ multiline: false, rows: 1 }}
      />
      <InfoFieldLite
        mainProps={{
          name: 'criteria2',
          label: 'Enter your second option',
          value: criteria2,
        }}
        minLength={2}
        optionalProps={{ multiline: false, rows: 1 }}
      />
      <InfoFieldLite
        mainProps={{
          name: 'criteria3',
          label: 'Enter your third option',
          value: criteria3,
        }}
        minLength={2}
        optionalProps={{ multiline: false, rows: 1 }}
      />
    </Stack>
  );
};

export default EvaluateOptionsDetails;
