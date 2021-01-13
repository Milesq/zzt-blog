<template>
  <v-app-bar
    fixed
    :color="$vuetify.theme.dark ? null : 'white'"
    elevate-on-scroll
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-tooltip bottom>
      <template #activator="{ on }">
        <v-btn
          v-on="on"
          icon
          target="blank"
          href="https://zwolnienizteorii.pl/"
        >
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </template>

      <span>Polub naszą stronę nasz projekt na ZZT</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template #activator="{ on }">
        <v-btn @click="changeTheme" v-on="on" icon>
          <v-icon>mdi-brightness-6</v-icon>
        </v-btn>
      </template>

      <span>Zmień Tło</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
