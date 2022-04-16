<template>
  <div class="col col-md-8 mx-auto mt-2 mb-2 border border-dark rounded shadow bg-light">
    <h3 class="h5 mt-2">Laisser un commentaire dans le Livre d'or</h3>
    <form class="mt-3">
      <div class="mx-auto w-75 h-50 mb-3">
        <label for="text" class="form-label">Commentaire :</label>
        <textarea
          class="form-control text"
          name="text"
          ref="text"
          placeholder="Tapez ici votre commentaire !"
        ></textarea>
        <label for="authorFirstName" class="form-label mt-2">Prénom :</label>
        <input
          class="form-control authorFirstName w-50 mx-auto"
          name="authorFirstName"
          ref="authorFirstName"
          placeholder="Saisissez votre prénom"
        />
        <label for="authorLastName" class="form-label mt-2">Prénom :</label>
        <input
          class="form-control authorLastName w-50 mx-auto"
          name="authorLastName"
          ref="authorLastName"
          placeholder="Saisissez votre nom "
        />
        <label for="authorEmail" class="form-label mt-2"
          >Email - ne sera pas affiché dans le livre d'Or :</label
        >
        <input
          class="form-control authorEmail w-50 mx-auto"
          name="authorEmail"
          ref="authorEmail"
          placeholder="Saisissez votre email "
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary mb-3"
        @click="postComment()"
        ref="comment"
      >
        Publier
      </button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "postComment",
  data() {
    return {
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),
      text: "",
      authorFirstName: "",
      authorLastName: "",
    };
  },
  methods: {
    postComment($attrs) {
      axios
        .post("http://localhost:3001/api/comments", {
          text: this.$refs.text.value,
          authorFirstName: this.$refs.authorFirstName.value,
          authorLastName: this.$refs.authorLastName.value,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then(() => this.$router.go());
    },
  },
};
</script>
<style></style>
