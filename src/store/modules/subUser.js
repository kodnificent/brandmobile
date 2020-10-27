export default {
  namespaced: true,
  state: () => ({
    sub_users: [],
  }),
  mutations: {
    addSubUser(state, data) {
      state.sub_users.push(data);
    },
    updateSubUsers(state, data) {
      state.sub_users = data;
    },
  },
  actions: {
    // createSubUser(ctx, userData) {},
    // deleteSubUser(ctx, userId) {},
    // blockSubUser(ctx, userId) {},
    // unblockSubUser(ctx, userId) {},
    // resendInvitation(ctx, userId) {},
  },
  getters: {},
};
