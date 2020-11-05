<template lang="pug">
.grid
  MovieCard.hover-zoom(v-for='(link, index) in mockItems', :key='index', :src='link')
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    MovieCard: () => import('@/components/Card.vue'),
  },
})
export default class ListContent extends Vue {
  mockItems = Array(25).fill(
    'https://media.mustapp.me/must/posters/w342/komwpO9QCUZ9iYeN60mF9sUlP7t.jpg'
  )
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(150px, 184px));
  width: 100%;
  gap: 30px;

  > :nth-child(n) {
    display: flex;
    flex: 1 1 100%;
  }
}
</style>
