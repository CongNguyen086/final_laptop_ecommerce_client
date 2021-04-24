export default (initialState) => (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: { ...payload.currentUser },
      };
    default:
      return state;
  }
};
