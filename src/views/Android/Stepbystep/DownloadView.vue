<template>

  <!-- Behöver fortfarande lite CSS, men i stort sett klart //Jonathan -->

  <div class="bCont">
    <b-card class="cards"
    title="Titta på din telefons skärm"
    style="max-width: 20rem;"
    img-src="/src/assets/DownloadAppPhotos/androidstartscreen.png"
    img-alt="Phone"
    >



      <b-card-text>
        Om din telefon är låst kan du behöva låsa upp den. Är den upplåst så är du troligtvis på din startskärm. Här ifrån utgår vi.
      </b-card-text>
    </b-card>

    <b-card class="cards"
    title="Kom åt alla dina appar"
    img-src="/src/assets/DownloadAppPhotos/androidapps.png"
    img-alt="Phone"
    img-top
    style="max-width: 20rem;"
    >




      <b-card-text>
        Det finns flera sätt att komma åt alla appar i din telefon, du kan behöva svepa med fíngret upåt, eller åt vänster eller höger, eller via applådan-ikonen.
      </b-card-text>
    </b-card>

    <b-card class="cards"
    title="Klicka på Play Store"
    img-src="/src/assets/DownloadAppPhotos/androidplaystore.png"
    img-alt="Phone"
    img-top
    style="max-width: 20rem;"
    >




      <b-card-text>
        Leta efter en ruta med en färgglad triangel. Den heter "Play Store" och det är där du laddar ner nya appar till din telefon. Tryck på rutan för att öppna Play Store.
      </b-card-text>
    </b-card>

  </div>

  <div class="bContTwo">
    <b-card class="cardsTwo"
    title="Sök efter den app du vill ladda ner"
    style="max-width: 20rem;"
    img-src="/src/assets/DownloadAppPhotos/androidsearchbar.png"
    img-alt="Phone"
    >



      <b-card-text>
        När du är i Play Store, leta efter den app du vill ladda ner. Du kan antingen bläddra bland kategorierna eller skriva namnet på appen i sökrutan högst upp på skärmen. När du hittar appen, tryck på den.
      </b-card-text>
    </b-card>

    <b-card class="cardsTwo"
    title="Ladda ner appen"
    img-src="/src/assets/DownloadAppPhotos/androidinstall.png"
    img-alt="Phone"
    img-top
    style="max-width: 20rem;"
    >




      <b-card-text>
        På appens sida ser du en grön knapp som heter "Installera". Tryck på den för att ladda ner appen till din telefon. Det kan ta några minuter beroende på hur stor appen är.
      </b-card-text>
    </b-card>

    <b-card class="cardsTwo"
    title="Starta appen"
    img-src="/src/assets/DownloadAppPhotos/androidappstart.png"
    img-alt="Phone"
    img-top
    style="max-width: 20rem;"
    >




      <b-card-text>
        När appen är klar att installeras, ser du en blå knapp som heter "Öppna". Tryck på den för att starta appen och börja använda den!
      </b-card-text>
    </b-card>

  </div>


</template>

<script>

export default {
  name: 'DownloadView'
}




</script>

<style>
  .bCont {
    display: flex;
    flex-direction: column;
  }

  .bContTwo {
    display: flex;
    flex-direction: column;
  }

  .cards {
    margin: 20px;
  }

  .cardsTwo {
    margin: 20px;
  }
</style>
