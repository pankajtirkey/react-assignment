import * as actionTypes from './actions';

const initialState = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_FORM:
      return { ...state, formData: { ...action.payload } };
    default:
      return state;
  }
};

export default reducer;
