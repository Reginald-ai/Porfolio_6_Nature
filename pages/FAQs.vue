<template>
  <div class="faqs">
    <div class="faqs-first">
      <v-container>
        <v-col cols="6">
          <h1>Thank you Messages</h1>
          <p>
            I will forever be grateful to you for your help. Thank you! Some
            people deserve more than just a thank you. Just like you! Thanks for
            everything. Thanking you from the core of my heart. I truly
            appreciate you. My heart is overflowing with gratitude. Thanks from
            the bottom of my heart!
          </p>
          <p>
            I appreciate everything you do for me with so much care. Thank you!
            Your thoughtfulness always touches my heart. Thanks a ton for
            everything! Kindness is just what you do, and you do it so well!
            Thank You! Thank you won’t be enough for what you’ve done for me.
            But, let me try a little. Thanks a lot for your support!
          </p>
        </v-col>
        <v-col> </v-col>
      </v-container>
    </div>
    <div class="credits">
      <v-container>
        <h1>Credits Libraries I Use</h1>
        <hr class="my-5" />

        <v-row>
          <v-col
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="200"
            cols="12"
            sm="12"
            md="6"
            v-for="(credit, i) in credits"
            :key="i"
          >
            <v-card elevation="2" outlined shaped>
              <v-card-title>
                {{ credit.title }}
              </v-card-title>
              <v-card-subtitle>
                <p>{{ credit.category }}</p>
              </v-card-subtitle>
              <v-card-text>
                {{ credit.text }}
              </v-card-text>
              <v-card-text>
                {{ credit.text1 }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credits: [
        {
          title: "Vuetify",
          category: "Vue UI Library",
          text: "Material Design Framework Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips.",
        },
        {
          title: "Undraw.co / Svgrepo.com",
          category: " Images ",
          text: "Browse 300.000+ SVG Vectors and Icons Explore, search and find the best fitting icons or vectors for your projects using wide variety vector library. Download free SVG Vectors for commercial use.",
          text1:
            "Create better designed websites, products and applications. Browse to find the images that fit your messaging, automagically customise the color to match your brand and use it as a normal image, embedded code or directly in your design workflow.",
        },
        // {
        //   title: "Aos Library",
        //   category: " Js libary ",
        //   text: "Animate On Scroll Library",
        // },
      ],
    };
  },
};
</script>

<style lang="scss" >
.faqs {
  padding: 100px 0px;
  background: url("@/assets/img/faqs/Leave-10s-1920px.svg?inline");
  color: rgb(52, 50, 61);
  height: 100%;
}
</style>