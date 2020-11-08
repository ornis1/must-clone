import { Getters } from '~/types/store/profile'

const getters: Getters = {
  isAdded: (state) => ({ id, type }) => state[type].some((m) => m.id === id),
}

export default getters
