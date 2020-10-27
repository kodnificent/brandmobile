import Vue from 'vue';
import Vuex from 'vuex';
import subUser from './modules/subUser';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
  },
  mutations: {
    updateProfile(state, profileData) {
      state.profile = profileData;
    },
  },
  actions: {
    // updateProfile(ctx, profileData) {
    //   // make http call to update profile
    //   this.$http.post().then((res) => {
    //     //
    //   }).catch((res) => {})
    // },
    fetchProfile({ commit }) {
      return this.$app.$http.get('/profile.json').then((res) => {
        const profile = res.data.data;

        commit('updateProfile', {
          user_id: profile.user_id,
          first_time_login: profile.first_time_login,
          first_name: profile.first_name,
          last_name: profile.last_name,
          email: profile.email,
          phone: profile.phone,
          address: profile.address,
          image_url: profile.image_url,
        });

        commit('subUser/updateSubUsers', profile.sub_users);
      });
    },
  },
  getters: {},
  modules: {
    subUser,
  },
});
