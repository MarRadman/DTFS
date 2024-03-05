<template>
  <!--Jag använde först vanliga knappar och kopplade ihop med bild osv manuellt men såg sedan att någon hade gjort ett exempel med b-card
                  så jag kollade upp hur man använder det och bestämde mig för att göra på detta sättet istället. Känns smidigare. Har inte testat bootstrap
                  så mycket än så skall skapa ett separat dokument på datorn så jag kan se hur det ser ut och style'a så det ser rätt ut då.
                  Majoriteten av koden skriven 02-20-2024 //Jonathan-->
  <div class="container">
    <div id="conOne" class="cons">
      <b-card id="cardOne" class="cards">
        <img
          style="max-width: 15rem; max-height: 10rem"
          src="/src/assets/Andriod.jpg"
          alt="Android"
        />
        <b-card-text>
          <h1>Step by Step</h1>

          <p>Your guide of learning basic IT</p>
        </b-card-text>
        <b-button id="buttons" router-link to="/android">Start</b-button>
      </b-card>
    </div>

    <div id="conTwo" class="cons">
      <b-card id="cardTwo" class="cards">
        <img
          style="max-width: 15rem; max-height: 10rem"
          src="/src/assets/Quiz.jpg"
          alt="Quiz"
        />
        <b-card-text>
          <h1>Quiz</h1>

          <p>Test your knowledge in a quiz!</p>
        </b-card-text>

        <b-button id="buttons" router-link to="/Quiz">Start</b-button>
      </b-card>
    </div>

    <div id="conThree" class="cons">
      <b-card id="cardThree" class="cards">
        <img
          style="max-width: 15rem; max-height: 10rem"
          src="/src/assets/Community.jpg"
          alt="Community"
        />
        <b-card-text>
          <h1>Community</h1>

          <p>
            Join the community with others and share your thoughts and skills
          </p>
        </b-card-text>

        <b-button id="buttons" router-link to="/Quiz">Start</b-button>
      </b-card>
    </div>
    <!--Kommenterade ut den tillfälliga lösningen och fixade den första knappen istället //Jonathan-->
    <!--Införde denna sålänge för ha något slags sätt att hoppa ifrån HomeView -> SecView -> androidView
      Tar bort detta när mer saker har införts till sidan //Martin-->

    <!-- <div>
    <b-card>
      <router-link to="/android">
        <img
          src="../assets/Andriod.jpg"
          alt="android"
          style="max-width: 20rem"
          class="mb-2"
        />
      </router-link>
    </b-card>
  </div> -->
  </div>
</template>

<script>
export default {
  name: "SecView",

  // methods: {

  //   navigateToNextPage() { //Metod för att knappen ska navigera till nästa komponent, komponentnamn i parantesen
  //     this.$router.push({name: }) //komponentnamn i name
  //   }

  // }
};
</script>

<style>
@media screen and (max-width: 768px) {
  .container_secview {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    max-width: 100vh;
    padding-top: 50px;
    justify-content: center;
  }

  .cons {
    margin: 1rem;
  }

  .cards {
    height: 23rem;
    padding: 1rem;
  }

  #buttons {
    background-color: #c7e291;
  }
}
</style>
