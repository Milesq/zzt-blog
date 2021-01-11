<template>
  <nuxt-content :document="mainContent" />
</template>

<script>
export default {
  async fetch() {
    this.mainContent = await this.$content('main').fetch();
  },
  data: () => ({
    mainContent: null,
  }),
};
</script>
