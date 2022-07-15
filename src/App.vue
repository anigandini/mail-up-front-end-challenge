<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0;
  padding: 0;
  background: #2bc0e4; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eaecc6,
    #2bc0e4
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eaecc6,
    #2bc0e4
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-weight: normal;
  display: flex;
  flex-direction: column;
}

main {
  background-color: white;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 1rem;
}

@media (min-width: 1024px) {
}
</style>
