<template>
  <div>
    <div v-if="!loading">
      <v-container fluid>
        <v-layout row>
          <v-flex>
            <v-carousel>
              <v-carousel-item
                v-for="ad in promoAds"
                :key="ad.id"
                :src="ad.imageSrc"
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <div class="carousel-link">
                  <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container grid-list-lg>
        <v-row>
          <v-col
            v-for="ad in ads"
            :key="ad.id"
          >
            <v-card
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                :src="ad.imageSrc"
              >
                <v-card-title>{{ ad.title }}</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">{{ ad.title }}</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>{{ ad.description }}</div>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :to="'/ad/' + ad.id" class="mr-3">open</v-btn>
                <app-buy-modal :ad="ad"></app-buy-modal>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-flex v-else class="text-center mt-12">
      <v-progress-circular
        :size="100"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-flex>  
  </div>  
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>
  .carousel-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 10px 20px;
    background: rgba(0, 0, 0, .3);
  }
</style>