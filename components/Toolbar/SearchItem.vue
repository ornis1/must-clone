<template lang="pug">
v-hover(#default='{hover}')
  v-list-item(
    to='/asd',
    :ripple='false',
    color='transparent',
    :exact-active-class='null'
  )
    v-list-item-avatar(tile, height='50')
      v-img(
        contain,
        src='https://image.tmdb.org/t/p/w342/baK79h2An0J8mzTue13KThAeYC5.jpg'
      )
    v-list-item-content
      v-list-item-title Иди и смотри
      v-list-item-subtitle 1985
    v-fade-transition
      v-list-item-action(v-show='hover')
        v-btn.px-0.ml-4(text, to="1") Посмотрю
        v-btn.px-0.mx-3(text, to="2") Просмотрено
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class SearchItem extends Vue {
  @Prop({ default: () => ({}) }) item!: any
}
</script>

<style lang="scss" scoped>
.v-list-item__title,
.v-list-item__subtitle {
  font-size: calc(13rem / 16) !important;
}

.v-menu__content {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08) !important;
}

.v-list-item__action {
  position: absolute !important;
  right: 0 !important;
  display: flex;
  flex-flow: row !important;
  background: linear-gradient(
    to left,
    #fff 94%,
    rgba(255, 255, 255, 0) 100%
  ) !important;
  transition: 0.5s !important;

  .v-btn::before {
    content: '' !important;
    display: none !important;
  }
}
</style>
