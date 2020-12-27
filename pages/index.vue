<template>
  <div>
    <h1>Welcome to Your Vue.js App</h1>
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
