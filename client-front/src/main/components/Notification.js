import React from 'react';
import { useValue } from '../context/ContextProvider';
import { Snackbar, Alert, Typography } from '@mui/material';
const Notification = () => {
  const {
    state: { alert },
    dispatch,
  } = useValue();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    dispatch({
      type: 'UPDATE_ALERT',
      payload: { ...alert, open: false },
    });
  };
  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      // style={{ overflow: 'auto' }}
      sx={{ position: 'absolute', overflow: 'auto' }}
    >
      <Alert
        onClose={handleClose}
        severity={alert.severity}
        sx={{ width: '100%' }}
        variant="filled"
        elevation={6}
      >
        <Typography component="span" style={{ whiteSpace: 'pre-wrap' }}>
          {alert.message}
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default Notification;
