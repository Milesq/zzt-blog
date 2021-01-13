<template>
  <div class="mb-16">
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
