<template lang="pug">
  .youtube
    iframe(:src="url" allowfullscreen)
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class Youtube extends Vue {
  @Prop({ default: '' }) readonly yid!: string

  get url() {
    const query = '?rel=0&showinfo=0&autoplay=1'
    return `https://www.youtube.com/embed/${this.yid}${query}`
  }
}
</script>

<style lang="scss" scoped>
.youtube {
  position: relative;
  display: block;
  overflow: hidden;
  padding-top: 62.5%;
  width: 100%;
  height: 0;
  background-color: #000;

  iframe {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    border: none;
    width: 100%;
    height: 100%;
  }
}
</style>
