<template>
  <ol>
    <li v-for="note in notes">
      <pre>
        {{note | json}}
      </pre>
    </li>
  <ol>
</template>
<script>
import Firebase from 'firebase'
export default {
  data () {
    return {
      notes: []
    }
  },
  ready () {
    let firebase = Firebase.initializeApp({
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      storageBucket: process.env.STORAGE_BUCKET
    })

    let notes = firebase.database().ref('/notes')

    notes.push({
      title: 'one',
      content: 'wow'
    })

    notes.on('child_added', (snapshot) => {
      let note = snapshot.val()
      this.notes.unshift(note)
    })
  }
}
</script>
<style>
</style>
