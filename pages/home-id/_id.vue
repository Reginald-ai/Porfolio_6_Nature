<template>
  <div class="home-id">
    <v-container v-if="sCard">
      <v-row>
        <v-col>
          <img
            :src="require(`@/assets/img/home/ids/${sCard.img}`)"
            class="pa-5 img-card"
            alt=""
          />
        </v-col>
        <v-col>
          <h1>{{ sCard.title }}</h1>
          <p>{{ sCard.subtitle }} . . .</p>
          {{ sCard.text1 }} . . .
          <p>{{ sCard.text2 }} . . .</p>
          <p>{{ sCard.text3 }} . . .</p>
        </v-col>
      </v-row>
    </v-container>
    <h1 v-else class="cdetBlue">erorr</h1>
  </div>
</template>

<script>
export default {
  computed: {
    sCard() {
      return this.$store.getters.getsCards(this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" >
.home-id {
  padding: 100px 0px;
  color: cadetblue;
  // .img-card {
  // }
}
</style>