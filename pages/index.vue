<template>
  <div class="nature-wrapper pt-100">
    <v-container>
      <div class="nature-intro">
        <v-container>
          <v-row class="align-center">
            <v-col
              data-aos="fade-right"
              class="cdetBlue"
              cols="12"
              sm="12"
              md="6"
              lg="6"
            >
              <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                explicabo nulla beatae fuga possimus illum modi ad, sed quam
                minima nostrum iste placeat necessitatibus accusantium eligendi
                omnis, in quis asperiores ullam, sint rerum impedit libero.
                Molestiae nobis eos officia labore!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus, sequi dolores. Quasi magni repellendus iusto id nulla
                est, ex, optio vitae ad qui atque delectus suscipit magnam, sunt
                porro alias. Magni consectetur nostrum totam, ut excepturi quis.
                Ducimus, rerum iusto!
              </p>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
              <SvgHelpNature
                data-aos="fade-down"
                data-aos-duration="1000"
                class="w-100"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>
      <hr />
      <div class="nature-save py-16">
        <v-container>
          <v-row>
            <v-col
              v-for="(sCard, i) in sCards"
              data-aos="flip-right"
              data-aos-duration="1000"
              data-aos-delay="250"
              :key="i"
              cols="12"
              sm="12"
              md="6"
              lg="4"
              xl="3"
            >
              <v-card class="mx-auto cdetBlue" max-width="400">
                <!-- <v-img
                  class="white--text align-end"
                  :src="require(`@/assets/img/home/${sCard.img}`)"
                >
                </v-img> -->
                <img
                  :src="require(`@/assets/img/home/id/${sCard.img}`)"
                  class="pa-5 img-card"
                  alt=""
                />
                <v-card-title>{{ sCard.title }}</v-card-title>
                <v-divider color="primary"></v-divider>

                <v-card-subtitle class="pb-3 cdetBlue">
                  {{ sCard.subtitle.slice(0, 160) }} . . .
                </v-card-subtitle>

                <v-card-text class="cdetBlue">
                  {{ sCard.text1.slice(0, 130) }} . . .
                </v-card-text>
                <!-- <v-divider color="primary"></v-divider> -->
                <v-card-actions>
                  <v-btn color="orange" text> Share </v-btn>
                  <NuxtLink
                    :to="`/home-id/${sCard.id}`"
                    class="btn-yellow"
                    color="orange"
                    text
                  >
                    Explore
                  </NuxtLink>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <hr />
      <div class="nature-guide py-16">
        <v-container>
          <v-row class="cdetBlue align-center">
            <v-col
              data-aos-duration="1000"
              data-aos="fade-up"
              cols="12"
              sm="12"
              md="6"
              lg="6"
            >
              <SvgHelWorld class="w-100" />
            </v-col>
            <v-col
              data-aos-duration="1000"
              data-aos="fade-up"
              data-aos-delay="500"
              cols="12"
              sm="12"
              md="6"
              lg="6"
            >
              <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                reiciendis fugit ratione incidunt et quo numquam. Consequatur
                eos nulla iusto!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                assumenda, voluptatum amet, natus consequatur quas sit aperiam
                animi fugit alias ducimus architecto? Quos porro dicta fugit
                quod odit expedita! Laudantium.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <hr />
    </v-container>
  </div>
</template>

<script>
import SvgHelpNature from "@/assets/img/home/Black Man and Woman Cleaning Up the Park.svg";
import SvgHelWorld from "@/assets/img/home/thermometer-hot-svgrepo-com.svg";
export default {
  components: {
    SvgHelpNature,
    SvgHelWorld,
  },
  data() {
    return {};
  },
  computed: {
    sCards() {
      return this.$store.state.sCards;
    },
    // sCard() {
    //   return this.$store.getters.getsCards(this.$route.parms.id);
    // },
    mounted() {
      console.log(sCards);
    },
  },
};
</script>

<style lang="scss" >
.nature-wrapper {
  .nature-intro {
    background: url("~assets/img/home/Confetti.svg?inline");
  }
  .nature-save {
    // background: url('@/assets/img/home/Leave-10s-1920px.svg?inline"');
    .mx-auto {
      background: #ffffff;
      .img-card {
        display: flex;
        margin: 0 auto;
      }
    }
  }
}
</style>
