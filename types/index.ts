/* eslint-disable camelcase */
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

export type Movie = {
  id?: number
  title?: string
  video?: boolean
  vote_average?: number
  original_title?: string
  backdrop_path?: string | null
  poster_path?: string | null
  release_date?: Date | string
  vote_count?: number
  popularity?: string | null
  overview?: string | null
  tagline?: string | null
  status?:
    | 'Rumored'
    | 'Planned'
    | 'In Production'
    | 'Post Production'
    | 'Released'
    | 'Canceled'
  videos: MovieVideos
  credits: _MovieCredits
}
type _MovieCredits = {
  id?: number
  cast?: Cast[]
  crew?: Crew[]
}

type Cast = {
  cast_id?: number
  character?: string
  credit_id?: string
  gender?: number | null
  id?: number
  name?: string
  order?: number
  profile_path: string | null
}

type Crew = {
  id?: number
  credit_id?: string
  department?: string
  gender?: number | null
  job?: string
  name?: string
  profile_path?: string | null
}

type MovieVideos = {
  id?: number
  results: Video[]
}

type Video = {
  id?: string
  iso_639_1?: string
  iso_3166_1?: string
  key?: string
  name?: string
  site?: string
  size?: 360 | 480 | 720 | 1080
  type?:
    | 'Trailer'
    | 'Teaser'
    | 'Clip'
    | 'Featurette'
    | 'Behind the Scenes'
    | 'Bloopers'
}

export namespace Responses {
  export type SearchMovies = {
    page?: number
    results?: Movie[]
    total_results?: number
    total_pages?: number
  }
  export type MovieDetails = Movie
  export type MovieCredits = _MovieCredits
}

export type ToolbarSearchItem = {
  id: number
  title: string
  poster: string
  year: string
}
