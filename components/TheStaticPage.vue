<template>
  <div class="mb-16">
    <nuxt-content :document="mainContent" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  async fetch() {
    this.mainContent = await this.$content(this.name).fetch();
  },
  data: () => ({
    mainContent: null,
  }),
};
</script>
