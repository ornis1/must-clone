import { MutationTree, ActionTree, ActionContext, GetterTree } from 'vuex'
import { Movie, CollectionType } from '~/types'
import { RootState } from '~/types/store'

export type State = {
  want: Movie[]
  watched: Movie[]
  shows: Movie[]
}

export enum MutationType {
  setMedia = 'SET_MEDIA',
  addMedia = 'ADD_MEDIA',
}

export type Mutations = MutationTree<State> & {
  [MutationType.setMedia](
    state: State,
    payload: { type: CollectionType; data: Movie[] }
  ): void

  [MutationType.addMedia](
    state: State,
    payload: { type: CollectionType; data: Movie }
  ): void
}

export enum ActionTypes {
  loadMedia = 'LOAD_MEDIA',
  loadAllMedia = 'LOAD_ALL_MEDIA',
  addMedia = 'ADD_MEDIA',
}

type ActionAugments = Omit<ActionContext<State, RootState>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export type Actions = ActionTree<State, RootState> & {
  [ActionTypes.loadMedia](ctx: ActionAugments, type: CollectionType): void
  [ActionTypes.loadAllMedia](ctx: ActionAugments): void
  [ActionTypes.addMedia](
    ctx: ActionAugments,
    { type, payload }: { type: CollectionType; payload: Movie }
  ): void
}

type IsAddedArgs = { id: number; type: CollectionType }
export type Getters = GetterTree<State, RootState> & {
  isAdded(state: State): (args: IsAddedArgs) => boolean
}
