<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-2 col-xl-2 pl-sm-2 bg-light">
        <div
          class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100"
        >
          <a
            href="/"
            class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
          >
            <span class="fs-5 d-none d-sm-inline text-dark">Navigation</span>
          </a>
          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li class="nav-item">
              <a
                href="#submenu1"
                data-bs-toggle="collapse"
                class="nav-link text-dark px-0 align-middle"
              >
                <i class="fs-4 bi-house"></i>
                <span class="ms-1 d-none d-sm-inline">A propos</span>
              </a>
              <ul
                class="collapse show nav flex-column ms-1"
                id="submenu1"
                data-bs-parent="#menu"
              >
                <li class="w-100">
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Bio</span> 1
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Photos</span> 2
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Equilibrée et intense</span> 3
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#submenu2"
                data-bs-toggle="collapse"
                class="nav-link text-dark px-0 align-middle"
              >
                <i class="fs-4 bi-speedometer2"></i>
                <span class="ms-1 d-none d-sm-inline">Galerie</span>
              </a>
              <ul
                class="collapse show nav flex-column ms-1"
                id="submenu2"
                data-bs-parent="#menu"
              >
                <li class="w-100">
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Photos</span> 1
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Dessin</span> 2
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item" v-if="showArts">
              <a
                href="#submenu3"
                data-bs-toggle="collapse"
                class="nav-link text-dark px-0 align-middle"
              >
                <i class="fs-4 bi-house"></i>
                <span class="ms-1 d-none d-sm-inline">Arts</span>
              </a>
              <ul
                class="collapse show nav flex-column ms-1"
                id="submenu3"
                data-bs-parent="#menu"
              >
                <li class="w-100">
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Expérience</span> 1
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Portraits</span> 2
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Oeuvres spéciales</span> 3
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Shooting</span> 4
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Boutique</span> 5
                  </a>
                </li>
              </ul>
            </li>
            <li v-if="showServices">
              <a
                href="#submenu4"
                data-bs-toggle="collapse"
                class="nav-link text-dark px-0 align-middle"
              >
                <i class="fs-4 bi-bootstrap"></i>
                <span class="ms-1 d-none d-sm-inline">Services</span></a
              >
              <ul
                class="collapse nav flex-column ms-1"
                id="submenu4"
                data-bs-parent="#menu"
              >
                <li class="w-100">
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Expérience</span> 1</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Services d'aides</span> 2</a
                  >
                </li>
                <li class="w-100">
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Planning</span> 3</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Paiement et CGV</span> 4</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="nav-link text-dark px-0 align-middle">
                <i class="fs-4 bi-people"></i>
                <span class="ms-1 d-none d-sm-inline">Livre d'or</span>
              </a>
            </li>
            <li>
              <a
                href="#submenu5"
                data-bs-toggle="collapse"
                class="nav-link text-dark px-0 align-middle"
              >
                <i class="fs-4 bi-grid"></i>
                <span class="ms-1 d-none d-sm-inline"
                  >Espace <br />
                  membres</span
                >
              </a>
              <ul
                class="collapse nav flex-column ms-1"
                id="submenu5"
                data-bs-parent="#menu"
              >
                <li class="w-100">
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Arts</span> 1</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Photos</span> 2</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Naturel and explicit</span> 3</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Abonnements</span> 4</a
                  >
                </li>
                <li class="w-100">
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">CGV</span> 1</a
                  >
                </li>
                <li>
                  <a href="#" class="nav-link text-dark px-0">
                    <span class="d-none d-sm-inline">Mot de l'artiste</span> 2</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="nav-link text-dark px-0 align-middle">
                <i class="fs-4 bi-people"></i>
                <span class="ms-1 d-none d-sm-inline">Contacts</span>
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
      <div class="col py-3"><router-view /></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showArts: true,
      showServices: true,
    };
  },
};
</script>

<style></style>
