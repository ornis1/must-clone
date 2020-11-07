import axios, { AxiosRequestConfig } from 'axios'

class AxiosClient {
  private defaultHeaders = {
    Accept: 'application/json',
    'Content-type': 'application/json',
  }

  public client = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
  })

  constructor() {
    this.client.interceptors.request.use((config: AxiosRequestConfig) => ({
      ...config,
      headers: {
        ...this.defaultHeaders,
        ...config.headers,
      },
      params: {
        ...config.params,
        api_key: '', // tmdb api-key
        lang: 'ru-RU',
      },
    }))
  }

  /*
    Пример:
    url: '/movie/{move_id}', args: 3
    результатом будет строка '/movie/3'
  */
  static urlFormater(url: string, args: number) {
    return url.replace(/{.+}/, `${args}`)
  }
}

export default AxiosClient
