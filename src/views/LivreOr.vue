<template>
  <div id="livreOr" class="row">
    <div class="col">
      <h1>Livre d'Or</h1>
      <br />
      <p>
        Vous avez déjà fait appel à nos services ou talents d'artiste ? N'hésitez pas à
        laisser un commentaire (dans le respect dû à un être humain) afin de nous aider à
        proposer des services toujours plus proches de vos besoins.
      </p>
    </div>
  </div>
  <postComments></postComments>
  <div class="col">
    <div v-for="comment in comments" :key="comment.id" v-bind="comment">
      <div class="col-10 mx-auto border border-dark rounded shadow mt-3">
        <p>Commentaire n° {{ comment.id }}</p>
        <p class="mb-2">
          "{{ comment.text }}"
          <span>
            par
            <strong>{{ comment.authorFirstName }} {{ comment.authorLastName }}</strong>
          </span>
        </p>
        <button class="mb-2 rounded" @click.prevent="adminDeleteComment(comment.id)">
          Supprimer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import postComments from "../components/postComments.ce.vue";

export default {
  name: "livreOr",
  components: {
    postComments,
  },

  data() {
    return {
      token: localStorage.getItem("token"),
      user: {
        id: localStorage.getItem("userId"),
        isAdmin: localStorage.getItem("isAdmin"),
      },
      comments: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3001/api/comments", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + this.token,
        },
      })
      .then((res) => {
        this.comments = res.data;
      })
      .catch((err) => {
        console.log(err + "Commentaires indisponibles");
      });
  },
  methods: {
    adminDeleteComment(id) {
      axios
        .delete(`http://localhost:3001/api/comments/admin/${id}`, {
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
