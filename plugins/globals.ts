import Vue from 'vue'
import mitt from 'mitt'
import { Mitt } from '~/types'

Vue.prototype.$mitt = mitt() as Mitt

declare module 'vue/types/vue' {
  interface Vue {
    $mitt: Mitt
  }
}
