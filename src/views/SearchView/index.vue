<script src="./SearchView"></script>
<template>
  <section aria-labelledby="search user" class="section-search">
    <section role="search">
      <form @submit.prevent="searchUser">
        <fieldset>
          <legend>Buscar usuario</legend>
          <label for="search-user">
            <input
              type="search"
              name="search-user"
              id="search-user"
              v-model="query"
              placeholder="Buscar usuarios..."
              maxlength="200"
            />
          </label>
          <button type="submit" title="Search this website now">Buscar</button>
        </fieldset>
      </form>
    </section>
  </section>
  <section aria-labelledby="users" class="section-users" :key="updateList">
    <UserCard v-for="user in getUserList" v-bind="user" :key="user.id" @Click="goToUserPage(user)"/>
  </section>
</template>
<style scoped>
  section {
    padding: 0.3rem;
  }

  .section-search fieldset {
    border: none; 
    padding: 0;
  }

  .section-search fieldset legend {
    display: none;
  }
  .section-search fieldset input {
    width: 70%;
    border: 1px solid #00B4CC;
    border-right: none;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9DBFAF;
    padding: 1rem;
  }

  .section-search fieldset button {
    border: 1px solid #00B4CC;
    background: #00B4CC;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    .section-search fieldset input {
      width: 90%;
    }
    .section-users {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      gap: 1rem;
    }
  }


</style>