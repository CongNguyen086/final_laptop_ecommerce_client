export default (initialState) => (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_CATEGORY_LIST':
      return {
        ...state,
        categoryList: [...payload.list]
      };
    default:
      return state;
  }
};
