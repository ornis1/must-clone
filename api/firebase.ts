import {} from 'firebase/app'
import { db, auth, provider } from '~/plugins/firebase'
import { Movie, RequiredSome, CollectionType } from '~/types'

type dbMovie = RequiredSome<Movie, '__id'>

class FirebaseService {
  signIn() {
    return auth.signInWithPopup(provider)
  }

  signOut() {
    return auth.signOut()
  }

  /* Возвращает все данные из коллекции (want, watched, shows) */
  loadMedia(type: CollectionType, userId: string) {
    return new Promise<dbMovie[]>((resolve) => {
      db.collection('users')
        .doc(userId)
        .collection(type)
        .onSnapshot((snapshot) =>
          resolve(
            snapshot.docs.map((doc) => ({
              ...(doc.data() as dbMovie),
              __id: doc.id,
            }))
          )
        )
    })
  }

  /* TODO: добавить типы для  payload (Show)  */
  addMedia(type: CollectionType, userId: string, payload: Movie) {
    const ref = db.collection('users').doc(userId).collection(type)
    const id = ref.doc().id

    return new Promise((resolve) => {
      ref
        .doc(id)
        .set(payload)
        .then(() => resolve())
    })
  }

  removeMedia(type: CollectionType, userId: string, __id: string) {
    return db
      .collection('users')
      .doc(userId)
      .collection(type)
      .doc(__id)
      .delete()
  }
}

export default new FirebaseService()
