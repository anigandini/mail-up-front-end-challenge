import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      users: [],
      filteredUsers: []
    };
  },
  mutations: {
    setUsers(state, payload) {
      payload.forEach(user => state.users.push(user));
    },
    filterUsers(state, payload) {
      state.filteredUsers = state.users.filter(user => user.firstName.toLowerCase().includes(payload) || user.lastName.toLowerCase().includes(payload));
    },
    deleteFilter (state) {
        state.filteredUsers = [];
    }
  },
  actions: {
    setUsers(context, payload) {
      context.commit("setUsers", payload);
    },
    setFilteredUsers(context, payload) {
      context.commit("filterUsers", payload);
    },
    unsetFilteredUsers(context) {
      context.commit("deleteFilter");
    }
  },
});

export default store;
