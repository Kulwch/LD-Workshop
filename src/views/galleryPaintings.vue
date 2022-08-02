<template>
  <div id="galleryPaintings" class="row">
    <div class="col">
      <h1>Galerie peintures</h1>
      <br />
      <p>
        Comme l'art est une partie essentielle de la vie, vous pourrez trouver dans cette
        page un morceau fondamental de la vie de l'artiste, des créations intemporelles et
        pleines de passion.
      </p>
      <p>Pour voir en taille réelle une peinture, cliquez dessus.</p>
    </div>
    <div class="row">
      <div
        class="col-md-5 mx-auto border border-dark rounded shadow mt-3"
        v-for="painting in paintings.slice().reverse()"
        :key="painting.id"
      >
        <figure class="h-50 mw-75">
          <figcaption class="h4 text-danger mt-3">{{ painting.title }}</figcaption>
          <a :href="painting.paintingUrl" target="_blank"
            ><img class="w-25 mt-4" :src="painting.paintingUrl" alt="painting"
          /></a>
        </figure>
        <p class="mt-5">{{ painting.category }}</p>
        <p class="mt-5">{{ painting.text }}</p>
        <span v-if="user.isAdmin == true">
          <button
            class="mb-3 btn btn-secondary rounded"
            v-bind="painting"
            @click.prevent="deletePainting(painting.id)"
          >
            Supprimer la peinture
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "galleryPaintings",
  created() {
    axios
      .get("http://localhost:3001/api/paintings", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + this.token,
        },
      })
      .then((res) => {
        this.paintings = res.data.paintings;
      })
      .catch((err) => {
        console.log(err + "Utilisateur inconnu ou Posts indisponibles");
      });
  },
  data() {
    return {
      paintings: [],
      painting: {},
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
