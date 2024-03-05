<template>
  <div class="d-flex flex-column flex-md-row">
    <b-card-group deck>
      <b-card class="mr-md-2 mb-md-0 mb-2 platform">
        <router-link to="SecView">
          <img
            src="../assets/Andriod.jpg"
            alt="android"
            style="width: 200px; height: 200px"
            class="mb-2"
          />
          <span
            class="platform-name"
            style="
              position: absolute;
              bottom: 0;
              right: 40%;
              transform: translateY(-50%);
              color: white;
              background-color: rgba(0, 0, 0, 0.5);
              padding: 5px;
              font-size: 20px;
              font-weight: bold;
            "
            >Android</span
          >
        </router-link>
      </b-card>
      <b-card class="mr-md-2 mb-md-0 mb-2 platform">
        <router-link to="/Quiz">
          <img
            src="../assets/macbook.jpg"
            alt="Mac"
            style="width: 200px; height: 200px"
            class="mb-2"
          />
          <span
            class="platform-name"
            style="
              position: absolute;
              bottom: 0;
              right: 40%;
              transform: translateY(-50%);
              color: white;
              background-color: rgba(0, 0, 0, 0.5);
              padding: 5px;
              font-size: 20px;
              font-weight: bold;
            "
            >Apple</span
          >
        </router-link>
      </b-card>
      <b-card class="platform">
        <router-link to="/Quiz">
          <img
            src="../assets/Windows2.jpg"
            alt="Windows"
            style="width: 200px; height: 200px"
            class="mb-2"
          />
          <span
            class="platform-name"
            style="
              position: absolute;
              bottom: 0;
              right: 40%;
              transform: translateY(-50%);
              color: white;
              background-color: rgba(0, 0, 0, 0.5);
              padding: 5px;
              font-size: 20px;
              font-weight: bold;
            "
            >Windows</span
          >
        </router-link>
      </b-card>
    </b-card-group>
  </div>
</template>

<style>
.platform:hover {
  transform: scale(1.1);
}

.platform-name {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.platform:hover .platform-name {
  opacity: 1;
}
</style>
