<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="5">
        <BlogPost />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Post',
});
</script>
