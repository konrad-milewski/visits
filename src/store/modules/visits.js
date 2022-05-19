import axios from "axios";
import router from "../../router";

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
  
  async deleteVisit({ commit }, id) {
    const res = await axios.delete(`http://localhost:5000/visits/${id}`);
  
    commit('deleteVisit', id)
  },
 
  async addVisit({ commit }, visitObj) {
    const res = await axios.post(`http://localhost:5000/visits`, visitObj);

    commit("newVisit", res.data);
    router.push("/");
  },
  async updateVisit({ commit },visitObj) {
    const res = await axios.patch(`http://localhost:5000/visits/${visitObj.id}`, visitObj);
    console.log(visitObj)
    commit("newVisit", res.data);
    visitObj.status !== 'secondary' && router.push("/");
  },
};

const mutations = {
  setVisits: (state, visits) => (state.visits = visits),
  newVisit: (state, visit) => state.visits.unshift(visit),
  deleteVisit: (state, visitId) => state.visits = state.visits.filter(x => x.id !== visitId),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
