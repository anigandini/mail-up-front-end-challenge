<script>
export default {
  props: {
    id: String,
    title: String,
    firstName: String,
    lastName: String,
    picture: String,
  },
};
</script>
<template>
  <div class="card">
    <img :src="picture" alt="" />
    <h2>{{ title + ". " + firstName + " " + lastName }}</h2>
  </div>
</template>
<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem;
}
.card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.card h2 {
  text-transform: capitalize;
  padding-left: 1rem;
}

@media (min-width: 768px) {
    .card {
      flex-direction: column;
      justify-content: center;
      width: 30%;
      border: 1px solid #eeeeee;
      padding: 1;
      border-radius: 20px;
      box-shadow: 0 3px 3px #eeeeee;
      cursor: pointer;

    }
  }
</style>
