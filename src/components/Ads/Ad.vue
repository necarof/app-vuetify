<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card class="mb-5" v-if="!loading">
          <v-img height="300" :src="ad.imageSrc"></v-img>
          <v-card-text>
            <h2 class="text--primary">{{ ad.title }}</h2>
            <p>{{ ad.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <EditAdModal 
              :ad="ad"
            />
            <v-btn color="success" class="ml-3">Buy</v-btn>
          </v-card-actions>
        </v-card>
        <div v-else class="text-center">
          <v-progress-circular
            :size="100"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EditAdModal from "./EditAdModal";

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
    loading () {
      return this.$store.getters.loading
    }
  },
  components: {
    EditAdModal
  }
};
</script>