<template>
  <div id="memberSpace" class="row">
    <div class="col">
      <h1 class="h1">Espace membres</h1>
      <br />
      <p>
        L'espace membres est dédié à tous les abonnés qui souhaiteraient aller plus loin
        dans la démarche artistique et l'imagination. Il n'est accessible que sur
        abonnement aux personnes majeures afin de protéger le jeune public, des images qui
        pourraient heurter leur sensibilité. En vous abonnant, vous permettez également à
        l'artiste de partager son temps, de continuer dans cette démarche de recherche et
        d'expression, ainsi que ces partages d'émotions sur "papier".
      </p>
      <br />
      <p class="h2">Page en construction - A venir bientôt</p>
      <router-link to="/LD-Workshop/Login">Accès administrateur du site</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: localStorage.getItem("token"),
      isAdmin: localStorage.getItem("isAdmin"),
    };
  },
};
</script>

<style></style>
