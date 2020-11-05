import { Mutations, MutationType } from '~/types/store/user'
import { createGoogleUser } from '~/helpers'

const mutations: Mutations = {
  [MutationType.setUser](state, user) {
    state.user = user === null ? user : createGoogleUser(user)
  },
}

export default mutations
