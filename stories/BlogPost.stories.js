export default {
  title: 'Post',
}

export const Full = () =>
  '<v-app><CardView title="Lorem ipsum" desc="abc" /></v-app>'
export const WithoutProps = () => '<v-app><CardView /></v-app>'
export const WithTitle = () => '<v-app><CardView title="Lorem ipsum" /></v-app>'
