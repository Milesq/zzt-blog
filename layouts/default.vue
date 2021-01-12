<template>
  <v-app>
    <TheNavbar />
    <v-sheet class="overflow-y-auto">
      <v-container>
        <nuxt />
      </v-container>
    </v-sheet>

    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>ZZT</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>
