const getCurrentUser = (state) => state.auth.currentUser;
const getCategoryList = (state) => state.common.categoryList;
const getCurrentCategory = (state) => state.common.currentCategory;
const getCurrentFilterOptions = (state) => state.common.currentFilterOptions;

export default {
  getCurrentUser,
  getCategoryList,
  getCurrentCategory,
  getCurrentFilterOptions,
};
