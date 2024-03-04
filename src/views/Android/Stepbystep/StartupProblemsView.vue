<template>
  <!--Martin-->
  <div id="startupProblemView">
    <h1>10 steg för att felsöka en Android-mobil som inte startar</h1>
    <b-card-group deck class="cardContainer">
      <b-card v-for="card in cards" :title="card.title" :img-src="card.imgSrc" :img-alt="card.imgAlt" class="card">
        <b-card-text>{{ card.text }}</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  data() {
    return {
      cards: []
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('./src/views/Android/Stepbystep/data/cardData.json')
      .then(response => {
      this.cards = response.data.cards;
      })
      .catch(error => {
        console.log ('Fel vid hämtningen av data:', error);
      });
     }
  }
}

</script>

<style scoped>

.router-link {
  margin-top: 20px;
}

.cardContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  justify-content: center;
  align-items: stretch;
  justify-items: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 1%;
}

@media only screen and (min-width: 768px) {

  .cardContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    text-align: center;
    justify-content: center;
    object-fit: cover;
  }
}
</style>


 <!-- Gamla strukturen och hårdkodad template -->

    <!-- 1 card -->
    <!-- <b-card-group deck>
      <b-card
        title="Kontrollera strömmen"
        img-src="./src/assets/StartupProblemPhotos/BatteryDrain.gif"
        img-alt="Battery check"
        img-top
      >
        <b-card-text>
          Se till att din telefon har tillräckligt med batteri. Anslut den till
          en fungerande strömkälla och låt den ladda i några minuter innan du
          försöker starta den igen. -->
        <!-- </b-card-text>
      </b-card> -->
      <!-- 2 card -->
      <!-- <b-card
        title="Starta om enheten"
        img-src="./src/assets/StartupProblemPhotos/RestartPhone.gif"
        img-alt="Restart Phone"
        img-top
      >
        <b-card-text>
          Håll ned strömknappen i några sekunder tills telefonen stängs av helt.
          Vänta sedan några sekunder och tryck på strömknappen igen för att
          starta om enheten.
        </b-card-text>
      </b-card> -->
    <!-- </b-card-group>
    <b-card-group deck> -->
      <!-- 3 card -->
      <!-- <b-card
        title="Försök en hård återställning"
        img-src="./src/assets/StartupProblemPhotos/HardReset.gif"
        img-alt="Hard rest your phone"
        img-top
      >
        <b-card-text>
          Ibland kan en hård återställning lösa problemet. Processen för hård
          återställning varierar beroende på tillverkare och modell. Vanligtvis
          innebär det att hålla ned en kombination av knappar (till exempel
          strömknappen och volymnedåtknappen) tills en återställningsmeny visas.
          Därifrån kan du välja alternativet för att återställa enheten till
          fabriksinställningarna. Observera att detta kommer att radera all data
          på enheten, så det är viktigt att göra detta endast som en sista
          utväg.
        </b-card-text>
      </b-card> -->
      <!-- 4 card -->
      <!-- <b-card
        title="Anslut till en dator och återställ"
        img-src="./src/assets/StartupProblemPhotos/ConnectPhone.gif"
        img-alt="Connect phone to computer"
        img-top
      >
        <b-card-text>
          Om telefonen fortfarande inte startar kan du försöka ansluta den till
          en dator med hjälp av en USB-kabel och försöka utföra en återställning
          genom tillverkarens programvara eller Android SDK.
        </b-card-text>
      </b-card> -->
    <!-- </b-card-group>
    <b-card-group deck> -->
      <!-- 5 card -->
      <!-- <b-card
        title="Kontrollera hårdvaruproblem"
        img-src="./src/assets/StartupProblemPhotos/Hardware.gif"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          Om inget av ovanstående steg fungerar kan det finnas ett problem med
          telefonens hårdvara. Detta kan kräva att du tar med enheten till en
          auktoriserad serviceverkstad för att få den reparerad eller utbytt.
        </b-card-text>
      </b-card> -->
      <!-- 6 card -->
      <!-- <b-card
        title="Testa med en annan laddare/kabel"
        img-src="./src/assets/StartupProblemPhotos/BadCharger.gif"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          Ibland kan problemet vara med laddaren eller USB-kabeln istället för
          enheten själv. Försök att använda en annan laddare och USB-kabel för
          att se om det löser problemet.
        </b-card-text>
      </b-card> -->
    <!-- </b-card-group>
    <b-card-group deck> -->
      <!-- 7 card -->
      <!-- <b-card
        title="Kontrollera för fysiska skador"
        img-src="./src/assets/StartupProblemPhotos/PhoneDamaged.gif"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          Inspektera telefonen noggrant för eventuella fysiska skador, som
          sprickor i skärmen eller vattenskador. Om det finns några synliga
          skador kan det vara orsaken till varför telefonen inte startar.
        </b-card-text>
      </b-card> -->
      <!-- 8 card -->
      <!-- <b-card
        title="Ta bort minneskortet och SIM-kortet"
        img-src="./src/assets/StartupProblemPhotos/RemoveSim.gif"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          Ta bort minneskortet och SIM-kortet från enheten och försök sedan
          starta om den. Ibland kan problem med dessa kort orsaka startproblem.
        </b-card-text>
      </b-card>
    </b-card-group> -->
    <!-- <b-card-group deck> -->
      <!-- 9 card -->
      <!-- <b-card
        title="Kontrollera för mjukvaruproblem"
        img-src="./src/assets/StartupProblemPhotos/SoftwareProblem.gif"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          Om telefonen har startat upp till viss del men stannar eller fastnar
          på en viss skärm, kan det finnas ett mjukvaruproblem. Du kan försöka
          starta enheten i säkert läge genom att hålla ned strömknappen och
          välja "Säkert läge" när alternativet visas. Om telefonen startar
          normalt i säkert läge kan problemet vara med en tredjepartsapp. Du kan -->
          <!-- försöka avinstallera nyligen installerade appar eller genomföra en
          fabriksåterställning för att åtgärda problemet. -->
        <!-- </b-card-text>
      </b-card> -->
      <!-- 10 card -->
      <!-- <b-card
        title="Kontakta tillverkarens support/återsäljare"
        img-src="./src/assets/StartupProblemPhotos/CustomerService.gif"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          Om inget av ovanstående steg löser problemet kan det vara bäst att
          kontakta tillverkarens kundsupport för ytterligare hjälp och
          vägledning. De kan kunna erbjuda specifik support eller instruktioner
          baserat på din enhets modell och garantistatus.
        </b-card-text> -->
      <!-- </b-card>
    </b-card-group> -->
