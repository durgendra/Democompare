import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from '@mui/material';
import { useValue } from '../../../context/ContextProvider';
import InfoField from './InfoField';
import InfoFieldLite from './InfoFieldLite';

const AddOptionDetails = () => {
  const {
    state: {
      detailsProducts: { name, category, goal },
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
          label: 'Ask your question to find options',
          value: name,
        }}
        minLength={3}
      />
      <InfoFieldLite
        mainProps={{
          name: 'goal',
          label: 'Enter your goal (optional)',
          value: goal,
        }}
        minLength={2}
        optionalProps={{ multiline: false, rows: 1 }}
      />
      {/* <InfoFieldLite
        mainProps={{
          name: 'criteria',
          label: 'Enter key criteria for the alternate product ',
          value: criteria,
        }}
        minLength={4}
        optionalProps={{ multiline: false, rows: 1 }}
      /> */}
    </Stack>
  );
};

export default AddOptionDetails;
