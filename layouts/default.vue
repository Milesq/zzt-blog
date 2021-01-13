<template>
  <v-app>
    <TheNavbar ref="navbar" />
    <v-sheet
      class="overflow-y-auto"
      :style="{ marginTop: `${navbarHeight}px` }"
    >
      <v-container>
        <nuxt />
      </v-container>
    </v-sheet>

    <v-footer padless absolute>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>ZZT</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    navbarHeight: 0,
  }),
  mounted() {
    const { offsetHeight } = this.$refs.navbar.$refs.appBar.$el;

    this.navbarHeight = offsetHeight;
  },
};
</script>
