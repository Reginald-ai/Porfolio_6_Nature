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
export default {
  theme: { light: true },
};
</script>

<style lang="scss">
.v-application {
  font-family: poppins;
}
.theme--dark.v-application {
  background: none;
}
</style>
