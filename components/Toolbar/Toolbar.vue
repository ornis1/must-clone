<template lang="pug">
v-toolbar.align-center(flat)
  nuxt-link(to='/')
    img(src='https://mustapp.com/static/images/logo_icon.svg')
  v-spacer
  SearchPanel
  v-btn(text) Войти
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    SearchPanel: () => import('@/components/Toolbar/SearchPanel.vue'),
  },
})
export default class Toolbar extends Vue {}
</script>
