import fetchData from './utils/fetchData';

const url = process.env.REACT_APP_SERVER_URL + '/evaluate';

export const createEvaluateOption = async (
  product,
  currentUser,
  dispatch,
  setPage,
) => {
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData(
    { url: url, body: product, token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'Options and decisions have been evaluated by AI',
      },
    });
    dispatch({ type: 'RESET_EVALUATEOPTION' });
    // setPage(1);
    dispatch({ type: 'UPDATE_EVALUATEOPTION', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};

export const getFAQs = async (currentUser, dispatch) => {
  const result = await fetchData(
    { url, method: 'GET', token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({ type: 'UPDATE_EVALUATEOPTIONS', payload: result });
  }
};
