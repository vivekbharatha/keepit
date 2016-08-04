<template>
  <div class="notes" v-el:notes>
    <note v-for="note in notes" :note="note" v-on:click="selectNote(note)" ></note>
</template>

<script>
import noteRepository from '../../data/NoteRepository'
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
  methods: {
    selectNote ({key, title, content}) {
      this.$dispatch('note.selected', {key, title, content})
    }
  },
  ready () {
    this.masonry = new Masonry(this.$els.notes, {
      itemSelector: '.note',
      columnWidth: 240,
      gutter: 16,
      fitWidth: true
    })

    noteRepository.on('added', (note) => {
      this.notes.unshift(note)
    })

    noteRepository.on('changed', ({key, title, content}) => {
      let oldNote = noteRepository.find(this.notes, key)
      oldNote.title = title
      oldNote.content = content
    })

    noteRepository.on('removed', ({key}) => {
      let removedNote = noteRepository.find(this.notes, key)
      this.notes.$remove(removedNote)
    })
  },
  watch: {
    'notes': {
      handler () {
        this.masonry.reloadItems()
        this.masonry.layout()
      },
      deep: true
    }
  }
}
</script>

<style>
  .notes{
    margin: 0 auto;
  }
</style>
