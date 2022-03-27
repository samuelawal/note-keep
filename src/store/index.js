import notes from "./modules/notes";
import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export const store = createStore({
  modules: {
    notes,
  },
  plugins: [vuexLocal.plugin],
});
