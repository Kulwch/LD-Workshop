<template>
  <div class="col-md-10 mx-auto border border-dark rounded shadow">
    <h2 class="h2 mt-2">Pour publier un media, choisis son type :</h2>
    <button class="btn btn-primary mt-3 mb-3" @click="drawingShow = !drawingShow">
      Dessin
    </button>
    <button class="btn btn-primary mt-3 mb-3" @click="photoShow = !photoShow">
      Photo
    </button>
    <button class="btn btn-primary mt-3 mb-3" @click="paintingShow = !paintingShow">
      Peinture
    </button>
    <form
      v-if="drawingShow"
      id="formDrawing"
      class="mt-5"
      @submit.prevent="postDrawing()"
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
        <label for="drawing" class="form-label pr-1">Fichier à publier :</label>
        <input
          type="file"
          class="form-control-file mx-auto"
          id="drawing"
          name="drawing"
          ref="drawing"
          v-on:change="handleDrawingFileUpload()"
        />
      </div>
      <select id="category" name="category" ref="category">
        <option default="">Choisir une catégorie:</option>
        <option value="Enluminure">Graphite</option>
        <option value="Aquarelle">Crayons couleurs</option>
        <option value="Acrylique">Charbon</option>
        <option value="Acrylique">Art digital</option>
      </select>
      <button type="submit" class="btn btn-primary mb-3" @click.prevent="postDrawing">
        Publier
      </button>
    </form>
    <form
      v-if="photoShow"
      id="form"
      class="mt-5"
      @submit.prevent="postPhoto()"
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
        <label for="photo" class="form-label pr-1">Fichier à publier :</label>
        <input
          type="file"
          class="form-control-file mx-auto"
          id="photo"
          name="photo"
          ref="photo"
          v-on:change="handlePhotoFileUpload()"
        />
      </div>
      <button type="submit" class="btn btn-primary mb-3" @click.prevent="postPhoto">
        Publier
      </button>
    </form>
    <form
      v-if="paintingShow"
      id="formPainting"
      class="mt-5"
      @submit.prevent="postPainting()"
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
        <label for="painting" class="form-label pr-1">Fichier à publier :</label>
        <input
          type="file"
          class="form-control-file mx-auto"
          id="painting"
          name="painting"
          ref="painting"
          v-on:change="handlePaintingFileUpload()"
        />
      </div>
      <div class="w-50 mx-auto mb-3">
        <p class="form-label pr-1">Catégorie :</p>
        <select id="category" name="category" ref="category">
          <option default="">Choisir une catégorie:</option>
          <option value="Enluminure">Enluminure</option>
          <option value="Aquarelle">Aquarelle</option>
          <option value="Acrylique">Acrylique</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary mb-3" @click.prevent="postPainting">
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
      drawingShow: false,
      photoShow: false,
      paintingShow: false,
      userId: localStorage.getItem("userId"),
      title: "",
      text: "",
      imageUrl: "",
      photo: "",
      drawing: "",
      painting: "",
      category: "",
      token: localStorage.getItem("token"),
    };
  },
  methods: {
    handleDrawingFileUpload() {
      this.drawing = this.$refs.drawing.files[0];
      this.drawingUrl = URL.createObjectURL(this.drawing);
    },
    postDrawing() {
      const formData = new FormData();
      formData.append("userId", parseInt(localStorage.getItem("userId")));
      formData.append("title", document.getElementById("title").value);
      formData.append("text", document.getElementById("text").value);
      formData.append("drawing", this.drawing);
      formData.append("category", this.$refs.category.value);
      axios
        .post("http://localhost:3001/api/drawings", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + this.token,
          },
        })
        .then(() => this.$router.go());
    },
    handlePhotoFileUpload() {
      this.photo = this.$refs.photo.files[0];
      this.photoUrl = URL.createObjectURL(this.photo);
    },
    postPhoto() {
      const formData = new FormData();
      formData.append("userId", parseInt(localStorage.getItem("userId")));
      formData.append("title", document.getElementById("title").value);
      formData.append("text", document.getElementById("text").value);
      formData.append("photo", this.photo);
      axios
        .post("http://localhost:3001/api/photos", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + this.token,
          },
        })
        .then(() => this.$router.go());
    },
    handlePaintingFileUpload() {
      this.painting = this.$refs.painting.files[0];
      this.paintingUrl = URL.createObjectURL(this.painting);
    },
    postPainting() {
      const formData = new FormData();
      formData.append("userId", parseInt(localStorage.getItem("userId")));
      formData.append("title", document.getElementById("title").value);
      formData.append("text", document.getElementById("text").value);
      formData.append("painting", this.painting);
      formData.append("category", this.$refs.category.value);
      axios
        .post("http://localhost:3001/api/paintings", formData, {
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
