<template>
  <v-menu open-on-hover bottom offset-y>
    <template #activator="{ attrs, on }">
      <v-btn text v-bind="attrs" v-on="on">Войти</v-btn>
    </template>
    <v-btn tile v-bind="$attrs" v-on="$listeners">
      <v-img
        height="20"
        width="20"
        :src="require('~/assets/google-icon.svg')"
        alt=""
        class="mr-2"
      />
      <span> Sign in with Google </span>
    </v-btn>
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  inheritAttrs: false,
})
export default class LoginButton extends Vue {}
</script>
