<template lang="pug">
.d-flex.align-center.flex-column
  v-avatar(color='grey lighten-3 mb-2', size='70')
    span.grey--text.text-h4.font-weight-bold CJ
  .text-h4.font-weight-bold.mb-5 @username
  ProfileStats.mb-12.
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    ProfileStats: () => import('@/components/Profile/Stats.vue'),
  },
})
export default class Header extends Vue {}
</script>
