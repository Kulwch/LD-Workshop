<template>
  <div id="memberSpace" class="row">
    <div class="col">
      <h1>Espace membres</h1>
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
      <router-link to="/login" v-if="!token"
        >Se connecter pour accéder à l'espace membres</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: localStorage.getItem("token"),
    };
  },
};
</script>

<style></style>
