<template>
  <div class="notes">
    <note v-for="note in notes" :note="note">

    </note>
  </div>
</template>

<script>
import firebase from '../FB'
import Note from './Note'
export default {
  components: {
    Note
  },
  data () {
    return {
      notes: []
    }
  },
  ready () {
    let notes = firebase.database().ref('/notes')
    notes.on('child_added', (snapshot) => {
      let note = snapshot.val()
      this.notes.unshift(note)
    })
  }
}
</script>

<style>
  .notes{
    padding: 0 100px;
  }
</style>
