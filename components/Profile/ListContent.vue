<template lang="pug">
.grid
  MovieCard.hover-zoom(v-for='(movie, index) in userMedia', :key='index', :src='movie.poster_path')
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CollectionType, Movie } from '~/types'
import { mediaTypes } from '~/helpers'

@Component({
  components: {
    MovieCard: () => import('@/components/Card.vue'),
  },
  data() {
    return { mediaTypes }
  },
})
export default class ListContent extends Vue {
  mediaTypes!: CollectionType[]

  get userMedia(): Movie[] {
    const type = this.$route.params.slug as CollectionType

    if (this.mediaTypes.includes(type)) {
      return [...this.$store.state.profile[type]].reverse()
    }
    return []
  }
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
