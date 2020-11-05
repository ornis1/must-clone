import { auth, provider } from '@/plugins/firebase'
import { Actions, ActionTypes, MutationType } from '~/types/store/user'

const actions: Actions = {
  [ActionTypes.signIn]({ commit }) {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        commit(MutationType.setUser, user)
      })
      .catch((e) => e)
  },
  [ActionTypes.signOut]({ commit }) {
    auth
      .signOut()
      .then(() => commit(MutationType.setUser, null))
      .catch((e) => e)
  },
  [ActionTypes.onAuthStateChanged]({ commit }) {
    auth.onAuthStateChanged((user) => commit(MutationType.setUser, user))
  },
}

export default actions
