<template>

<div class="container">
  <!--4 groupdecks. 2 card i varje.-->
  <!--Jag vill bara visa 2 groups i taget.-->
  <h1 id="heading1">Lär dig hantera Kalender</h1>
  <b-card-group v-for="(group, index) in cardGroups"  deck class="mb-3">
    <b-card v-for="(card, cardIndex) in group" class="border-3 mb-3" v-show="activeGroup === index">
      <img class="card-image" :src="card.image" alt="Bilder för cardtitle.">
      <h3 id="heading">{{ card.title }}</h3>
      <b-card-text> {{ card.description }} </b-card-text>
    </b-card>
  </b-card-group>

  <!--Två stycken knappar som ska navigera fram och tillbaka.-->
 <div style="display:flex; justify-content: end;">
  <b-button variant="success" @click="previousGroup" v-show="activeGroup > 0">Gå tillbaka</b-button>
  <b-button variant="success" @click="nextGroup" style="margin-left: 10px;" v-show="activeGroup < cardGroups.length -1">Nästa Steg</b-button>
 </div>

 <b-card class="m-3 border-3 border-success">
    <div>
      <h2 class="h2text">Recensioner för denna guide</h2>
      <ul class="list-group list-group-flush">
        <li v-for="review in reviews" class="list-group-item py-3">
          <p class="ptag">{{ review }}</p>
        </li>
      </ul>
    </div>
  </b-card>

  <b-card class="card-container m-2 border-3 border-success bg-secondary text-white" v-if="showReview" style="min-height: 200px;">
    <div class="recension d-flex align-items-center justify-content-center">
      <div class="text-center d-flex flex-column justify-content-between">
        <h2 class="h2text">Lämna gärna en recension</h2>
        <div class="d-flex justify-content-center">
        <input type="text" v-model="newReview" class="form-control m-4" placeholder="Skriv din recension här...">   
        </div>
        <p class="ptag2" v-if="feedback">Tack för feedback!</p>
        <b-button variant="success" class="align-self-end mt-5" @click="addReview">Skicka in</b-button>
      </div>
    </div>
  </b-card>
</div>


</template>


<script>

export default{
   methods:{
    addReview(){
        if(this.newReview !== ""){
          this.reviews.push(this.newReview);
          this.newReview = "",
          this.feedback = true
        setTimeout(() => {
          this.showReview = false;
          this.feedback = ""
        }, 10000)
        } else{
          console.log("Kollar att det inte går att skicka ett tomt meddelande")
          return;
        }
      },
    nextGroup(){
        // Skriver -1 , därför att i en array börjar man räkna från 0. Så det 4 finns 4 stycken, så blir det 0.1.2.3. Så genom att subtrahera från man indexet för det sista i elementet i arrayen.
        if(this.activeGroup < this.cardGroups.length - 1){
          this.activeGroup++;
        }
        console.log('Nästa steg active group: ', this.activeGroup)
        console.log('Nästa steg card group längd:', this.cardGroups.length)
          // Samma här, här får man den sista elementen i arrayen, och jag vill kunna visa min recension när man kommer till sista sidan.
          if (this.activeGroup === this.cardGroups.length - 1) {
          this.showReview = true;
      }
      }, 
      previousGroup(){
        if(this.activeGroup > 0){
          this.activeGroup--;
          this.showReview = false;
        }
        console.log('Tillbaka steg active group:', this.activeGroup)
        console.log('Tillbaka steg card group längd:', this.cardGroups.length)
      },
   },

   data(){
      return{

         showReview: false,
         feedback: false,
         newReview: "",
         reviews: [
          'Helt okej',
          'Vore enklare med rörliga bilder',
          'Enkel guide att följa'
         ],
         activeGroup: 0,
            cardGroups: [
              [
                {title: 'Steg 1',
                 description: 'Öppna kalender: För att börja använda kalender, öppna den genom att klicka på kalenderapp på din enheter.', 
                 image: "./src/assets/CalenderPics/View.jpg" },

                {title: 'Steg 2',
                 description: 'Se månadsvyn: När kalendern är öppen kommer du se månadsvyn. Det är en översikt över den aktuella månaden med datum markerade.',
                  image: "./src/assets/CalenderPics/Currentmonth.jpg"}
              ],
              [
                {title: 'Steg 3',
                 description: 'Navigera genom månaderna: För att se tidigare eller kommande månader, använda navigeringsknapparna eller svep åt vänster eller höger på skärmen beroende på din enhet.', 
                 image: "./src/assets/CalenderPics/Swipemonth.jpg"},

                {title: 'Steg 4', 
                description: 'Visa år, månad, vecka, dag: Kalendern visar vanligtvis aktuellt år och månad. För att visa specifika detaljer som veckodag eller enskild dag, klicka på det relevanta datumet.', 
                image: "./src/assets/CalenderPics/View.jpg"}
              ],
              [
                {title: 'Steg 5', 
                description: 'Skapa en händelse: För att lägga till en händelse i kalendern, klicka på knappen "Skapa händelse" eller liknande, och fyll i informationen som du vill.', 
                image: "./src/assets/CalenderPics/Createevent.jpg"},

                {title: 'Steg 6', 
                description: 'Visa påminnelse: När du skapar en händelse, har du möjlighet att ställa in påminnelse. Kalender kommer ge dig att meddelande när det är dags för händelse genom en påminnelse, via notifikation.', 
                image: "./src/assets/CalenderPics/Setreminder.jpg"}
              ],
              [
                {title: 'Steg 7',
                 description: 'Redigera eller ta bort: För att redigera eller ta bort händelse. Tryck på "pennan" och "papperskorg" längst ner i din händelse.', 
                 image: "./src/assets/CalenderPics/Editdel.jpg"},
                 
                {title: 'Steg 8', 
                description: 'Stäng ner: För att enkelt stänga ner kalenderappen, tryck på hemknappen på din enhet.', 
                image: "./src/assets/CalenderPics/Returntoview.jpg"} 
              ]
            ]
      }
   }
}

</script>

<style scoped>

.card-image{
  width: 250px;
  min-height: 500px;
  border-radius: 10px;
}
.container {
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   background-color: #8ca388; /* Bakgrundsfärg */
   padding: 10px;
   margin: 10px;
   border-radius: 10px;
  }
  .h2text{
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
    
  }
  .ptag{
    font-size: 1.1rem;
    font-family: Arial, Helvetica, sans-serif;
  }
  .ptag2{
    font-size: 1.3rem;
    font-style: oblique;
  }

  #heading{
    font-size: 2.5rem;
    font-style: italic;
  }
  #heading1{
    color:white;
    margin-top: 10px;
  }
</style>