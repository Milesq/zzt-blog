<template>
  <div>
    <span>{{ i }}</span>
    <button @click="i++">Add 1</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    i: 0,
  }),
});
</script>
