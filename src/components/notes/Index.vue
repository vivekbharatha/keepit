<template>
  <div class="notes" v-el:notes>
    <note v-for="note in notes" :note="note">

    </note>
  </div>
</template>

<script>
import firebase from '../FB'
import Masonry from 'masonry-layout'
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
    let masonry = new Masonry(this.$els.notes, {
      itemSelector: '.note',
      columnWidth: 240,
      gutter: 16,
      fitWidth: true
    })
    let notes = firebase.database().ref('/notes')
    notes.on('child_added', (snapshot) => {
      let note = snapshot.val()
      this.notes.unshift(note)
      this.$nextTick(() => {
        masonry.reloadItems()
        masonry.layout()
      })
    })
  }
}
</script>

<style>
  .notes{
    margin: 0 auto;
  }
</style>
