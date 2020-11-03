<template lang="pug">
div
  ProfileHeader
  ProfileList
  ModalTrailer
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    ProfileHeader: () => import('@/components/Profile/Header.vue'),
    ProfileList: () => import('@/components/Profile/List.vue'),
  },
})
export default class Index extends Vue {}
</script>
