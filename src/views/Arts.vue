<template>
  <div id="arts" class="row">
    <div class="col">
      <h1>Arts</h1>
      <postMediaForm></postMediaForm>
      <div
        class="col mx-auto border border-dark rounded shadow mt-3"
        v-for="media in medias.slice().reverse()"
        :key="media.id"
      >
        <figure class="mw-75">
          <figcaption class="h4 text-danger">{{ media.text }}</figcaption>
          <p
            v-for="user in users.filter((user) => {
              return user.id == media.userId;
            })"
          >
            publié par
            <strong>{{ user.firstName }} {{ user.lastName }}</strong>
          </p>
          <img class="mw-75" :src="media.mediaUrl" alt="media" />
        </figure>
        <span v-if="userId == media.userId">
          <button
            class="mb-3 btn btn-secondary rounded"
            v-bind="media"
            @click.prevent="deleteGif(media.id)"
          >
            Supprimer le media
          </button>
        </span>
        <div v-if="comments">
          <div
            v-for="comment in comments.filter((comment) => {
              return comment.mediaId == media.id;
            })"
            :key="comment.id"
            class="bg-light rounded"
          >
            <p class="mb-2">
              "{{ comment.content }}"
              <span
                v-for="user in users.filter((user) => {
                  return user.id == comment.userId;
                })"
              >
                par
                <strong>{{ user.firstName }} {{ user.lastName }}</strong>
              </span>
            </p>
            <span v-if="userId == comment.userId">
              <button
                class="mb-3 btn btn-secondary rounded"
                @click.prevent="deleteComment(comment.id)"
              >
                Effacer le commentaire
              </button>
            </span>
          </div>
        </div>
        <postComment v-bind="media"></postComment>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import postMediaForm from "../components/postMediaForm.ce.vue";

export default {
  name: "Arts",
  components: {
    postMediaForm,
  },
  created() {
    axios
      .get("http://localhost:3001/api/medias", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + this.token,
        },
      })
      .then((res) => {
        this.medias = res.data.medias;
      })
      .catch((err) => {
        console.log(err + "Utilisateur inconnu ou Posts indisponibles");
      });
  },
  data() {
    return {
      medias: [],
      media: {},
      comments: [],
      comment: {},
      content: {},
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
