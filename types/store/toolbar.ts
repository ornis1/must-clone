import { MutationTree, ActionTree, ActionContext } from 'vuex'
import { ToolbarSearchItem } from '~/types'
import { RootState } from '~/types/store'

export type State = {
  items: ToolbarSearchItem[]
  loading: boolean
}

export enum MutationType {
  setItems = 'SET_ITEMS',
  setLoading = 'SET_LOADING',
}

export type Mutations = MutationTree<State> & {
  [MutationType.setItems](state: State, items: ToolbarSearchItem[]): void
  [MutationType.setLoading](state: State, value: boolean): void
}

export enum ActionTypes {
  search = 'SEARCH',
}

type ActionAugments = Omit<ActionContext<State, RootState>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export type Actions = ActionTree<State, RootState> & {
  [ActionTypes.search](ctx: ActionAugments, query: string): void
}
