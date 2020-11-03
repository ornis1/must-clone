import { EventHandlerMap, Handler, WildcardHandler } from 'node_modules/mitt'

export type MittTypes = 'open-modal-trailer' | 'open-modal-actors'

export type Mitt = {
  all: EventHandlerMap
  on(type: '*', handler: WildcardHandler): void
  on<T = any>(type: MittTypes, handler: Handler<T>): void
  off<T = any>(type: MittTypes, handler: Handler<T>): void
  off(type: '*', handler: WildcardHandler): void
  emit<T = any>(type: MittTypes, event?: T): void
  emit(type: '*', event?: any): void
}
