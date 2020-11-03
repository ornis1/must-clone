<template lang="pug">
v-app(light)
  Toolbar
  v-container
    nuxt
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    Toolbar: () => import('@/components/Toolbar/Toolbar.vue'),
  },
})
export default class DefaultLayout extends Vue {}
</script>
