<template>
  <div class="text-center">
    <v-dialog
      width="400px"
      v-model="modal"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          color="warning" 
          v-bind="attrs" 
          v-on="on"
        >
          Edit
        </v-btn>
      </template>

      <v-card>
        <v-container>
          <v-layout>
            <v-flex>
              <v-card-text>
                <h1 class="text--primary">Edit ad</h1>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <v-card-text>
                <v-text-field
                  label="title"
                  name="Title"
                  type="text"
                  v-model="editedTitle"
                ></v-text-field>
                <v-text-field
                  label="description"
                  name="Description"
                  type="text"
                  v-model="editedDescription"
                  multi-line
                ></v-text-field>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="onCancel">Cancel</v-btn>
                <v-btn class="success" @click="onSave">Save</v-btn>
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
      editedTitle: this.ad.title,
      editedDescription: this.ad.description
    }
  },
  methods: {
    onCancel () {
      this.editedDescription = this.ad.description
      this.editedTitle = this.ad.title
      this.modal = false
    },
    onSave () {
      if (this.editedDescription !== '' && this.editedTitle !== '') {
        this.$store.dispatch('updateAd', {
          title: this.editedTitle,
          description: this.editedDescription,
          id: this.ad.id
        })
        this.modal = false
      }
    },
  }
}
</script>