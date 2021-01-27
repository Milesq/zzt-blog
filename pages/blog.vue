<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8">
        <v-container>
          <BlogPost
            v-for="(post, i) in posts"
            :key="i"
            :title="post.title"
            :description="post.description"
            :createdAt="new Date(post.createdAt)"
            :category="post.category"
            :src="post.image"
          />
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Post',
  async asyncData({ $content }) {
    const fields = ['title', 'image', 'category', 'description', 'createdAt'];

    const posts = await $content('posts').only(fields).fetch();

    return {
      posts,
    };
  },
};
</script>
