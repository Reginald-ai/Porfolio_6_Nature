<template>
  <v-app dark>
    <Header />
    <v-main>
      <Nuxt id="scrolling-techniques-7" class="overflow-y-auto" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">
.v-application {
  font-family: poppins;
}
.theme--dark.v-application {
  background: none;
}

// @media (min-width: 1904px) {
//   .container {
//     max-width: 1385px;
//   }
// }
</style>
