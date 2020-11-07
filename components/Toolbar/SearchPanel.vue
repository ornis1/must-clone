<template lang="pug">
.search-panel.d-flex
  .d-flex.mr-n8.align-center
    v-btn(icon, height='20', width='20', :loading='loading')
      v-icon mdi-magnify

  v-menu(:max-height='280', offset-y, bottom, activator='.v-text-field')
    v-list(v-if='items.length')
      SearchItem(v-for='(item, index) in items', :key='index', :item='item')

  v-text-field.pl-4.grey.lighten-3(
    v-model.trim='input',
    v-debounce="() => search(input)"
    ref='input',
    hide-details,
    flat,
    rounded,
    color='text-dark'
  )
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapState, mapActions } from 'vuex'
import { ToolbarSearchItem } from '~/types'
import { ActionTypes } from '~/types/store/toolbar'

@Component({
  components: {
    SearchItem: () => import('@/components/Toolbar/SearchItem.vue'),
  },
  computed: {
    ...mapState('toolbar', ['loading', 'items']),
  },
  methods: {
    ...mapActions({
      search: `toolbar/${ActionTypes.search}`,
    }),
  },
})
export default class SearchPanel extends Vue {
  loading!: boolean
  items!: ToolbarSearchItem
  search!: Function
  input = ''
}
</script>

<style lang="scss" scoped>
.v-text-field {
  min-width: 370px !important;
}
</style>
