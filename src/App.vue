<template>
  <v-app>
    <v-app-bar
      app
      color="#41B883"
      primary
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />


        <span>Distributed Computing Project</span>

      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/Petrit123"
        target="_blank"
        text
      >
        <span class="mr-2">Petrit Krasniqi GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
      
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',



  data: () => ({
    //
  }),
};
</script>
