<template>
  <component :is="errorComponent" />
</template>

<script>
export default {
  layout: 'empty',
  head() {
    const title = this.stringifyError();

    return { title };
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  methods: {
    stringifyError() {
      const { statusCode } = this.error;

      const codes = {
        404: 'Not Found',
      };

      return codes[statusCode] || 'An error occured';
    },
  },
  computed: {
    errorComponent() {
      if (this.error.statusCode === 404)
        return () => import('../components/The404Error');

      return () => import('../components/TheDefaultError');
    },
  },
};
</script>
