<template>
  <div class="col-md-10 mx-auto border border-dark rounded shadow">
    <h2 class="h2 mt-2">Publier un media</h2>
    <form
      id="form"
      class="mt-5"
      @submit.prevent="postMedia()"
      enctype="multipart/form-data"
    >
      <div class="mx-auto w-50 mb-3">
        <label for="title" class="form-label">Titre :</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Tape ici ton titre..."
        />
      </div>
      <div class="mx-auto w-50 mb-3">
        <label for="statusText" class="form-label">Texte :</label>
        <input
          type="text"
          class="form-control"
          id="text"
          placeholder="Tape ici ton texte..."
        />
      </div>
      <div class="w-50 mx-auto mb-3">
        <label for="media" class="form-label pr-1">Media :</label>
        <input
          type="file"
          class="form-control-file mx-auto"
          id="media"
          name="media"
          ref="media"
          v-on:change="handleFileUpload()"
        />
      </div>
      <button type="submit" class="btn btn-primary mb-3" @click.prevent="postMedia">
        Publier
      </button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "postMediaForm",
  data() {
    return {
      userId: localStorage.getItem("userId"),
      title: "",
      text: "",
      imageUrl: "",
      media: "",
      token: localStorage.getItem("token"),
    };
  },
  methods: {
    handleFileUpload() {
      this.media = this.$refs.media.files[0];
      this.mediaUrl = URL.createObjectURL(this.media);
    },
    postMedia() {
      const formData = new FormData();
      formData.append("userId", parseInt(localStorage.getItem("userId")));
      formData.append("title", document.getElementById("title").value);
      formData.append("text", document.getElementById("text").value);
      formData.append("media", this.media);
      axios
        .post("http://localhost:3001/api/medias", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + this.token,
          },
        })
        .then(() => this.$router.go());
    },
  },
};
</script>
<style></style>
