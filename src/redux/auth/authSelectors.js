export const getSelectorIsLoggedIn = state => state.auth.isLoggedIn;
export const getSelectorLoading = state => state.auth.loading;
export const getUserName = state => state.auth.user.name;
export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;