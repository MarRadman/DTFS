<template>
  <nav class="navbar navbar-light fixed-top">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <h1>
      <router-link to="/" class="navbar-brand"
        >Digital Trygghet för Seniorer
      </router-link>
    </h1>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav" style="color: Black" font-weight="500">
        <li class="nav-item">
          <router-link
            to="/login"
            class="nav-link"
            style="color: Black"
            font-weight="500"
            >Login</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/member"
            class="nav-link"
            style="color: Black"
            font-weight="500"
            >Member</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/about"
            class="nav-link"
            style="color: Black"
            font-weight="500"
            >About</router-link
          >
        </li>
        <!-- <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown link
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavMenuComponent",
};
</script>
