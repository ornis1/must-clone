import firebase from 'firebase'
import { MutationTree, ActionTree, ActionContext } from 'vuex'
import { RootState } from '~/types/store'

export type IUser = {
  name: string
  email: string
  photo: string
  id: string
}

export interface IGoogleUserConstructor {
  new (user: firebase.User): IUser
}

export type CreateGoogleUser = (options: firebase.User) => IUser

export type State = {
  user: IUser | null
}

export enum MutationType {
  setUser = 'SET_USER',
}

export type Mutations = MutationTree<State> & {
  [MutationType.setUser](state: State, user: firebase.User | null): void
}

export enum ActionTypes {
  signIn = 'SIGN_IN',
  signOut = 'SIGN_OUT',
  onAuthStateChanged = 'ON_AUTH_STATE_CHANGED',
}

type ActionAugments = Omit<ActionContext<State, RootState>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export type Actions = ActionTree<State, RootState> & {
  [ActionTypes.signIn](ctx: ActionAugments): void
  [ActionTypes.signOut](ctx: ActionAugments): void
  [ActionTypes.onAuthStateChanged](ctx: ActionAugments): void
}
