<template>
  <div class="container">
    <!--4 groupdecks. 2 card i varje.-->
    <!--Jag vill bara visa 2 groups i taget.-->
    <h1 id="heading1">Lär dig hantera Kalender</h1>
    <b-card-group v-for="(group, index) in cardGroups" deck class="mb-3">
      <b-card
        v-for="(card, cardIndex) in group"
        class="border-3 mb-3"
        v-show="activeGroup === index"
      >
        <img class="card-image" :src="card.image" alt="Bilder för cardtitle." />
        <h3 id="heading">{{ card.title }}</h3>
        <b-card-text> {{ card.description }} </b-card-text>
      </b-card>
    </b-card-group>

    <!--Två stycken knappar som ska navigera fram och tillbaka.-->
    <div style="display: flex; justify-content: end">
      <b-button
        variant="success"
        @click="previousGroup"
        v-show="activeGroup > 0"
        >Gå tillbaka</b-button
      >
      <b-button
        variant="success"
        @click="nextGroup"
        style="margin-left: 10px"
        v-show="activeGroup < cardGroups.length - 1"
        >Nästa Steg</b-button
      >
    </div>

    <div class="recension" v-if="showReview">
      <h2>Lämna gärna en recension</h2>
      <input type="text" />
      <button>Skicka in</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextGroup() {
      // Skriver -1 , därför att i en array börjar man räkna från 0. Så det 4 finns 4 stycken, så blir det 0.1.2.3. Så genom att subtrahera från man indexet för det sista i elementet i arrayen.
      if (this.activeGroup < this.cardGroups.length - 1) {
        this.activeGroup++;
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
    },
    previousGroup() {
      if (this.activeGroup > 0) {
        this.activeGroup--;
        this.showReview = false;
      }
      console.log("Tillbaka steg active group:", this.activeGroup);
      console.log("Tillbaka steg card group längd:", this.cardGroups.length);
    },
  },

  data() {
    return {
      activeGroup: 0,
      cardGroups: [
        [
          {
            title: "Steg 1",
            description:
              "Öppna kalender: För att börja använda kalender, öppna den genom att klicka på kalenderapp på din enheter.",
            image:
              "../Stepbystep/Android/views/src/assets/CalenderPics/View.jpg",
          },

          {
            title: "Steg 2",
            description:
              "Se månadsvyn: När kalendern är öppen kommer du se månadsvyn. Det är en översikt över den aktuella månaden med datum markerade.",
            image:
              "../Stepbystep/Android/views/src/assets/CalenderPics/Currentmonth.jpg",
          },
        ],
        [
          {
            title: "Steg 3",
            description:
              "Navigera genom månaderna: För att se tidigare eller kommande månader, använda navigeringsknapparna eller svep åt vänster eller höger på skärmen beroende på din enhet.",
            image:
              "../Stepbystep/Android/views/src/assets/CalenderPics/Swipemonth.jpg",
          },

          {
            title: "Steg 4",
            description:
              "Visa år, månad, vecka, dag: Kalendern visar vanligtvis aktuellt år och månad. För att visa specifika detaljer som veckodag eller enskild dag, klicka på det relevanta datumet.",
            image:
              "../Stepbystep/Android/views/src/assets/CalenderPics/View.jpg",
          },
        ],
        [
          {
            title: "Steg 5",
            description:
              'Skapa en händelse: För att lägga till en händelse i kalendern, klicka på knappen "Skapa händelse" eller liknande, och fyll i informationen som du vill.',
            image:
              "../Stepbystep/Android/views/src/assets/CalenderPics/Createevent.jpg",
          },

          {
            title: "Steg 6",
            description:
              "Visa påminnelse: När du skapar en händelse, har du möjlighet att ställa in påminnelse. Kalender kommer ge dig att meddelande när det är dags för händelse genom en påminnelse, via notifikation.",
            image:
              "../Stepbystep/Android/views/src/assets/CalenderPics/Setreminder.jpg",
          },
        ],
        [
          {
            title: "Steg 7",
            description:
              'Redigera eller ta bort: För att redigera eller ta bort händelse. Tryck på "pennan" och "papperskorg" längst ner i din händelse.',
            image:
              "../Stepbystep/Android/views/src/assets/CalenderPics/Editdel.jpg",
          },

          {
            title: "Steg 8",
            description:
              "Stäng ner: För att enkelt stänga ner kalenderappen, tryck på hemknappen på din enhet.",
            image:
              "../Stepbystep/Android/views/src/assets/CalenderPics/Returntoview.jpg",
          },
        ],
      ],
    };
  },
};
</script>

<style scoped>
.card-image {
  width: 250px;
  height: auto;
  border-radius: 10px;
}

.container {
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;
  background-color: #8ca388; /* Bakgrundsfärg */

  margin: 10px;
  border-radius: 10px;
}
#heading {
  font-size: 2.5rem;
  font-style: italic;
}
#heading1 {
  color: white;
  margin-top: 10px;
}
</style>
