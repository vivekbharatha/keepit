import EventEmitter from 'events'
import Firebase from 'firebase'

class NoteRepository extends EventEmitter {
  constructor () {
    super()

    let firebase = Firebase.initializeApp({
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      storageBucket: process.env.STORAGE_BUCKET
    })

    this.ref = firebase.database().ref('/notes')
    this.attachFirebaseListeners()
  }

  create ({ title = '', content = '' }, onComplete) {
    this.ref.push({title, content}, onComplete)
  }

  update ({key, title = '', content = ''}, onComplete) {
    this.ref.child(key).update({title, content}, onComplete)
  }

  remove ({key}, onComplete) {
    this.ref.child(key).remove(onComplete)
  }

  attachFirebaseListeners () {
    this.ref.on('child_added', this.onAdded, this)
    this.ref.on('child_removed', this.onRemoved, this)
    this.ref.on('child_changed', this.onChanged, this)
  }

  detachFirebaseListeners () {
    this.ref.off('child_added', this.onAdded, this)
    this.ref.off('child_removed', this.onRemoved, this)
    this.ref.off('child_changed', this.onChanged, this)
  }

  onAdded (snapshot) {
    let note = this.snapshotToNote(snapshot)
    this.emit('added', note)
  }

  onRemoved (snapshot) {
    let note = this.snapshotToNote(snapshot)
    this.emit('removed', note)
  }

  onChanged (snapshot) {
    let note = this.snapshotToNote(snapshot)
    this.emit('changed', note)
  }

  snapshotToNote (snapshot) {
    let key = snapshot.key
    let note = snapshot.val()
    note.key = key
    return note
  }

  findIndex (notes, key) {
    return notes.findIndex(note => note.key === key)
  }

  find (notes, key) {
    return notes.find(note => note.key === key)
  }
}

export default new NoteRepository()
