<template>
  <div id="arts" class="row">
    <div class="col">
      <h1 class="h1">Arts</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Arts",
  components: {},

  data() {
    return {
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
