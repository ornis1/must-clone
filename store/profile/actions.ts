import { Actions, ActionTypes, MutationType } from '~/types/store/profile'
import fb from '~/api/firebase'
import { mediaTypes } from '~/helpers'

const actions: Actions = {
  [ActionTypes.loadMedia]({ commit, rootState }, type) {
    const { user } = rootState.user
    if (!user) return

    fb.loadMedia(type, user.id).then((data) => {
      commit(MutationType.setMedia, { type, data })
    })
  },

  [ActionTypes.loadAllMedia]({ dispatch }) {
    for (const type of mediaTypes) {
      dispatch(ActionTypes.loadMedia, type)
    }
  },

  [ActionTypes.addMedia]({ commit, rootState }, { type, payload }) {
    const { user } = rootState.user
    if (!user) return

    fb.addMedia(type, user.id, payload).then(() => {
      commit(MutationType.addMedia, { type, data: payload })
    })
  },
}

export default actions
