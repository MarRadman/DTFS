<<<<<<< HEAD
<template></template>

<Script></Script>
=======
<template>
<main>
    <!-- Simple input for filtering Images -->
    <input v-model="filterQuery" placeholder="filter helper" />
    <div class="filter">
    <!-- filtered choices -->   
    <div v-for="(imageId) in FilteredAndriod" class="mb-2">
        <dd><img :src="getImageUrl(imageId)" alt="Image" class="mb-2" style="height: 20rem; width: 20rem;"/></dd>
    </div>
    </div>
    <!-- Router link to navigate to another page -->
    <router-link to="/" class="link">Home</router-link>
</main>
</template>

<script>
export default {
data() {
    return {
    
    Images: [
    "laptop-computer-beside-coffee-mug-j4uuKnN43_M",
    "turned-on-acer-laptop-on-table-near-cup-zwsHjakE_iI",
    "turned-off-macbook-pro-beside-white-ceramic-mug-filled-with-coffee-aOC7TSLb1o8",
    "laptop-computer-beside-coffee-mug-j4uuKnN43_M",
    "turned-on-acer-laptop-on-table-near-cup-zwsHjakE_iI",
    "turned-off-macbook-pro-beside-white-ceramic-mug-filled-with-coffee-aOC7TSLb1o8",
    "laptop-computer-beside-coffee-mug-j4uuKnN43_M",
    "turned-on-acer-laptop-on-table-near-cup-zwsHjakE_iI",
    "turned-off-macbook-pro-beside-white-ceramic-mug-filled-with-coffee-aOC7TSLb1o8",
    "laptop-computer-beside-coffee-mug-j4uuKnN43_M",
    
    ],
    ImageUrls: {},
    
    filterQuery: '',
    };
},
computed: {
    // Image IDs  filterQuery
    FilteredAndriod() {
    return this.Images.filter(imageId =>
        imageId.toLowerCase().includes(this.filterQuery.toLowerCase())
    );
    },
},
created() {
    // Fetch image URLs
    this.fetchImageUrls();
},
methods: {
    // Fetch image URLs foreach
    fetchImageUrls() {
    this.Images.forEach(imageId => {
        fetch(`https://source.unsplash.com/${imageId}/800x600`)
        .then(response => response.url)
        .then(url => {
            this.ImageUrls[imageId] = url;
        })
        .catch(error => {
            console.error(`Error fetching image ${imageId}:`, error);
        });
    });
    },
    
    getImageUrl(imageId) {
    return this.ImageUrls[imageId] || '';
    },
},  
};
</script>

<style>
/* Add your styling here */
</style>
>>>>>>> 11302cf669cf99395dac318a711cf8082de4ddcd
