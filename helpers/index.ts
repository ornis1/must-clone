import { IUser, CreateGoogleUser } from '@/types/store/user'
import { format } from 'date-fns'
import firebase from 'firebase'

/*
  Убирает элементы с пустыми значениями
  и преобразовывает элементы в нужный нам тип
*/
import { CollectionType, Movie } from '~/types'

/* Вспомогательные классы для модуля User в Store */
class User implements IUser {
  public name = ''
  public email = ''
  public photo = ''
  public id = ''
}

class GoogleUser extends User implements IUser {
  constructor({ email, displayName, photoURL, uid }: firebase.User) {
    super()
    this.email = email || ''
    this.name = displayName || ''
    this.photo = photoURL || ''
    this.id = uid
  }
}

export const createGoogleUser: CreateGoogleUser = (options) => {
  return new GoogleUser(options)
}

/* --------------------------------- */

/*  */
export const createImgURL = (
  path: string,
  width: string | number | 'origin' = 185
): string => {
  const endpoint = 'http://image.tmdb.org/t/p/'
  return `${endpoint}w${width}${path}`
}

export function prettierMovies(arg: Movie[]): Movie[] {
  const items: Movie[] = []

  arg.forEach((item) => {
    const { id, title, poster_path, release_date } = item

    if (id && title && poster_path && release_date) {
      let tmp

      /* release_date может иметь строку вида yyyy_mm_dd */
      if (typeof release_date === 'string') {
        tmp = release_date.split('_').join(',')
        tmp = new Date(tmp)
      } else {
        tmp = release_date
      }

      const year = format(new Date(tmp), 'yyyy')

      items.push({
        ...item,
        id,
        title,
        poster_path: createImgURL(poster_path),
        release_date: year,
      })
    }
  })
  return items
}

/* --------------------------------- */
export const mediaTypes: CollectionType[] = ['want', 'watched', 'shows']
