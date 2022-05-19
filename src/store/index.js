import { createStore } from "vuex";
import auth from "./modules/auth";
import visits from "./modules/visits";
import createPersistedState from "vuex-persistedstate";
// Create a new store instance.
const store = createStore({
  plugins: [createPersistedState()],
  modules: {
    auth,
    visits
  },
});

export default store;
