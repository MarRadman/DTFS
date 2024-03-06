<template>
  <main id="scroll-container">
    <!-- Simple input for filtering Images -->
    <input v-model="filterQuery" placeholder="filter helper" id="search" />
    <div class="filter">
      <!-- filtered choices -->
      <div v-for="(image, index) in FilteredAndriod" :key="index" class="mb-2">
        <b-card style="padding: 0; margin: 0">
          <router-link v-if="image.link" :to="image.link">
            <img
              :src="getImageUrl(image.path)"
              alt="Image"
              class="mb-2"
              style="
                height: 15rem;
                width: 15rem;
                padding: 0;
                margin: 0;
                object-fit: cover;
              "
            />
          </router-link>
          <p>{{ image.description }}</p>
        </b-card>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      Images: [
        {
          path: "src/assets/navigate.jpg",
          description: "Navigate your android",
          link: "/Guide",
        },
        {
          path: "src/assets/StartupProblem.jpg",
          description: "Your Android dont startup?",
          link: "/StartupProblem",
        },
        {
          path: "src/assets/camera.jpg",
          description: "Use your phone camera like a pro",
          link: "/ProCamera",
        },
        {
          path: "src/assets/downloadapp.jpg",
          description: "Download an app through the Play Store",
          link: "/downloadapp", //Tillagt //Jonte
        },
        {
          path: "src/assets/Calender.jpg",
          description: "Calender step by step",
          link: "/Calender",
        },

        // lägg till mer bilder med information om behövs
      ],
      ImageUrls: {},
      filterQuery: "",
    };
  },
  computed: {
    // Image filterQuery
    FilteredAndriod() {
      return this.Images.filter((image) =>
        image.path.toLowerCase().includes(this.filterQuery.toLowerCase())
      );
    },
  },
  created() {
    this.setHardcodedImageUrls();
  },
  methods: {
    setHardcodedImageUrls() {
      this.Images.forEach((image) => {
        this.ImageUrls[image.path] = image.path;
      });
    },
    getImageUrl(imagePath) {
      return this.ImageUrls[imagePath] || "";
    },
  },
};
</script>

<style scoped>


#search{
  width: 100%;
  background-color: #B4CA7C;
  border-radius: 20px;
  text-align: center;
  color: black;
  border-style:groove;

}

  div{
    margin: 10px;
  }

#scroll-container {
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 100dvh;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

#scroll-container::-webkit-scrollbar {
  display: none;
}

@media screen and (min-width: 768px) {



  .filter {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
