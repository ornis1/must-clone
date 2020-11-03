<template lang="pug">
v-hover(v-slot:default='{ hover }')
  v-card.rounded.movie-card(v-bind='$attrs', v-on='$listeners', :elevation='0')
    v-img.rounded(:src='src')

    v-card-text(:class='{ active: hover && !menu }')
      v-btn(fab, depressed, @click='showModalTrailer')
        v-icon mdi-play
    v-card-actions(:class='{ active: hover || menu }')
      v-menu(
        offset-y,
        top,
        left,
        nudgeTop='10',
        transition='slide-y-reverse-transition',
        v-model='menu'
      )
        template(v-slot:activator='{ on, attrs }')
          v-btn(
            fab,
            x-small,
            depressed,
            v-bind='attrs',
            v-on='on',
            :class='{ active: menu }'
          )
            v-icon mdi-plus

        v-list.pa-0.rounded(dense, width='146')
          v-list-item.justify-center.grey.lighten-3(link) Посмотрю
          v-list-item.justify-center.grey.lighten-3(link) Просмотрен
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'Card',
  inheritAttrs: false,
  components: {},
})
export default class Card extends Vue {
  menu = false
  @Prop({ default: '' }) readonly src!: string

  showModalTrailer() {
    this.$mitt.emit('open-modal-trailer')
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  height: auto;

  .v-card__text,
  .v-card__actions {
    position: absolute;
    opacity: 0;
    transition: 0.4s ease;

    &.active {
      opacity: 1;
    }
  }

  .v-card__text {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;

    .v-btn {
      $size: 42px;

      width: $size;
      height: $size;
    }
  }

  .v-card__actions {
    right: 0;
    bottom: 0;

    .v-btn {
      $size: 25px;

      width: $size;
      height: $size;
      color: $text-dark;

      &.active {
        transform: rotate(45deg);
      }
    }
  }
}

.v-list {
  &-item {
    font-weight: 600;
    font-size: calc(14rem / 16);
    color: rgba($text-dark, 0.7) !important;
  }
}
</style>
