<template>
  <v-app>
    <v-navigation-drawer 
      app
      temporary
      v-model="drawer"
    >
      <v-list>
        <v-list-item
          v-for="link of links"
          :key="link.title"
          :to="link.url"
        >
          <v-list-item-icon>
            <v-icon color="primary">{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="isUserLoggedIn"
          @click="onLogout"
        >
          <v-list-item-icon>
            <v-icon color="primary">exit_to_app</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="'Logout'"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      dark
      app
      color="primary"
    >
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      >
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Vuetify Application</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        text
        v-for="link in links"
        :key="link.title"
        :to="link.url"
        class="hidden-sm-and-down"
      >
        <v-icon left>{{ link.icon }}</v-icon>
        {{ link.title }}
      </v-btn>
      <v-btn
        v-if="isUserLoggedIn"
        @click="onLogout"
        text
        class="hidden-sm-and-down"
      >
        <v-icon left>exit_to_app</v-icon>
        Logout
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <template v-if="error">
      <v-snackbar
        :color="color"
        :multi-line="mode === true"
        :right="x === 'right'"
        :timeout="timeout"
        :top="y === 'top'"
        :vertical="mode === 'vertical'"
        @input="closeError"
        :value="true"
      >
        {{ error }}

        <template v-slot:action="{ attrs }">
          <v-btn
            dark
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </template>  
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      color: 'error',
      timeout: 5000,
      x: null,
      y: 'top',
      mode: '',
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
          {title: 'New ad', icon: 'note_add', url: '/new'},
          {title: 'My ads', icon: 'list', url: '/list'}
        ]
      }
      return [
        {title: 'Login', icon: 'lock', url: '/login'},
        {title: 'Registration', icon: 'face', url: '/registration'},
      ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('closeError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  },
};
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
