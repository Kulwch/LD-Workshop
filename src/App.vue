<template>
  <div class="d-flex align-items-center shadow-sm bg-dark">
    <img
      class="d-none d-md-block"
      alt="photo de l'artiste LD en ange, avec des ailes de feutres"
      src="./assets/portrait.jpg"
    />
    <img alt="dessin de sirène par LD" src="./assets/sirène.png" />

    <div class="flex-column d-flex flex-md-row justify-content-md-evenly container-fluid">
      <div class="justify-content-center col-md-8 d-flex align-items-center">
        <p class="h1 text-white smallH1">L' Atelier</p>
      </div>
      <div
        class="flex-row justify-content-around d-flex flex-md-column align-items-center"
      >
        <a
          role="button"
          class="h1 text-white text-decoration-none"
          @mouseover="overHereActivated = true"
          @mouseleave="overHereActivated = false"
          @click="overHereActivated = true"
          >Arts</a
        >
        <a
          role="button"
          class="h1 text-white text-decoration-none"
          @mouseover="overThereActivated = true"
          @mouseleave="overThereActivated = false"
          @click="overThereActivated = true"
          >Vie</a
        >
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <!-- Sidebar showing on small screens -->
      <div
        id="smallScreensNav"
        class="d-block d-md-none nav-font align-items-center align-items-sm-start px-3 pt-2 w-25 bg-dark"
      >
        <button
          class="btn text-white px-0 align-middle"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <fa class="fa-xl" :icon="['fas', 'house']" />
        </button>
        <div
          class="offcanvas offcanvas-start w-50"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Navigation</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div id="smallScreensNavMenu">
              <div
                class="d-flex flex-column nav-font align-items-center align-items-sm-start px-3 pt-2 min-vh-100"
              >
                <router-link
                  to="/LD-Workshop/"
                  class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
                >
                  <span class="fs-4 text-dark">Accueil</span>
                </router-link>
                <ul
                  class="nav nav-pills flex-column align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li class="nav-item">
                    <button
                      data-bs-target="#submenu1"
                      data-bs-toggle="collapse"
                      class="nav-link text-dark px-0 align-middle"
                    >
                      <span
                        class="fs-4"
                        @mouseover="expandOnHover()"
                        @mouseleave="collapseOnLeave()"
                        >&Agrave; propos</span
                      >
                    </button>
                    <ul
                      class="collapse nav flex-column fs-4"
                      id="submenu1"
                      data-bs-parent="#menu"
                    >
                      <li class="w-100">
                        <router-link
                          to="/LD-Workshop/bio"
                          class="nav-link text-dark px-0"
                        >
                          <span class="">Bio</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link
                          to="/LD-Workshop/experiences"
                          class="nav-link text-dark px-0"
                        >
                          <span class="">Expériences</span>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      data-bs-target="#submenu2"
                      data-bs-toggle="collapse"
                      @click="this.$router.push({ path: '/LD-Workshop/gallery' })"
                      class="nav-link text-dark px-0 align-middle"
                    >
                      <i class="fs-4"></i>
                      <div :class="{ beating: overHereActivated }">
                        <span class="fs-4">Galerie</span>
                        <span v-if="overHereActivated" class="smallStyle"
                          >&nbsp Par ici !
                        </span>
                      </div>
                    </button>
                    <ul
                      class="collapse nav flex-column fs-4"
                      id="submenu2"
                      data-bs-parent="#menu"
                    >
                      <li class="w-100">
                        <router-link
                          to="/LD-Workshop/galleryDrawings"
                          class="nav-link text-dark px-0"
                        >
                          <span class="fs-4">Dessins</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link
                          to="/LD-Workshop/galleryPhotos"
                          class="nav-link text-dark px-0"
                        >
                          <span class="fs-4">Photos</span>
                        </router-link>
                      </li>
                      <li class="w-100">
                        <router-link
                          to="/LD-Workshop/galleryPaintings"
                          class="nav-link text-dark px-0"
                        >
                          <span class="fs-4">Peintures</span>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <button
                      data-bs-target="#submenu3"
                      data-bs-toggle="collapse"
                      @click="this.$router.push({ path: '/LD-Workshop/arts' })"
                      class="nav-link text-dark px-0 align-middle"
                    >
                      <i class="fs-4"></i>
                      <div :class="{ beating: overHereActivated }">
                        <span class="fs-4">Arts</span>
                        <span v-if="overHereActivated" class="smallStyle"
                          >&nbsp Par ici !
                        </span>
                      </div>
                    </button>
                    <ul
                      class="collapse nav flex-column fs-4"
                      id="submenu3"
                      data-bs-parent="#menu"
                    >
                      <li class="w-100">
                        <a href="#" class="nav-link text-dark px-0">
                          <span class="fs-4">Portraits</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="nav-link text-dark px-0">
                          <span class="fs-4">Oeuvres spéciales</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="nav-link text-dark px-0">
                          <span class="fs-4">Shooting</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="nav-link text-dark px-0">
                          <span class="fs-4">Boutique</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      data-bs-target="#submenu4"
                      data-bs-toggle="collapse"
                      @click="this.$router.push({ path: '/LD-Workshop/services' })"
                      class="nav-link text-dark px-0 align-middle"
                    >
                      <i class="fs-4 bi-bootstrap"></i>
                      <div :class="{ beating: overThereActivated }">
                        <span class="fs-4">Services</span>
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
                        <a href="#" class="nav-link text-dark px-0">
                          <span class="fs-4">Expérience</span></a
                        >
                      </li>
                      <li>
                        <a href="#" class="nav-link text-dark px-0">
                          <span class="fs-4">Services d'aides</span></a
                        >
                      </li>
                      <li class="w-100">
                        <a href="#" class="nav-link text-dark px-0">
                          <span class="fs-4">Planning</span></a
                        >
                      </li>
                      <li>
                        <a href="#" class="nav-link text-dark px-0">
                          <span class="fs-4">Paiement et CGV</span></a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link
                      to="/LD-Workshop/livreOr"
                      class="nav-link text-dark px-0 align-middle"
                    >
                      <i class="fs-4 bi-people"></i>
                      <span class="fs-4">Livre d'or</span>
                    </router-link>
                  </li>
                  <li>
                    <button
                      data-bs-target="#submenu5"
                      data-bs-toggle="collapse"
                      @click="this.$router.push({ path: '/LD-Workshop/memberSpace' })"
                      class="nav-link text-dark px-0 align-middle"
                    >
                      <span class="fs-4"
                        >Espace <br />
                        membres</span
                      >
                    </button>

                    <ul
                      class="collapse nav flex-column fs-4"
                      id="submenu5"
                      data-bs-parent="#menu"
                    >
                      <!--<li class="w-100">
                        <a href="#" class="nav-link text-dark px-0">
                          <span class="fs-4">Arts</span></a
                        >
                      </li>
                      <li>
                        <a href="#" class="nav-link text-dark px-0">
                          <span class="fs-4">Photos</span></a
                        >
                      </li>
                      <li>
                        <a href="#" class="nav-link text-dark px-0">
                          <span class="fs-4">Naturel and explicit</span></a
                        >
                      </li>
                      <li>
                        <a href="#" class="nav-link text-dark px-0">
                          <span class="fs-4">Abonnements</span></a
                        >
                      </li>
                      <li class="w-100">
                        <a href="#" class="nav-link text-dark px-0">
                          <span class="fs-4">CGV</span></a
                        >
                      </li>-->
                      <li>
                        <a href="#" class="nav-link text-dark px-0">
                          <span class="fs-4">Mot de l'artiste</span></a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link
                      to="/LD-Workshop/contacts"
                      class="nav-link text-dark px-0 align-middle"
                    >
                      <i class="fs-4 bi-people"></i>
                      <span class="fs-4">Contacts</span>
                    </router-link>
                  </li>
                  <li>
                    <span class="" role="img" aria-label="lien vers Instagram"
                      ><a
                        href="https://www.instagram.com/lilith154/"
                        target="_blank"
                        class="link-light align-middle"
                        ><fa class="text-dark" :icon="['fab', 'instagram']" /></a
                    ></span>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-none d-md-block col-auto col-md-2 col-xl-2 pl-sm-2 bg-dark">
        <!-- Sidebar displaying on screens > 768px -->
        <div
          class="d-flex flex-column nav-font align-items-center align-items-sm-start px-3 pt-2 min-vh-100"
        >
          <router-link
            to="/LD-Workshop/"
            class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
          >
            <span class="fs-6 d-none d-sm-inline text-white">Accueil</span>
          </router-link>
          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li class="nav-item">
              <button
                data-bs-target="#submenu1"
                data-bs-toggle="collapse"
                class="nav-link text-white px-0 align-middle"
              >
                <span
                  class="ms-1 d-none d-sm-inline"
                  @mouseover="expandOnHover()"
                  @mouseleave="collapseOnLeave()"
                  >&Agrave; propos</span
                >
              </button>
              <ul
                class="collapse nav flex-column ms-1"
                id="submenu1"
                data-bs-parent="#menu"
              >
                <li class="w-100">
                  <router-link to="/LD-Workshop/bio" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Bio</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/LD-Workshop/experiences"
                    class="nav-link text-white px-0"
                  >
                    <span class="d-none d-sm-inline">Expériences</span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <button
                data-bs-target="#submenu2"
                data-bs-toggle="collapse"
                @click="this.$router.push({ path: '/LD-Workshop/gallery' })"
                class="nav-link text-white px-0 align-middle"
              >
                <i class="fs-4"></i>
                <div :class="{ beating: overHereActivated }">
                  <span class="ms-1 d-none d-sm-inline">Galerie</span>
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
                  <router-link
                    to="/LD-Workshop/galleryDrawings"
                    class="nav-link text-white px-0"
                  >
                    <span class="d-none d-sm-inline">Dessins</span>
                  </router-link>
                </li>
                <li class="w-100">
                  <router-link
                    to="/LD-Workshop/galleryPhotos"
                    class="nav-link text-white px-0"
                  >
                    <span class="d-none d-sm-inline">Photos</span>
                  </router-link>
                </li>
                <li class="w-100">
                  <router-link
                    to="/LD-Workshop/galleryPaintings"
                    class="nav-link text-white px-0"
                  >
                    <span class="d-none d-sm-inline">Peintures</span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <button
                data-bs-target="#submenu3"
                data-bs-toggle="collapse"
                @click="this.$router.push({ path: '/LD-Workshop/arts' })"
                class="nav-link text-white px-0 align-middle"
              >
                <i class="fs-4"></i>
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
                    <span class="d-none d-sm-inline">Portraits</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Oeuvres spéciales</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Shooting</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Boutique</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                data-bs-target="#submenu4"
                data-bs-toggle="collapse"
                @click="this.$router.push({ path: '/LD-Workshop/services' })"
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
                    <span class="d-none d-sm-inline">Expérience</span></a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Services d'aides</span></a
                  >
                </li>
                <li class="w-100">
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Planning</span></a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Paiement et CGV</span></a
                  >
                </li>
              </ul>
            </li>
            <li>
              <router-link
                to="/LD-Workshop/livreOr"
                class="nav-link text-white px-0 align-middle"
              >
                <i class="fs-4 bi-people"></i>
                <span class="ms-1 d-none d-sm-inline">Livre d'or</span>
              </router-link>
            </li>
            <li>
              <button
                data-bs-target="#submenu5"
                data-bs-toggle="collapse"
                @click="this.$router.push({ path: '/LD-Workshop/memberSpace' })"
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
                <!--<li class="w-100">
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Arts</span></a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Photos</span></a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Naturel and explicit</span></a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Abonnements</span></a
                  >
                </li>
                <li class="w-100">
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">CGV</span></a
                  >
                </li>-->
                <li>
                  <a href="#" class="nav-link text-white px-0">
                    <span class="d-none d-sm-inline">Mot de l'artiste</span></a
                  >
                </li>
                <li>
                  <router-link
                    to="/LD-Workshop/post"
                    class="nav-link text-white px-0 align-middle"
                  >
                    <i class="fs-4 bi-people"></i>
                    <span class="ms-1 d-none d-sm-inline">Publier un média</span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link
                to="/LD-Workshop/contacts"
                class="nav-link text-white px-0 align-middle"
              >
                <i class="fs-4 bi-people"></i>
                <span class="ms-1 d-none d-sm-inline">Contacts</span>
              </router-link>
            </li>
            <li>
              <span
                class="icon-md mobile-tap fa-xl"
                role="img"
                aria-label="lien vers Instagram"
                ><a
                  href="https://www.instagram.com/lilith154/"
                  target="_blank"
                  class="link-light align-middle"
                  ><fa :icon="['fab', 'instagram']" /></a
              ></span>
            </li>
          </ul>
          <hr />
        </div>
      </div>
      <div class="col py-3"><router-view /></div>
    </div>
  </div>
  <div id="emotion" class="aside-stamp py-2 px-3 border bg-light">
    <aside>
      <p class="h3">Générateur d'émotions</p>
    </aside>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    expandOnHover: function () {
      //
    },
    collapseOnLeave: function () {
      //
    },
  },

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

@media screen and (max-width: 767px) {
  .h1 {
    font-family: "Corinthia", cursive;
    font-size: 2.5em !important;
    font-weight: bold !important;
  }

  .nav-link {
    padding: 0 !important;
  }

  .btn {
    font-size: 1.25em !important;
  }

  #emotion {
    display: none !important;
  }
}

@media screen and (min-width: 768px) {
  .h1 {
    font-family: "Corinthia", cursive;
    font-size: 4.5em !important;
    font-weight: bold !important;
  }
}

.h2,
.h4,
.h5,
.form-label,
p {
  font-family: "Sedgwick Ave", cursive;
}

.h3 {
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

a,
a:visited {
  text-decoration: none !important;
}
</style>
