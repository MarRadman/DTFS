<template>
<main id="scroll-container">
    <!-- Simple input for filtering Images -->
    <input v-model="filterQuery" placeholder="filter helper" id="search" />
    <div class="filter">

    <!-- filtered choices -->
    <div v-for="(image, index) in FilteredAndriod" :key="index" class="mb-2">
    <b-card style="padding: 0; margin: 0;">
        <router-link v-if="image.link" :to="image.link">
            <img :src="getImageUrl(image.path)" alt="Image" class="mb-2" style="height: 20rem; width: 20rem; padding: 0;margin: 0; object-fit: cover;"/>
        </router-link>
            <p>{{ image.description }}</p>
        
    </b-card>
    </div>
</div>
</main>
</template>

<<<<<<<<<<<<<<<script>
export default {
data() {
return {
    Images: [
    { path: "src/assets/learning.jpg", description: "learning", link: "/learning" },
    { path: "src/assets/help 2.jpg", description: "Description 2", link: "/help" },
    { path: "src/assets/help 3.jpg", description: "Description 3", link: "/help" },
    { path: "src/assets/help 4.jpg", description: "Description 4", link: "/help" },
    { path: "src/assets/help 5.jpg", description: "Description 5", link: "/help" },
    { path: "src/assets/help 6.jpg", description: "Description 6", link: "/help" },
    { path: "src/assets/help 7.jpg", description: "Description 7", link: "/help" },
    { path: "src/assets/help 8.jpg", description: "Description 8",  link: "/help"},
    { path: "src/assets/help 9.jpg", description: "Description 9", link: "/help" },
    { path: "src/assets/help 10.jpg", description: "Description 10", link: "/help"},
    // lägg till mer bilder med information om behövs
    ],
    ImageUrls: {},
    filterQuery: '',
};
},
computed: {
// Image filterQuery
FilteredAndriod() {
    return this.Images.filter(image =>
    image.path.toLowerCase().includes(this.filterQuery.toLowerCase())
    );
},
},
created() {
this.setHardcodedImageUrls();
},
methods: {
setHardcodedImageUrls() {
    this.Images.forEach(image => {
    this.ImageUrls[image.path] = image.path;
    });
},
getImageUrl(imagePath) {
    return this.ImageUrls[imagePath] || '';
        },
    },
};
</script>




<style scoped>
    #scroll-container{
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
