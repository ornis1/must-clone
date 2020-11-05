<template lang="pug">
.search-panel.d-flex
  .d-flex.mr-n8.align-center
    v-btn(icon, height='20', width='20', :loading='loading')
      v-icon mdi-magnify

  v-menu(:max-height="280", offset-y, bottom, activator='.v-text-field')
    v-list(v-if="items.length")
      SearchItem(v-for="(item, index) in items" :key="index")

  v-text-field.pl-4.grey.lighten-3(
    v-model='input',
    ref='input',
    hide-details,
    flat,
    rounded,
    color='text-dark'
  )
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    SearchItem: () => import('@/components/Toolbar/SearchItem.vue'),
  },
})
export default class SearchPanel extends Vue {
  loading = false
  input = ''
  items = []
}
</script>

<style lang="scss" scoped>
.v-text-field {
  min-width: 370px !important;
}
</style>
