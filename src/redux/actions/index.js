const setCurrentUser = (currentUser) => (dispatch) => {
  dispatch({ type: 'SET_CURRENT_USER', payload: { currentUser } });
};

const setCategoryList = (list) => (dispatch) => {
  dispatch({ type: 'SET_CATEGORY_LIST', payload: { list } });
};

const setCurrentCategory = (category) => (dispatch) => {
  dispatch({ type: 'SET_CURRENT_CATEGORY', payload: { category } });
};

const setFilterOptions = (options) => (dispatch) => {
  dispatch({ type: 'SET_FILTER_OPTIONS', payload: { filterOptions: options } });
};

export default {
  setCurrentUser,
  setCategoryList,
  setCurrentCategory,
  setFilterOptions,
};