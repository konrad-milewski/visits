import axios from "axios";

const state = {
  visits: [{ id: "dummy" }],
};

const getters = {
  allVisits: (state) => state.visits,
};

const actions = {
  async fetchAllVisits({ commit }) {
    const res = await axios.get(`http://localhost:5000/visits`);
    commit("setVisits", res.data);
  },
  async addVisit({ commit }, visitObj) {
    const res = await axios.post(`http://localhost:5000/visits`, visitObj);
    console.log(res)
    commit("newVisit", res.data);
  },
};

const mutations = {
  setVisits: (state, visits) => (state.visits = visits),
  newVisit: (state, visit) => state.visits.unshift(visit),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
