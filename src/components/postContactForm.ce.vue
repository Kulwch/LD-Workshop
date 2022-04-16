<template>
  <div class="col col-md-8 mx-auto mt-2 mb-2 border border-dark rounded shadow bg-light">
    <h3 class="h5 mt-2">Formulaire de contact</h3>
    <form class="mt-3">
      <div class="mx-auto w-75 h-50 mb-3">
        <label for="text" class="form-label">Message :</label>
        <textarea
          class="form-control text"
          name="text"
          ref="text"
          placeholder="Saisissez ici votre message !"
        ></textarea>
        <label for="FirstName" class="form-label mt-2">Prénom :</label>
        <input
          class="form-control firstName w-50 mx-auto"
          name="FirstName"
          ref="FirstName"
          placeholder="Saisissez votre prénom"
        />
        <label for="LastName" class="form-label mt-2">Nom :</label>
        <input
          class="form-control lastName w-50 mx-auto"
          name="LastName"
          ref="LastName"
          placeholder="Saisissez votre nom "
        />
        <label for="Email" class="form-label mt-2">Email :</label>
        <input
          class="form-control email w-50 mx-auto"
          name="Email"
          ref="Email"
          placeholder="Saisissez votre email "
        />
        <label for="Phone" class="form-label mt-2">Téléphone (facultatif) :</label>
        <input
          class="form-control email w-50 mx-auto"
          name="Phone"
          ref="Phone"
          placeholder="Saisissez votre numéro de téléphone "
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary mb-3"
        @click="postContact()"
        ref="contact"
      >
        Envoyer
      </button>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "postContact",
  data() {
    return {
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),
      text: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    postContact($attrs) {
      axios
        .post("http://localhost:3001/api/contacts", {
          text: this.$refs.text.value,
          firstName: this.$refs.firstName.value,
          lastName: this.$refs.lastName.value,
          email: this.$refs.email.value,
          phone: this.$refs.phone.value,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then(() => this.$router.push("/contacts"));
    },
  },
};
</script>
<style></style>
