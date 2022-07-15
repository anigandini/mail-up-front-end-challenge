<script>
import store from "../store";
import router from "../router";
export default {
  data () {
    return {
      user: store.state.users.find(user => user.id === this.$route.params.id)
    }
  },
  methods: {
    goToSearchPage() {
      router.push("/")
    }
  }
}
</script>
<template>
  <section class="user">
      <div>
        <img :src="user.picture" alt="" />
        <h1>{{user.title + ' ' + user.firstName + ' ' + user.lastName }}</h1>
      </div>
      <button @Click="goToSearchPage()">Volver</button>
  </section>
</template>

<style>
  .user,
  .user div {
    display: flex;
    justify-content: space-between;
    align-items: center
  }

  .user div {
    gap: 1rem;
  }
  
  .user img {
    border-radius: 50%;
  }

  .user h1 {
    text-transform: capitalize;
  }

  .user button {
    background: linear-gradient(270deg,transparent 50%,#00B4CC 0);
    background-position: 100% 100%;
    background-size: 200% 100%;
    border: 1px solid #00B4CC;
    border-radius: 5%;
    color: #00B4CC;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
    transition: all 1s ease;
  }

  .user button:hover {
    background-position: 0 0;
    color: #fff;
    transition: all 1s ease;
  }

</style>
