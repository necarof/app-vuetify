<template>
  <div class="text-center">
    <v-dialog
      width="400px"
      v-model="modal"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          color="primary" 
          v-bind="attrs" 
          v-on="on"
        >
          Buy
        </v-btn>
      </template>

      <v-card>
        <v-container>
          <v-layout>
            <v-flex>
              <v-card-text>
                <h1 class="text--primary">Do you wan't to buy it?</h1>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <v-card-text>
                <v-text-field
                  label="Your name"
                  name="name"
                  type="text"
                  v-model="name"
                ></v-text-field>
                <v-text-field
                  label="Your phone"
                  name="phone"
                  type="text"
                  v-model="phone"
                ></v-text-field>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                  @click="onCancel"
                  :disabled="localLoading"
                >Close</v-btn>
                <v-btn 
                  class="success" @click="onSave"
                  :disabled="localLoading"
                  :loading="localLoading"
                >Buy it!</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>  
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['ad'],
  data () {
    return {
      modal: false,
      name: '',
      phone: '',
      localLoading: false
    }
  },
  methods: {
    onCancel () {
      this.name = ''
      this.phone = ''
      this.modal = false
    },
    onSave () {
      if (this.name !== '' && this.phone !== '') {
        this.localLoading = true
        this.$store.dispatch('createOrder', {
          name: this.name,
          phone: this.phone,
          adId: this.ad.id
        })
        .finally(() => {
          this.name = ''
          this.phone = ''
          this.localLoading = false
          this.modal = false
        })
      }
    },
  }
}
</script>