<template>

  <div id="container">
    <div id="conOne" class="cons">
      <b-card id="cardOne" class="cards">
        <img
          style="max-width: 15rem; max-height: 8rem"
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
          style="max-width: 15rem; max-height: 8rem"
          src="/src/assets/Quiz.jpg"
          alt="Quiz"
        />
        <b-card-text>
          <h1>Quiz</h1>

          <p>Test your knowledge in a quiz</p>
        </b-card-text>

        <b-button id="buttons" router-link to="/Quiz">Start</b-button>
      </b-card>
    </div>

    <div id="conThree" class="cons">
      <b-card id="cardThree" class="cards">
        <img
          style="max-width: 15rem; max-height: 8rem"
          src="/src/assets/Community.jpg"
          alt="Community"
        />
        <b-card-text>
          <h1>Community</h1>

          <p>
            Join the community with others
          </p>
        </b-card-text>

        <b-button id="buttons" router-link to="/Quiz">Start</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecView",
};
</script>

<style>
#container {
  display: flex;
  flex-wrap: wrap;
  max-height: 100%;
  max-width: 100%;
  align-items: center;
  justify-content: center;
}

.cards {
  display: flex;
  min-height: 20rem;
  width: 20rem;
  padding: 1rem;
  margin: 0 auto;
}

.cons {
  margin: 0.5rem;
}

#buttons {
  background-color: #c7e291;
  width: 15rem;
  height: 3rem;
  font-size: 20px;
  transition: background-color 0.3s, transform 0.3s;
}

#buttons:hover {
  background-color: #8ea169;
  transform: scale(105%);
}

@media screen and (min-width: 768px) {
  #container {
    flex-direction: row;
  }
}
</style>
