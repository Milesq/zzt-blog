<template>
  <v-row class="d-flex align-content-start">
    <v-col cols="4">
      <v-img
        class="rounded-circle"
        width="200"
        height="200"
        src="https://preview.colorlib.com/theme/andrea/images/image_1.jpg"
      />
    </v-col>

    <v-col cols="8">
      <div>
        <div class="display-1 font-weight-medium justify-left">
          <p>Droga Życia i nie życia</p>
        </div>

        <div>
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
        </div>

        <div class="grey--text text--darken-2 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est veniam
            laudantium eligendi, assumenda eveniet expedita nobis dolorem,
            tempora
          </p>
        </div>

        <div>
          <nuxt-link class="float-right" to="/posts/id">
            Czytaj Więcej
          </nuxt-link>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
