<template>
  <div class="d-flex align-items-center shadow-sm bg-light">
    <img
      alt="photo de l'artiste LD en ange, avec des ailes de feutres"
      src="../assets/ange.jpg"
    />
    <img alt="dessin de sirène par LD" src="../assets/sirène.png" />

    <div class="d-flex justify-content-evenly container-fluid">
      <div class="col-md-8 d-flex align-items-center">
        <p class="h1">L' Atelier</p>
      </div>
      <div class="d-flex flex-column align-items-center">
        <a
          role="button"
          class="h1 text-dark text-decoration-none"
          @click="showArts = !showArts"
          >Arts</a
        >
        <a
          role="button"
          class="h1 text-dark text-decoration-none"
          @click="showServices = !showServices"
          >Vie</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
