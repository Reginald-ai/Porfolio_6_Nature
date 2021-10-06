<template>
  <div class="visions">
    <div class="visions-first">
      <v-container>
        <v-row>
          <v-col sm="12" cols="12" md="6">
            <v-carousel>
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col sm="12" cols="12" md="6">
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam necessitatibus officia molestias.
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              autem at cumque nulla aperiam, magnam odio doloribus dolore enim!
              Corporis a exercitationem praesentium accusamus enim.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              aliquam eaque eius nulla dolorem voluptatibus unde sapiente omnis
              optio molestiae minima veritatis error animi perferendis
              dignissimos, ea ipsa iure voluptatum.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="visions-second">
      <v-container>
        <hr />
        <v-row>
          <v-col>
            <h1 class="pb-5">Consider these facts:</h1>

            <ul>
              <li>The number one reason for species decline is habitat loss</li>
              <li>
                Approximately 90 percent of the energy used by the United States
                is from nonrenewable resources
              </li>
              <li>
                Less than one percent of the water on Earth is safe for human
                consumption
              </li>
              <li>
                In 2015, over 20 percent of all coral reefs experienced a 90
                percent mortality rate due to global warming.
              </li>
            </ul>
            <p class="pt-8">
              While alarming, these statistics generally aren’t in the forefront
              of our minds. That’s where Earth Day comes into play. This
              tradition has held strong for 46 years and huge achievements in
              preserving the planet have come from it. The purpose behind the
              movement is to inspire individuals to step up to the plate and
              help tackle some of the world’s most pressing environmental
              problems. Today, Earth Day is recognized in over 196 countries,
              and more than 50,000 organizations partner with the Earth Day
              network to promote environmental mindfulness.
            </p>
            <p>
              Many nonprofit organizations work year-round to promote
              environmental conservation. Today we recognize a few of these
              great organizations. Each of these nonprofits focus on different
              initiatives to help our planet, from protecting lakes to saving
              endangered species. Let’s take a peek at how they strive to make
              Earth a better place.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="visions-thrid">
      <v-container>
        <hr class="my-5" />
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <img
              src="@/assets/img/visions/Surfrider-Foundation-1-750x319.png"
              alt=""
            />
          </v-col>
          <v-col>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi atque odit fuga ut natus, facilis praesentium nihil qui
              commodi! Sint minima totam aspernatur ut non architecto
              laboriosam, a, esse qui eum iusto dolor mollitia, quasi aut alias
              temporibus? Obcaecati laboriosam architecto esse deserunt saepe
              voluptates veritatis, repudiandae sed quos sequi tempore culpa ex
              quasi sint, ullam eligendi, facilis et quia?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique nemo perspiciatis quasi provident dicta ab, natus minus
              unde sint eligendi nesciunt ducimus quod ut, quibusdam nihil
              voluptas eum quam commodi facere perferendis. Soluta adipisci,
              tempore animi mollitia quasi reiciendis laboriosam!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              iste iure consequuntur qui molestias facilis perspiciatis in,
              inventore, vero magni cum dolore ab aperiam unde eius minus modi
              amet harum?
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="visions-fourth">
      <v-container>
        <hr class="my-5" />
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <h1>Trees for the Future</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              vel iste nam consectetur ipsam adipisci, ex sapiente quisquam
              voluptatem distinctio necessitatibus illum laboriosam sunt at et
              recusandae mollitia corporis corrupti quas! At, perspiciatis.
              Laborum sequi consequuntur, omnis provident similique temporibus
              explicabo debitis eligendi repudiandae voluptatem nobis qui itaque
              iure reprehenderit dolorum maxime laudantium, iusto, voluptates
              fugiat quia doloremque tenetur praesentium?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              quod ipsam eaque consectetur perspiciatis quia ipsa libero tempora
              voluptatum mollitia voluptatem, ad fuga eum itaque blanditiis!
              Illo dolore laudantium animi?
            </p>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <img src="@/assets/img/visions/Trees.org_.jpg" alt="" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- <div class="visions-fifth py-16">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card elevation="2" outlined shaped>
              <v-card-title>
                <h1 class="py-5">
                  Conservation Champions: 12 Organizations That Protect Our
                  Earth
                </h1>
              </v-card-title>
              <v-card-subtitle> You can read more about here </v-card-subtitle>
              <v-card-text>
                https://www.classy.org/blog/conservation-champions-organizations-protect-earth/
              </v-card-text>
              <v-card-text>
                https://www.classy.org/blog/conservation-champions-organizations-protect-earth/
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.visions {
  color: cadetblue;
  padding: 100px 0px;
  .visions-first {
    padding: 50px 0px 20px 0px;
  }
  .visions-second {
    padding: 50px 0px 20px 0px;
  }
  .visions-third {
    padding: 50px 0px 20px 0px;
  }
  // .visions-fourth {
  // }
}
</style>