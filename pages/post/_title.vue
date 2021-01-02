<template>
  <v-container fluid>
    <v-row class="d-flex justify-center mt-10">
      <v-col cols="8">
         <v-parallax
          dark
          :src="post.image"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              class="text-center"
              cols="12"
            >
              <h1 class="display-1 mb-4">
                {{ post.title }}
              </h1>
            </v-col>
          </v-row>
        </v-parallax>

        <div class="my-10">
          <span class="d-flex justify-space-around">
            <p>
              <v-icon right>mdi-av-timer</v-icon>
              {{ formatDate(post.createdAt) }}
            </p>
            <p>
              <v-icon left>mdi-folder</v-icon>
              {{ post.category }}
            </p>
          </span>
        </div>

        <nuxt-content :document="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import df from 'dateformat';

export default {
  async asyncData({ params: { title: slug }, $content }) {
    const [post] = await $content('posts').where({ slug }).fetch();
    console.log(post.image)
    return { post };
  },
  methods: {
    formatDate: date => df(new Date(date), 'dd.mm.yyyy - HH:MM'),
  }
};
</script>
