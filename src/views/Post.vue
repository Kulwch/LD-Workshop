<template>
  <div v-if="user.isAdmin == 'true'" id="posts" class="row">
    <div class="col">
      <h1 class="h1">Publier un media sur le site :</h1>
      <postMediaForm />
    </div>
  </div>
  <div v-if="!token" id="notAllowed">
    <h1>
      Accès réservé Admin - merci de retourner
      <br />
      à l'<router-link to="/LD-Workshop/">accueil</router-link>
    </h1>
  </div>
</template>

<script>
import postMediaForm from "../components/postMediaForm.ce.vue";

export default {
  name: "post",
  components: {
    postMediaForm,
  },

  data() {
    return {
      userId: localStorage.getItem("userId"),
      users: [],
      user: {
        id: localStorage.getItem("userId"),
        isAdmin: localStorage.getItem("isAdmin"),
      },
      token: localStorage.getItem("token"),
    };
  },
};
</script>

<style></style>
