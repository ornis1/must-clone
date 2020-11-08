<template lang="pug">
div
  ProfileHeader
  ProfileList
  ModalTrailer
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapActions } from 'vuex'
import { ActionTypes } from '~/types/store/profile'
@Component({
  components: {
    ProfileHeader: () => import('@/components/Profile/Header.vue'),
    ProfileList: () => import('@/components/Profile/List.vue'),
  },
  methods: {
    ...mapActions({
      loadAllMedia: `profile/${ActionTypes.loadAllMedia}`,
    }),
  },
})
export default class Index extends Vue {
  loadAllMedia!: Function

  created() {
    this.loadAllMedia()
  }
}
</script>
