<template>
  <div id="arts" class="row">
    <div class="col">
      <h1 class="h1">Publier un media sur le site :</h1>
      <postMediaForm></postMediaForm>
      </div>
    </div>
  </div>
</template>

<script>
import postMediaForm from "../components/postMediaForm.ce.vue";

export default {
  name: "Post",
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
