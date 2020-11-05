import { IUser, CreateGoogleUser } from '@/types/store/user'
import firebase from 'firebase'

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
