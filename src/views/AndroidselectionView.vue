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
                height: 20rem;
                width: 20rem;
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
          path: "src/assets/help 2.jpg",
          description: "Navigate youre android",
          link: "/Guide",
        },
        {
          path: "src/assets/help 3.jpg",
          description: "Your Android dont startup?",
          link: "/StartupProblem",
        },
        {
          path: "src/assets/camera.jpg",
          description: "Use your phone camera like a pro",
          link: "/ProCamera",
        },
        {
          path: "src/assets/help 5.jpg",
          description: "Download an app through the Play Store",
          link: "/downloadapp", //Tillagt //Jonte
        },
        {
          path: "src/assets/help 6.jpg",
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
</style>
