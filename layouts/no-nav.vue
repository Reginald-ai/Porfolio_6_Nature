<template>
  <v-app>
    <v-app-bar
      absolute
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-container class="d-flex">
        <NuxtLink class="title" to="/">Earth Gates</NuxtLink>

        <v-spacer></v-spacer>

        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink to="/Program" class="nav-link">Programs</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/Visions" class="nav-link">Visions</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/FAQs" class="nav-link">FAQs</NuxtLink>
          </li>
        </ul>
      </v-container>
    </v-app-bar>
    <Nuxt id="scrolling-techniques-7" class="overflow-y-auto" />
    <Footer />
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped >
header {
  background: transparent !important;
  .title {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
  }
  .navbar-nav {
    display: flex;
    list-style-type: none;
    .nav-link {
      padding: 15px;
      text-decoration: none;
      color: #fff;
      font-weight: 600;
    }
  }
}
</style>