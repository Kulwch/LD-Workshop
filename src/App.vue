<template>
  <!--<bannerSmall></bannerSmall>-->
  <div class="d-flex align-items-center shadow-sm bg-dark">
    <img
      alt="photo de l'artiste LD en ange, avec des ailes de feutres"
      src="./assets/portrait.jpg"
    />
    <img alt="dessin de sirène par LD" src="./assets/sirène.png" />

    <div class="d-flex justify-content-evenly container-fluid">
      <div class="col-md-8 d-flex align-items-center">
        <p class="h1 text-white">L' Atelier</p>
      </div>
      <div class="d-flex flex-column align-items-center">
        <a
          role="button"
          class="h1 text-white text-decoration-none"
          @click="overHereActivated = true"
          >d ' Arts</a
        >
        <a
          role="button"
          class="h1 text-white text-decoration-none"
          @click="overThereActivated = true"
          >de &nbsp Vie</a
        >
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-2 col-xl-2 pl-sm-2 bg-dark">
        <div
          class="d-flex flex-column nav-font align-items-center align-items-sm-start px-3 pt-2 min-vh-100"
        >
          <router-link
            to="/LD-Workshop"
            class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
          >
            <span class="fs-6 d-none d-sm-inline text-white">Navigation</span>
          </router-link>
          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li class="nav-item">
              <button
                data-bs-target="#submenu1"
                data-bs-toggle="collapse"
                @click="this.$router.push({ path: '/about' })"
                class="nav-link text-white px-0 align-middle"
              >
                <span class="ms-1 d-none d-sm-inline">A propos</span>
              </button>
              <ul
                class="collapse nav flex-column ms-1"
                id="submenu1"
                data-bs-parent="#menu"
              >
                <li class="w-100">
                  <router-link to="/bio" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Bio</span> 1
                  </router-link>
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Expériences</span> 2
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                data-bs-target="#submenu2"
                data-bs-toggle="collapse"
                @click="this.$router.push({ path: '/galerie' })"
                class="nav-link text-white px-0 align-middle"
              >
                <i class="fs-4 bi-speedometer2"></i>
                <div :class="{ beating: overHereActivated }">
                  <span class="ms-1 d-none d-sm-inline animated">Galerie</span>
                  <span v-if="overHereActivated" class="smallStyle"
                    >&nbsp Par ici !
                  </span>
                </div>
              </button>
              <ul
                class="collapse nav flex-column ms-1"
                id="submenu2"
                data-bs-parent="#menu"
              >
                <li class="w-100">
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Dessins</span> 1
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Photos</span> 2
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <button
                data-bs-target="#submenu3"
                data-bs-toggle="collapse"
                @click="this.$router.push({ path: '/arts' })"
                class="nav-link text-white px-0 align-middle"
              >
                <i class="fs-4 bi-house"></i>
                <div :class="{ beating: overHereActivated }">
                  <span class="ms-1 d-none d-sm-inline">Arts</span>
                  <span v-if="overHereActivated" class="smallStyle"
                    >&nbsp Par ici !
                  </span>
                </div>
              </button>
              <ul
                class="collapse nav flex-column ms-1"
                id="submenu3"
                data-bs-parent="#menu"
              >
                <li class="w-100">
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Portraits</span> 1
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Oeuvres spéciales</span> 2
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Shooting</span> 3
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Boutique</span> 4
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                data-bs-target="#submenu4"
                data-bs-toggle="collapse"
                @click="this.$router.push({ path: '/services' })"
                class="nav-link text-white px-0 align-middle"
              >
                <i class="fs-4 bi-bootstrap"></i>
                <div :class="{ beating: overThereActivated }">
                  <span class="ms-1 d-none d-sm-inline">Services</span>
                  <span v-if="overThereActivated" class="smallStyle"
                    >&nbsp Par là !
                  </span>
                </div>
              </button>
              <ul
                class="collapse nav flex-column ms-1"
                id="submenu4"
                data-bs-parent="#menu"
              >
                <li class="w-100">
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Expérience</span> 1</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Services d'aides</span> 2</a
                  >
                </li>
                <li class="w-100">
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Planning</span> 3</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Paiement et CGV</span> 4</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/livreOr" class="nav-link text-white px-0 align-middle">
                <i class="fs-4 bi-people"></i>
                <span class="ms-1 d-none d-sm-inline">Livre d'or</span>
              </router-link>
            </li>
            <li>
              <button
                data-bs-target="#submenu5"
                data-bs-toggle="collapse"
                @click="this.$router.push({ path: '/memberspace' })"
                class="nav-link text-white px-0 align-middle"
              >
                <span class="ms-1 d-none d-sm-inline"
                  >Espace <br />
                  membres</span
                >
              </button>

              <ul
                class="collapse nav flex-column ms-1"
                id="submenu5"
                data-bs-parent="#menu"
              >
                <li class="w-100">
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Arts</span> 1</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Photos</span> 2</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Naturel and explicit</span> 3</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Abonnements</span> 4</a
                  >
                </li>
                <li class="w-100">
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">CGV</span> 1</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Mot de l'artiste</span> 2</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/contacts" class="nav-link text-white px-0 align-middle">
                <i class="fs-4 bi-people"></i>
                <span class="ms-1 d-none d-sm-inline">Contacts</span>
              </router-link>
            </li>
          </ul>
          <hr />
        </div>
      </div>
      <div class="col py-3"><router-view /></div>
    </div>
  </div>
  <div class="aside-stamp py-2 px-3 border bg-light">
    <aside>
      <p class="h2">Générateur d'émotions</p>
    </aside>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      overHereActivated: false,
      overThereActivated: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.aside-stamp {
  position: fixed;
  bottom: 0px;
  right: 0px;
}

.h1 {
  font-family: "Corinthia", cursive;
  font-size: 4.5em !important;
  font-weight: bold !important;
}

.h2 {
  font-family: "Sacramento", cursive;
  font-weight: bold !important;
}

.nav-font {
  font-family: "Sedgwick Ave", sans-serif;
  font-size: 1.5em;
}

.beating {
  animation: 1.5s ease 0s beat;
}
@keyframes beat {
  0%,
  50%,
  100% {
    transform: scale(1, 1);
  }
  30%,
  80% {
    transform: scale(0.92, 0.95);
  }
}

.smallStyle {
  font-size: 0.7em !important;
  font-family: cursive;
}
</style>
