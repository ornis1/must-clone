<template lang="pug">
v-toolbar.align-center(flat)
  nuxt-link(to='/')
    img(src='https://mustapp.com/static/images/logo_icon.svg')
  v-spacer
  SearchPanel
  LoginButton(v-if="!user" @click="signIn")
  .ml-2(v-if="user")
    v-btn(icon, to="/want" color="transparent" nuxt)
      v-avatar(size="24")
        img(:src="user.photo")
    v-btn(icon,  @click="signOut")
      v-icon(size="24") mdi-power-standby
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapState, mapActions } from 'vuex'
import { ActionTypes } from '~/types/store/user'

@Component({
  components: {
    SearchPanel: () => import('@/components/Toolbar/SearchPanel.vue'),
    LoginButton: () => import('@/components/Toolbar/LoginButton.vue'),
  },
  computed: {
    ...mapState('user', ['user']),
  },
  methods: {
    ...mapActions({
      signIn: `user/${ActionTypes.signIn}`,
      signOut: `user/${ActionTypes.signOut}`,
    }),
  },
})
export default class Toolbar extends Vue {}
</script>
