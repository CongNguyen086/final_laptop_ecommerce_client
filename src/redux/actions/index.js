const setCurrentUser = (currentUser) => (dispatch) => {
  dispatch({ type: 'SET_CURRENT_USER', payload: { currentUser } });
};

const setCategoryList = (list) => (dispatch) => {
  dispatch({ type: 'SET_CATEGORY_LIST', payload: { list } });
};

export default {
  setCurrentUser,
  setCategoryList,
};