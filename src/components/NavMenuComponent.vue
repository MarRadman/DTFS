<template>
  <nav class="navbar navbar-light fixed-top">
    <div id="navBtn_Title">
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
    <router-link to="/" class="navbar-brand mx-auto">
      <h1 id="headTitle">
        Digital Trygghet för Seniorer
      </h1>
    </router-link>
  </div>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav" style="color: Black" font-weight="500">
        <li class="nav-item">
          <router-link
            to="/login"
            class="nav-link"
            style="color: Black"
            font-weight="500"
            >Logga in</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/member"
            class="nav-link"
            style="color: Black"
            font-weight="500"
            >Medlem</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/about"
            class="nav-link"
            style="color: Black"
            font-weight="500"
            >Om</router-link
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
