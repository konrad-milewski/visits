import axios from "axios";

const state = {
  user: { id: "1122333" },
};

const getters = {
  user: (state) => state.user,
};

const actions = {
  async registerUser({ commit }, userData) {
    const res = await axios.post(`http://localhost:5000/users`, userData);
    console.log(res)
    commit("setUser", res.data);
  },
};

const mutations = {
  setUser: (state, user) => state.user = user,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
