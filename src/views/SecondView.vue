<template>
  <!--Jag använde först vanliga knappar och kopplade ihop med bild osv manuellt men såg sedan att någon hade gjort ett exempel med b-card
                  så jag kollade upp hur man använder det och bestämde mig för att göra på detta sättet istället. Känns smidigare. Har inte testat bootstrap
                  så mycket än så skall skapa ett separat dokument på datorn så jag kan se hur det ser ut och style'a så det ser rätt ut då.
                  Majoriteten av koden skriven 02-20-2024 //Jonathan-->
<div class="container">
  <div id="conOne">
    <b-card
      id="cardOne">
    <img
      style="max-width: 15rem; max-height: 10rem;"
      src="../assets/Andriod.jpg"
      alt="Android">
      <b-card-text>
        <h1>Step by Step</h1>

        <p>Your guide of learning basic IT</p>
      </b-card-text>
      <b-button
      style="background-color: blue;"
      router-link to="/android"
        >Start</b-button>
    </b-card>
  </div>

  <div id="conTwo">
    <b-card
      id="cardTwo">
    <img
      style="max-width: 15rem; max-height: 10rem;"
      src="../assets/Quiz.jpg"
      alt="Quiz">
      <b-card-text>
        <h1>Quiz</h1>

        <p>Test your knowledge in a quiz!</p>
      </b-card-text>

      <b-button
      style="background-color: blue;"
      router-link to="/android"
        >Start</b-button>
    </b-card>
  </div>

  <div id="conThree">
    <b-card
      id="cardThree">
    <img
      style="max-width: 15rem; max-height: 10rem;"
      src="../assets/Community.jpg"
      alt="Community">
      <b-card-text>
        <h1>Community</h1>

        <p>Join the community with others and share your thoughts and skills</p>
      </b-card-text>

      <b-button
      style="background-color: blue;"
      router-link to="/android"
        >Start</b-button>
    </b-card>
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
.container {
  display: flex;
  flex-direction: column;

}

#conOne {
  padding: 1rem;
}

#conTwo {
  padding: 1rem;
}

#conThree {
  padding: 1rem;
}

#cardOne {
  width: 20rem;
  height: 23rem;
}

#cardTwo {
  width: 20rem;
  height: 23rem;
}

#cardThree {
  width: 20rem;
  height: 23rem;
}
}


</style>
