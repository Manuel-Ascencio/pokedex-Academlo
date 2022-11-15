const INITIAL_STATE = {
  userName: "",
  isLoading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_NAME":
      return {
        ...state,
        userName: action.payload,
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
};

export default reducer;
