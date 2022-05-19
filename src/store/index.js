import { createStore } from "vuex";
import auth from "./modules/auth";
import visits from "./modules/visits";

// Create a new store instance.
const store = createStore({
  modules: {
    auth,
    visits
  },
});

export default store;
