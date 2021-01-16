export const state = () => ({
  darkTheme: false,
});

export const mutations = {
  changeTheme(state) {
    state.darkTheme = !state.darkTheme;
  },
};
