import { STORE_RESULT, DELETE_RESULT } from '../../constants/actionTypes';
const initialState = {
  results: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: Math.floor(Math.random() * 10000),
          value: action.result,
        }),
      };
    case DELETE_RESULT:
      const newResult = [...state.results];
      const newArray = newResult.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        results: [...newArray],
      };
    default:
      return state;
  }
};
export default reducer;
