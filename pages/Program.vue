<template>
  <div class="programs">
    <div class="program-first">
      <v-container>
        <v-row class="align-center">
          <v-col md="6" sm="12" cols="12">
            <SvgGoal data-aos="fade-right" data-aos-delay="500" class="w-100" />
          </v-col>
          <v-col
            data-aos-delay="500"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              natus veniam nam, asperiores consectetur provident praesentium
              fuga repellendus totam temporibus eos exercitationem commodi
              doloremque, nobis cupiditate numquam tenetur ab expedita?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              quisquam pariatur totam earum fugiat atque harum nihil officiis
              rerum. Facilis.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- <div class="program-second">
      <v-container>
        <v-row>
          <v-col>
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa?
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Suscipit, facilis. Reiciendis id sequi aperiam, odit recusandae
              itaque quam, commodi dicta fugiat corporis aut! Dolorum maiores
              consequuntur blanditiis officiis omnis cum.
            </p>
          </v-col>
          <v-col>
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div> -->
    <div class="program-second">
      <v-container>
        <v-row class="align-center">
          <v-col data-aos="fade-up" cols="12" sm="12" md="6">
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Commodi
              possimus ex unde sint, mollitia dolorem aliquid? Eveniet quas non
              ipsa, iure accusantium pariatur earum debitis corporis sint
              minima. Aliquid, illum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
              iure odit, dolores voluptatem repellendus neque tenetur est nam
              minus cumque obcaecati. Obcaecati suscipit alias sapiente
              exercitationem minus. Amet, porro deleniti? Consequatur inventore
              perferendis id quibusdam temporibus eum esse accusamus porro.
            </p>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <SvgGoal1
              data-aos-delay="500"
              data-aos="fade-up"
              data-aos-duration="1000"
              class="w-100"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="program-third">
      <v-container>
        <v-row class="align-center">
          <v-col
            data-aos-delay="500"
            data-aos="fade-up"
            data-aos-duration="1000"
            cols="12"
            md="6"
            sm="12"
            lg="6"
          >
            <SvgGoal2 class="w-100" />
          </v-col>
          <v-col
            data-aos-delay="500"
            data-aos="fade-up"
            data-aos-duration="1000"
            cols="12"
            md="6"
            sm="12"
            lg="6"
          >
            <h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              recusandae voluptatum hic.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit quis, totam est veritatis fugit dolorem rerum porro
              doloribus ex mollitia veniam similique aliquid? Sequi incidunt sed
              reprehenderit, minima architecto blanditiis nam voluptatum
              sapiente, quod nostrum illo porro impedit ipsam unde?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              quod officia ratione eaque quo quas nisi consequuntur temporibus
              fugiat debitis.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import SvgGoal from "@/assets/img/programs/goal-aim-target-team-svgrepo-com.svg";
import SvgGoal1 from "@/assets/img/programs/canyon-nature-svgrepo-com.svg";
import SvgGoal2 from "@/assets/img/programs/handleaf2-svgrepo-com.svg";
export default {
  components: {
    SvgGoal,
    SvgGoal1,
    SvgGoal2,
  },
  layout: "no-nav",
};
</script>

<style lang="scss" >
.programs {
  padding: 100px 0px;
  color: white;
  background-size: cover;
  background: url("@/assets/img/programs/Wave-10s-1920px.svg?inline");
  background-size: cover;
  // .program-first {
  // }
  .program-second {
    padding: 150px 0px;
    .mx-auto {
      background: transparent;
    }
  }
  // .program-third {
  // }
}
</style>
