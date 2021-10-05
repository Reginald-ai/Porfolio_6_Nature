<template>
  <v-app-bar absolute elevate-on-scroll scroll-target="#scrolling-techniques-7">
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

    <v-toolbar-title>Save The Earth</v-toolbar-title>

    <v-spacer></v-spacer>

    <ul class="navbar-nav">
      <li class="nav-item"><a href="#" class="nav-link">Programs</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Visions</a></li>
      <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
    </ul>
    <!-- 
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn> -->
  </v-app-bar>
  <!-- <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1500px;">
      </v-container>
    </v-sheet> -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  background: #55a630 !important;
  .navbar-nav {
    display: flex;
    list-style-type: none;
    .nav-link {
      padding: 15px;
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>