<template>
  <v-app>
    <v-navigation-drawer app temporary>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar
      dark
      app
      color="primary"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn>
        Link
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
};
</script>
