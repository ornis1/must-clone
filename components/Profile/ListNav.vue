<template lang="pug">
nav.profile-list-nav
  v-btn(
    v-for='item in navItems',
    :key='item.name',
    :to='item.to',
    :height='34',
    text,
    nuxt,
    rounded,
    exact
  ) {{ item.name }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Location } from 'vue-router'

interface NavItem {
  name: string
  to: Location | string
}

@Component({})
export default class ListNav extends Vue {
  navItems: NavItem[] = [
    {
      name: 'Посмотрю',
      to: '/want',
    },
    {
      name: 'Просмотрены',
      to: '/watched',
    },
    {
      name: 'Сериалы',
      to: '/shows',
    },
  ]
}
</script>

<style lang="scss" scoped>
.profile-list-nav {
  display: flex;
  justify-content: center;

  .v-btn {
    font-weight: 700;
    font-size: calc(15rem / 16) !important;
    color: $text-dark;
  }
}
</style>
