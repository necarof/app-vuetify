<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card class="mb-5">
          <v-img height="300" :src="ad.imageSrc"></v-img>
          <v-card-text>
            <h2 class="text--primary">{{ ad.title }}</h2>
            <p>{{ ad.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="warning">Edit</v-btn>
            <v-btn color="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {};
  },
  computed: {
    ad() {
      const id = this.id;
      return this.$store.getters.adById(id);
    },
  },
};
</script>