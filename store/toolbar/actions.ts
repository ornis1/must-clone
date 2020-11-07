import { Actions, ActionTypes, MutationType } from '~/types/store/toolbar'
import api from '~/api'
import { movieToItem } from '~/helpers'

const actions: Actions = {
  [ActionTypes.search]({ commit }, query) {
    if (!query) {
      commit(MutationType.setItems, [])
      return
    }

    commit(MutationType.setLoading, true)

    /* Ищем фильм по введеному пользователем значению */
    api
      .searchMovies({ params: { query } })
      .then((res) => {
        if (!res.results) return

        const items = movieToItem(res.results)
        commit(MutationType.setItems, items)
      })
      .catch((error) => console.error(error))
      .finally(() => commit(MutationType.setLoading, false))
  },
}

export default actions
