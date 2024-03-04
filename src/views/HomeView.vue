<template>
  <h1 style="font-weight: bold">Välj din plattform för lärande</h1>
  <div class="d-flex flex-column flex-md-row">
    <b-card class="mr-md-2 mb-md-0 mb-2">
      <router-link to="SecView">
        <img src="../assets/Andriod.jpg" alt="android" style="width: 200px; height: 200px;" class="mb-2" />
        <span style="
            position: absolute;
            bottom: 0;
            right: 40%;
            transform: translateY(-50%);
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 5px;
            font-size: 20px;
            font-weight: bold;
          ">Android</span>
      </router-link>
    </b-card>
    <b-card class="mr-md-2 mb-md-0 mb-2">
      <router-link to="Mac">
      <img src="../assets/macbook.jpg" alt="Mac" style="width: 200px; height: 200px;" class="mb-2" />
      <span style="
          position: absolute;
          bottom: 0;
          right: 40%;
          transform: translateY(-50%);
          color: white;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 5px;
          font-size: 20px;
          font-weight: bold;
        ">Apple</span>
        </router-link>
    </b-card>
    <b-card>
      <router-link to="Windows">
      <img src="../assets/Windows2.jpg" alt="Windows" style="width: 200px; height: 200px;" class="mb-2" />
      <span style="
          position: absolute;
          bottom: 0;
          right: 40%;
          transform: translateY(-50%);
          color: white;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 5px;
          font-size: 20p x;
          font-weight: bold;
          ">Windows</span>
          </router-link>
    </b-card>
  </div>
</template>

<script>
</script>
