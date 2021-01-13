<template>
  <div>
    <v-navigation-drawer app v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="({ title }, i) in links" :key="i">
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      ref="appBar"
      app
      :color="$vuetify.theme.dark ? null : 'white'"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>ZZT</v-toolbar-title>

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
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: 0,
    links: [
      {
        title: 'Strona Główna',
        link: '/',
      },
      {
        title: 'Blog',
        link: '/blog',
      },
      {
        title: 'Kontakt',
        link: '/contact',
      },
    ],
  }),
  mounted() {
    this.group = this.links.findIndex(({ link }) =>
      link.startsWith(this.$route.path)
    );
  },
  watch: {
    group(group) {
      if (group === undefined) return;

      this.drawer = false;
      const choosenLinkIDX = group;
      const link = this.links[choosenLinkIDX].link;

      this.$router.push(link);
    },
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
