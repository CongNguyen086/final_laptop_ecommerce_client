const getCurrentUser = (state) => state.auth.currentUser;
const getCategoryList = (state) => state.common.categoryList;

export default {
  getCurrentUser,
  getCategoryList,
};
