<template>
  <div id="contacts" class="row">
    <div class="col">
      <h1 class="h1">Contacts</h1>
      <br />
      <p class="mb-2">
        Pour toute demande d'informations, de devis, de tarifs, de commandes spéciales, de
        commandes de portraits, etc... n'hésitez pas à contacter les services, ou laisser
        un message afin d'obtenir une réponse dans les meilleurs délais.
      </p>
      <postContactForm></postContactForm>
    </div>
  </div>
</template>

<script>
import postContactForm from "../components/postContactForm.ce.vue";

export default {
  name: "Contacts",
  components: {
    postContactForm,
  },
  data() {
    return {
      token: localStorage.getItem("token"),
      user: {
        id: localStorage.getItem("userId"),
        isAdmin: localStorage.getItem("isAdmin"),
      },
    };
  },
};
</script>

<style></style>
