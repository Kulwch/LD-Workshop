<template>
  <div id="galleryPhotos" class="row">
    <div class="col">
      <h1>Galerie photos</h1>
      <br />
      <p>
        Dans ces galeries, vous pourrez voyager au gré des albums, dans différents univers
        et ambiances capturés lors de mes reportages photos. N'hésitez pas à faire part de
        vos réactions.
      </p>
      <p>Pour voir en taille réelle une photo, cliquez dessus.</p>
    </div>
    <div class="row">
      <div
        class="col-sm col-md-5 mx-auto border border-dark rounded shadow mt-3"
        v-for="photo in photos.slice().reverse()"
        :key="photo.id"
      >
        <figure class="h-50 mw-75">
          <figcaption class="h4 text-danger mt-3">{{ photo.title }}</figcaption>
          <a :href="photo.photoUrl" target="_blank"
            ><img class="w-25 mt-4" :src="photo.photoUrl" alt="photo"
          /></a>
        </figure>
        <p class="mt-5">{{ photo.category }}</p>
        <p class="mt-5">{{ photo.text }}</p>
        <span v-if="user.isAdmin == true">
          <button
            class="mb-3 btn btn-secondary rounded"
            v-bind="photo"
            @click.prevent="deletePhoto(photo.id)"
          >
            Supprimer le photo
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "galleryPhotos",
  created() {
    axios
      .get("http://localhost:3001/api/photos", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + this.token,
        },
      })
      .then((res) => {
        this.photos = res.data.photos;
      })
      .catch((err) => {
        console.log(err + "Utilisateur inconnu ou Posts indisponibles");
      });
  },
  data() {
    return {
      photos: [],
      photo: {},
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
