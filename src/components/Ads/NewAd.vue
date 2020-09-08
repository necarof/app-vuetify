<template>
  <v-container>
    <v-layout row>
      <v-flex sm6 offset-sm3>
        <h1 class="text--secondary mt-3 mb-3">Create new ad</h1>
        <v-form ref="form" v-model="valid" validation>
          <v-text-field
            label="Ad title"
            name="title"
            type="text"
            required
            :rules="[v => !!v || 'Title is required']"
            v-model="title"
          ></v-text-field>

          <v-textarea
            label="Ad description"
            name="description"
            type="text"
            :rules="[v => !!v || 'Description is required']"
            v-model="description"
            multi-line
          ></v-textarea>
        </v-form>
        <v-layout>
          <v-flex xs12>
            <v-btn color="blue-grey" class="ma-2 white--text">
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
            <v-switch v-model="promo" label="Ad to promo image?"></v-switch>
          </v-flex>
        </v-layout>
        <v-layout mt-3>
          <v-flex>
            <v-btn
              :loading="loading"
              color="success"
              @click="createAd"
              :disabled="!valid || loading"
            >Create ad</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      promo: false,
      valid: false,
    };
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc: "https://cdn.stocksnap.io/img-thumbs/960w/hollywood-california_6FK4YLS5LI.jpg",
        }
        this.$store.dispatch("createAd", ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    },
  },
};
</script>