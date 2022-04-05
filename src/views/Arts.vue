<template>
  <div id="arts" class="row">
    <div class="col">
      <h1>Arts</h1>
      <postMediaForm></postMediaForm>
      <div
        class="col-md-10 mx-auto border border-dark rounded shadow mt-3"
        v-for="media in medias.slice().reverse()"
        :key="media.id"
      >
        <figure class="h-50 mw-75">
          <figcaption class="h4 text-danger">{{ media.title }}</figcaption>
          <img class="w-75" :src="media.mediaUrl" alt="media" />
        </figure>
        <p>{{ media.text }}</p>
        <span v-if="user.isAdmin == true">
          <button
            class="mb-3 btn btn-secondary rounded"
            v-bind="media"
            @click.prevent="deleteGif(media.id)"
          >
            Supprimer le media
          </button>
        </span>
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
