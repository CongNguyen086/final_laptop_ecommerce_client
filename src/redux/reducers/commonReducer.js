import produce from 'immer';

export default (initialState) => (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_CATEGORY_LIST':
      return {
        ...state,
        categoryList: payload.list,
      };
    case 'SET_CURRENT_CATEGORY':
      return {
        ...state,
        currentCategory: payload.category,
      };
    case 'SET_FILTER_OPTIONS':
      return produce(state, (draftState) => {
        const currentFilterOptions = draftState.currentFilterOptions;
        draftState.currentFilterOptions = {
          ...currentFilterOptions,
          ...payload.filterOptions
        };
      });
    default:
      return state;
  }
};
