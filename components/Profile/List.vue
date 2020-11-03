<template lang="pug">
section.profile-list
  profile-list-nav.mb-7
  profile-list-content
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    ProfileListNav: () => import('@/components/Profile/ListNav.vue'),
    ProfileListContent: () => import('@/components/Profile/ListContent.vue'),
  },
})
export default class List extends Vue {}
</script>
