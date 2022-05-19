import axios from "axios";
import router from "../../router";
const state = {
  user: { id: "1122333" },
};

const getters = {
  user: (state) => state.user,
};

const actions = {
  async login({ commit }, userData) {
    const users = await axios.get(`http://localhost:5000/users`);

    let user = users.data.find((x) => x.email === userData.email);

    if (user) {
      if (user.password === userData.password) {
        commit("setUser", user);
        console.log(user)
        router.push("/");
      } else {
        alert("Wrong password");
      }
    } else {
      alert("User not found");
    }
  },
  async registerUser({ commit }, userData) {
    const users = await axios.get(`http://localhost:5000/users`);

    let isEmailExist = users.data.some((x) => x.email === userData.email);
    console.log(users.data);
    if (isEmailExist) {
      alert("There is a account with this email");
      return;
    }

    const res = await axios.post(`http://localhost:5000/users`, userData);
    commit("setUser", res.data);

    router.push("/");
  },
};

const mutations = {
  setUser: (state, user) => (state.user = user),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
