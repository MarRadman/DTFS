<template>
        <!--bara mall för hur man kan göra-->

        <div>
          <div>
            <h4>Navigate youre way through youre phone</h4>
            <b-card-group deck>
              <b-card>
                <img src="../assets/meny1.jpg" img-alt="Menu" img-top style="max-width: 100%; height: auto;"/>
                <b-card-text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, ex
                  eum omnis repudiandae, repellendus accusamus dolorem totam, ullam
                  corporis voluptate consequuntur quas doloremque tempore odit
                  voluptas dolores fugit reprehenderit esse!
                </b-card-text>
              </b-card>

              <b-card>
                <img src="../assets/meny3.jpg" img-alt="phonemenu" img-bottom style="max-width: 100%; height: auto;"/>
                <b-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit
                  sint minus at ad sapiente cupiditate incidunt soluta, consequatur,
                  quidem quia aperiam nulla, vitae sunt asperiores tenetur? Porro,
                  illum eveniet!
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>
          <div class="mt-4">
            <h4>Find you're way back using the "homebuttom" on youre phone</h4>
            <b-card>
              <img src="../assets/meny2.jpg" img-alt="Menu123" img-left class="mb-3" style="max-width: 100%; height: auto;"/>
              <b-card-text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
                assumenda id sunt quidem itaque explicabo quisquam. Voluptas autem
                maxime libero, alias doloremque modi. Eaque ipsum neque nisi sit odio
                sunt?
              </b-card-text>
            </b-card>

            <b-card>
              <img src="../assets/meny4.jpg" img-alt="menu332" img-right style="max-width: 100%; height: auto;" />
              <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipisicing el
                it. Voluptates iste vitae illo exercitationem aperiam
                esse. Voluptatibus abvoluptatem fuga rem vero. Voluptates eum, sequi simi
              lique est in asperiores volupt
              ate
              consectetur!
            </b-card-text>
          </b-card>
        </div>
      </div>
      <router-link to="/android" @click="scrollToTop">Back to Android Guides</router-link>
</template>

<script>
export default {
  // Detta är för komma längst upp på sidan man router- linka till.
  thods: {
      scrollToTop() {
        window.scrollTo(0, 0) // Scrolla till (x, y) = (0, 0)
      },
    },
}
</script>
