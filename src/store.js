import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "백지혜",
      age: "20",
    };
  },
});

export default store;
