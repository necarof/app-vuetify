<template>
  <v-container>
    <v-layout row>
      <v-flex sm6 offset-sm3>
        <h1 class="text--secondary mt-3 mb-3">Create new ad</h1>
        <v-form
          ref="form"
          v-model="valid"
          validation
        >
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
            <v-btn
              color="blue-grey"
              class="ma-2 white--text"
            >
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
            <v-switch
              v-model="promo"
              label="Ad to promo image?"
            ></v-switch>
            <img src="https://avatars.mds.yandex.net/get-pdb/33827/4003fa51-0bba-4007-b6da-ee88d2ddb99f/s1200" height="100">
          </v-flex>
        </v-layout>
        <v-layout mt-3>
          <v-flex>
            <v-btn
              color="success"
              @click="createAd"
              :disabled="!valid"
            >
              Create ad
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo
        }
        console.log(ad)
      }
    }
  }
}
</script>