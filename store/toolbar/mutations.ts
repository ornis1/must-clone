import { Mutations, MutationType } from '~/types/store/toolbar'

const mutations: Mutations = {
  [MutationType.setItems](state, items) {
    state.items = items
  },
  [MutationType.setLoading](state, value) {
    state.loading = value
  },
}

export default mutations
