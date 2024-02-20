<template>
  <!--Jag använde först vanliga knappar och kopplade ihop med bild osv manuellt men såg sedan att någon hade gjort ett exempel med b-card
                  så jag kollade upp hur man använder det och bestämde mig för att göra på detta sättet istället. Känns smidigare. Har inte testat bootstrap
                  så mycket än så skall skapa ett separat dokument på datorn så jag kan se hur det ser ut och style'a så det ser rätt ut då.
                  Majoriteten av koden skriven 02-20-2024 //Jonathan-->
  <div>
    <b-card
      title="Knapp 1"
      img-src=""
      img-alt=""
      img-top
      tag=""
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        Knapp 1 som skall leda till en annan komponent på sidan.
      </b-card-text>

      <b-button @click="navigateToNextPage('')" variant="primary"
        >Klicka här</b-button
      >
      <!--Komponentnamn i paratesen vid @click så kommer man vidare till nästa komponent-->
    </b-card>
  </div>

  <div>
    <b-card
      title="Knapp 2"
      img-src=""
      img-alt=""
      img-top
      tag=""
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        consequatur, similique, quam doloribus adipisci odio illo facilis
        accusantium voluptates ex ducimus maiores et sunt totam dignissimos
        natus dicta itaque placeat?
      </b-card-text>

      <b-button @click="navigateToNextPage('')" variant="primary"
        >Klicka här</b-button
      >
    </b-card>
  </div>

  <div>
    <b-card
      title="Knapp 3"
      img-src=""
      img-alt=""
      img-top
      tag=""
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum odio
        quidem animi ut quos fugiat, tempora sint quaerat suscipit expedita,
        iusto necessitatibus velit consectetur ea voluptas dolore sapiente.
        Voluptates!
      </b-card-text>

      <b-button @click="navigateToNextPage('')" variant="primary"
        >Klicka här</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  name: "SeconViewComponent",

  // methods: {

  //   navigateToNextPage() { //Metod för att knappen ska navigera till nästa komponent, komponentnamn i parantesen
  //     this.$router.push({name: }) //komponentnamn i name
  //   }

  // }
};
</script>
