<template lang="pug">
v-hover(#default='{hover}')
  v-list-item(
    :ripple='false',
    color='transparent',
    :exact-active-class='null'
  )
    v-list-item-avatar(tile, height='50')
      v-img(contain, :src='item.poster')
    v-list-item-content
      v-list-item-title {{ item.title }}
      v-list-item-subtitle {{ item.year }}
    v-fade-transition
      v-list-item-action(v-show='hover && showWantedBtn && showWatchedBtn')
        v-btn.px-0.ml-4(v-if="showWantedBtn" text, @click.prevent="$emit('click:want')") Посмотрю
        v-btn.px-0.mx-3(v-if="showWatchedBtn" text, @click.prevent="$emit('click:watched')") Просмотрено

    v-fade-transition
      v-list-item-action.mr-4(v-if="!showWantedBtn && !hover")
        v-btn.font-weight-bold(disabled, color="text-grey", text, small)
          v-icon.mr-1() mdi-check
          | Посмотрю
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ToolbarSearchItem } from '~/types'

@Component({})
export default class SearchItem extends Vue {
  @Prop({ default: () => ({}) }) item!: ToolbarSearchItem

  get showWantedBtn() {
    return !this.$store.getters['profile/isAdded']({
      type: 'want',
      id: this.item.id,
    })
  }

  get showWatchedBtn() {
    return !this.$store.getters['profile/isAdded']({
      type: 'watched',
      id: this.item.id,
    })
  }
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
