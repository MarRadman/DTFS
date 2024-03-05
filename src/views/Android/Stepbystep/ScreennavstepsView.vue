<template>
  <div id="Navigate">
    <h4>Navigera dig runt i din telefon</h4>
    <div class="card-container">
      <b-card v-for="card in cards" :key="card.id" :title="card.title" :img-src="card.imgSrc" :img-alt="card.imgAlt" class="card">
        <b-card-text>{{ card.text }}</b-card-text>
      </b-card>
    </div>
    <div class="search-container">
      <input type="text" v-model="searchTerm" placeholder="Sök efter ord i texten">
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cards: [],
      searchTerm: ''
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('./data/cardDavid.json')
        .then(({ data }) => {
          this.cards = data.cards;
        })
        .catch(error => {
          console.log('Fel vid hämtningen av data:', error);
        });
    },
    handleSearch() {
      // Här hade man kunnat söka om det funnits något :)
    }
  },
  watch: {
    searchTerm: {
      handler: 'handleSearch',
      immediate: true
    }
  }
}
</script>

<style>
.card-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px; 
}

.b-card {
  width: 100%; 
  border-width: 5px;
  background-color: #afa;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.b-card:hover {
  transform: scale(1.1);
}

.b-card img {
  max-width: 100%;
  height: auto;
}

.search-container {
  margin-top: 20px;
}

@media screen and (min-width: 768px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr); 
  }
}
</style>



 <!--Sparad template
  <b-card-group>
    <b-card title="Startskärmen" img-src="/src/assets/En bild till lycka/Skärm.jpg" img-alt="Image" img-top>
      <b-card-text>
        När du slår på telefonen eller trycker på hemknappen kommer du till startskärmen. Det är där du hittar alla dina appar och widgets.
        För att komma tillbaka till startskärmen när du är i en annan app, tryck på hemknappen.
      </b-card-text>
      <template #footer>
        <small class="text-muted">1. Där vanligtvis strömbrytaren sitter 2. Meny knapp på telefonen</small>
      </template>
    </b-card>

    <b-card title="Navigeringsknappar längst ner" img-src="/src/assets/En bild till lycka/Skärm.jpg" img-alt="Image" img-top>
      <b-card-text>
        Längst ned på skärmen, vanligtvis i en rad, hittar du navigeringsknapparna. Dessa kan vara ikoner som en pil tillbaka, en cirkel för hem och en fyrkant för att visa öppna appar.
        Du kan använda dessa knappar för att navigera mellan appar och gå tillbaka till startskärmen.
      </b-card-text>
      <template #footer>
        <small class="text-muted">1.Tillbaka 2. Hem 3. Hanterare</small>
      </template>
    </b-card>

    <b-card title="Hur man hittar appar" img-src="/src/assets/En bild till lycka/Skärm.jpg" img-alt="Image" img-top>
      <b-card-text>
        Öppna din telefon genom att trycka på strömbrytaren (oftast på höger sida eller ovansidan av telefonen).
        På startskärmen, leta efter en ikon som ser ut som en fyrkant med punkter inuti. Detta är "Appar" -appen.
        Tryck på "Appar" -appen för att öppna den. Här hittar du alla installerade appar på din telefon. Du kan svepa upp eller ner för att bläddra bland dem.
      </b-card-text>
      <template #footer>
        <small class="text-muted">1.Knapp för appar</small>
      </template>
    </b-card>
  </b-card-group>
</div>
<div>
  <b-card-group>
    <b-card title="Visa inställningar" img-src="/src/assets/En bild till lycka/Skärm.jpg" img-alt="Image" img-top>
      <b-card-text>
        Gå till startskärmen genom att trycka på hemknappen (oftast en cirkel längst ned på skärmen).
        Letar efter ikonen som ser ut som ett kugghjul eller säger "Inställningar". Detta kan också finnas i snabbmenyn genom att svepa ner från toppen av skärmen och trycka på kugghjulsikonen.
        Tryck på "Inställningar" -ikonen för att öppna inställningsmenyn. Här kan du justera olika inställningar för din telefon.
      </b-card-text>
      <template #footer>
        <small class="text-muted">1. tryck på meny-knappen 2.Kugghjulet</small>
      </template>
    </b-card>

    <b-card title="Hur man anpassar bakgrund på sin Android-telefon" img-src="/src/assets/En bild till lycka/Skärm.jpg" img-alt="Image" img-top>
      <b-card-text>
        Tryck och håll på en tom plats på startskärmen tills en meny visas.
        Välj "Bakgrund" eller "Bakgrundsbild" från menyn.
        Välj en bild från galleriet eller från förinställda bakgrundsbilder.
        När du har valt din bild, tryck på "Använd som bakgrund" eller liknande för att ställa in den som din bakgrundsbild.
      </b-card-text>
      <template #footer>
        <small class="text-muted">1. Håll in på utmärkt cirkel</small>
      </template>
    </b-card>

    <b-card title="Meddelanden" img-src="/src/assets/En bild till lycka/Skärm.jpg" img-alt="Image" img-top>
      <b-card-text>
        Om du får ett meddelande visas en notis längst upp på skärmen. Du kan även få en varning på låsskärmen.
        Dra ner från toppen av skärmen för att öppna meddelandefältet och se alla dina meddelanden.
        Tryck på ett meddelande för att öppna det och läsa det. Du kan svara genom att trycka på svarsalternativet.
      </b-card-text>
      <template #footer>
        <small class="text-muted">1. Här visas nya meddelanden 2.Här hittar du alla meddelanden</small>
      </template>
    </b-card>
  </b-card-group>-->