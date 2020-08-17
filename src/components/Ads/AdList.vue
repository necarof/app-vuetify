<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mt-3 mb-3">Ad list</h1>
        <v-card
          v-for="ad in myAds"
          :key="ad.id"
          class="mb-5"
        >
          <v-layout>
            <v-col cols="auto">
              <v-img
                height="160"
                width="160"
                :src="ad.imageSrc"
              ></v-img>
            </v-col>
            <v-row>
              <v-col>
                <v-card-text>
                  <h2 class="text--primary">{{ ad.title }}</h2>
                  <p>{{ ad.description }}</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn class="info" :to="'/ad/' + ad.id">Open</v-btn>
                </v-card-actions>
              </v-col>
            </v-row>  
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    myAds () {
      return this.$store.getters.myAds
    },
  }
}
</script>