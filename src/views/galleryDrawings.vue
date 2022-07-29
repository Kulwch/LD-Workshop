<template>
  <div id="galleryDrawings" class="row">
    <div class="col">
      <h1>Galerie dessins</h1>
      <br />
      <p>
        Comme l'art est une partie essentielle de la vie, vous pourrez trouver dans cette
        page un morceau fondamental de la vie de l'artiste, des créations intemporelles et
        pleines de passion.
      </p>
      <p>Pour voir en taille réelle un dessin, cliquez dessus.</p>
      <div
        class="col-md-10 mx-auto border border-dark rounded shadow mt-3"
        v-for="drawing in drawings.slice().reverse()"
        :key="drawing.id"
      >
        <figure class="h-50 mw-75">
          <figcaption class="h4 text-danger mt-2">{{ drawing.title }}</figcaption>
          <a :href="drawing.drawingUrl" target="_blank"
            ><img class="w-25" :src="drawing.drawingUrl" alt="drawing"
          /></a>
        </figure>
        <p>{{ drawing.text }}</p>
        <span v-if="user.isAdmin == true">
          <button
            class="mb-3 btn btn-secondary rounded"
            v-bind="drawing"
            @click.prevent="deletePhoto(drawing.id)"
          >
            Supprimer le dessin
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "galleryDrawings",
  created() {
    axios
      .get("http://localhost:3001/api/drawings", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + this.token,
        },
      })
      .then((res) => {
        this.drawings = res.data.drawings;
      })
      .catch((err) => {
        console.log(err + "Utilisateur inconnu ou Posts indisponibles");
      });
  },
  data() {
    return {
      drawings: [],
      drawing: {},
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
