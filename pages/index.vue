<template>
  <div style="margin-top: 10vmin">
    <nuxt-content :document="mainContent" />
  </div>
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
