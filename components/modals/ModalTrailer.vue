<template lang="pug">
v-dialog(
  v-if='yid',
  v-model='yid',
  overlay-opacity='0.97',
  overlay-color='black',
  max-width='984'
)
  youtube(:yid='yid')
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    Youtube: () => import('@/components/Youtube.vue'),
  },
})
export default class TrailerModal extends Vue {
  yid: string = ''
  model = false

  cb(yid: string = 'dQw4w9WgXcQ'): void {
    this.yid = yid
  }

  created() {
    this.$mitt.on('open-modal-trailer', this.cb)
  }

  beforeDestroy() {
    this.$mitt.off('open-modal-trailer', this.cb)
  }
}
</script>
