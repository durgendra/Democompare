const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_LOGIN':
      return { ...state, openLogin: true };
    case 'CLOSE_LOGIN':
      return { ...state, openLogin: false };
    case 'START_LOADING':
      return { ...state, loading: true };
    case 'END_LOADING':
      return { ...state, loading: false };
    case 'UPDATE_ALERT':
      return { ...state, alert: action.payload };
    case 'UPDATE_PROFILE':
      return { ...state, profile: action.payload };
    case 'UPDATE_USER':
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
      return { ...state, currentUser: action.payload };
    case 'UPDATE_PRODUCTDETAILS':
      return {
        ...state,
        detailsProducts: { ...state.detailsProducts, ...action.payload },
      };
    case 'RESET_PRODUCT':
      return {
        ...state,
        detailsProducts: {
          name: '',
          category: '',
          url: '',
          criteria1: '',
          criteria2: '',
          criteria3: '',
        },
      };
    case 'UPDATE_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case 'UPDATE_PRODUCT':
      return { ...state, product: action.payload };
    case 'UPDATE_EVALUATEOPTIONDETAILS':
      return {
        ...state,
        detailsEvaluateOptions: {
          ...state.detailsEvaluateOptions,
          ...action.payload,
        },
      };
    case 'RESET_EVALUATEOPTION':
      return {
        ...state,
        detailsEvaluateOptions: {
          name: '',
          criteria1: '',
          criteria2: '',
          criteria3: '',
        },
      };
    case 'UPDATE_EVALUATEOPTIONS':
      return {
        ...state,
        evaluateOptions: action.payload,
      };
    case 'UPDATE_EVALUATEOPTION':
      return { ...state, evaluateOption: action.payload };
    case 'UPDATE_USERS':
      return {
        ...state,
        users: action.payload,
      };
    default:
      throw new Error('No matched Action');
  }
};

export default reducer;
