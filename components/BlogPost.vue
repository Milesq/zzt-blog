<template>
  <v-row class="d-flex align-content-start">
    <v-col cols="4">
      <nuxt-link to="/post/asd">
        <v-img
          class="rounded-circle"
          width="200"
          height="200"
          :src="src"
        />
      </nuxt-link>
    </v-col>

    <v-col cols="8">
      <div>
        <div class="display-1 font-weight-medium justify-left">
          <p>{{ title }}</p>
        </div>

        <div>
          <span class="d-flex justify-space-around">
            <p class="grey--text">
              <v-icon right> mdi-av-timer </v-icon>
              {{ createdAt.toString() }}
            </p>
            <p class="font-weight-bold">
              <v-icon left> mdi-folder </v-icon>
              {{ category }}
            </p>
            <p class="views">
              <v-icon left> mdi-human-greeting </v-icon>
              10
            </p>
          </span>
        </div>

        <div class="grey--text text--darken-2 text-justify">
          <p>
            {{ description }}
          </p>
        </div>

        <div>
          <nuxt-link class="float-right" to="/post/id">
            Czytaj Więcej
          </nuxt-link>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
      validator(url) {
        try {
          new URL(url);
          return true;
        } catch (_) {
          // eslint doesnt recognize catch {}
          return false;
        }
      },
    },
  },
};
</script>
