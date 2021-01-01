<template>
  <v-card
    max-width="550"
    max-height="350"
    class="d-flex align-content-start grey lighten-5"
  >
    <div align="center" justify="center">
      <v-img
        class="rounded-circle"
        width="100"
        height="100"
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
      ></v-img>
    </div>

    <div>
      <v-card-title class="display-1 font-weight-medium justify-left">
        <p>Droga Życia i nie życia</p>
      </v-card-title>

      <v-card-text>
        <span class="d-flex justify-space-around">
          <p class="grey--text">
            <v-icon right> mdi-av-timer </v-icon>
            June 28, 2020
          </p>
          <p class="font-weight-bold">
            <v-icon left> mdi-folder </v-icon>
            Sience
          </p>
          <p class="views">
            <v-icon left> mdi-human-greeting </v-icon>
            10
          </p>
        </span>
      </v-card-text>

      <v-card-text class="grey--text text--darken-2 text-justify">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est veniam
          laudantium eligendi, assumenda eveniet expedita nobis dolorem, tempora
        </p>
      </v-card-text>

      <v-card-actions>
        <v-btn depressed color="grey lighten-3" @click="moreInfo"
          >Kliknij aby się dowiedzieć więcej
          <v-icon right> mdi-information-outline </v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>
<script>
export default {};
</script>
