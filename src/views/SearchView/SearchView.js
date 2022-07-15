import store from "../../store";
import router from "../../router";
import UserCard from "../../components/UserCard.vue";
export default {
  data() {
    return {
      query: "",
      updateList: false,
      userList: store.state.users
    };
  },
  components: {
    UserCard,
  },
  methods: {
    searchUser() {
      store.dispatch("setFilteredUsers", this.query);
      console.log(store.state.filteredUsers)
      this.updateList = !this.updateList;
    },
    goToUserPage(user) {
      router.push(`/users/${user.id}`)
    }
  },
  computed: {
    getUserList() {
      let list;
      if (store.state.filteredUsers.length > 0) {
        list = store.state.filteredUsers 
      } else { 
        list = store.state.users 
      }
      return list
    },
  },
  watch: { 
    query: function(newVal, oldVal) { // watch it
      if (newVal !== oldVal && newVal === '') {
        store.dispatch("unsetFilteredUsers");
      }
    }
  },
  beforeRouteEnter() {
    const url = `https://dummyapi.io/data/v1/user?limit=50`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "app-id": import.meta.env.VITE_API_ID,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        store.dispatch("setUsers", res.data);
      });
  },
};