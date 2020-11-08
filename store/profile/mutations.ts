import { Mutations, MutationType } from '~/types/store/profile'

const mutations: Mutations = {
  [MutationType.setMedia](state, { type, data }) {
    state[type] = data
  },
  [MutationType.addMedia](state, { type, data }) {
    state[type].push(data)
  },
}

export default mutations
