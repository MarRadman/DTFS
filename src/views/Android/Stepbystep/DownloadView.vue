<template>
  <div class="container">
    <b-card v-for="(step, index) in steps" :key="index" class="mb-2">
      <template #header>
        <div>{{ step.title }}</div>
      </template>
      <b-card-text v-if="activeStep === index">{{ step.description }}</b-card-text>
      <img v-if="activeStep === index" :src="step.imgSrc" :alt="step.imgAlt" class="step-image">
      <div id="cardFooter">
        <b-button id="knapp" variant="success" @click="toggleStep(index)" class="mt-2">
        {{ activeStep === index ? 'Kollapsa' : 'Expandera' }}
      </b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'DownloadView',

  data() {
    return {
      activeStep: -1,
      steps: [
        { title: 'Titta på din telefons skärm', description: 'Om din telefon är låst kan du behöva låsa upp den. Är den upplåst så är du troligtvis på din startskärm. Här ifrån utgår vi.', imgSrc: '/src/assets/DownloadAppPhotos/androidstartscreen.png', imgAlt: 'Phone' },
        { title: 'Kom åt alla dina appar', description: 'Det finns flera sätt att komma åt alla appar i din telefon, du kan behöva svepa med fingret upåt, eller åt vänster eller höger, eller via applådan-ikonen.', imgSrc: '/src/assets/DownloadAppPhotos/androidapps.png', imgAlt: 'Phone' },
        { title: 'Klicka på Play Store', description: 'Leta efter en ruta med en färgglad triangel. Den heter "Play Store" och det är där du laddar ner nya appar till din telefon. Tryck på rutan för att öppna Play Store.', imgSrc: '/src/assets/DownloadAppPhotos/androidplaystore.png', imgAlt: 'Phone' },
        { title: 'Sök efter den app du vill ladda ner', description: 'När du är i Play Store, leta efter den app du vill ladda ner. Du kan antingen bläddra bland kategorierna eller skriva namnet på appen i sökrutan högst upp på skärmen. När du hittar appen, tryck på den.', imgSrc: '/src/assets/DownloadAppPhotos/androidsearchbar.png', imgAlt: 'Phone' },
        { title: 'Ladda ner appen', description: 'På appens sida ser du en grön knapp som heter "Installera". Tryck på den för att ladda ner appen till din telefon. Det kan ta några minuter beroende på hur stor appen är.', imgSrc: '/src/assets/DownloadAppPhotos/androidinstall.png', imgAlt: 'Phone' },
        { title: 'Starta appen', description: 'När appen är klar att installeras, ser du en blå knapp som heter "Öppna". Tryck på den för att starta appen och börja använda den!', imgSrc: '/src/assets/DownloadAppPhotos/androidappstart.png', imgAlt: 'Phone' }
      ]
    }
  },
  methods: {
    toggleStep(index) {
      if (this.activeStep === index) {
        this.activeStep = -1;
      } else {
        this.activeStep = index;
      }
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    width: auto;
    margin-top: 40px;
  }

  .mb-2 {
    margin-bottom: 20px;
  }
  .step-image {
    max-width: 100%;
    height: auto;
    margin-top: 10px;
  }
  .b-button {
    margin-top: 10px;
  }
  .mt-2 {
    margin-top: 10px;
  }

  @media screen and (min-width: 769px) {
    .container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      max-width: 100vh;
    }

    .mb-2 {
      margin: 10px;
      min-width: 17rem;
      max-width: 100vh;
    }
  }
</style>
