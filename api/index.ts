/* eslint-disable camelcase */
import ApiClient from '~/api/client'
import { Movie, Responses } from '~/types'

type HttpMethods = 'get' | 'post'

type endpoint = {
  method: HttpMethods
  url: string
}
type Params = {
  params?: { append_to_response?: 'videos' | 'credits' }
}

export interface IApi {
  searchMovies(o: {
    params: { query: string }
  }): Promise<Responses.SearchMovies>

  getMovieDetails(o: {
    args: Movie['id']
    params: Params
  }): Promise<Responses.MovieDetails>

  getMovieCredits(o: { args: Movie['id'] }): Promise<Responses.MovieCredits>
}

export interface IAxiosApi extends ApiClient, IApi {}

type BackendEndpoints = {
  [K in keyof IApi]: endpoint
}

const BACKEND_ENDPOINTS: BackendEndpoints = {
  searchMovies: { method: 'get', url: '/search/movie' },
  getMovieDetails: { method: 'get', url: '/movie/{move_id}' },
  getMovieCredits: { method: 'get', url: '/movie/{movie_id}/credits' },
  // getPerson: { method: 'get', url: '/person/{person_id}' },
  // getTopRated: { method: 'get', url: '/movie/top_rated' },
  // getPopular: { method: 'get', url: '/movie/popular' },
}

const api = new Proxy(new ApiClient(), {
  get(target: IAxiosApi, name: keyof IApi) {
    if (BACKEND_ENDPOINTS[name] === undefined) return target[name]

    type Options = {
      params?: any
      data?: any
      args?: any
    }

    return ({ args, params = {}, data = {} }: Options = {}) => {
      return target
        .client({
          method: BACKEND_ENDPOINTS[name].method,
          url: ApiClient.urlFormater(BACKEND_ENDPOINTS[name].url, args || ''),
          params,
          data,
        })
        .then((serverResponse) => serverResponse.data)
        .catch(() => {
          throw new Error('Server response error')
        })
    }
  },
})

export default (api as unknown) as IApi
